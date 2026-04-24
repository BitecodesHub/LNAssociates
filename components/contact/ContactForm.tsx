"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextField, MenuItem, InputAdornment } from "@mui/material";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  MessageSquare,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SERVICE_OPTIONS } from "@/lib/contact";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = React.useState<FormState>(initial);
  const [status, setStatus] = React.useState<"idle" | "loading" | "done">(
    "idle"
  );
  const [errors, setErrors] = React.useState<Partial<FormState>>({});

  const set = (key: keyof FormState, v: string) => {
    setForm((f) => ({ ...f, [key]: v }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email";
    if (form.phone && !/^[\d+\-\s()]{7,}$/.test(form.phone))
      e.phone = "Please enter a valid phone number";
    if (!form.message.trim() || form.message.length < 10)
      e.message = "Tell us a little more (at least 10 characters)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    // Simulated submit — replace with a Server Action / API route later.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("done");
    setForm(initial);
    setTimeout(() => setStatus("idle"), 4500);
  };

  const fieldSX = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "14px",
      backgroundColor: "#fff",
      transition: "box-shadow .25s ease, border-color .25s ease",
      "& fieldset": { borderColor: "rgba(0,0,0,0.09)" },
      "&:hover fieldset": { borderColor: "rgba(225,29,42,0.35)" },
      "&.Mui-focused": {
        boxShadow: "0 0 0 4px rgba(225,29,42,.10)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#E11D2A",
        borderWidth: "1.5px",
      },
    },
    "& .MuiInputLabel-root.Mui-focused": { color: "#E11D2A" },
    "& .MuiFormHelperText-root": { marginLeft: 0, fontWeight: 500 },
  };

  return (
    <motion.form
      onSubmit={onSubmit}
      noValidate
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="relative overflow-hidden rounded-[28px] border border-black/5 bg-white p-6 shadow-card md:p-10"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-black/[0.035] blur-3xl" />

      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
          Tell us about your requirement
        </p>
        <h2 className="mt-2 font-display text-2xl font-bold text-brand-black md:text-3xl">
          Start the conversation
        </h2>
        <p className="mt-2 max-w-lg text-[14px] leading-relaxed text-brand-muted">
          A founder will respond personally with next steps and a clear quote.
        </p>
      </div>

      <div className="relative mt-8 grid gap-5 sm:grid-cols-2">
        <TextField
          label="Full name"
          required
          fullWidth
          value={form.name}
          onChange={(e) => set("name", e.target.value)}
          error={!!errors.name}
          helperText={errors.name || " "}
          sx={fieldSX}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <User className="h-4 w-4 text-brand-muted" />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Email"
          type="email"
          required
          fullWidth
          value={form.email}
          onChange={(e) => set("email", e.target.value)}
          error={!!errors.email}
          helperText={errors.email || " "}
          sx={fieldSX}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Mail className="h-4 w-4 text-brand-muted" />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Phone"
          fullWidth
          value={form.phone}
          onChange={(e) => set("phone", e.target.value)}
          error={!!errors.phone}
          helperText={errors.phone || "Optional — helps us reach you faster"}
          sx={fieldSX}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Phone className="h-4 w-4 text-brand-muted" />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Service you're interested in"
          select
          fullWidth
          value={form.service}
          onChange={(e) => set("service", e.target.value)}
          sx={fieldSX}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Briefcase className="h-4 w-4 text-brand-muted" />
              </InputAdornment>
            ),
          }}
          helperText=" "
        >
          <MenuItem value="">
            <span className="text-brand-muted">— Select one —</span>
          </MenuItem>
          {SERVICE_OPTIONS.map((s) => (
            <MenuItem key={s} value={s}>
              {s}
            </MenuItem>
          ))}
        </TextField>

        <div className="sm:col-span-2">
          <TextField
            label="How can we help?"
            required
            fullWidth
            multiline
            minRows={4}
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
            error={!!errors.message}
            helperText={
              errors.message || `${form.message.length} / 800 characters`
            }
            inputProps={{ maxLength: 800 }}
            sx={fieldSX}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ alignSelf: "flex-start", mt: 1.2 }}>
                  <MessageSquare className="h-4 w-4 text-brand-muted" />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>

      <div className="relative mt-6 flex flex-col-reverse items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[12px] text-brand-muted">
          By submitting, you agree to be contacted about your enquiry. We never
          share your details.
        </p>

        <Button
          type="submit"
          size="lg"
          disabled={status === "loading"}
          className="group relative min-w-[180px]"
        >
          <AnimatePresence mode="wait" initial={false}>
            {status === "loading" ? (
              <motion.span
                key="loading"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2"
              >
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending…
              </motion.span>
            ) : status === "done" ? (
              <motion.span
                key="done"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="inline-flex items-center gap-2"
              >
                <CheckCircle2 className="h-4 w-4" />
                Message sent
              </motion.span>
            ) : (
              <motion.span
                key="idle"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2"
              >
                Send message
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </div>

      <AnimatePresence>
        {status === "done" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="relative mt-5 flex items-center gap-3 rounded-2xl border border-brand-red/15 bg-brand-red/5 p-4 text-sm text-brand-ink"
          >
            <CheckCircle2 className="h-5 w-5 flex-none text-brand-red" />
            Thanks — we received your message and will get back to you shortly.
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
}
