/*
# Create contact_submissions table (single-tenant, no auth)

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `full_name` (text, not null)
  - `email` (text, not null)
  - `company` (text)
  - `phone` (text, optional)
  - `interest` (text, not null) — "Hire Talent" | "Career Opportunity" | "General Enquiry"
  - `message` (text, not null)
  - `resume_filename` (text, optional — stores the file name only, no binary data)
  - `status` (text, default "new")
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `contact_submissions`.
- Allow anon + authenticated INSERT only (public contact form).
- No SELECT/UPDATE/DELETE for anon — only service role can read submissions.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  interest text NOT NULL CHECK (interest IN ('Hire Talent', 'Career Opportunity', 'General Enquiry')),
  message text NOT NULL,
  resume_filename text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact" ON contact_submissions FOR INSERT
  TO anon, authenticated WITH CHECK (true);
