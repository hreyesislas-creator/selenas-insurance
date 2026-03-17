// Lead types matching the Supabase leads table

export type ServiceType =
  | 'auto_insurance'
  | 'sr22'
  | 'dmv_services'
  | 'plates_registration'
  | 'notary_public'
  | 'tax_services'

export type ContactMethod = 'call' | 'sms' | 'whatsapp'

export type LeadStatus =
  | 'new'
  | 'contacted'
  | 'quote_in_progress'
  | 'quote_sent'
  | 'won'
  | 'lost'
  | 'follow_up_needed'

export interface Lead {
  id?: string
  created_at?: string
  full_name: string
  phone: string
  email?: string
  service_type: ServiceType
  sub_service?: string
  vehicle_year?: string
  vehicle_make?: string
  vehicle_model?: string
  currently_insured?: boolean
  needs_sr22?: boolean
  preferred_contact_method?: ContactMethod
  city?: string
  zip_code?: string
  notes?: string
  source_page?: string
  landing_page?: string
  status?: LeadStatus
  assigned_to?: string
  follow_up_date?: string
  tags?: string[]
}

export interface LeadFormStep1 {
  full_name: string
  phone: string
  email?: string
}

export interface LeadFormStep2 {
  service_type: ServiceType
}

export interface LeadFormStep3Insurance {
  vehicle_year?: string
  vehicle_make?: string
  vehicle_model?: string
  currently_insured?: boolean
  needs_sr22?: boolean
  preferred_contact_method: ContactMethod
}

export interface LeadFormStep3DMV {
  sub_service?: string
  preferred_contact_method: ContactMethod
}

export interface LeadFormStep3NotaryTax {
  notes?: string
  preferred_contact_method: ContactMethod
}

export interface LeadFormStep4 {
  city?: string
  zip_code?: string
  notes?: string
}

export interface FullLeadForm
  extends LeadFormStep1,
    LeadFormStep2,
    Partial<LeadFormStep3Insurance>,
    Partial<LeadFormStep3DMV>,
    Partial<LeadFormStep3NotaryTax>,
    LeadFormStep4 {}
