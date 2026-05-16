import { FormEvent, useState } from "react";
import type { Translation } from "../../data/translations";
import { SectionShell } from "../layout/SectionShell";
import { Button } from "../ui/Button";

type BookingSectionProps = {
  t: Translation;
};

type BookingForm = {
  fullName: string;
  role: string;
  wechat: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  eventTime: string;
  eventLocation: string;
  participants: string;
  budgetRange: string;
  preferredPackage: string;
  servicesNeeded: string[];
  theme: string;
  requirements: string;
};

const initialForm: BookingForm = {
  fullName: "",
  role: "",
  wechat: "",
  email: "",
  phone: "",
  eventType: "",
  eventDate: "",
  eventTime: "",
  eventLocation: "",
  participants: "",
  budgetRange: "",
  preferredPackage: "",
  servicesNeeded: [],
  theme: "",
  requirements: "",
};

type FieldName = keyof BookingForm;
type FieldCopy = Translation["booking"]["fields"]["fullName"];

export function BookingSection({ t }: BookingSectionProps) {
  const [form, setForm] = useState<BookingForm>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<FieldName | "contactGroup", string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const fieldMap = {
    fullName: t.booking.fields.fullName,
    role: t.booking.fields.role,
    wechat: t.booking.fields.wechat,
    email: t.booking.fields.email,
    phone: t.booking.fields.phone,
    eventType: t.booking.fields.eventType,
    eventDate: t.booking.fields.eventDate,
    eventTime: t.booking.fields.eventTime,
    eventLocation: t.booking.fields.eventLocation,
    participants: t.booking.fields.participants,
    budgetRange: t.booking.fields.budgetRange,
    preferredPackage: t.booking.fields.preferredPackage,
    servicesNeeded: t.booking.fields.servicesNeeded,
    theme: t.booking.fields.theme,
    requirements: t.booking.fields.requirements,
  } satisfies Record<FieldName, FieldCopy>;

  const updateField = (field: Exclude<FieldName, "servicesNeeded">, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined, contactGroup: undefined }));
  };

  const toggleService = (index: string) => {
    setForm((current) => {
      const selected = current.servicesNeeded.includes(index)
        ? current.servicesNeeded.filter((item) => item !== index)
        : [...current.servicesNeeded, index];

      return { ...current, servicesNeeded: selected };
    });
    setErrors((current) => ({ ...current, servicesNeeded: undefined }));
  };

  const validate = () => {
    const nextErrors: Partial<Record<FieldName | "contactGroup", string>> = {};
    const requiredFields: FieldName[] = ["fullName", "role", "eventType", "eventDate", "budgetRange"];

    requiredFields.forEach((field) => {
      const value = form[field];
      if (typeof value === "string" && !value.trim()) {
        nextErrors[field] = fieldMap[field].required;
      }
    });

    if (!form.wechat.trim() && !form.email.trim()) {
      nextErrors.contactGroup = t.booking.contactRequirement;
      nextErrors.wechat = t.booking.fields.wechat.required;
      nextErrors.email = t.booking.fields.email.required;
    }

    return nextErrors;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  if (submitted) {
    return (
      <SectionShell id="booking" eyebrow={t.booking.eyebrow} title={t.booking.successTitle} intro={t.booking.successMessage}>
        <div className="rounded-xl border border-ces-hairline bg-ces-canvas p-6">
          <Button
            type="button"
            onClick={() => {
              setForm(initialForm);
              setErrors({});
              setSubmitted(false);
            }}
          >
            {t.booking.reset}
          </Button>
        </div>
      </SectionShell>
    );
  }

  return (
    <SectionShell id="booking" eyebrow={t.booking.eyebrow} title={t.booking.title} intro={t.booking.intro}>
      <form className="grid gap-6 rounded-2xl border border-ces-hairline bg-ces-canvas p-4 md:p-6" noValidate onSubmit={onSubmit}>
        <p className="rounded-lg bg-ces-surface-card px-4 py-3 text-sm leading-relaxed text-ces-body">{t.booking.requiredNote}</p>

        <fieldset className="form-panel grid gap-5 md:grid-cols-2">
          <legend>{t.booking.groups.contact}</legend>
          <Field
            id="fullName"
            value={form.fullName}
            copy={fieldMap.fullName}
            error={errors.fullName}
            onChange={(value) => updateField("fullName", value)}
          />
          <SelectField
            id="role"
            value={form.role}
            copy={fieldMap.role}
            error={errors.role}
            options={t.booking.options.roles}
            onChange={(value) => updateField("role", value)}
          />
          <Field
            id="wechat"
            value={form.wechat}
            copy={fieldMap.wechat}
            error={errors.contactGroup ? errors.wechat : undefined}
            onChange={(value) => updateField("wechat", value)}
          />
          <Field
            id="email"
            type="email"
            value={form.email}
            copy={fieldMap.email}
            error={errors.contactGroup ? errors.email : undefined}
            onChange={(value) => updateField("email", value)}
          />
          <Field
            id="phone"
            type="tel"
            value={form.phone}
            copy={fieldMap.phone}
            onChange={(value) => updateField("phone", value)}
          />
          {errors.contactGroup ? <p className="text-sm text-ces-error md:col-span-2">{errors.contactGroup}</p> : null}
        </fieldset>

        <fieldset className="form-panel grid gap-5 md:grid-cols-2">
          <legend>{t.booking.groups.event}</legend>
          <SelectField
            id="eventType"
            value={form.eventType}
            copy={fieldMap.eventType}
            error={errors.eventType}
            options={t.booking.options.eventTypes}
            onChange={(value) => updateField("eventType", value)}
          />
          <Field
            id="eventDate"
            type="date"
            value={form.eventDate}
            copy={fieldMap.eventDate}
            error={errors.eventDate}
            onChange={(value) => updateField("eventDate", value)}
          />
          <Field
            id="eventTime"
            type="time"
            value={form.eventTime}
            copy={fieldMap.eventTime}
            onChange={(value) => updateField("eventTime", value)}
          />
          <Field
            id="eventLocation"
            value={form.eventLocation}
            copy={fieldMap.eventLocation}
            onChange={(value) => updateField("eventLocation", value)}
          />
          <Field
            id="participants"
            type="number"
            value={form.participants}
            copy={fieldMap.participants}
            onChange={(value) => updateField("participants", value)}
          />
        </fieldset>

        <fieldset className="form-panel grid gap-5 md:grid-cols-2">
          <legend>{t.booking.groups.budget}</legend>
          <SelectField
            id="budgetRange"
            value={form.budgetRange}
            copy={fieldMap.budgetRange}
            error={errors.budgetRange}
            options={t.booking.options.budgetRanges}
            onChange={(value) => updateField("budgetRange", value)}
          />
          <SelectField
            id="preferredPackage"
            value={form.preferredPackage}
            copy={fieldMap.preferredPackage}
            options={t.booking.options.packages}
            onChange={(value) => updateField("preferredPackage", value)}
          />
        </fieldset>

        <fieldset className="form-panel grid gap-3">
          <legend>{t.booking.groups.support}</legend>
          <p className="text-xs leading-relaxed text-ces-muted">{fieldMap.servicesNeeded.helper}</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {t.booking.options.services.map((service, index) => {
              const value = String(index);
              return (
                <label
                  key={service}
                  className="focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-ces-primary flex items-start gap-3 rounded-lg border border-ces-hairline bg-ces-surface-card p-3 text-sm text-ces-body"
                >
                  <input
                    type="checkbox"
                    className="mt-1 accent-ces-primary"
                    checked={form.servicesNeeded.includes(value)}
                    onChange={() => toggleService(value)}
                  />
                  <span>{service}</span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <fieldset className="form-panel grid gap-5">
          <legend>{t.booking.groups.details}</legend>
          <TextAreaField id="theme" value={form.theme} copy={fieldMap.theme} onChange={(value) => updateField("theme", value)} />
          <TextAreaField
            id="requirements"
            value={form.requirements}
            copy={fieldMap.requirements}
            onChange={(value) => updateField("requirements", value)}
          />
        </fieldset>

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? t.booking.submitting : t.booking.submit}
        </Button>
      </form>
    </SectionShell>
  );
}

type SharedFieldProps = {
  id: string;
  value: string;
  copy: FieldCopy;
  error?: string;
  onChange: (value: string) => void;
};

function Field({ id, value, copy, error, onChange, type = "text" }: SharedFieldProps & { type?: string }) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium text-ces-ink" htmlFor={id}>
        {copy.label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={copy.placeholder}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={`${id}-helper ${id}-error`}
        className="focus-ring min-h-10 rounded-md border border-ces-hairline bg-ces-canvas px-4 py-2 text-ces-ink placeholder:text-ces-muted-soft focus:border-ces-primary"
        onChange={(event) => onChange(event.target.value)}
      />
      <p id={`${id}-helper`} className="text-xs leading-relaxed text-ces-muted">
        {copy.helper}
      </p>
      {error ? (
        <p id={`${id}-error`} className="text-sm text-ces-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SelectField({ id, value, copy, error, options, onChange }: SharedFieldProps & { options: string[] }) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium text-ces-ink" htmlFor={id}>
        {copy.label}
      </label>
      <select
        id={id}
        value={value}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={`${id}-helper ${id}-error`}
        className="focus-ring min-h-10 rounded-md border border-ces-hairline bg-ces-canvas px-4 py-2 text-ces-ink focus:border-ces-primary"
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="">{copy.placeholder}</option>
        {options.map((option, index) => (
          <option key={option} value={String(index)}>
            {option}
          </option>
        ))}
      </select>
      <p id={`${id}-helper`} className="text-xs leading-relaxed text-ces-muted">
        {copy.helper}
      </p>
      {error ? (
        <p id={`${id}-error`} className="text-sm text-ces-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function TextAreaField({ id, value, copy, error, onChange }: SharedFieldProps) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium text-ces-ink" htmlFor={id}>
        {copy.label}
      </label>
      <textarea
        id={id}
        value={value}
        placeholder={copy.placeholder}
        rows={5}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={`${id}-helper ${id}-error`}
        className="focus-ring rounded-md border border-ces-hairline bg-ces-canvas px-4 py-3 text-ces-ink placeholder:text-ces-muted-soft focus:border-ces-primary"
        onChange={(event) => onChange(event.target.value)}
      />
      <p id={`${id}-helper`} className="text-xs leading-relaxed text-ces-muted">
        {copy.helper}
      </p>
      {error ? (
        <p id={`${id}-error`} className="text-sm text-ces-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
