"use client";

import { FormEvent, PointerEvent, useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

type Project = {
  name: string;
  url: string;
  category: string;
  type: string;
  description: string;
  image: string;
  tags: string[];
  color: string;
};

const projects: Project[] = [
  { name: "University of Benghazi", url: "https://ub.edu.ly/en/", category: "Web Apps", type: "Education · Institution", description: "A clear digital front door for a university community with a global reach.", image: "photo-1562774053-701939374585", tags: ["Education", "Institution", "Web"], color: "#c5d8a4" },
  { name: "Tranzf", url: "https://www.tranzf.org/", category: "WordPress", type: "Editorial · Blog", description: "An editorial home designed to make ideas, stories, and new voices easy to discover.", image: "photo-1499750310107-5fef28a66643", tags: ["Editorial", "Publishing", "Content"], color: "#e5c5ab" },
  { name: "Odin Styl", url: "https://odinstyl.com", category: "E-commerce", type: "Retail · E-commerce", description: "A considered shopping experience for a style-led product collection.", image: "photo-1490481651871-ab68de25d43d", tags: ["Retail", "E-commerce", "Product"], color: "#d2b7a3" },
  { name: "Herbal Harmony Haus", url: "https://herbalharmonyhaus.shop", category: "E-commerce", type: "Wellness · E-commerce", description: "A calm, intuitive storefront for everyday wellness and natural living.", image: "photo-1608571423902-eed4a5ad8108", tags: ["Wellness", "E-commerce", "Retail"], color: "#c8d7bd" },
  { name: "Oxhall", url: "https://oxhall.com", category: "E-commerce", type: "Commerce · Retail", description: "A confident online retail experience built to keep the product in focus.", image: "photo-1483985988355-763728e1935b", tags: ["Retail", "E-commerce", "Catalog"], color: "#e3c5b4" },
  { name: "Glam Master", url: "https://www.glammaster.co.uk", category: "WordPress", type: "Beauty · Services", description: "A polished service-led presence that makes discovery and booking feel effortless.", image: "photo-1522335789203-aabd1fc54bc9", tags: ["Beauty", "Services", "Booking"], color: "#e1b8c7" },
  { name: "Rezait Solutions", url: "https://rezaitsolutions.com", category: "Web Apps", type: "Technology · Services", description: "A digital showcase for a team turning complex technology into practical outcomes.", image: "photo-1497366754035-f200968a6e72", tags: ["Technology", "Services", "B2B"], color: "#bbc9cc" },
  { name: "RiteAway Bin Hire", url: "https://riteawaybinhire.com.au/", category: "WordPress", type: "Local · Services", description: "A straightforward service experience that helps customers find the right hire, fast.", image: "photo-1504307651254-35680f356dfd", tags: ["Local", "Services", "Lead gen"], color: "#d4c5a0" },
  { name: "SSH Travel", url: "https://www.sshtravel.com", category: "WordPress", type: "Travel · Hospitality", description: "An inviting travel experience made for dreaming, planning, and going places.", image: "photo-1464822759023-fed622ff2c3b", tags: ["Travel", "Hospitality", "Discovery"], color: "#a9c6ca" },
  { name: "Denver Shoppers", url: "https://www.denvershoppers.com", category: "E-commerce", type: "Fashion · E-commerce", description: "A fashion storefront with an easy path from browsing to finding a new favorite.", image: "photo-1483985988355-763728e1935b", tags: ["Fashion", "E-commerce", "Retail"], color: "#d9b0a0" },
  { name: "My Little Rentals", url: "https://mylittlerentals.com/", category: "MERN", type: "Marketplace · Web app", description: "A classifieds-style marketplace connecting people with things worth renting.", image: "photo-1600585154340-be6161a56a0c", tags: ["Marketplace", "Web app", "Listings"], color: "#bbc8a6" },
];

const filters = ["All work", "Web Apps", "MERN", "WordPress", "E-commerce"];
const services = [
  { number: "01", title: "Full-stack development", detail: "From first commit to final deploy. Thoughtful web apps with React, Node.js, Python, and the right tools for the job.", tags: ["React", "Node.js", "Python"] },
  { number: "02", title: "WordPress & commerce", detail: "Flexible WordPress builds and frictionless online stores engineered to make the day-to-day feel simple.", tags: ["WordPress", "WooCommerce", "Elementor"] },
  { number: "03", title: "Product design", detail: "Sharp, human interfaces and useful interactions shaped around the people who use them.", tags: ["Research", "UI / UX", "Prototyping"] },
  { number: "04", title: "Software & integrations", detail: "Purpose-built tools, useful APIs, and dependable connections between the systems you already use.", tags: ["APIs", "Automation", "Cloud"] },
];
const technologies = ["React", "Node.js", "Express", "MongoDB", "Python", "JavaScript", "HTML & CSS", "WordPress", "Elementor", "WooCommerce", "REST APIs", "Next.js"];
const steps = [
  { number: "01", title: "Discovery", description: "We listen closely, ask better questions, and get aligned on what success should feel like." },
  { number: "02", title: "Strategy & design", description: "We shape the experience, map the details, and turn the direction into something you can see." },
  { number: "03", title: "Engineering", description: "We build with care, share progress often, and keep the work moving in the open." },
  { number: "04", title: "Testing & launch", description: "We test the edges, get you ready to go live, then stay close as your product grows." },
];
const emailAddress = "hello@aevorastudio.com";
const whatsappLink = "https://wa.me/923172807217?text=Hi%20Aevora%20Studio%2C%20I%27d%20like%20to%20discuss%20a%20project.";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "→"}</span>;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  function tiltCard(event: PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    event.currentTarget.style.setProperty("--tilt-x", `${y * -5}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${x * 6}deg`);
  }

  function resetTilt(event: PointerEvent<HTMLElement>) {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  }

  return (
    <article className="project-card reveal" style={{ "--project-color": project.color, "--delay": `${(index % 3) * 90}ms` } as React.CSSProperties} onPointerMove={tiltCard} onPointerLeave={resetTilt}>
      <a className="project-image" href={project.url} target="_blank" rel="noreferrer" aria-label={`View ${project.name} live project`} style={{ backgroundImage: `linear-gradient(180deg, rgba(13, 16, 14, 0.02) 30%, rgba(13, 16, 14, 0.5)), url(https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=1200&q=85)` }}>
        <span className="project-index">0{index + 1}</span>
        <span className="project-open" aria-hidden="true"><Arrow diagonal /></span>
        <span className="project-image-label">AEVORA / SELECTED WORK</span>
      </a>
      <div className="project-meta">
        <div className="project-heading"><div><p className="eyebrow">{project.type}</p><h3>{project.name}</h3></div><a className="text-link project-link" href={project.url} target="_blank" rel="noreferrer">Live site <Arrow diagonal /></a></div>
        <p className="project-description">{project.description}</p>
        <div className="tag-list">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
      </div>
    </article>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All work");
  const [activeQuote, setActiveQuote] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const visibleProjects = activeFilter === "All work" ? projects : projects.filter((project) => project.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [activeFilter]);

  function moveHero(event: PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--pointer-x", `${(event.clientX - bounds.left) / bounds.width}`);
    event.currentTarget.style.setProperty("--pointer-y", `${(event.clientY - bounds.top) / bounds.height}`);
  }

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Project inquiry from ${formData.get("name")}`);
    const body = encodeURIComponent(`Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\nProject type: ${formData.get("projectType")}\n\n${formData.get("message")}`);
    setSent(true);
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  }

  const quotes = [
    { title: "Made for the next chapter.", copy: "Good digital work should feel clear, considered, and ready to grow. That is the standard we bring to every collaboration.", byline: "The Aevora approach", role: "Thoughtful by design" },
    { title: "Small details. Real momentum.", copy: "From the first conversation to the final handoff, we make the complicated feel calm and the ambitious feel achievable.", byline: "The Aevora promise", role: "Built together" },
    { title: "Your vision, in good hands.", copy: "No hand-offs into a black box. Just honest communication, considered craft, and a team invested in what comes next.", byline: "How we work", role: "A partner, not a vendor" },
  ];

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Aevora Studio home"><span className="wordmark-symbol">a<span>.</span></span><span className="wordmark-name">aevora<span>studio</span></span></a>
        <button className={`menu-toggle${menuOpen ? " is-open" : ""}`} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span></span><span></span></button>
        <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a><a href="#services" onClick={() => setMenuOpen(false)}>What we do</a><a href="#studio" onClick={() => setMenuOpen(false)}>Studio</a><a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk <Arrow diagonal /></a>
        </nav>
      </header>

      <section className="hero" id="home" onPointerMove={moveHero}>
        <div className="hero-grid" aria-hidden="true"></div>
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow hero-kicker"><span className="status-dot"></span> INDEPENDENT DIGITAL STUDIO <span className="kicker-location">· EVERYWHERE</span></p>
            <h1>We make digital<br /><span className="headline-soft">feel</span> <span className="headline-accent">different.</span></h1>
            <p className="hero-description">Aevora Studio partners with ambitious people to design and build thoughtful websites, useful software, and experiences that move business forward.</p>
            <div className="hero-actions"><a className="button button-primary" href="#work">Explore our work <Arrow /></a><a className="button button-quiet" href="#contact">Start a project <Arrow diagonal /></a></div>
            <div className="hero-footnote"><span>DESIGN MINDED. ENGINEERED TO LAST.</span><span>SCROLL TO EXPLORE ↓</span></div>
          </div>
          <div className="hero-art" aria-label="Abstract preview of an Aevora Studio digital product">
            <div className="art-orbit orbit-one"></div><div className="art-orbit orbit-two"></div>
            <div className="art-stamp"><span>GOOD IDEAS</span><span>INTO GREAT</span><span>EXPERIENCES ↗</span></div>
            <div className="art-window">
              <div className="window-top"><div className="window-dots"><i></i><i></i><i></i></div><span>aevora.digital</span><span className="window-menu">•••</span></div>
              <div className="window-body"><div className="window-aside"><span className="mini-mark">a.</span><i></i><i></i><i></i><i></i><span className="aside-bottom"></span></div><div className="window-main"><div className="window-welcome"><span>AEVORA STUDIO / DIGITAL DESK</span><b>Make room for<br /><em>what&apos;s next.</em></b><small>Your next good idea starts here.</small></div><div className="window-stats"><div><span>OUR FOCUS</span><strong>Intent</strong><i className="stat-line line-one"></i></div><div><span>OUR PROMISE</span><strong>Lasting</strong><i className="stat-line line-two"></i></div></div><div className="window-bottom"><span>YOUR NEXT CHAPTER</span><span className="mini-cta">EXPLORE ↗</span></div></div></div>
            </div>
            <div className="art-caption"><span className="caption-mark">✳</span><span>Built around<br />what matters.</span><span className="caption-year">INDEPENDENT STUDIO</span></div>
            <span className="art-coordinate">36°11&apos; N / 43°59&apos; E</span>
          </div>
        </div>
        <div className="hero-bottom"><span>SCROLL A LITTLE</span><span className="hero-scroll-line"></span><span>01 / 05</span></div>
      </section>

      <section className="ticker" aria-label="Studio capabilities"><div className="ticker-track"><span>THOUGHTFUL DESIGN <b>✳</b> CLEAN ENGINEERING <b>✳</b> GOOD PARTNERSHIP <b>✳</b> BUILT FOR WHAT&apos;S NEXT <b>✳</b> THOUGHTFUL DESIGN <b>✳</b> CLEAN ENGINEERING <b>✳</b> GOOD PARTNERSHIP <b>✳</b> BUILT FOR WHAT&apos;S NEXT <b>✳</b></span></div></section>

      <section className="section work-section" id="work">
        <div className="section-shell">
          <div className="section-heading reveal"><div><p className="eyebrow">01 / SELECTED WORK</p><h2>Good work<br />speaks <span className="headline-accent">for itself.</span></h2></div><p className="section-intro">A few of the digital experiences we&apos;ve helped bring into the world. Different challenges, one thoughtful approach.</p></div>
          <div className="filter-row" role="group" aria-label="Filter projects">{filters.map((filter) => <button className={`filter-button${filter === activeFilter ? " active" : ""}`} onClick={() => setActiveFilter(filter)} key={filter} aria-pressed={filter === activeFilter}>{filter}<span>{filter === "All work" ? projects.length : projects.filter((project) => project.category === filter).length}</span></button>)}</div>
          <div className="project-grid">{visibleProjects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</div>
          <div className="project-note"><span>↳</span> Each project opens its live website in a new tab.</div>
        </div>
      </section>

      <section className="about-section" id="studio">
        <div className="about-image" role="img" aria-label="A warm, light-filled creative studio with a desk and plants"></div>
        <div className="about-content"><p className="eyebrow reveal">02 / A LITTLE ABOUT US</p><h2 className="reveal">Good ideas deserve<br />a <span className="headline-accent">better build.</span></h2><p className="about-lead reveal">We&apos;re a close-knit digital studio for people with something worth putting into the world.</p><p className="about-body reveal">Aevora brings design thinking and software craft into the same room. We get curious about the real problem, make the complex feel clear, and build with the kind of care you can feel long after launch. No big-agency theatre. Just good people, honest collaboration, and work that holds up.</p><a className="text-link reveal" href="#contact">Get to know us <Arrow /></a>
          <div className="about-stats reveal"><div><strong>11</strong><span>LIVE PROJECTS<br />IN OUR PORTFOLIO</span></div><div><strong>04</strong><span>INDUSTRIES<br />AND COUNTING</span></div><div><strong>01</strong><span>TEAM, FROM<br />FIRST CALL TO LIVE</span></div></div>
        </div>
      </section>

      <section className="services-section" id="services"><div className="section-shell"><div className="section-heading reveal"><div><p className="eyebrow">03 / WHAT WE DO</p><h2>Big picture.<br /><span className="headline-accent">Careful details.</span></h2></div><p className="section-intro">A small, focused team with the range to take your next idea from a napkin sketch to the real world.</p></div>
        <div className="service-grid">{services.map((service) => <article className="service-card reveal" key={service.number}><div className="service-top"><span className="service-number">/{service.number}</span><span className="service-arrow"><Arrow diagonal /></span></div><h3>{service.title}</h3><p>{service.detail}</p><div className="tag-list">{service.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></article>)}</div>
      </div></section>

      <section className="manifesto"><div className="manifesto-inner reveal"><p className="eyebrow">A GOOD DIGITAL PARTNER SHOULD</p><p className="manifesto-quote">Make the complex<br />feel <span className="headline-accent">clear.</span> Make the<br />ambitious feel <span className="headline-outline">possible.</span></p><span className="manifesto-star">✳</span></div></section>

      <section className="stack-section"><div className="section-shell stack-layout"><div className="stack-copy reveal"><p className="eyebrow">04 / THE TOOLKIT</p><h2>Tools change.<br /><span className="headline-accent">Craft stays.</span></h2><p>We choose technology for the job, not the other way around. A few of the tools we reach for to make good ideas work in the real world.</p></div><div className="stack-grid reveal">{technologies.map((technology, index) => <div className="stack-item" key={technology}><span className="stack-index">0{index + 1}</span><span>{technology}</span><span className="stack-spark">↗</span></div>)}</div></div></section>

      <section className="process-section" id="process"><div className="section-shell"><div className="section-heading reveal"><div><p className="eyebrow">05 / HOW WE GET THERE</p><h2>Clear steps.<br /><span className="headline-accent">Good momentum.</span></h2></div><p className="section-intro">The process is structured enough to keep things moving, and flexible enough to make room for the good surprises.</p></div><div className="process-grid">{steps.map((step) => <article className="process-step reveal" key={step.number}><span className="process-number">{step.number}</span><div className="process-node"><span></span></div><h3>{step.title}</h3><p>{step.description}</p></article>)}</div></div></section>

      <section className="testimonial-section"><div className="section-shell testimonial-layout"><div className="testimonial-heading reveal"><p className="eyebrow">06 / A GOOD PARTNERSHIP</p><h2>Work is better<br /><span className="headline-accent">together.</span></h2><p>Great outcomes start with honest conversation. Here&apos;s what we believe makes the difference.</p><div className="quote-controls"><button aria-label="Previous note" onClick={() => setActiveQuote((activeQuote + quotes.length - 1) % quotes.length)}>←</button><button aria-label="Next note" onClick={() => setActiveQuote((activeQuote + 1) % quotes.length)}>→</button><span>0{activeQuote + 1} <i>/</i> 0{quotes.length}</span></div></div><div className="quote-card reveal" aria-live="polite"><span className="quote-mark">“</span><div className="quote-content" key={activeQuote}><p className="eyebrow">{quotes[activeQuote].role}</p><h3>{quotes[activeQuote].title}</h3><p>{quotes[activeQuote].copy}</p><div className="quote-byline"><span className="quote-avatar">a.</span><span><strong>{quotes[activeQuote].byline}</strong><small>AEVORA STUDIO</small></span><span className="quote-stars">✳ ✳ ✳</span></div></div></div></div></section>

      <section className="contact-section" id="contact"><div className="section-shell contact-layout"><div className="contact-copy reveal"><p className="eyebrow">07 / YOUR NEXT GOOD THING</p><h2>Have a good<br /><span className="headline-accent">one in mind?</span></h2><p>Tell us what you&apos;re thinking. A rough idea, a big brief, a half-formed question. We&apos;re listening.</p><a className="contact-email" href={`mailto:${emailAddress}`}>{emailAddress} <Arrow diagonal /></a><a className="whatsapp-contact" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Chat with Aevora Studio on WhatsApp at +92 317 2807217"><FaWhatsapp aria-hidden="true" /><span className="whatsapp-copy"><strong>Chat on WhatsApp</strong><small>+92 317 2807217</small></span><Arrow diagonal /></a><div className="social-links"><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram <Arrow diagonal /></a></div></div><form className="contact-form reveal" onSubmit={submitInquiry}><div className="form-title"><span>LET&apos;S MAKE SOMETHING GOOD.</span><span>↘</span></div><label htmlFor="name">Your name</label><input id="name" name="name" placeholder="How should we call you?" required /><label htmlFor="email">Email address</label><input id="email" type="email" name="email" placeholder="you@somewhere.com" required /><label htmlFor="projectType">What are you thinking about?</label><select id="projectType" name="projectType" defaultValue=""><option value="" disabled>Choose a project type</option><option>Website or e-commerce</option><option>Web app or custom software</option><option>Product design</option><option>Something else</option></select><label htmlFor="message">A little about the project</label><textarea id="message" name="message" placeholder="The rough idea is a great place to start..." rows={3} required /><button className="button button-primary form-submit" type="submit">{sent ? "Opening your email app" : "Send your inquiry"} <Arrow diagonal /></button><p className="form-note">This opens your email app with your inquiry ready to send.</p></form></div></section>

      <a className="whatsapp-float" href={whatsappLink} target="_blank" rel="noreferrer" title="Chat on WhatsApp" aria-label="Chat with Aevora Studio on WhatsApp at +92 317 2807217"><FaWhatsapp aria-hidden="true" /></a>

      <footer className="site-footer"><div className="footer-top"><a className="wordmark" href="#home"><span className="wordmark-symbol">a<span>.</span></span><span className="wordmark-name">aevora<span>studio</span></span></a><p>Thoughtful digital.<br />Made together.</p><a className="back-top" href="#home">BACK TO TOP ↑</a></div><div className="footer-bottom"><span>© 2026 AEVORA STUDIO. MADE WITH INTENTION.</span><span>INDEPENDENT BY DESIGN <b>✳</b></span><span>DESIGN · ENGINEERING · PARTNERSHIP</span></div></footer>
    </main>
  );
}
