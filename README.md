<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Januda Kodithuwakku — Full Stack Developer & Software Engineer | Sri Lanka</title>
<meta name="description" content="Januda Kodithuwakku is a Full Stack Developer from Sri Lanka specializing in React, Spring Boot, Angular, and cloud technologies. Available for software engineering roles and freelance projects.">
<meta name="keywords" content="Januda Kodithuwakku, Full Stack Developer, Software Engineer, Sri Lanka, React, Spring Boot, Angular, Java, JavaScript, Web Developer">
<meta name="author" content="Januda Kodithuwakku">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://kjanuda.github.io/JanudaJK.me/">

<!-- Open Graph / Social -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://kjanuda.github.io/JanudaJK.me/">
<meta property="og:title" content="Januda Kodithuwakku — Full Stack Developer">
<meta property="og:description" content="Full Stack Developer from Sri Lanka. React, Spring Boot, Angular. Open to software engineering roles.">
<meta property="og:image" content="https://kjanuda.github.io/JanudaJK.me/og-image.png">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Januda Kodithuwakku — Full Stack Developer">
<meta name="twitter:description" content="Full Stack Developer from Sri Lanka. React, Spring Boot, Angular.">

<!-- Schema.org structured data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Januda Kodithuwakku",
  "jobTitle": "Full Stack Developer",
  "url": "https://kjanuda.github.io/JanudaJK.me/",
  "email": "janudakodi@gmail.com",
  "telephone": "+94773007426",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "LK"
  },
  "alumniOf": [
    {"@type": "CollegeOrUniversity", "name": "University of Colombo"},
    {"@type": "CollegeOrUniversity", "name": "University of Moratuwa"}
  ],
  "sameAs": [
    "https://www.linkedin.com/in/januda-kodithuwakku/",
    "https://github.com/kjanuda"
  ],
  "knowsAbout": ["React", "Spring Boot", "Java", "JavaScript", "Angular", "Next.js", "AWS", "MySQL", "MongoDB"]
}
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">

<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --ink: #0d0d0d;
    --ink-muted: #555;
    --ink-faint: #999;
    --surface: #ffffff;
    --surface-2: #f7f6f3;
    --surface-3: #eeede9;
    --accent: #5b4cf5;
    --accent-soft: #ede9fd;
    --accent-mid: #7c6cf8;
    --border: rgba(0,0,0,0.08);
    --border-strong: rgba(0,0,0,0.15);
    --radius: 12px;
    --radius-lg: 20px;
    --font-display: 'Space Grotesk', sans-serif;
    --font-body: 'Inter', sans-serif;
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: var(--font-body);
    background: var(--surface);
    color: var(--ink);
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* NAV */
  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 1rem 2rem;
    background: rgba(255,255,255,0.88);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--border);
  }
  .nav-logo {
    font-family: var(--font-display);
    font-weight: 700; font-size: 1.1rem;
    color: var(--ink); text-decoration: none;
    letter-spacing: -0.02em;
  }
  .nav-logo span { color: var(--accent); }
  .nav-links { display: flex; gap: 2rem; list-style: none; }
  .nav-links a {
    font-size: 0.875rem; font-weight: 500;
    color: var(--ink-muted); text-decoration: none;
    transition: color 0.2s;
  }
  .nav-links a:hover { color: var(--ink); }
  .nav-cta {
    font-size: 0.875rem; font-weight: 500;
    padding: 0.5rem 1.25rem;
    background: var(--accent); color: #fff;
    border-radius: 100px; text-decoration: none;
    transition: opacity 0.2s;
  }
  .nav-cta:hover { opacity: 0.85; }

  /* HERO */
  .hero {
    min-height: 100vh;
    display: flex; flex-direction: column; justify-content: center;
    padding: 8rem 2rem 5rem;
    max-width: 1100px; margin: 0 auto;
    position: relative;
  }

  .hero-eyebrow {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 0.8rem; font-weight: 500; letter-spacing: 0.08em;
    text-transform: uppercase; color: var(--accent);
    margin-bottom: 1.5rem;
  }
  .hero-eyebrow::before {
    content: '';
    display: inline-block; width: 24px; height: 2px;
    background: var(--accent);
  }

  .hero h1 {
    font-family: var(--font-display);
    font-size: clamp(3rem, 7vw, 5.5rem);
    font-weight: 700;
    line-height: 1.05;
    letter-spacing: -0.03em;
    color: var(--ink);
    margin-bottom: 1.5rem;
  }
  .hero h1 em {
    font-style: normal;
    background: linear-gradient(135deg, var(--accent) 0%, var(--accent-mid) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-desc {
    font-size: 1.15rem; color: var(--ink-muted);
    max-width: 520px; line-height: 1.7;
    margin-bottom: 2.5rem;
  }

  .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 4rem; }
  .btn-primary {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 0.75rem 1.75rem;
    background: var(--accent); color: #fff;
    border-radius: 100px; text-decoration: none;
    font-size: 0.9rem; font-weight: 500;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(91,76,245,0.35); }
  .btn-ghost {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 0.75rem 1.75rem;
    border: 1.5px solid var(--border-strong);
    color: var(--ink); border-radius: 100px;
    text-decoration: none; font-size: 0.9rem; font-weight: 500;
    transition: border-color 0.2s, background 0.2s;
  }
  .btn-ghost:hover { border-color: var(--accent); background: var(--accent-soft); }

  .hero-stats {
    display: flex; gap: 3rem; flex-wrap: wrap;
    border-top: 1px solid var(--border);
    padding-top: 2rem;
  }
  .stat-num {
    font-family: var(--font-display);
    font-size: 2rem; font-weight: 700;
    color: var(--ink); letter-spacing: -0.03em;
  }
  .stat-label { font-size: 0.8rem; color: var(--ink-faint); margin-top: 2px; }

  /* MARQUEE TICKER */
  .ticker-wrap {
    overflow: hidden; border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    padding: 0.9rem 0; background: var(--surface-2);
  }
  .ticker {
    display: flex; gap: 2.5rem; width: max-content;
    animation: ticker 28s linear infinite;
  }
  .ticker-item {
    font-size: 0.8rem; font-weight: 500;
    letter-spacing: 0.06em; text-transform: uppercase;
    color: var(--ink-faint); white-space: nowrap;
    display: flex; align-items: center; gap: 10px;
  }
  .ticker-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--accent); }
  @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }

  /* SECTIONS */
  section { padding: 6rem 2rem; }
  .container { max-width: 1100px; margin: 0 auto; }
  .section-label {
    font-size: 0.75rem; font-weight: 600;
    letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--accent); margin-bottom: 0.5rem;
  }
  .section-title {
    font-family: var(--font-display);
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700; letter-spacing: -0.03em;
    color: var(--ink); line-height: 1.1;
    margin-bottom: 1rem;
  }
  .section-sub {
    font-size: 1rem; color: var(--ink-muted);
    max-width: 480px; line-height: 1.7;
    margin-bottom: 3rem;
  }

  /* ABOUT */
  .about-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 4rem; align-items: center;
  }
  .about-image-wrap {
    position: relative;
  }
  .about-image-box {
    width: 100%; aspect-ratio: 4/5;
    background: var(--surface-2);
    border-radius: var(--radius-lg);
    border: 1px solid var(--border);
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    gap: 1rem; overflow: hidden;
    position: relative;
  }
  .about-avatar {
    width: 96px; height: 96px; border-radius: 50%;
    background: var(--accent-soft);
    display: flex; align-items: center; justify-content: center;
    font-family: var(--font-display); font-size: 2rem; font-weight: 700;
    color: var(--accent);
  }
  .about-badge {
    position: absolute; bottom: 1.5rem; left: 50%; transform: translateX(-50%);
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 100px; padding: 0.4rem 1rem;
    font-size: 0.8rem; font-weight: 500; color: var(--ink);
    white-space: nowrap;
  }
  .about-deco {
    position: absolute; top: -1rem; right: -1rem;
    width: 80px; height: 80px; border-radius: 50%;
    background: var(--accent-soft); z-index: -1;
  }
  .about-content h3 {
    font-family: var(--font-display);
    font-size: 1.6rem; font-weight: 700;
    letter-spacing: -0.02em; margin-bottom: 1rem;
    color: var(--ink);
  }
  .about-content p {
    font-size: 0.95rem; color: var(--ink-muted);
    line-height: 1.75; margin-bottom: 1rem;
  }
  .about-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 1.5rem; }
  .tag {
    font-size: 0.75rem; font-weight: 500;
    padding: 0.35rem 0.75rem;
    background: var(--surface-2); border: 1px solid var(--border);
    border-radius: 100px; color: var(--ink-muted);
  }

  /* SKILLS */
  .skills-bg { background: var(--surface-2); }
  .skills-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }
  .skill-card {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: var(--radius-lg); padding: 1.5rem;
    transition: border-color 0.2s, transform 0.2s;
  }
  .skill-card:hover { border-color: var(--accent); transform: translateY(-3px); }
  .skill-card-icon {
    width: 44px; height: 44px; border-radius: 10px;
    background: var(--accent-soft);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.2rem; margin-bottom: 1rem;
  }
  .skill-card h4 {
    font-family: var(--font-display); font-size: 1rem;
    font-weight: 600; margin-bottom: 0.75rem;
  }
  .skill-pills { display: flex; flex-wrap: wrap; gap: 6px; }
  .skill-pill {
    font-size: 0.72rem; font-weight: 500;
    padding: 0.25rem 0.6rem;
    background: var(--surface-2); border: 1px solid var(--border);
    border-radius: 6px; color: var(--ink-muted);
  }

  /* PROJECTS */
  .projects-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
  }
  .project-card {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: var(--radius-lg); overflow: hidden;
    transition: transform 0.25s, box-shadow 0.25s;
  }
  .project-card:hover { transform: translateY(-4px); box-shadow: 0 20px 48px rgba(0,0,0,0.08); }
  .project-thumb {
    height: 200px; display: flex; align-items: center; justify-content: center;
    font-size: 3rem; background: var(--surface-2);
    border-bottom: 1px solid var(--border);
    position: relative; overflow: hidden;
  }
  .project-thumb-bg {
    position: absolute; inset: 0;
    background: linear-gradient(135deg, var(--accent-soft) 0%, transparent 100%);
  }
  .project-body { padding: 1.5rem; }
  .project-tag {
    font-size: 0.7rem; font-weight: 600;
    text-transform: uppercase; letter-spacing: 0.07em;
    color: var(--accent); margin-bottom: 0.5rem;
  }
  .project-body h3 {
    font-family: var(--font-display); font-size: 1.1rem;
    font-weight: 700; margin-bottom: 0.5rem; color: var(--ink);
  }
  .project-body p {
    font-size: 0.85rem; color: var(--ink-muted);
    line-height: 1.65; margin-bottom: 1rem;
  }
  .project-links { display: flex; gap: 0.75rem; }
  .project-link {
    font-size: 0.78rem; font-weight: 500;
    color: var(--accent); text-decoration: none;
    display: flex; align-items: center; gap: 4px;
  }
  .project-link:hover { text-decoration: underline; }

  /* TIMELINE */
  .timeline { position: relative; padding-left: 2rem; }
  .timeline::before {
    content: ''; position: absolute; left: 0; top: 4px; bottom: 0;
    width: 1px; background: var(--border-strong);
  }
  .timeline-item { position: relative; margin-bottom: 2.5rem; }
  .timeline-item::before {
    content: ''; position: absolute; left: -2.35rem; top: 4px;
    width: 10px; height: 10px; border-radius: 50%;
    background: var(--accent); border: 2px solid var(--surface);
    box-shadow: 0 0 0 2px var(--accent);
  }
  .timeline-year {
    font-size: 0.72rem; font-weight: 600;
    text-transform: uppercase; letter-spacing: 0.07em;
    color: var(--accent); margin-bottom: 0.25rem;
  }
  .timeline-title {
    font-family: var(--font-display); font-size: 1rem;
    font-weight: 600; color: var(--ink); margin-bottom: 0.25rem;
  }
  .timeline-place { font-size: 0.85rem; color: var(--ink-muted); }

  /* CONTACT */
  .contact-bg { background: var(--ink); color: #fff; }
  .contact-bg .section-label { color: var(--accent-mid); }
  .contact-bg .section-title { color: #fff; }
  .contact-bg .section-sub { color: rgba(255,255,255,0.6); }
  .contact-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 4rem; align-items: start;
  }
  .contact-links { display: flex; flex-direction: column; gap: 1rem; }
  .contact-link {
    display: flex; align-items: center; gap: 1rem;
    padding: 1rem 1.25rem;
    background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
    border-radius: var(--radius); text-decoration: none;
    color: #fff; font-size: 0.9rem;
    transition: background 0.2s, border-color 0.2s;
  }
  .contact-link:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2); }
  .contact-link-icon {
    width: 36px; height: 36px; border-radius: 8px;
    background: var(--accent); display: flex; align-items: center; justify-content: center;
    font-size: 0.9rem; flex-shrink: 0;
  }
  .contact-form { display: flex; flex-direction: column; gap: 1rem; }
  .contact-form input,
  .contact-form textarea {
    background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12);
    border-radius: var(--radius); padding: 0.75rem 1rem;
    color: #fff; font-family: var(--font-body); font-size: 0.9rem;
    outline: none; transition: border-color 0.2s; resize: none;
  }
  .contact-form input::placeholder,
  .contact-form textarea::placeholder { color: rgba(255,255,255,0.35); }
  .contact-form input:focus,
  .contact-form textarea:focus { border-color: var(--accent); }
  .contact-form button {
    padding: 0.8rem 1.75rem;
    background: var(--accent); color: #fff;
    border: none; border-radius: 100px;
    font-size: 0.9rem; font-weight: 500;
    cursor: pointer; align-self: flex-start;
    transition: opacity 0.2s;
  }
  .contact-form button:hover { opacity: 0.85; }

  /* FOOTER */
  footer {
    padding: 2rem;
    background: var(--ink);
    border-top: 1px solid rgba(255,255,255,0.08);
    text-align: center;
    font-size: 0.78rem; color: rgba(255,255,255,0.4);
  }
  footer a { color: rgba(255,255,255,0.6); text-decoration: none; }

  /* MOBILE */
  @media (max-width: 768px) {
    nav { padding: 0.75rem 1.25rem; }
    .nav-links { display: none; }
    .hero { padding: 7rem 1.25rem 4rem; }
    .hero-stats { gap: 2rem; }
    .about-grid { grid-template-columns: 1fr; }
    .about-image-wrap { display: none; }
    .contact-grid { grid-template-columns: 1fr; }
    section { padding: 4rem 1.25rem; }
  }

  /* SCROLL REVEAL (via Intersection Observer in JS) */
  .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
  .reveal.visible { opacity: 1; transform: none; }
</style>
</head>
<body>

<!-- NAV -->
<nav role="navigation" aria-label="Main navigation">
  <a href="#" class="nav-logo">JK<span>.</span></a>
  <ul class="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#journey">Journey</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <a href="mailto:janudakodi@gmail.com" class="nav-cta">Hire me</a>
</nav>

<!-- HERO -->
<main>
<section class="hero" id="home" aria-labelledby="hero-heading">
  <p class="hero-eyebrow">Available for opportunities</p>
  <h1 id="hero-heading">
    I build things<br>for the <em>web</em>
  </h1>
  <p class="hero-desc">Full Stack Developer from Sri Lanka. I create scalable web applications using React, Spring Boot, and modern cloud infrastructure. Currently pursuing BIT at University of Colombo.</p>
  <div class="hero-actions">
    <a href="#projects" class="btn-primary">View my work →</a>
    <a href="https://www.linkedin.com/in/januda-kodithuwakku/" target="_blank" rel="noopener" class="btn-ghost">LinkedIn ↗</a>
  </div>
  <div class="hero-stats">
    <div>
      <div class="stat-num">3+</div>
      <div class="stat-label">Years coding</div>
    </div>
    <div>
      <div class="stat-num">10+</div>
      <div class="stat-label">Technologies</div>
    </div>
    <div>
      <div class="stat-num">∞</div>
      <div class="stat-label">console.log()s</div>
    </div>
  </div>
</section>

<!-- TICKER -->
<div class="ticker-wrap" aria-hidden="true">
  <div class="ticker">
    <span class="ticker-item"><span class="ticker-dot"></span>React.js</span>
    <span class="ticker-item"><span class="ticker-dot"></span>Spring Boot</span>
    <span class="ticker-item"><span class="ticker-dot"></span>Angular</span>
    <span class="ticker-item"><span class="ticker-dot"></span>Next.js</span>
    <span class="ticker-item"><span class="ticker-dot"></span>Java</span>
    <span class="ticker-item"><span class="ticker-dot"></span>JavaScript</span>
    <span class="ticker-item"><span class="ticker-dot"></span>AWS</span>
    <span class="ticker-item"><span class="ticker-dot"></span>MongoDB</span>
    <span class="ticker-item"><span class="ticker-dot"></span>Laravel</span>
    <span class="ticker-item"><span class="ticker-dot"></span>MySQL</span>
    <span class="ticker-item"><span class="ticker-dot"></span>C#</span>
    <span class="ticker-item"><span class="ticker-dot"></span>PHP</span>
    <!-- duplicate for seamless loop -->
    <span class="ticker-item"><span class="ticker-dot"></span>React.js</span>
    <span class="ticker-item"><span class="ticker-dot"></span>Spring Boot</span>
    <span class="ticker-item"><span class="ticker-dot"></span>Angular</span>
    <span class="ticker-item"><span class="ticker-dot"></span>Next.js</span>
    <span class="ticker-item"><span class="ticker-dot"></span>Java</span>
    <span class="ticker-item"><span class="ticker-dot"></span>JavaScript</span>
    <span class="ticker-item"><span class="ticker-dot"></span>AWS</span>
    <span class="ticker-item"><span class="ticker-dot"></span>MongoDB</span>
    <span class="ticker-item"><span class="ticker-dot"></span>Laravel</span>
    <span class="ticker-item"><span class="ticker-dot"></span>MySQL</span>
    <span class="ticker-item"><span class="ticker-dot"></span>C#</span>
    <span class="ticker-item"><span class="ticker-dot"></span>PHP</span>
  </div>
</div>

<!-- ABOUT -->
<section id="about">
  <div class="container">
    <div class="about-grid">
      <div class="about-image-wrap reveal">
        <div class="about-deco"></div>
        <div class="about-image-box">
          <div class="about-avatar" aria-hidden="true">JK</div>
          <p style="font-size:0.85rem;color:var(--ink-muted);font-weight:500;">Januda Kodithuwakku</p>
          <div class="about-badge">🇱🇰 Colombo, Sri Lanka</div>
        </div>
      </div>
      <div class="about-content reveal">
        <p class="section-label">About me</p>
        <h2 class="section-title" style="font-size:2rem;margin-bottom:1rem;">Motivated. Curious.<br>Always shipping.</h2>
        <p>I'm a full stack developer with a genuine passion for clean code and intuitive interfaces. I started building for the web in 2022 and haven't stopped since.</p>
        <p>Currently pursuing my Bachelor of Information Technology at the University of Colombo, I balance academic learning with real-world project work — constantly looking for problems worth solving.</p>
        <p>I'm open to full-time software engineering roles and freelance projects where I can contribute from day one.</p>
        <div class="about-tags">
          <span class="tag">Frontend</span>
          <span class="tag">Backend</span>
          <span class="tag">Cloud</span>
          <span class="tag">Open Source</span>
          <span class="tag">Problem Solver</span>
          <span class="tag">Lifelong Learner</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SKILLS -->
<section id="skills" class="skills-bg">
  <div class="container">
    <p class="section-label reveal">What I work with</p>
    <h2 class="section-title reveal">Tech stack</h2>
    <p class="section-sub reveal">From pixel-perfect frontends to scalable APIs and cloud infrastructure.</p>
    <div class="skills-grid">
      <article class="skill-card reveal">
        <div class="skill-card-icon" aria-hidden="true">🎨</div>
        <h4>Frontend</h4>
        <div class="skill-pills">
          <span class="skill-pill">React.js</span>
          <span class="skill-pill">Next.js</span>
          <span class="skill-pill">Angular</span>
          <span class="skill-pill">JavaScript</span>
          <span class="skill-pill">HTML5</span>
          <span class="skill-pill">CSS3</span>
        </div>
      </article>
      <article class="skill-card reveal">
        <div class="skill-card-icon" aria-hidden="true">⚙️</div>
        <h4>Backend</h4>
        <div class="skill-pills">
          <span class="skill-pill">Java</span>
          <span class="skill-pill">Spring Boot</span>
          <span class="skill-pill">PHP</span>
          <span class="skill-pill">Laravel</span>
          <span class="skill-pill">C#</span>
          <span class="skill-pill">REST APIs</span>
        </div>
      </article>
      <article class="skill-card reveal">
        <div class="skill-card-icon" aria-hidden="true">🗄️</div>
        <h4>Databases</h4>
        <div class="skill-pills">
          <span class="skill-pill">MySQL</span>
          <span class="skill-pill">MongoDB</span>
        </div>
      </article>
      <article class="skill-card reveal">
        <div class="skill-card-icon" aria-hidden="true">☁️</div>
        <h4>Cloud & DevOps</h4>
        <div class="skill-pills">
          <span class="skill-pill">AWS</span>
          <span class="skill-pill">Git</span>
          <span class="skill-pill">GitHub</span>
          <span class="skill-pill">Microservices</span>
          <span class="skill-pill">DevOps</span>
        </div>
      </article>
    </div>
  </div>
</section>

<!-- PROJECTS -->
<section id="projects">
  <div class="container">
    <p class="section-label reveal">What I've built</p>
    <h2 class="section-title reveal">Featured projects</h2>
    <p class="section-sub reveal">A selection of work across web development, APIs, and mobile-first applications.</p>
    <div class="projects-grid">
      <article class="project-card reveal">
        <div class="project-thumb">
          <div class="project-thumb-bg"></div>
          <span style="position:relative;z-index:1;">🌐</span>
        </div>
        <div class="project-body">
          <p class="project-tag">React · CSS3 · GitHub Pages</p>
          <h3>Portfolio Website</h3>
          <p>Modern personal portfolio built with React.js. Fully responsive with custom animations and optimized performance scores.</p>
          <div class="project-links">
            <a href="https://kjanuda.github.io/JanudaJK.me/" target="_blank" rel="noopener" class="project-link">Live demo ↗</a>
            <a href="https://github.com/kjanuda" target="_blank" rel="noopener" class="project-link">GitHub ↗</a>
          </div>
        </div>
      </article>
      <article class="project-card reveal">
        <div class="project-thumb" style="background: #f0f9f4;">
          <div class="project-thumb-bg" style="background: linear-gradient(135deg, #d1fae5, transparent);"></div>
          <span style="position:relative;z-index:1;">🛒</span>
        </div>
        <div class="project-body">
          <p class="project-tag">Spring Boot · React · MySQL</p>
          <h3>E-Commerce Platform</h3>
          <p>Full-stack e-commerce solution with product catalog, cart management, payment integration, and admin dashboard.</p>
          <div class="project-links">
            <a href="https://github.com/kjanuda" target="_blank" rel="noopener" class="project-link">GitHub ↗</a>
          </div>
        </div>
      </article>
      <article class="project-card reveal">
        <div class="project-thumb" style="background: #fdf4ff;">
          <div class="project-thumb-bg" style="background: linear-gradient(135deg, #ede9fd, transparent);"></div>
          <span style="position:relative;z-index:1;">📱</span>
        </div>
        <div class="project-body">
          <p class="project-tag">Angular · Laravel · MongoDB</p>
          <h3>Mobile-First Web App</h3>
          <p>Cross-platform application built with a mobile-first approach. Responsive design with real-time data and offline support.</p>
          <div class="project-links">
            <a href="https://github.com/kjanuda" target="_blank" rel="noopener" class="project-link">GitHub ↗</a>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

<!-- JOURNEY -->
<section id="journey" class="skills-bg">
  <div class="container">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:4rem;">
      <div>
        <p class="section-label reveal">Background</p>
        <h2 class="section-title reveal" style="font-size:2rem;">My journey</h2>
        <p class="section-sub reveal">From A/L Mathematics to modern full stack development.</p>
        <div class="timeline reveal">
          <div class="timeline-item">
            <p class="timeline-year">2024 — Present</p>
            <p class="timeline-title">Bachelor of Information Technology</p>
            <p class="timeline-place">University of Colombo</p>
          </div>
          <div class="timeline-item">
            <p class="timeline-year">2023 — 2024</p>
            <p class="timeline-title">Software Development Bootcamp</p>
            <p class="timeline-place">SLASSCOM Future Career Bridge</p>
          </div>
          <div class="timeline-item">
            <p class="timeline-year">2022</p>
            <p class="timeline-title">Full Stack Developer Training</p>
            <p class="timeline-place">University of Moratuwa</p>
          </div>
          <div class="timeline-item">
            <p class="timeline-year">2018 — 2021</p>
            <p class="timeline-title">GCE Advanced Level — Mathematics</p>
            <p class="timeline-place">Ruhunu Vijayaba College</p>
          </div>
        </div>
      </div>
      <div>
        <p class="section-label reveal">What I'm after</p>
        <h2 class="section-title reveal" style="font-size:2rem;">Open to</h2>
        <div style="display:flex;flex-direction:column;gap:1rem;margin-top:1.5rem;">
          <div class="skill-card reveal" style="display:flex;align-items:center;gap:1rem;">
            <div class="skill-card-icon" style="margin:0;flex-shrink:0;">💼</div>
            <div>
              <h4 style="margin-bottom:0.2rem;">Full-time roles</h4>
              <p style="font-size:0.82rem;color:var(--ink-muted);">Software Engineer / Developer positions</p>
            </div>
          </div>
          <div class="skill-card reveal" style="display:flex;align-items:center;gap:1rem;">
            <div class="skill-card-icon" style="margin:0;flex-shrink:0;">🚀</div>
            <div>
              <h4 style="margin-bottom:0.2rem;">Freelance projects</h4>
              <p style="font-size:0.82rem;color:var(--ink-muted);">Web apps, APIs, and cloud solutions</p>
            </div>
          </div>
          <div class="skill-card reveal" style="display:flex;align-items:center;gap:1rem;">
            <div class="skill-card-icon" style="margin:0;flex-shrink:0;">🤝</div>
            <div>
              <h4 style="margin-bottom:0.2rem;">Open source</h4>
              <p style="font-size:0.82rem;color:var(--ink-muted);">Contributions, collaboration, mentorship</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact" class="contact-bg">
  <div class="container">
    <div class="contact-grid">
      <div>
        <p class="section-label reveal">Get in touch</p>
        <h2 class="section-title reveal">Let's work together</h2>
        <p class="section-sub reveal">I'm actively looking for new opportunities. Whether it's a job, a project, or just a chat about tech — my inbox is open.</p>
        <div class="contact-links reveal">
          <a href="mailto:janudakodi@gmail.com" class="contact-link">
            <div class="contact-link-icon" aria-hidden="true">✉️</div>
            <div>
              <div style="font-size:0.7rem;color:rgba(255,255,255,0.5);margin-bottom:2px;">Email</div>
              janudakodi@gmail.com
            </div>
          </a>
          <a href="https://www.linkedin.com/in/januda-kodithuwakku/" target="_blank" rel="noopener" class="contact-link">
            <div class="contact-link-icon" aria-hidden="true">💼</div>
            <div>
              <div style="font-size:0.7rem;color:rgba(255,255,255,0.5);margin-bottom:2px;">LinkedIn</div>
              januda-kodithuwakku
            </div>
          </a>
          <a href="https://github.com/kjanuda" target="_blank" rel="noopener" class="contact-link">
            <div class="contact-link-icon" aria-hidden="true">🐙</div>
            <div>
              <div style="font-size:0.7rem;color:rgba(255,255,255,0.5);margin-bottom:2px;">GitHub</div>
              kjanuda
            </div>
          </a>
          <a href="https://wa.me/94773007426" target="_blank" rel="noopener" class="contact-link">
            <div class="contact-link-icon" aria-hidden="true">💬</div>
            <div>
              <div style="font-size:0.7rem;color:rgba(255,255,255,0.5);margin-bottom:2px;">WhatsApp</div>
              +94 77 300 7426
            </div>
          </a>
        </div>
      </div>
      <div class="reveal">
        <form class="contact-form" onsubmit="handleForm(event)" aria-label="Contact form">
          <input type="text" name="name" placeholder="Your name" required aria-label="Your name">
          <input type="email" name="email" placeholder="your@email.com" required aria-label="Email address">
          <textarea rows="5" name="message" placeholder="Tell me about the project or role..." required aria-label="Message"></textarea>
          <button type="submit">Send message →</button>
        </form>
      </div>
    </div>
  </div>
</section>
</main>

<!-- FOOTER -->
<footer>
  <p>© 2025 Januda Kodithuwakku · Built with HTML, CSS & JS · <a href="https://kjanuda.github.io/JanudaJK.me/" target="_blank" rel="noopener">kjanuda.github.io</a></p>
</footer>

<script>
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));

  function handleForm(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.textContent = 'Message sent! ✓';
    btn.style.background = '#22c55e';
    setTimeout(() => { btn.textContent = 'Send message →'; btn.style.background = ''; e.target.reset(); }, 3000);
  }
</script>
</body>
</html>
