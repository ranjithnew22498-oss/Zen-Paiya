'use client';

import { useState } from 'react';
import { Mail, CircleCheck as CheckCircle2, CircleAlert as AlertCircle, Loader as Loader2, CloudUpload as UploadCloud } from 'lucide-react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';
type Interest = 'Hire Talent' | 'Career Opportunity' | 'General Enquiry';

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [resumeName, setResumeName] = useState<string>('');
  const [interest, setInterest] = useState<Interest>('Hire Talent');

  const validate = (formData: FormData): boolean => {
    const newErrors: Record<string, string> = {};
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!fullName || fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name';
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid work email';
    }
    if (!message || message.trim().length < 10) {
      newErrors.message = 'Please provide a message (at least 10 characters)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    if (!validate(formData)) return;

    setFormState('submitting');

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/send-contact-email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
            apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
          },
          body: JSON.stringify({
            fullName: formData.get('fullName'),
            email: formData.get('email'),
            company: formData.get('company'),
            phone: formData.get('phone'),
            interest: formData.get('interest'),
            message: formData.get('message'),
            resumeName: resumeName || null,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to send');
      }

      setFormState('success');
      setResumeName('');
      (e.target as HTMLFormElement).reset();
    } catch {
      setFormState('error');
    }
  };

  if (formState === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-brand-blue/30 bg-brand-blue/5 p-12 text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue/10">
          <CheckCircle2 className="h-8 w-8 text-brand-blue" />
        </div>
        <h3 className="font-display text-2xl font-bold tracking-tight mb-3">
          Thank You for Reaching Out
        </h3>
        <p className="text-muted-foreground max-w-md mb-8">
          Your message has been received. Our team will get back to you shortly
          at the email address you provided.
        </p>
        <button
          onClick={() => setFormState('idle')}
          className="inline-flex h-11 items-center justify-center rounded-sm border border-white/10 bg-white/5 px-6 text-sm font-medium text-foreground transition-all hover:bg-white/10"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {formState === 'error' && (
        <div className="flex items-center gap-3 rounded-lg border border-red-500/30 bg-red-500/5 p-4">
          <AlertCircle className="h-5 w-5 text-red-400 shrink-0" />
          <p className="text-sm text-red-300">
            Something went wrong. Please try again or email us directly at zenpiya@zenpiya.com
          </p>
        </div>
      )}

      {/* Interest selector */}
      <div>
        <label className="mb-3 block text-sm font-medium text-foreground">
          I am interested in:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {(['Hire Talent', 'Career Opportunity', 'General Enquiry'] as Interest[]).map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setInterest(opt)}
              className={`rounded-md border px-4 py-3 text-sm font-medium transition-all ${
                interest === opt
                  ? 'border-brand-blue bg-brand-blue/10 text-brand-blue'
                  : 'border-white/10 bg-card text-muted-foreground hover:border-white/20 hover:text-foreground'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
        <input type="hidden" name="interest" value={interest} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-foreground">
            Full Name <span className="text-brand-blue">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            className="h-12 w-full rounded-md border border-white/10 bg-card px-4 text-sm text-foreground transition-all focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
            placeholder="John Doe"
          />
          {errors.fullName && <p className="mt-1.5 text-xs text-red-400">{errors.fullName}</p>}
        </div>

        {/* Work Email */}
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
            Work Email <span className="text-brand-blue">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="h-12 w-full rounded-md border border-white/10 bg-card px-4 text-sm text-foreground transition-all focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
            placeholder="john@company.com"
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-foreground">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="h-12 w-full rounded-md border border-white/10 bg-card px-4 text-sm text-foreground transition-all focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
            placeholder="Company name"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
            Phone <span className="text-muted-foreground/60">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="h-12 w-full rounded-md border border-white/10 bg-card px-4 text-sm text-foreground transition-all focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      {/* Resume upload (conditional) */}
      {interest === 'Career Opportunity' && (
        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">
            Resume / CV
          </label>
          <div className="rounded-md border border-dashed border-white/15 bg-card p-6 transition-all hover:border-brand-blue/30">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-md border border-white/10 bg-white/5">
                <UploadCloud className="h-6 w-6 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <label htmlFor="resume" className="cursor-pointer text-sm font-medium text-brand-blue hover:underline">
                  Click to upload
                </label>
                <span className="text-sm text-muted-foreground"> or drag and drop</span>
                <p className="text-xs text-muted-foreground/60 mt-1">PDF, DOC, DOCX up to 10MB</p>
                <input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) setResumeName(file.name);
                  }}
                />
              </div>
              {resumeName && (
                <span className="text-sm text-foreground/80 truncate max-w-[200px]">{resumeName}</span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
          Message <span className="text-brand-blue">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full rounded-md border border-white/10 bg-card px-4 py-3 text-sm text-foreground transition-all focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
          placeholder="Tell us about your hiring needs or career goals..."
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={formState === 'submitting'}
        className="group inline-flex h-14 w-full items-center justify-center rounded-sm bg-brand-blue px-8 text-base font-medium text-white transition-all hover:bg-brand-blue-dark hover:shadow-[0_0_30px_rgba(47,128,237,0.4)] disabled:opacity-60"
      >
        {formState === 'submitting' ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}
