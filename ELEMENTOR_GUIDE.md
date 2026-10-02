# Aevora Studio: Elementor Build Guide

The runnable portfolio in this workspace is built with Next.js. Use this companion guide to reproduce the same direction in WordPress and Elementor. The Next.js version and this guide share the same section order, copy, project destinations, and visual tokens.

## Site-wide setup

1. In WordPress, install Elementor. Elementor Pro is useful for Loop Grid, Form, and theme-builder features, but the page can also be assembled with core Elementor containers and HTML widgets.
2. Create a page named **Home**, set its page layout to **Elementor Full Width**, and edit with Elementor. Set the page title to hidden if your theme prints a second H1.
3. In **Site Settings > Layout**, set content width to `1120px`, container padding to `0`, and widgets space to `0`. Use a full-width parent container per section; nest a centered inner container with `max-width: 1120px` and `width: 86%`.
4. In **Site Settings > Global Colors**, add: Ink `#171A17`, Deep Ink `#111411`, Soft Ink `#202520`, Paper `#F0F0E9`, Muted `#92998E`, Accent `#C6F36B`, and Line `rgba(240,240,233,.14)`.
5. In **Site Settings > Global Fonts**, use Space Grotesk for headings and DM Sans for body text. Suggested desktop sizes: H1 `76px`, H2 `54px`, H3 `20px`, body `14px`; tablet/mobile: H1 `54px`, H2 `43px`, body `12px`. Keep letter spacing at `0`.
6. Set page background to Ink. Set buttons square-cornered (`0px` radius), with Accent fill and Ink text for primary actions. Use `45px` minimum button height and `17px` horizontal padding.
7. Add the CSS below in **Elementor > Site Settings > Custom CSS** (Pro), or **Appearance > Customize > Additional CSS**. For per-page use, add it to the page's Advanced > Custom CSS panel.

## Page structure and copy

### 1. Header

Use a full-width container with a 78px minimum height, horizontal padding `6.2vw`, and a bottom border `rgba(240,240,233,.08)`. Add a two-column inner container: wordmark on the left, menu on the right. Use anchor links `#work`, `#services`, `#studio`, `#process`, and `#contact`.

Wordmark: **a. aevora studio**

Menu: **Work · What we do · Studio · Process · Let&apos;s talk ↗**

For mobile, use Elementor's Nav Menu widget with the Dropdown layout. Keep the logo visible and use a square menu toggle.

### 2. Hero (`#home`)

Use a full-width, min-height `690px` container with Deep Ink background, a subtle CSS grid, and a two-column inner container (52% copy / 48% visual). Align both columns vertically. On mobile stack the visual below the copy.

Eyebrow: **INDEPENDENT DIGITAL STUDIO · EVERYWHERE**

H1: **We make digital feel different.**

Supporting copy: **Aevora Studio partners with ambitious people to design and build thoughtful websites, useful software, and experiences that move business forward.**

Buttons: **Explore our work →** (anchor `#work`) and **Start a project ↗** (anchor `#contact`).

Small footer line: **DESIGN MINDED. ENGINEERED TO LAST.** / **SCROLL TO EXPLORE ↓**

For the visual, use a browser-window mockup made from nested containers: a 38px charcoal sidebar, a pale canvas, a short two-line headline, two metric blocks, and a lime action label. Add a lime circular stamp reading **GOOD IDEAS / INTO GREAT / EXPERIENCES ↗**. Use the CSS pointer-tilt snippet below on the mockup if adding a small pointer-move handler; otherwise use the CSS hover tilt.

### 3. Moving capabilities strip

Add a 54px full-width container with a darker green-charcoal background and thin top/bottom borders. Use a single-line text widget with a horizontal loop animation:

**THOUGHTFUL DESIGN ✳ CLEAN ENGINEERING ✳ GOOD PARTNERSHIP ✳ BUILT FOR WHAT&apos;S NEXT ✳**

### 4. Selected work (`#work`)

Add a centered container with eyebrow **01 / SELECTED WORK**, H2 **Good work speaks for itself.**, and the intro: **A few of the digital experiences we&apos;ve helped bring into the world. Different challenges, one thoughtful approach.**

Add filter buttons: **All work · Web Apps · MERN · WordPress · E-commerce**. With Elementor Pro, use Loop Grid and Query ID/custom filtering; otherwise use separate category sections or a lightweight filter plugin. Set the portfolio card wrapper class to `project-card` and its image link to the live destination. Use a two-column desktop grid and one column on mobile.

Use a background image per card, the project name, category/type, short description, descriptive tags, and a visible **Live site ↗** link. Set external links to open in a new tab. The supplied site addresses are:

- University of Benghazi: https://ub.edu.ly/en/ (Education · Institution)
- Tranzf: https://www.tranzf.org/ (Editorial · Blog)
- Odin Styl: https://odinstyl.com (Retail · E-commerce)
- Herbal Harmony Haus: https://herbalharmonyhaus.shop (Wellness · E-commerce)
- Oxhall: https://oxhall.com (Commerce · Retail)
- Glam Master: https://www.glammaster.co.uk (Beauty · Services)
- Rezait Solutions: https://rezaitsolutions.com (Technology · Services)
- RiteAway Bin Hire: https://riteawaybinhire.com.au/ (Local · Services)
- SSH Travel: https://www.sshtravel.com (Travel · Hospitality)
- Denver Shoppers: https://www.denvershoppers.com (Fashion · E-commerce)
- My Little Rentals: https://mylittlerentals.com/ (Marketplace · Web app)

The tags in the running site intentionally describe project disciplines, not unverified implementation details. Replace them with confirmed technologies (for example, WordPress, WooCommerce, React, Node.js, MongoDB) only after checking each live build.

### 5. About (`#studio`)

Use a 45/55 split: full-bleed studio photograph on the left, Paper background on the right. Stack image above copy on mobile.

Eyebrow: **02 / A LITTLE ABOUT US**

H2: **Good ideas deserve a better build.**

Lead: **We&apos;re a close-knit digital studio for people with something worth putting into the world.**

Body: **Aevora brings design thinking and software craft into the same room. We get curious about the real problem, make the complex feel clear, and build with the kind of care you can feel long after launch. No big-agency theatre. Just good people, honest collaboration, and work that holds up.**

Link: **Get to know us →** (anchor `#contact`).

Use three factual counters: **11 / LIVE PROJECTS IN OUR PORTFOLIO**, **04 / INDUSTRIES AND COUNTING**, **01 / TEAM, FROM FIRST CALL TO LIVE**. These are based on the supplied portfolio list and studio positioning; update if the portfolio changes.

### 6. Services (`#services`)

Use a Soft Ink section with eyebrow **03 / WHAT WE DO**, H2 **Big picture. Careful details.**, and intro: **A small, focused team with the range to take your next idea from a napkin sketch to the real world.**

Build four equal-width cards with top/bottom rules, a numbered label, title, short description, and compact technology/service tags. Use these card details:

- **Full-stack development** — From first commit to final deploy. Thoughtful web apps with React, Node.js, Python, and the right tools for the job. Tags: React · Node.js · Python.
- **WordPress & commerce** — Flexible WordPress builds and frictionless online stores engineered to make the day-to-day feel simple. Tags: WordPress · WooCommerce · Elementor.
- **Product design** — Sharp, human interfaces and useful interactions shaped around the people who use them. Tags: Research · UI / UX · Prototyping.
- **Software & integrations** — Purpose-built tools, useful APIs, and dependable connections between the systems you already use. Tags: APIs · Automation · Cloud.

### 7. Statement band

Use a full-width Accent background, generous vertical padding, and a centered inner container. Eyebrow: **A GOOD DIGITAL PARTNER SHOULD**. Large statement: **Make the complex feel clear. Make the ambitious feel possible.** Highlight “clear” in a deeper olive and outline “possible” with a dark 1px text stroke.

### 8. Technology grid

Use a Deep Ink section with two columns. Eyebrow: **04 / THE TOOLKIT**. H2: **Tools change. Craft stays.** Supporting copy: **We choose technology for the job, not the other way around. A few of the tools we reach for to make good ideas work in the real world.**

Create a bordered icon/text grid for: **React · Node.js · Express · MongoDB · Python · JavaScript · HTML & CSS · WordPress · Elementor · WooCommerce · REST APIs · Next.js**. Use Elementor Icon widgets with consistent 18px icons and labels, or text-only rows if brand icons are unavailable.

### 9. Process (`#process`)

Use a Soft Ink section with eyebrow **05 / HOW WE GET THERE**, H2 **Clear steps. Good momentum.**, and intro: **The process is structured enough to keep things moving, and flexible enough to make room for the good surprises.**

Build a four-step horizontal timeline with lime nodes and a 1px connector; stack it vertically on mobile.

- **01 Discovery** — We listen closely, ask better questions, and get aligned on what success should feel like.
- **02 Strategy & design** — We shape the experience, map the details, and turn the direction into something you can see.
- **03 Engineering** — We build with care, share progress often, and keep the work moving in the open.
- **04 Testing & launch** — We test the edges, get you ready to go live, then stay close as your product grows.

### 10. Partnership / testimonial treatment

Use a two-column section with eyebrow **06 / A GOOD PARTNERSHIP**, H2 **Work is better together.**, and copy: **Great outcomes start with honest conversation. Here&apos;s what we believe makes the difference.**

Until approved client quotations are available, use a studio-values slider rather than attributed testimonials. Three slide titles/copy:

- **Made for the next chapter.** Good digital work should feel clear, considered, and ready to grow. That is the standard we bring to every collaboration.
- **Small details. Real momentum.** From the first conversation to the final handoff, we make the complicated feel calm and the ambitious feel achievable.
- **Your vision, in good hands.** No hand-offs into a black box. Just honest communication, considered craft, and a team invested in what comes next.

Use an Elementor Slides/Carousel widget with previous/next controls, a translucent surface, a lime quote mark, and **THE AEVORA APPROACH / AEVORA STUDIO** as the byline. Replace these with real approved client quotes when available; do not present studio copy as a client endorsement.

### 11. Contact (`#contact`) and footer

Use an Accent background and a two-column inner container. Left side: eyebrow **07 / YOUR NEXT GOOD THING**, H2 **Have a good one in mind?**, copy **Tell us what you&apos;re thinking. A rough idea, a big brief, a half-formed question. We&apos;re listening.**, email link, and social links.

Right side: Elementor Form widget with **Your name**, **Email address**, **What are you thinking about?** (Website or e-commerce / Web app or custom software / Product design / Something else), and **A little about the project**. Set required fields, use the real studio recipient email, configure Elementor email actions, and test delivery before publishing. The example email in the Next.js source is a placeholder; replace `hello@aevorastudio.com` in `src/app/page.tsx` with the confirmed address.

Footer: wordmark, **Thoughtful digital. Made together.**, **BACK TO TOP ↑**, copyright, and **DESIGN · ENGINEERING · PARTNERSHIP**. Use Deep Ink background, a subtle top border, and compact uppercase metadata.

## Reusable CSS

Add the `project-card` class to each project card. On Elementor widgets, apply the `glass-panel` class to a surface that should use the translucent style.

```css
:root {
  --aevora-ink: #171a17;
  --aevora-paper: #f0f0e9;
  --aevora-acid: #c6f36b;
}

.project-card {
  transform: perspective(1100px)
    rotateX(var(--tilt-x, 0deg))
    rotateY(var(--tilt-y, 0deg));
  transition: transform 180ms ease-out, box-shadow 220ms ease;
  transform-style: preserve-3d;
}

.project-card:hover {
  box-shadow: 0 22px 52px rgba(0, 0, 0, 0.28);
}

.project-card .elementor-widget-image img {
  transition: transform 500ms cubic-bezier(.2, .65, .25, 1);
}

.project-card:hover .elementor-widget-image img {
  transform: scale(1.035);
}

.glass-panel {
  background: linear-gradient(145deg,
    rgba(240, 240, 233, 0.09),
    rgba(240, 240, 233, 0.025));
  border: 1px solid rgba(240, 240, 233, 0.18);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 20px 55px rgba(0, 0, 0, 0.16);
}

.elementor-button {
  border-radius: 0;
  transition: transform 200ms ease, background-color 200ms ease;
}

.elementor-button:hover {
  transform: translateY(-2px);
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
  }
}
```

For true pointer-follow tilt on desktop, add this small script through an Elementor HTML widget near the footer or enqueue it in a child theme. It only affects fine pointers and leaves touch screens undisturbed:

```html
<script>
document.querySelectorAll('.project-card').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'touch') return;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    card.style.setProperty('--tilt-x', `${y * -5}deg`);
    card.style.setProperty('--tilt-y', `${x * 6}deg`);
  });
  card.addEventListener('pointerleave', () => {
    card.style.setProperty('--tilt-x', '0deg');
    card.style.setProperty('--tilt-y', '0deg');
  });
});
</script>
```

## Before publishing

- Replace the contact email and social URLs with confirmed studio accounts.
- Check each external destination and add current, approved project screenshots; use consistent image crops.
- Confirm each project's actual CMS/framework before publishing technology tags.
- Replace the studio-values slider with client-approved testimonials when supplied.
- Test the form recipient, required fields, mobile menu, filter behavior, external links, keyboard focus, and reduced-motion behavior.
- Set a custom social-sharing image and favicon, then test the page at 390px, 768px, and 1440px widths.