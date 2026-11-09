import React, { useState } from 'react';
import { Mail, Phone, Upload, CheckCircle2, AlertCircle, ArrowUpRight, Copy, Check, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface EstimateFormProps {
  initialService?: string;
  initialProjectType?: string;
  className?: string;
}

export const EstimateForm: React.FC<EstimateFormProps> = ({
  initialService = '',
  initialProjectType = '',
  className = ''
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    addressOrPostal: '',
    projectType: initialProjectType || 'Custom Home',
    requiredService: initialService || 'Plumbing Rough-In',
    contactMethod: 'Phone Call',
    preferredDate: '',
    description: '',
  });

  const [uploadedFile, setUploadedFile] = useState<{ name: string; size: string; dataUrl?: string } | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const projectTypeOptions = [
    'Custom Home',
    'Residential Plumbing',
    'Bathroom Renovation',
    'Kitchen Renovation',
    'New Construction',
    'Other'
  ];

  const serviceOptions = [
    'Plumbing Rough-In',
    'Full Home Water & Drainage Infrastructure',
    'Luxury Bathroom Fixture Installation',
    'Kitchen Plumbing & Island Sinks',
    'Re-Piping & Copper/PEX Upgrades',
    'Backwater Valve & Sump System',
    'Diagnostic Inspection & Scoping',
    'Other Specialized Service'
  ];

  const contactMethods = [
    'Phone Call',
    'Email',
    'Text Message / SMS'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedFile({
          name: file.name,
          size: `${sizeMb} MB`,
          dataUrl: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a contact phone number';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.addressOrPostal.trim()) {
      errs.addressOrPostal = 'Please enter project address or postal code (GTA)';
    }
    if (!formData.description.trim()) {
      errs.description = 'Please provide a brief overview of your project requirements';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const getFormattedEmailBody = () => {
    return `PRO ERA PLUMBING - ESTIMATE REQUEST
=========================================
Client Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Project Address / Postal Code: ${formData.addressOrPostal}
Project Type: ${formData.projectType}
Required Service: ${formData.requiredService}
Preferred Contact Method: ${formData.contactMethod}
Target Timeline: ${formData.preferredDate || 'Flexible / Planning'}

PROJECT DESCRIPTION:
${formData.description}

ATTACHMENT:
${uploadedFile ? `Client attached file: ${uploadedFile.name} (${uploadedFile.size})` : 'No file attached'}
=========================================
Submitted via Pro Era Plumbing official portal for Toronto & GTA.`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
  };

  const handleOpenEmailClient = () => {
    const subject = encodeURIComponent(`Estimate Request: ${formData.projectType} - ${formData.fullName}`);
    const body = encodeURIComponent(getFormattedEmailBody());
    window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(getFormattedEmailBody());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setUploadedFile(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      addressOrPostal: '',
      projectType: 'Custom Home',
      requiredService: 'Plumbing Rough-In',
      contactMethod: 'Phone Call',
      preferredDate: '',
      description: '',
    });
  };

  return (
    <div id="estimate-form-section" className={`bg-white border border-slate-200/90 shadow-sm ${className}`}>
      {/* Header bar */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-1">
            Inline Project Estimate
          </span>
          <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
            Request an Itemized Estimate
          </h3>
          <p className="text-xs text-slate-300 mt-1 max-w-xl">
            Serving Toronto, Markham, Vaughan, Richmond Hill, North York, and the Greater Toronto Area. Every request is reviewed directly by our estimating team.
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-3">
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xs transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-sky-400" />
            <span>{COMPANY_INFO.phone}</span>
          </a>
        </div>
      </div>

      {/* Form or Submission State */}
      <div className="p-6 sm:p-8">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            
            {/* Row 1: Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="e.g. David Sterling"
                  className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 border rounded-xs focus:bg-white focus:outline-hidden transition-colors ${
                    errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 focus:border-sky-600'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                  className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 border rounded-xs focus:bg-white focus:outline-hidden transition-colors ${
                    errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 focus:border-sky-600'
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Phone Number <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(416) 000-0000"
                  className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 border rounded-xs focus:bg-white focus:outline-hidden transition-colors ${
                    errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 focus:border-sky-600'
                  }`}
                />
                {errors.phone && (
                  <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Row 2: Location & Project Category */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Project Address / Postal Code <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="addressOrPostal"
                  value={formData.addressOrPostal}
                  onChange={handleInputChange}
                  placeholder="e.g. Markham, ON or M4N 2M6"
                  className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 border rounded-xs focus:bg-white focus:outline-hidden transition-colors ${
                    errors.addressOrPostal ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 focus:border-sky-600'
                  }`}
                />
                {errors.addressOrPostal && (
                  <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.addressOrPostal}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Select Project Type
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xs focus:bg-white focus:border-sky-600 focus:outline-hidden"
                >
                  {projectTypeOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Select Required Service
                </label>
                <select
                  name="requiredService"
                  value={formData.requiredService}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xs focus:bg-white focus:border-sky-600 focus:outline-hidden"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 3: Preferences & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Preferred Contact Method
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {contactMethods.map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, contactMethod: method }))}
                      className={`py-2 px-2 text-xs font-medium rounded-xs border text-center transition-colors cursor-pointer ${
                        formData.contactMethod === method
                          ? 'bg-sky-50 border-sky-600 text-sky-800 font-bold'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Target Project Date / Timeline
                </label>
                <input
                  type="text"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  placeholder="e.g. Within 2 weeks, next month, or specific date"
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xs focus:bg-white focus:border-sky-600 focus:outline-hidden"
                />
              </div>
            </div>

            {/* Row 4: Project Description */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Project Description & Scope Details <span className="text-rose-500">*</span>
              </label>
              <textarea
                name="description"
                rows={4}
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe your project, number of bathrooms, framing status, fixture requirements, or specific plumbing specifications..."
                className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 border rounded-xs focus:bg-white focus:outline-hidden transition-colors ${
                  errors.description ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 focus:border-sky-600'
                }`}
              />
              {errors.description && (
                <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.description}
                </p>
              )}
            </div>

            {/* Row 5: Optional File Upload (Blueprints / Photos) */}
            <div className="p-4 bg-slate-50 border border-dashed border-slate-300 rounded-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-white border border-slate-200 rounded-xs text-sky-600 shrink-0">
                    <Upload className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-800">
                      Optional: Attach Project Photographs or Architectural Blueprints
                    </span>
                    <span className="text-[11px] text-slate-500">
                      PDF, JPG, PNG accepted (under 10MB). Useful for plumbing rough-in assessments.
                    </span>
                  </div>
                </div>

                <div className="shrink-0">
                  <label className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-xs transition-colors cursor-pointer inline-block">
                    <span>Browse Files</span>
                    <input
                      type="file"
                      accept=".jpg,.jpeg,.png,.pdf"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {uploadedFile && (
                <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-700 bg-white p-2.5 rounded-xs border border-slate-200">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-sky-600" />
                    <span className="font-semibold">{uploadedFile.name}</span>
                    <span className="text-slate-400">({uploadedFile.size})</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setUploadedFile(null)}
                    className="text-xs text-rose-600 hover:text-rose-800 font-semibold cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>

            {/* Submission Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="text-[11px] text-slate-500">
                <span className="font-semibold text-slate-700">Contractor Promise:</span> No spam. Direct communication with licensed plumbing specialists.
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 rounded-xs shadow-xs transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Submit Estimate Inquiry</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </form>
        ) : (
          /* Submission Result State (Zero popups - inline confirmation & verified delivery options) */
          <div className="bg-sky-50/60 border border-sky-200 p-6 sm:p-8 rounded-xs space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-sky-600 text-white rounded-xs shrink-0 mt-0.5">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-sky-700 uppercase tracking-widest block">
                  Estimate Package Formatted
                </span>
                <h4 className="font-display text-xl font-bold text-slate-900 uppercase">
                  Thank You, {formData.fullName}. Your Scope is Prepared.
                </h4>
                <p className="text-sm text-slate-600 max-w-2xl">
                  Your project specifications for <strong className="text-slate-800">{formData.projectType}</strong> in <strong className="text-slate-800">{formData.addressOrPostal}</strong> have been assembled. Choose your preferred delivery method below to connect directly with Pro Era Plumbing:
                </p>
              </div>
            </div>

            {/* Action options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              
              {/* Option 1: Direct Email Draft */}
              <div className="bg-white p-5 border border-slate-200 rounded-xs flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-xs bg-sky-100 text-sky-700 flex items-center justify-center mb-3">
                    <Mail className="w-4 h-4" />
                  </div>
                  <h5 className="font-bold text-sm text-slate-900 mb-1">
                    Send Direct to Pro Era Inbox
                  </h5>
                  <p className="text-xs text-slate-500 mb-4">
                    Launches your email client addressed to <strong className="text-slate-700">{COMPANY_INFO.email}</strong> with full formatted project specs.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleOpenEmailClient}
                  className="w-full py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-700 rounded-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send via Email Client</span>
                </button>
              </div>

              {/* Option 2: Direct Call */}
              <div className="bg-white p-5 border border-slate-200 rounded-xs flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-xs bg-slate-100 text-slate-700 flex items-center justify-center mb-3">
                    <Phone className="w-4 h-4" />
                  </div>
                  <h5 className="font-bold text-sm text-slate-900 mb-1">
                    Speak with Field Team Directly
                  </h5>
                  <p className="text-xs text-slate-500 mb-4">
                    Call our dispatch directly at <strong className="text-slate-700">{COMPANY_INFO.phone}</strong> for immediate discussion of plans and timing.
                  </p>
                </div>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="w-full py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-600" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
              </div>

              {/* Option 3: Copy Text Summary */}
              <div className="bg-white p-5 border border-slate-200 rounded-xs flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-xs bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </div>
                  <h5 className="font-bold text-sm text-slate-900 mb-1">
                    Copy Formatted Summary
                  </h5>
                  <p className="text-xs text-slate-500 mb-4">
                    Copy the complete structured estimate specification to paste into Jobber or your private records.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="w-full py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Summary Copied!' : 'Copy Summary'}</span>
                </button>
              </div>

            </div>

            {/* Official Jobber Client Hub Link */}
            <div className="p-4 bg-white border border-slate-200 rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="text-slate-600">
                <span className="font-semibold text-slate-900">Alternative:</span> Use Pro Era&apos;s verified Jobber Client Hub portal for online work requests.
              </div>
              <a
                href={COMPANY_INFO.jobberRequestUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sky-700 hover:text-sky-900 font-bold tracking-wide uppercase transition-colors"
              >
                <span>Open Jobber Request Hub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* New Inquiry Reset */}
            <div className="pt-2 text-right">
              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-slate-500 hover:text-slate-800 underline transition-colors cursor-pointer"
              >
                Submit another project inquiry
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
