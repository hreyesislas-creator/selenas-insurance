import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Guard: throw a clear error at startup if required env vars are missing
function requireEnv(key: string): string {
  const value = process.env[key]
  if (!value) {
    throw new Error(
      `[Supabase] Missing required environment variable: ${key}. ` +
      `Add it to your .env.local file and Vercel project settings.`
    )
  }
  return value
}

// Lazily-initialized singleton client for client-side usage
let _client: SupabaseClient | null = null

export function getSupabaseClient(): SupabaseClient {
  if (!_client) {
    _client = createClient(
      requireEnv('NEXT_PUBLIC_SUPABASE_URL'),
      requireEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY')
    )
  }
  return _client
}

// Named export for backward compatibility
export const supabase = {
  get from() { return getSupabaseClient().from.bind(getSupabaseClient()) },
  get auth() { return getSupabaseClient().auth },
}

// Server-side client — creates a new instance each call (never cached on server)
export function createServerClient(): SupabaseClient {
  return createClient(
    requireEnv('NEXT_PUBLIC_SUPABASE_URL'),
    requireEnv('SUPABASE_SERVICE_ROLE_KEY'),
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  )
}
