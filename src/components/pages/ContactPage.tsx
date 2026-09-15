import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send, Clock, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal, Stagger } from "@/components/anim/Reveal";
import { Magnetic } from "@/components/anim/Magnetic";
import { company, services } from "@/lib/site-data";

export function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast.success("Thanks! We'll be in touch within one business day.");
    e.currentTarget.reset();
  };

  const fieldClass =
    "w-full rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/25";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Growth"
        subtitle="Tell us about your business and goals. You'll hear back from a senior strategist — not a sales bot — within one business day."
      />

      <section className="section-pad pt-0">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1.3fr_1fr]">
          <Reveal className="glass rounded-3xl p-7 sm:p-10">
            <h2 className="font-display text-2xl font-extrabold">Request a free consultation</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Share a few details and we'll prepare an initial plan before we even meet.
            </p>

            <form onSubmit={onSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Name
                </label>
                <input required name="name" placeholder="Jane Smith" className={fieldClass} />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="jane@company.com"
                  className={fieldClass}
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Phone
                </label>
                <input name="phone" placeholder="(704) 000-0000" className={fieldClass} />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Company
                </label>
                <input name="company" placeholder="Company name" className={fieldClass} />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Interested service
                </label>
                <select name="service" className={fieldClass} defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="What are you trying to achieve?"
                  className={fieldClass}
                />
              </div>
              <div className="sm:col-span-2">
                <Magnetic>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)]"
                  >
                    {sent ? (
                      <>
                        <CheckCircle2 className="size-4" /> Message sent
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="size-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </Magnetic>
              </div>
            </form>
          </Reveal>

          <Stagger className="space-y-4">
            <div className="glass glass-hover rounded-3xl p-7">
              <h3 className="font-display text-lg font-bold">Contact information</h3>
              <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span>
                    {company.legal}
                    <br />
                    {company.street}
                    <br />
                    {company.city}, {company.state} {company.zip}
                  </span>
                </li>
                <li>
                  <a href={company.phoneHref} className="flex gap-3 hover:text-accent">
                    <Phone className="size-4 shrink-0 text-accent" /> {company.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${company.email}`} className="flex gap-3 hover:text-accent">
                    <Mail className="size-4 shrink-0 text-accent" /> {company.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="size-4 shrink-0 text-accent" /> 24 Hours Open
                </li>
              </ul>
            </div>

            <div className="glass overflow-hidden rounded-3xl">
              <iframe
                title="Rok Online office location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.703409639301!2d89.20522717446146!3d25.747320009201005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e3338f7c8ddfb9%3A0xe62a8e84a913c5db!2sRok%20Online!5e0!3m2!1sen!2sbd!4v1789432895800!5m2!1sen!2sbd"
                loading="lazy"
                className="h-72 w-full border-0 grayscale-[35%]"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="glass rounded-3xl p-7">
              <h3 className="font-display text-lg font-bold">Follow us</h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/company/rokonline"
                  },
                  {
                    name: "Facebook",
                    url: "https://www.facebook.com/rokonlineinc"
                  },
                  {
                    name: "Instagram",
                    url: "https://www.instagram.com/rokonlineinc"
                  },
                  {
                    name: "YouTube",
                    url: "https://www.youtube.com/@rokonline"
                  },
                  {
                    name: "Upwork",
                    url: "/#"
                  }
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      rounded-full
                      border
                      border-border
                      px-4
                      py-2
                      text-xs
                      font-semibold
                      text-muted-foreground
                      transition-all
                      hover:-translate-y-0.5
                      hover:border-accent
                      hover:text-accent
                    "
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </Stagger>
        </div>
      </section>
    </>
  );
}
