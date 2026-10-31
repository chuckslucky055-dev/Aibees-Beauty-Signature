import './styles.css';

const services = [
  {
    icon: '✦',
    title: 'Makeup',
    text: 'Soft glam, event-ready looks and personalised beauty styling.',
  },
  {
    icon: '♡',
    title: 'Bridal Hair',
    text: 'Elegant bridal hairstyling designed around your wedding-day vision.',
  },
  {
    icon: '◌',
    title: 'Wigs',
    text: 'Wig making and curated hair pieces for everyday and special occasions.',
  },
  {
    icon: '✿',
    title: 'Beauty Essentials',
    text: 'Skincare, fragrance and selected beauty essentials.',
  },
  {
    icon: '⌁',
    title: 'Beauty Training',
    text: 'Practical beauty training for people ready to build their skills.',
  },
];

const app = document.querySelector<HTMLDivElement>('#app');
if (!app) throw new Error('App root not found');

app.innerHTML = `
  <header class="site-header">
    <a class="brand" href="#home" aria-label="Aibees Beauty Signature home">
      <span class="brand-mark">A</span>
      <span><strong>AIBEES</strong><small>BEAUTY SIGNATURE</small></span>
    </a>
    <nav class="desktop-nav" aria-label="Primary navigation">
      <a href="#services">Services</a><a href="#about">About</a><a href="#lookbook">Lookbook</a><a href="#training">Training</a>
    </nav>
    <a class="header-cta" href="#booking">Book now <span>↗</span></a>
  </header>

  <main>
    <section class="hero" id="home">
      <div class="hero-copy">
        <p class="eyebrow">BEAUTY • BRIDAL • WIGS</p>
        <h1>Your beauty,<br><em>your signature.</em></h1>
        <p class="hero-text">Makeup, bridal hair, wigs and beauty essentials crafted to make every look feel unmistakably yours.</p>
        <div class="hero-actions">
          <a class="button button-dark" href="#booking">Book an appointment <span>→</span></a>
          <a class="text-link" href="#services">Explore services</a>
        </div>
        <div class="hero-note"><span class="dot"></span><span>Yenagoa, Bayelsa State</span></div>
      </div>
      <div class="hero-art" aria-label="Beauty studio visual">
        <div class="art-orb orb-one"></div><div class="art-orb orb-two"></div>
        <div class="portrait-card">
          <div class="portrait-glow"></div>
          <div class="portrait-silhouette"><span></span></div>
          <div class="portrait-caption"><small>THE AIBEES LOOK</small><strong>Effortless. Polished. You.</strong></div>
        </div>
        <div class="floating-card"><span>✦</span><strong>Signature<br>beauty</strong></div>
      </div>
    </section>

    <section class="intro section" id="about">
      <div class="section-label">01 / THE STUDIO</div>
      <div>
        <p class="display-copy">A beauty destination for the moments you want to <em>remember.</em></p>
        <p class="muted-copy">Aibees Beauty Signature brings together beauty services, wigs, skincare and fragrance, plus beauty training — all under one signature experience.</p>
      </div>
    </section>

    <section class="services section" id="services">
      <div class="section-head"><div><p class="eyebrow">WHAT WE DO</p><h2>Beauty, <em>beautifully</em> done.</h2></div><span class="section-count">05 SERVICES</span></div>
      <div class="service-grid">
        ${services.map((s, i) => `<article class="service-card"><span class="service-number">0${i + 1}</span><div class="service-icon">${s.icon}</div><h3>${s.title}</h3><p>${s.text}</p><a href="#booking">Enquire <span>↗</span></a></article>`).join('')}
      </div>
    </section>

    <section class="lookbook section" id="lookbook">
      <div class="section-head"><div><p class="eyebrow">THE LOOKBOOK</p><h2>Find your <em>signature.</em></h2></div><p class="muted-copy compact">A visual direction for the Aibees experience. Client photos and work samples can be added here.</p></div>
      <div class="look-grid">
        <div class="look-card look-tall"><div class="look-overlay"><span>01</span><strong>Soft Glam</strong><small>MAKEUP</small></div></div>
        <div class="look-card look-wide"><div class="look-overlay"><span>02</span><strong>Bridal Elegance</strong><small>BRIDAL HAIR</small></div></div>
        <div class="look-card look-square"><div class="look-overlay"><span>03</span><strong>Signature Wigs</strong><small>HAIR</small></div></div>
        <div class="look-card look-square look-skin"><div class="look-overlay"><span>04</span><strong>Glow Ritual</strong><small>BEAUTY ESSENTIALS</small></div></div>
      </div>
    </section>

    <section class="training section" id="training">
      <div class="training-panel">
        <div><p class="eyebrow">AIBEES BEAUTY ACADEMY</p><h2>Turn your talent into a <em>skill.</em></h2></div>
        <div><p>Interested in learning beauty techniques? Ask about available training programmes, course details and registration.</p><a class="button button-light" href="#booking">Ask about training <span>→</span></a></div>
      </div>
    </section>

    <section class="booking section" id="booking">
      <div class="booking-copy"><p class="eyebrow">READY WHEN YOU ARE</p><h2>Let's create your <em>look.</em></h2><p>For appointments, wigs, beauty essentials or training enquiries, reach out directly.</p></div>
      <div class="contact-panel">
        <div class="contact-row"><span>CALL / WHATSAPP</span><a href="https://wa.me/2348165755153?text=Hello%20Aibees%20Beauty%20Signature%2C%20I%27d%20like%20to%20make%20an%20enquiry.">0816 575 5153 ↗</a></div>
        <div class="contact-row"><span>EMAIL</span><a href="mailto:abigailigbosi@gmail.com">abigailigbosi@gmail.com ↗</a></div>
        <div class="contact-row"><span>LOCATION</span><strong>Amarata / Ebis area, Yenagoa, Bayelsa</strong></div>
        <p class="contact-note">Contact and location details shown here should be confirmed by the business before the site goes live.</p>
      </div>
    </section>
  </main>

  <footer><div class="brand"><span class="brand-mark">A</span><span><strong>AIBEES</strong><small>BEAUTY SIGNATURE</small></span></div><p>© 2026 Aibees Beauty Signature · Yenagoa, Nigeria</p><a href="#home">Back to top ↑</a></footer>
`;
