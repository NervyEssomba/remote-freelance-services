/* ================================
   TRADUCTION FR / EN
================================ */
const texts = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_skills: "Skills",
    nav_portfolio: "Portfolio",
    nav_video: "Video",
    nav_cv: "CV",
    nav_testimonials: "Testimonials",
    nav_contact: "Contact",

    hero_title_fr: "Professional French-speaking customer support — responsive & human.",
    hero_sub_fr: "I manage your tickets (email, WhatsApp, chat), e-commerce orders and daily admin — Zendesk & HubSpot experienced.",
    cta_services: "See services",
    pill_bilingual: "English (functional)",

    about_title: "About",
    about_text: "Hello — I'm Nervy Essomba, a customer support specialist and virtual assistant. I help e-commerce shops and SMEs improve customer experience, reduce response time and increase loyalty. I use Zendesk, HubSpot and WhatsApp Business.",  
    about_note: "Available immediately. Rates adaptable with volume.",

    services_title: "Services",
    svc1_title: "Multichannel Customer Support",
    svc1_text: "Ticket handling (email, chat, WhatsApp), order follow-up, complaints and refunds.",
    svc2_title: "Virtual Assistance (VA)",
    svc2_text: "Calendar management, data entry & reporting, vendor coordination, admin tasks.",
    svc3_title: "Data Entry & Reporting",
    svc3_text: "Accurate data entry, cleaning and reporting in Excel / Google Sheets.",
    svc4_title: "E-commerce Support",
    svc4_text: "Order processing, tracking, returns and customer communication for Shopify / WooCommerce.",
    svc5_title: "CRM & Setup",
    svc5_text: "Basic setup for Zendesk / HubSpot, customer segmentation and ticket workflows.",

    skills_title: "Key Skills",
    skills_tools: "Tools & Tech",
    skills_tools_text: "Zendesk, HubSpot, WhatsApp Business, Shopify, Google Sheets, Excel, MailerLite / Mailerist",
    skills_languages: "Languages & Communication",
    skills_languages_text: "French (native) — English (functional)",
    skills_soft: "Soft Skills",
    skills_soft_text: "Customer empathy, patience, prioritization, problem solving, adaptability",
    skills_perf: "Performance",
    skills_perf_text: "KPI reporting, SLA management, response time optimization",

    portfolio_title: "Portfolio — Examples & Screenshots",
    portfolio_note: "Anonymized screenshots of dashboards and solved tickets.",

    video_title: "Presentation video",
    video_note: "Short introduction video.",

    cv_title: "CV & Certifications",

    test_title: "Client feedback",
    test1: "\"Professional, responsive, solution-oriented. Excellent communication.\" — E-commerce client",
    test2: "\"Handled entire customer relationship with rigor and empathy.\" — Store manager",

    contact_title: "Contact & Networks",
    contact_note: "Share channel, estimated volume and access details; reply within 24h."
  },
  fr: {} // FR déjà présent dans le HTML
};

let curLang = "fr";
const langBtn = document.getElementById("langBtn");

function updateLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (lang === "en" && texts.en[key]) {
      el.textContent = texts.en[key];
    } else if (lang === "fr") {
      el.textContent = el.getAttribute("data-default") || el.textContent;
    }
  });
}

// Init valeurs FR par défaut
document.querySelectorAll("[data-i18n]").forEach(el => {
  if (!el.getAttribute("data-default")) {
    el.setAttribute("data-default", el.textContent);
  }
});

// Switch FR/EN
if (langBtn) {
  langBtn.addEventListener("click", () => {
    curLang = curLang === "fr" ? "en" : "fr";
    langBtn.textContent = curLang === "fr" ? "EN" : "FR";
    updateLanguage(curLang);
  });
}

/* ================================
   SCROLL FLUIDE AVEC OFFSET
================================ */
document.querySelectorAll("nav.top-nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const headerHeight = document.querySelector("header.site-header").offsetHeight;
      const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  });
});

/* ================================
   PORTFOLIO : LIGHTBOX
================================ */
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

lightbox.style.position = "fixed";
lightbox.style.top = "0";
lightbox.style.left = "0";
lightbox.style.width = "100%";
lightbox.style.height = "100%";
lightbox.style.background = "rgba(0,0,0,0.9)";
lightbox.style.display = "none";
lightbox.style.justifyContent = "center";
lightbox.style.alignItems = "center";
lightbox.style.zIndex = "2000";

const lightboxImg = document.createElement("img");
lightboxImg.style.maxWidth = "90%";
lightboxImg.style.maxHeight = "90%";
lightbox.appendChild(lightboxImg);

// Clique image = ouvrir
document.querySelectorAll(".portfolio-gallery img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

// Clique lightbox = fermer
lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});