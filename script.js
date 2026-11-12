/* =====================================================================
   SHOP CONTENT — edit ONLY this object to reuse the site for another shop.
   Everything visible on the page (both languages) comes from here.
   See README.md for details.
   ===================================================================== */
const SHOP = {
  name: "Cut And Fade Salon",
  shortName: "Cut And Fade",
  siteUrl: "https://tanish0212.github.io/cut-and-fade-demo/",

  phoneDisplay: "04 357 6844",
  phoneHref: "tel:+97143576844",
  phoneIntl: "+97143576844",

  directionsUrl: "https://www.google.com/maps/search/?api=1&query=Cut+And+Fade+Salon+53+Al+Mussallah+Rd+Dubai",
  reviewsUrl: "https://www.google.com/maps/search/?api=1&query=Cut+And+Fade+Salon+53+Al+Mussallah+Rd+Dubai",
  mapEmbedUrl: "https://maps.google.com/maps?q=Cut%20And%20Fade%20Salon%2C%2053%20Al%20Mussallah%20Rd%2C%20Dubai&output=embed",

  // Used by structured data (search engines).
  address: {
    street: "53 Al Mussallah Rd, Al Hamriya, Al Souq Al Kabeer",
    city: "Dubai",
    country: "AE",
  },

  // Opening hours in the shop's local time (24h "HH:MM").
  // opens: null = opening time unknown -> the page shows "Open until midnight"
  // instead of a live open/closed badge. Set e.g. "10:00" once you know it.
  timeZone: "Asia/Dubai",
  hours: { opens: null, closes: "00:00" },

  rating: { value: "4.0", count: 127 },

  showDemoBanner: true,          // set to false to remove the demo banner
  credit: "Tanish",              // footer "Website by ..." credit

  // Illustration slots. To use a real photo, put it in /images and change the path.
  images: {
    hero: "images/chair.svg",
    why: "images/pole.svg",
  },

  services: [
    {
      image: "images/comb.svg",
      en: { name: "Haircuts", desc: "Men's haircuts, cut with care and finished clean.", alt: "Line illustration of a barber's comb" },
      ar: { name: "قص الشعر", desc: "قصّات شعر رجالية بعناية ولمسة نهائية نظيفة.", alt: "رسم خطي لمشط حلاقة" },
    },
    {
      image: "images/clipper.svg",
      en: { name: "Fades", desc: "Fades blended smoothly from the sides into the top.", alt: "Line illustration of hair clippers" },
      ar: { name: "الفيد", desc: "تدريج ناعم ومتّسق من الجوانب حتى الأعلى.", alt: "رسم خطي لماكينة حلاقة" },
    },
    {
      image: "images/razor.svg",
      en: { name: "Shaving", desc: "A close, careful shave for a clean finish.", alt: "Line illustration of a straight razor" },
      ar: { name: "حلاقة الذقن", desc: "حلاقة دقيقة وناعمة لمظهر نظيف.", alt: "رسم خطي لموس حلاقة" },
    },
  ],

  // Real Google reviews — shown in English in both languages.
  reviews: [
    "Very good staff and barbers, perfect cutting and shaving! You have to try Cut and Fade once.",
    "I'm a regular customer and was thoroughly impressed. The staff are excellent stylists who really know their craft. The atmosphere is inviting.",
    "Perfect haircut and nice environment!",
  ],

  text: {
    en: {
      pageTitle: "Cut And Fade Salon · Men's barbershop in Al Hamriya, Dubai",
      metaDescription: "Haircuts, fades and shaving in Al Hamriya, Dubai. Open until midnight. Call 04 357 6844.",
      skip: "Skip to content",
      demoBanner: "Demo preview – made for Cut And Fade Salon. Not the official website yet.",
      brandSub: "Men's salon · Dubai",
      langLabel: "Language",
      callNow: "Call Now",
      call: "Call",
      callAria: "Call Cut And Fade Salon on 04 357 6844",
      directions: "Get Directions",
      newTab: "(opens in a new tab)",

      heroTitle: ["Sharp cuts.", "Clean fades.", "Open till midnight."],
      heroSub: "A men's barbershop on Al Mussallah Rd in Al Hamriya, Al Souq Al Kabeer — Dubai.",
      ratingLine: "{rating} · {count} Google reviews",
      heroCaption: "53 Al Mussallah Rd",

      statusUntil: "Open until midnight",
      statusOpen: "Open now · until 12 AM",
      statusClosed: "Closed now",

      stripAria: "Quick facts",
      stripServicesLabel: "Services",
      stripHoursLabel: "Hours",
      stripHours: "Open until 12 AM",
      stripRatingLabel: "Google rating",
      stripRating: "{rating} / 5 · {count} reviews",

      servicesKicker: "Services",
      servicesTitle: "Cut. Fade. Shave.",
      servicesIntro: "Three services, kept simple. Tell the barber the look you want.",
      pricesNote: "Ask in store for prices",
      pricesSub: "Or call the shop before you come.",

      whyKicker: "Why come here",
      whyTitle: "Why people come back.",
      why: [
        { title: "Skilled barbers", text: "Customers describe the team as excellent stylists who really know their craft." },
        { title: "A relaxed place", text: "Reviews mention a nice, inviting atmosphere." },
        { title: "Open late", text: "Open until midnight, so you can come by after work." },
      ],

      ctaTitle: "Fresh cut after work? We're open until midnight.",

      reviewsKicker: "Reviews",
      reviewsTitle: "In their words.",
      outOf: "out of 5",
      basedOn: "{count} reviews on Google",
      reviewLabel: "Google review",
      readMore: "Read more on Google",

      visitKicker: "Visit us",
      visitTitle: "Find the shop.",
      addressLabel: "Address",
      addressLines: ["53 Al Mussallah Rd", "Al Hamriya, Al Souq Al Kabeer", "Dubai"],
      hoursLabel: "Hours",
      hoursValue: "Open until 12 AM (midnight)",
      phoneLabel: "Phone",
      mapTitle: "Map showing Cut And Fade Salon on Al Mussallah Rd, Dubai",

      footerTag: "Men's barbershop in Al Hamriya, Dubai.",
      footerContact: "Contact",
      credit: "Website by {credit}",
    },
    ar: {
      pageTitle: "صالون Cut And Fade · صالون حلاقة رجالي في الحمرية، دبي",
      metaDescription: "قص الشعر والفيد والحلاقة في الحمرية، دبي. مفتوح حتى منتصف الليل. اتصل على 04 357 6844.",
      skip: "انتقل إلى المحتوى",
      demoBanner: "نسخة تجريبية – صُممت خصيصًا لصالون Cut And Fade. ليست الموقع الرسمي بعد.",
      brandSub: "صالون رجالي · دبي",
      langLabel: "اللغة",
      callNow: "اتصل الآن",
      call: "اتصال",
      callAria: "اتصل بصالون Cut And Fade على 04 357 6844",
      directions: "احصل على الاتجاهات",
      newTab: "(يفتح في نافذة جديدة)",

      heroTitle: ["قصّات متقنة.", "فيد نظيف.", "مفتوح حتى منتصف الليل."],
      heroSub: "صالون حلاقة رجالي في شارع المصلى، الحمرية، السوق الكبير — دبي.",
      ratingLine: "{rating} · {count} تقييمًا على جوجل",
      heroCaption: "53 شارع المصلى",

      statusUntil: "مفتوح حتى منتصف الليل",
      statusOpen: "مفتوح الآن · حتى 12 منتصف الليل",
      statusClosed: "مغلق الآن",

      stripAria: "معلومات سريعة",
      stripServicesLabel: "الخدمات",
      stripHoursLabel: "ساعات العمل",
      stripHours: "مفتوح حتى 12 منتصف الليل",
      stripRatingLabel: "التقييم على جوجل",
      stripRating: "{rating} من 5 · {count} تقييمًا",

      servicesKicker: "الخدمات",
      servicesTitle: "قص. فيد. حلاقة.",
      servicesIntro: "ثلاث خدمات ببساطة. أخبر الحلاق بالمظهر الذي تريده.",
      pricesNote: "اسأل في المحل عن الأسعار",
      pricesSub: "أو اتصل بالمحل قبل حضورك.",

      whyKicker: "لماذا نحن",
      whyTitle: "لماذا يعود إلينا الزبائن.",
      why: [
        { title: "حلاقون محترفون", text: "يصف الزبائن فريقنا بأنهم مصففون ممتازون يتقنون عملهم." },
        { title: "أجواء مريحة", text: "يذكر الزبائن في تقييماتهم أجواءً لطيفة ومرحِّبة." },
        { title: "مفتوح حتى وقت متأخر", text: "نستقبلكم حتى منتصف الليل، فيمكنكم المرور بعد العمل." },
      ],

      ctaTitle: "تحتاج قصّة جديدة بعد العمل؟ نحن مفتوحون حتى منتصف الليل.",

      reviewsKicker: "آراء الزبائن",
      reviewsTitle: "بكلماتهم.",
      outOf: "من 5",
      basedOn: "{count} تقييمًا على جوجل",
      reviewLabel: "تقييم من جوجل",
      readMore: "اقرأ المزيد على جوجل",

      visitKicker: "زورونا",
      visitTitle: "موقع المحل.",
      addressLabel: "العنوان",
      addressLines: ["53 شارع المصلى", "الحمرية، السوق الكبير", "دبي"],
      hoursLabel: "ساعات العمل",
      hoursValue: "مفتوح حتى 12 منتصف الليل",
      phoneLabel: "الهاتف",
      mapTitle: "خريطة توضح موقع صالون Cut And Fade في شارع المصلى، دبي",

      footerTag: "صالون حلاقة رجالي في الحمرية، دبي.",
      footerContact: "تواصل معنا",
      credit: "تصميم الموقع: {credit}",
    },
  },
};

/* =====================================================================
   SITE LOGIC — no need to edit below this line.
   ===================================================================== */
(function () {
  "use strict";

  const LANG_KEY = "site-lang";
  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let lang = "en";

  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "en" || saved === "ar") lang = saved;
  } catch (e) { /* storage unavailable — default to English */ }

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const t = () => SHOP.text[lang];

  function fmt(str) {
    return String(str)
      .replace(/\{rating\}/g, SHOP.rating.value)
      .replace(/\{count\}/g, SHOP.rating.count)
      .replace(/\{credit\}/g, SHOP.credit)
      .replace(/\{name\}/g, SHOP.name);
  }

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      for (const [k, v] of Object.entries(attrs)) {
        if (v === null || v === undefined || v === false) continue;
        if (k === "class") node.className = v;
        else if (k === "text") node.textContent = v;
        else node.setAttribute(k, v === true ? "" : v);
      }
    }
    (children || []).forEach((c) => node.append(c));
    return node;
  }

  /* Small hand-drawn icons (stroke only, inherit currentColor). */
  const ICONS = {
    phone: '<path d="M6.6 3.5h2.6l1.5 4.2-2 1.4a10.6 10.6 0 0 0 6.2 6.2l1.4-2 4.2 1.5v2.6a1.9 1.9 0 0 1-2 1.9A16.2 16.2 0 0 1 4.7 5.5a1.9 1.9 0 0 1 1.9-2Z"/>',
    pin: '<path d="M12 21s-6.5-5.8-6.5-11a6.5 6.5 0 0 1 13 0c0 5.2-6.5 11-6.5 11Z"/><circle cx="12" cy="10" r="2.3"/>',
    arrow: '<path d="M4.5 12h15M14 6.5l5.5 5.5-5.5 5.5"/>',
  };
  function icon(name, cls) {
    const span = document.createElement("span");
    span.className = "icon" + (cls ? " " + cls : "");
    span.setAttribute("aria-hidden", "true");
    span.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + ICONS[name] + "</svg>";
    return span;
  }

  function stars(value) {
    const wrap = el("span", { class: "stars", "aria-hidden": "true" });
    const full = Math.round(parseFloat(value));
    for (let i = 0; i < 5; i++) {
      wrap.insertAdjacentHTML("beforeend",
        '<svg viewBox="0 0 20 20" width="16" height="16"><path d="M10 1.8l2.5 5.3 5.8.7-4.3 4 1.1 5.7L10 14.7l-5.1 2.8L6 11.8 1.7 7.8l5.8-.7Z" ' +
        (i < full ? 'fill="currentColor"' : 'fill="none" stroke="currentColor" stroke-width="1.3"') + "/></svg>");
    }
    return wrap;
  }

  const ltr = (text) => el("span", { dir: "ltr", class: "ltr", text });

  /* ---------- Open / closed badge (Dubai time) ---------- */
  const toMin = (hhmm) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };

  function nowMinutesInShopTZ() {
    const parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: SHOP.timeZone, hour: "2-digit", minute: "2-digit", hourCycle: "h23",
    }).formatToParts(new Date());
    const get = (type) => Number(parts.find((p) => p.type === type).value);
    return get("hour") * 60 + get("minute");
  }

  function shopStatus() {
    if (!SHOP.hours.opens) return "until";
    const open = toMin(SHOP.hours.opens);
    let close = toMin(SHOP.hours.closes);
    if (close <= open) close += 1440;           // closes after midnight
    const now = nowMinutesInShopTZ();
    const isOpen = (now >= open && now < close) || (now + 1440 >= open && now + 1440 < close);
    return isOpen ? "open" : "closed";
  }

  function renderStatus() {
    const status = shopStatus();
    const key = { until: "statusUntil", open: "statusOpen", closed: "statusClosed" }[status];
    $$(".js-status").forEach((node) => {
      node.dataset.state = status;
      $(".status-text", node).textContent = t()[key];
    });
  }

  /* ---------- Render ---------- */
  function renderText() {
    const tx = t();
    $$("[data-t]").forEach((node) => { node.textContent = fmt(tx[node.dataset.t]); });
    $$("[data-shop]").forEach((node) => { node.textContent = SHOP[node.dataset.shop]; });
    $$("[data-t-aria]").forEach((node) => { node.setAttribute("aria-label", fmt(tx[node.dataset.tAria])); });

    $$(".js-tel").forEach((a) => { a.href = SHOP.phoneHref; });
    $$(".js-dir").forEach((a) => { a.href = SHOP.directionsUrl; a.target = "_blank"; a.rel = "noopener"; });
    $$(".js-reviews").forEach((a) => { a.href = SHOP.reviewsUrl; a.target = "_blank"; a.rel = "noopener"; });
    $$(".js-newtab").forEach((n) => { n.textContent = " " + tx.newTab; });
    $$(".js-phone").forEach((n) => { n.replaceChildren(ltr(SHOP.phoneDisplay)); });

    document.title = tx.pageTitle;
    const md = $('meta[name="description"]');
    if (md) md.setAttribute("content", tx.metaDescription);

    const banner = $(".demo-banner");
    if (banner) banner.hidden = !SHOP.showDemoBanner;

    // Hero headline: one line per entry, last line in the accent colour.
    const h1 = $(".js-hero-title");
    h1.replaceChildren(...tx.heroTitle.map((line, i) =>
      el("span", { class: "line" + (i === tx.heroTitle.length - 1 ? " accent" : ""), style: "--i:" + i, text: line + " " })));

    // Rating line(s)
    $$(".js-rating").forEach((a) => {
      a.replaceChildren(stars(SHOP.rating.value), el("span", { text: fmt(tx.ratingLine) }));
    });
    $$(".js-stars").forEach((n) => n.replaceChildren(stars(SHOP.rating.value)));
    $$(".js-score").forEach((n) => { n.textContent = SHOP.rating.value; });

    // Strip: service names
    $(".js-strip-services").textContent = SHOP.services.map((s) => s[lang].name).join(" · ");

    // Images
    const heroImg = $(".js-hero-img");
    heroImg.src = SHOP.images.hero;
    heroImg.alt = lang === "ar" ? "رسم خطي لكرسي حلاقة" : "Line illustration of a barber's chair";
    const whyImg = $(".js-why-img");
    whyImg.src = SHOP.images.why;
    whyImg.alt = lang === "ar" ? "رسم خطي لعمود الحلاقة" : "Line illustration of a barber's pole";

    // Services
    const other = lang === "ar" ? "en" : "ar";
    $(".js-services").replaceChildren(...SHOP.services.map((s, i) => el("li", { class: "service reveal", style: "--d:" + i * 90 + "ms" }, [
      el("div", { class: "media service-media" }, [
        el("img", { src: s.image, alt: s[lang].alt, width: 480, height: 600, loading: "lazy", decoding: "async" }),
      ]),
      el("div", { class: "service-body" }, [
        el("span", { class: "service-num", text: String(i + 1).padStart(2, "0") }),
        el("h3", { class: "service-name", text: s[lang].name }),
        el("p", { class: "service-alt", lang: other, text: s[other].name }),
        el("p", { class: "service-desc", text: s[lang].desc }),
      ]),
    ])));

    // Why points
    $(".js-why").replaceChildren(...tx.why.map((w, i) => el("li", { class: "why-item reveal", style: "--d:" + i * 90 + "ms" }, [
      el("span", { class: "why-num", "aria-hidden": "true", text: String(i + 1).padStart(2, "0") }),
      el("div", null, [el("h3", { text: w.title }), el("p", { text: w.text })]),
    ])));

    // Reviews (kept in English — real quotes)
    $(".js-reviews-list").replaceChildren(...SHOP.reviews.map((r, i) => el("li", { class: "review reveal", style: "--d:" + i * 90 + "ms" }, [
      el("figure", null, [
        quoteMark(),
        el("blockquote", { lang: "en", dir: "ltr" }, [el("p", { text: "“" + r + "”" })]),
        el("figcaption", { text: tx.reviewLabel }),
      ]),
    ])));

    // Address
    $$(".js-address").forEach((n) => n.replaceChildren(...tx.addressLines.map((l) => el("span", { text: l }))));

    // Map
    const map = $(".js-map");
    if (!map.getAttribute("src")) map.setAttribute("src", SHOP.mapEmbedUrl);
    map.title = tx.mapTitle;

    $(".js-year").textContent = new Date().getFullYear();

    // Language toggle state
    $$("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));

    renderStatus();
    observeReveals();
  }

  function quoteMark() {
    const s = el("span", { class: "quote-mark", "aria-hidden": "true" });
    s.innerHTML = '<svg viewBox="0 0 48 36" width="40" height="30"><path fill="currentColor" d="M0 36V22.4C0 9.6 6.2 2.2 18.6 0l2 4.6C13.8 6.6 10.6 10.4 10.2 16H19v20Zm27 0V22.4C27 9.6 33.2 2.2 45.6 0l2 4.6C40.8 6.6 37.6 10.4 37.2 16H46v20Z"/></svg>';
    return s;
  }

  function applyLang(next, persist) {
    lang = next;
    root.lang = next;
    root.dir = next === "ar" ? "rtl" : "ltr";
    renderText();
    if (persist) { try { localStorage.setItem(LANG_KEY, next); } catch (e) { /* ignore */ } }
  }

  /* ---------- Structured data (built from SHOP) ---------- */
  function addJsonLd() {
    const data = {
      "@context": "https://schema.org",
      "@type": "HairSalon",
      name: SHOP.name,
      url: SHOP.siteUrl,
      image: SHOP.siteUrl + "images/og-image.png",
      logo: SHOP.siteUrl + "images/logo.svg",
      telephone: SHOP.phoneIntl,
      address: {
        "@type": "PostalAddress",
        streetAddress: SHOP.address.street,
        addressLocality: SHOP.address.city,
        addressCountry: SHOP.address.country,
      },
      hasMap: SHOP.directionsUrl,
      aggregateRating: { "@type": "AggregateRating", ratingValue: SHOP.rating.value, bestRating: "5", reviewCount: String(SHOP.rating.count) },
      makesOffer: SHOP.services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.en.name } })),
    };
    document.head.append(el("script", { type: "application/ld+json", text: JSON.stringify(data) }));
  }

  /* ---------- Motion: reveal on scroll ---------- */
  let io = null;
  function observeReveals() {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      $$(".reveal").forEach((n) => n.classList.add("is-in"));
      return;
    }
    if (!io) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    }
    $$(".reveal:not(.is-in)").forEach((n) => io.observe(n));
  }

  /* ---------- Sticky header compacts on scroll ---------- */
  const header = $(".site-header");
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { header.classList.toggle("is-compact", window.scrollY > 24); ticking = false; });
  }

  /* ---------- Init ---------- */
  if (!reduceMotion) root.classList.add("motion");
  applyLang(lang, false);
  addJsonLd();
  $$("[data-lang]").forEach((b) => b.addEventListener("click", () => { if (b.dataset.lang !== lang) applyLang(b.dataset.lang, true); }));
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  setInterval(renderStatus, 60 * 1000);
})();
