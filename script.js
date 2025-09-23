// ========== LANGUE FR/EN DYNAMIQUE ==========
const texts = {
  en: {
    nav_home:"Home", nav_about:"About", nav_services:"Services", nav_skills:"Skills",
    nav_portfolio:"Portfolio", nav_video:"Video", nav_cv:"CV", nav_contact:"Contact",
    hero_title_fr:"Professional French-speaking customer support — responsive & human.",
    hero_sub_fr:"I manage your tickets (email, WhatsApp, chat), e-commerce orders and daily admin — Zendesk & HubSpot experienced.",
    cta_services:"See services",
    hero_note:"Available for freelance missions (remote) or part-time / full-time roles.",
    pill_bilingual:"English (functional)",
    about_title:"About",
    about_text:"Hello — I'm Nervy Essomba, a customer support specialist and virtual assistant. I help e-commerce shops and SMEs improve customer experience, reduce response time and increase loyalty. I use Zendesk, HubSpot and WhatsApp Business.",
    about_note:"Available immediately. Rates adaptable with volume.",
    services_title:"Services",
    svc1_title:"Multichannel Customer Support",
    svc1_text:"Ticket handling (email, chat, WhatsApp), order follow-up, complaints and refunds.",
    svc2_title:"Virtual Assistance (VA)",
    svc2_text:"Calendar management, data entry & reporting, vendor coordination, admin tasks.",
    svc3_title:"Data Entry & Reporting",
    svc3_text:"Accurate data entry, cleaning and reporting in Excel / Google Sheets.",
    svc4_title:"E-commerce Support",
    svc4_text:"Order processing, tracking, returns and customer communication for Shopify / WooCommerce.",
    svc5_title:"CRM & Setup",
    svc5_text:"Basic setup for Zendesk / HubSpot, customer segmentation and ticket workflows.",
    skills_title:"Key Skills",
    portfolio_title:"Portfolio — Examples & Screenshots",
    portfolio_note:"Anonymized screenshots of dashboards and solved tickets.",
    video_title:"Presentation Video",
    video_note:"Watch a short 30–60s intro.",
    cv_title:"CV & Certifications",
    test_title:"Client feedback",
    contact_title:"Contact & Networks",
    contact_note:"Share channel, estimated volume and access details; reply within 24h."
  },
  fr: {} // FR = texte déjà dans le HTML
};

let curLang = 'fr';
const langBtn = document.getElementById('langBtn');

function updateLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(lang==='en' && texts.en[key]) el.textContent = texts.en[key];
    else if(lang==='fr') el.textContent = el.getAttribute('data-default') || el.textContent;
  });
}

langBtn.addEventListener('click', ()=>{
  curLang = curLang === 'fr' ? 'en' : 'fr';
  langBtn.textContent = curLang === 'fr' ? 'EN' : 'FR';
  updateLanguage(curLang);
});

// On ajoute un attribut data-default pour conserver le texte FR
document.querySelectorAll('[data-i18n]').forEach(el=>{
  if(!el.getAttribute('data-default')) el.setAttribute('data-default', el.textContent);
});