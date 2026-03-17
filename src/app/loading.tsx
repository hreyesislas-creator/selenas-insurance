export default function Loading() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: 'var(--off-white)' }}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Animated logo mark */}
        <div className="relative">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{ background: 'var(--yellow)', animation: 'pulse 1.5s ease-in-out infinite' }}
          >
            <span className="font-display font-800 text-3xl" style={{ color: 'var(--purple-dark)' }}>
              S
            </span>
          </div>
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              border: '2px solid var(--yellow)',
              animation: 'ping 1.5s ease-in-out infinite',
            }}
          />
        </div>
        <p className="font-display font-700 text-lg" style={{ color: 'var(--purple-dark)' }}>
          Cargando...
        </p>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes ping {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
