import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import { Icon } from "@iconify/react";
import { motion, useInView } from "motion/react";
import "./styles.css";

// ── Assets ────────────────────────────────────────────────────────────────────

const assets = {
  hero: "/assets/laagom-04.png",
  brief: "/assets/laagom-05.webp",
  workflow: "/assets/laagom-06.png",
  ai: "/assets/laagom-07.png",
  tools: "/assets/laagom-08.png",
  integration: "/assets/laagom-09.png",
  training: "/assets/laagom-10.png",
  valuesOne: "/assets/laagom-11.jpg",
  valuesTwo: "/assets/laagom-12.jpg",
  valuesThree: "/assets/laagom-13.jpg",
  cta: "/assets/laagom-14.png",
};

// ── Content ───────────────────────────────────────────────────────────────────

const services = [
  {
    title: "Workflow Automation",
    body: "We map how your team works today and rebuild it so the right things happen automatically.",
    image: assets.workflow,
  },
  {
    title: "AI & Intelligent Agents",
    body: "We deploy AI tools that work inside your existing operations — not as experiments, but as working systems.",
    image: assets.ai,
  },
  {
    title: "Custom Internal Tools",
    body: "We build the dashboards, portals, and internal apps your team will actually use.",
    image: assets.tools,
  },
  {
    title: "Systems Integration",
    body: "We connect the tools you already have so data flows cleanly without manual intervention.",
    image: assets.integration,
  },
  {
    title: "Advisory & Training",
    body: "We help your leadership team understand what's possible and build the internal capability to sustain it.",
    image: assets.training,
  },
];

const processSteps = [
  {
    title: "Understand",
    body: "We spend time inside your business before we recommend anything. We map your current workflows, talk to your team, and identify where the real friction is.",
  },
  {
    title: "Design",
    body: "We build a clear plan: what gets built, in what order, and why. You see exactly what you're getting before we start.",
  },
  {
    title: "Deliver",
    body: "We build, test, and hand over — with training for your team and documentation that doesn't disappear when we do.",
  },
];

const values = [
  {
    title: "We start with your operations, not our stack",
    body: "Most vendors lead with their preferred technology. We lead with understanding your business — and pick the right tools only after that.",
    image: assets.valuesOne,
  },
  {
    title: "We build for the people who use it.",
    body: "A system no one uses is worse than no system. Everything we build is designed to be adopted, not avoided.",
    image: assets.valuesTwo,
  },
  {
    title: "We leave you capable, not dependent.",
    body: "When an engagement ends, your team understands what was built and why. You own it entirely.",
    image: assets.valuesThree,
  },
];

// ── Animation wrapper ─────────────────────────────────────────────────────────

function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 22 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ── Per-card components ───────────────────────────────────────────────────────

function ServiceCard({
  title,
  body,
  image,
  delay,
}: {
  title: string;
  body: string;
  image: string;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.article
      className="service-card"
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="service-image">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
    </motion.article>
  );
}

function ProcessCard({
  title,
  body,
  index,
  delay,
}: {
  title: string;
  body: string;
  index: number;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.article
      className="process-card"
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <span>{String(index + 1).padStart(2, "0")}</span>
      <h3>{title}</h3>
      <p>{body}</p>
    </motion.article>
  );
}

function ValuesFeature() {
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const inView0 = useInView(ref0, { once: true, margin: "-60px" });
  const inView1 = useInView(ref1, { once: true, margin: "-60px" });
  const inView2 = useInView(ref2, { once: true, margin: "-60px" });

  return (
    <div className="values-grid">
      <motion.article
        className="values-item values-item--featured"
        ref={ref0}
        initial={{ opacity: 0, y: 28 }}
        animate={inView0 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="values-img">
          <img src={values[0].image} alt="" />
        </div>
        <div className="values-copy">
          <h3>{values[0].title}</h3>
          <p>{values[0].body}</p>
        </div>
      </motion.article>

      <motion.article
        className="values-item values-item--side"
        ref={ref1}
        initial={{ opacity: 0, y: 28 }}
        animate={inView1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="values-img">
          <img src={values[1].image} alt="" />
        </div>
        <div className="values-copy">
          <h3>{values[1].title}</h3>
          <p>{values[1].body}</p>
        </div>
      </motion.article>

      <motion.article
        className="values-item values-item--side"
        ref={ref2}
        initial={{ opacity: 0, y: 28 }}
        animate={inView2 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="values-img">
          <img src={values[2].image} alt="" />
        </div>
        <div className="values-copy">
          <h3>{values[2].title}</h3>
          <p>{values[2].body}</p>
        </div>
      </motion.article>
    </div>
  );
}

// ── Calendly embed ────────────────────────────────────────────────────────────

function CalendlyWidget() {
  useEffect(() => {
    if (document.querySelector('script[src*="calendly"]')) return;
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/haashir?hide_gdpr_banner=1&primary_color=19555c"
      style={{ width: "100%", height: "700px" }}
    />
  );
}

// ── Logo ──────────────────────────────────────────────────────────────────────

function Logo() {
  return (
    <span className="logo-mark" aria-hidden="true">
      <svg viewBox="0 0 32 32" role="img">
        <path d="M0 0h16.12v16.05H0z" fill="transparent" />
        <path d="M0 0h.33c8.67 0 15.71 7.04 15.71 15.71v.33H0z" />
        <path d="M32 32h-.33C23 32 15.96 24.96 15.96 16.29v-.33H32z" />
        <path d="M8.12 28.65h-.2a4.57 4.57 0 0 1 0-9.14h.2a4.57 4.57 0 0 1 0 9.14Zm15.96-15.96h-.2a4.57 4.57 0 0 1 0-9.14h.2a4.57 4.57 0 0 1 0 9.14Z" />
      </svg>
    </span>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────

function App() {
  return (
    <main>
      {/* ── Navigation ── */}
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#hero" aria-label="Laagom home">
          <Logo />
          <span>Laagom</span>
        </a>
        <div className="nav-links">
          <a href="#brief">
            <Icon icon="solar:document-text-bold-duotone" className="nav-icon" />
            Brief
          </a>
          <a href="#services">
            <Icon icon="solar:layers-minimalistic-bold-duotone" className="nav-icon" />
            Services
          </a>
          <a href="#values">
            <Icon icon="solar:heart-bold-duotone" className="nav-icon" />
            Values
          </a>
        </div>
        <a className="portal" href="https://laagom.com/portal" rel="noreferrer">
          <Icon icon="solar:widget-bold-duotone" className="nav-icon" />
          Clients Portal
        </a>
        <button className="menu-button" aria-label="Open menu">
          <Icon icon="solar:hamburger-menu-bold-duotone" width={22} height={22} />
        </button>
      </nav>

      {/* ── Hero ── */}
      <section className="hero" id="hero">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1>
            Enterprise Excellence.
            <em>AI-Accelerated Efficiency.</em>
          </h1>
          <p>
            We help established businesses build the internal systems, AI tools, and automated
            workflows that let their teams do more — without growing headcount.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              <Icon icon="solar:chat-round-dots-bold-duotone" className="btn-icon" />
              Let's Talk
            </a>
            <span>It's free!</span>
          </div>
        </motion.div>
        <motion.div
          className="hero-media"
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={assets.hero} alt="" />
        </motion.div>
      </section>

      {/* ── Brief ── */}
      <section className="brief section" id="brief">
        <FadeIn className="brief-copy">
          <h2>Most businesses run on workarounds, not systems.</h2>
          <p>
            When a business grows fast, teams patch together spreadsheets, WhatsApp threads, and
            disconnected software to keep things moving. It works — until it doesn't. At a certain
            scale, those workarounds start costing you: in errors, in time, in decisions made without
            the right information, and in good people spending their day on tasks a machine could
            handle. That's not a people problem. It's a systems problem. And it's solvable.
          </p>
        </FadeIn>
        <FadeIn delay={0.1} className="brief-media">
          <img src={assets.brief} alt="" />
        </FadeIn>
      </section>

      {/* ── Services ── */}
      <section className="services section" id="services">
        <FadeIn className="section-heading centered">
          <p>What We Do</p>
          <h2>We build the systems your business actually needs.</h2>
        </FadeIn>
        <div className="service-grid">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 0.07} />
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section className="process section">
        <FadeIn className="section-heading">
          <h2>A structured approach. No surprises.</h2>
        </FadeIn>
        <div className="process-grid">
          {processSteps.map((step, i) => (
            <ProcessCard key={step.title} {...step} index={i} delay={i * 0.1} />
          ))}
        </div>
      </section>

      {/* ── Values ── */}
      <section className="values section" id="values">
        <FadeIn className="section-heading">
          <h2>How we're different.</h2>
        </FadeIn>
        <ValuesFeature />
      </section>

      {/* ── Contact ── */}
      <section className="contact section" id="contact">
        <FadeIn className="calendly-container">
          <CalendlyWidget />
        </FadeIn>
        <FadeIn delay={0.1} className="cta-panel">
          <img src={assets.cta} alt="" />
          <div>
            <h2>Tell us about your business. We'll tell you if and how we can help.</h2>
            <p>Pick a time that works and we'll come prepared.</p>
            <a href="mailto:hello@laagom.com" className="cta-email">
              hello@laagom.com
            </a>
          </div>
        </FadeIn>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <a className="brand" href="#hero" aria-label="Laagom home">
          <Logo />
          <span>Laagom</span>
        </a>
        <p>© 2026 Laagom Software. All Rights Reserved</p>
        <a href="mailto:hello@laagom.com" className="footer-email">
          hello@laagom.com
        </a>
      </footer>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
