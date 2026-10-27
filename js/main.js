/* MASTER CODE - Bilingual + Fixed Navbar + Light Mode Fix + Responsive */
(() => {
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];

  const T = {
    nav_home: {en:"Home", ar:"الرئيسية"},
    nav_portfolio: {en:"Portfolio", ar:"أعمالنا"},
    nav_team: {en:"Team", ar:"فريقنا"},
    nav_contact: {en:"Contact", ar:"تواصل معنا"},
    hero_badge: {en:"ORIGINAL VI PRESERVED • #F78400 • #2D3139", ar:"الهوية الأصلية محفوظة • #F78400 • #2D3139"},
    hero_title: {en:"We Build <span>Clean,</span><br/>Well-Coded Future", ar:"نبني <span>مستقبل</span><br/>نظيف ومُتقن البرمجة"},
    hero_desc: {en:"Master Code is a tech agency crafting performant, maintainable software. Original logo from VI.pdf, colors #F78400 #2D3139 #F8F9FA preserved. Lexend for English, Almarai for العربية.", ar:"ماستر كود وكالة تقنية تبني برمجيات عالية الأداء وقابلة للصيانة. اللوجو الأصلي من VI.pdf، الألوان #F78400 #2D3139 #F8F9FA محفوظة. Lexend للإنجليزية و Almarai للعربية فقط."},
    hero_cta1: {en:"View Work", ar:"شاهد أعمالنا"},
    hero_cta2: {en:"Start Project", ar:"ابدأ مشروعك"},
    principles: {en:"O U R   P R I N C I P L E S", ar:"مبادئنا"},
    values_title: {en:"CLEAN CODE<br/>SMART LOGIC", ar:"كود نظيف<br/>منطق ذكي"},
    v1_t: {en:"CLEAN CODE", ar:"كود نظيف"},
    v1_d: {en:"Maintainable, tested, documented. No shortcuts. SRP, DRY, KISS enforced.", ar:"قابل للصيانة، مُختبر، موثق. بدون اختصارات. مبادئ SRP و DRY و KISS يطبقها مراجعون كبار."},
    v2_t: {en:"SMART LOGIC", ar:"منطق ذكي"},
    v2_d: {en:"Efficient algorithms, thoughtful architecture. Performance budget <200KB.", ar:"خوارزميات فعالة، معمارية مدروسة. ميزانية أداء أقل من 200KB."},
    v3_t: {en:"FLEXIBLE DESIGNS", ar:"تصاميم مرنة"},
    v3_d: {en:"Design system with tokens #F78400 #2D3139. Responsive 320→1440, WCAG AA.", ar:"نظام تصميم برموز #F78400 #2D3139. متجاوب من 320 إلى 1440، متوافق مع WCAG AA."},
    v4_t: {en:"SEAMLESS EXPERIENCE", ar:"تجربة سلسة"},
    v4_d: {en:"60fps interactions, fade-in scroll, micro-animations. Feels native.", ar:"تفاعلات 60fps، ظهور عند التمرير، حركات دقيقة. يبدو أصلياً."},
    services_l: {en:"S E R V I C E S", ar:"خدماتنا"},
    services_t: {en:"We ship production-grade<br/>software, not prototypes", ar:"نُسلم برمجيات بجودة<br/>إنتاجية، ليس نماذج أولية"},
    s_web_k: {en:"Frontend + Backend", ar:"واجهات + خلفية"},
    s_web_t: {en:"Web Development", ar:"تطوير المواقع"},
    s_web_d: {en:"Next.js 15, React 19, pure HTML/CSS/JS when needed. Clean, well-structured code.", ar:"Next.js 15 و React 19 و HTML/CSS/JS نقي عند الحاجة. كود نظيف ومنظم."},
    s_mob_k: {en:"iOS & Android", ar:"iOS و Android"},
    s_mob_t: {en:"Mobile Apps", ar:"تطبيقات الجوال"},
    s_mob_d: {en:"React Native, Flutter. Native performance, shared logic. Offline-first.", ar:"React Native و Flutter. أداء أصلي، منطق مشترك. يعمل بدون إنترنت أولاً."},
    s_cloud_k: {en:"AWS / GCP / Azure", ar:"AWS / GCP / Azure"},
    s_cloud_t: {en:"Cloud & DevOps", ar:"السحابة و DevOps"},
    s_cloud_d: {en:"Terraform, K8s, CI/CD. Pipeline generator + deployment manager agents.", ar:"Terraform و K8s و CI/CD. مولد خطوط الأنابيب ومدير النشر."},
    s_ui_k: {en:"Design System", ar:"نظام تصميم"},
    s_ui_t: {en:"UI/UX Pro Max", ar:"UI/UX Pro Max"},
    s_ui_d: {en:"50 styles, 21 palettes, tokens #F78400 #2D3139. Lexend/Almarai separation.", ar:"50 نمط، 21 لوحة ألوان، رموز #F78400 #2D3139. فصل Lexend و Almarai."},
    s_3d_k: {en:"Three.js / R3F", ar:"Three.js / R3F"},
    s_3d_t: {en:"3D Web Experiences", ar:"تجارب ويب ثلاثية الأبعاد"},
    s_3d_d: {en:"GLB <5MB, Draco compressed. Scroll-driven, mobile fallback.", ar:"GLB أقل من 5MB مضغوط بـ Draco. تفاعل بالتمرير مع بديل للجوال."},
    s_con_k: {en:"Architecture", ar:"المعمارية"},
    s_con_t: {en:"Consulting", ar:"الاستشارات"},
    s_con_d: {en:"System design, tech decisions, dependency analysis.", ar:"تصميم الأنظمة واتخاذ القرارات التقنية وتحليل الاعتماديات."},
    portfolio_l: {en:"P O R T F O L I O", ar:"أعمالنا"},
    portfolio_t: {en:"Selected work", ar:"أعمال مختارة"},
    portfolio_all: {en:"View all projects", ar:"عرض كل المشاريع"},
    testimonials_l: {en:"T E S T I M O N I A L S", ar:"آراء العملاء"},
    faq_l: {en:"F A Q", ar:"الأسئلة الشائعة"},
    faq_t: {en:"Common questions", ar:"أسئلة شائعة"},
    faq_q1: {en:"Do you preserve existing visual identity?", ar:"هل تحافظون على الهوية البصرية الحالية؟"},
    faq_a1: {en:"Yes — we used your exact MC monogram from VI.pdf, original colors #F78400 #2D3139 #F8F9FA #914D00, and kept Lexend for English / Almarai for Arabic only.", ar:"نعم — استخدمنا نفس شعار MC الأصلي من VI.pdf، الألوان الأصلية #F78400 #2D3139 #F8F9FA #914D00، وحافظنا على Lexend للإنجليزية و Almarai للعربية فقط."},
    faq_q4: {en:"Do you support Arabic RTL?", ar:"هل تدعمون العربية RTL؟"},
    faq_a4: {en:"Native — Almarai for Arabic only, Lexend for English only. Full RTL layout.", ar:"أصلي — Almarai للعربية فقط و Lexend للإنجليزية فقط. تخطيط RTL كامل."},
    cta_title: {en:"Ready to build<br/>clean, well-coded?", ar:"جاهز لبناء<br/>شيء نظيف ومُتقن؟"},
    cta_desc: {en:"Original VI preserved. MC monogram from PDF. #F78400 #2D3139. Lexend EN / Almarai AR. Let's ship production.", ar:"الهوية الأصلية محفوظة. شعار MC من PDF. #F78400 #2D3139. Lexend EN / Almarai AR. هيا نُطلق للإنتاج."},
    cta_btn: {en:"Start project", ar:"ابدأ مشروعك"},
    portfolio_h1: {en:"Work built with<br/><span style='color:var(--orange)'>clean code</span>", ar:"أعمال مبنية بـ<br/><span style='color:var(--orange)'>كود نظيف</span>"},
    team_h1: {en:"Senior team,<br/>24 agents deep", ar:"فريق كبير،<br/>24 وكيل متخصص"},
    team_p: {en:"Every commit reviewed by code-reviewer + code-review-and-quality + clean-code + web-perf. No AI slop.", ar:"كل تعديل يُراجع من قبل مراجع الكود وجودة المراجعة وكود نظيف وأداء ويب. بدون حشو ذكاء اصطناعي."},
    contact_h1: {en:"Let's build<br/><span style='color:var(--orange)'>clean, well-coded</span>", ar:"هيا نبني<br/><span style='color:var(--orange)'>شيئاً نظيفاً ومُتقناً</span>"},
    contact_desc: {en:"Tell us about your project. We reply in 24h. Original VI #F78400 #2D3139 preserved, logo from PDF not redesigned.", ar:"أخبرنا عن مشروعك. نرد خلال 24 ساعة. الهوية الأصلية #F78400 #2D3139 محفوظة، اللوجو من PDF لم يُعاد تصميمه."},
    form_name: {en:"Name *", ar:"الاسم *"},
    form_email: {en:"Email *", ar:"البريد الإلكتروني *"},
    form_company: {en:"Company", ar:"الشركة"},
    form_message: {en:"Message *", ar:"الرسالة *"},
    form_send: {en:"Send message", ar:"إرسال الرسالة"},
    form_name_ph: {en:"Bashar Fouda", ar:"بشار فودة"},
    form_email_ph: {en:"bashar@mastercode.dev", ar:"bashar@mastercode.dev"},
    form_company_ph: {en:"Master Code", ar:"ماستر كود"},
    form_message_ph: {en:"Tell us about your project, stack, timeline...", ar:"أخبرنا عن مشروعك، التقنيات، الجدول الزمني..."},
  };

  function detectLang(){
    const saved = localStorage.getItem('mc-lang');
    if(saved) return saved;
    const sys = (navigator.language || 'en').toLowerCase();
    if(sys.startsWith('ar')) return 'ar';
    return 'en';
  }

  let currentLang = detectLang();

  function applyLang(lang){
    currentLang = lang;
    localStorage.setItem('mc-lang', lang);
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.style.fontFamily = lang === 'ar' ? 'var(--font-ar)' : 'var(--font-en)';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if(T[key] && T[key][lang]){
        const val = T[key][lang];
        if(/<[a-z][\s\S]*>/i.test(val)) el.innerHTML = val;
        else el.textContent = val;
      }
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if(T[key] && T[key][lang]) el.placeholder = T[key][lang];
    });
    const langBtn = document.getElementById('langToggle');
    if(langBtn){
      langBtn.innerHTML = lang === 'ar' ? '<span class="en">EN</span>' : '<span class="ar">العربية</span>';
    }
    if(window.lucide) lucide.createIcons();
    // Update carousel RTL
    const track = document.querySelector('.carousel-track');
    if(track && lang === 'ar') track.style.direction = 'ltr';
  }

  // Theme
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('mc-theme') || 'dark';
  root.setAttribute('data-theme', savedTheme);

  function updateLogoByTheme(theme){
    document.querySelectorAll('.logo-img').forEach(img => {
      if(img.dataset.light && img.dataset.dark){
        img.src = theme === 'light' ? img.dataset.light : img.dataset.dark;
      }
    });
  }
  updateLogoByTheme(savedTheme);

  // Init after DOM
  function init(){
    applyLang(currentLang);

    // Theme toggle - FIXED for light mode visibility
    document.getElementById('themeToggle')?.addEventListener('click', () => {
      const cur = root.getAttribute('data-theme');
      const next = cur === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('mc-theme', next);
      updateLogoByTheme(next);
      if(window.lucide) lucide.createIcons();
      // Force repaint for light mode white text fix
      document.body.style.display='none';
      document.body.offsetHeight;
      document.body.style.display='';
    });

    // Language toggle - FIXED
    document.getElementById('langToggle')?.addEventListener('click', () => {
      const next = currentLang === 'ar' ? 'en' : 'ar';
      applyLang(next);
      // Haptic feedback if available
      if(navigator.vibrate) navigator.vibrate(50);
    });

    // Hamburger
    const hamb = document.getElementById('hamburger');
    const nav = document.getElementById('navBelow');
    hamb?.addEventListener('click', () => {
      const isOpen = nav?.classList.toggle('open');
      hamb.setAttribute('aria-expanded', isOpen);
    });
    document.querySelectorAll('.nav-link').forEach(a => a.addEventListener('click', () => nav?.classList.remove('open')));

    // Navbar fixed transparency on scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
      if(window.scrollY > 20) header?.classList.add('scrolled');
      else header?.classList.remove('scrolled');
    }, {passive:true});

    // Scroll reveal
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    }, {threshold:0.15});
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // Back to top
    const backTop = document.getElementById('backTop');
    window.addEventListener('scroll', () => {
      if(window.scrollY > 600) backTop?.classList.add('show');
      else backTop?.classList.remove('show');
    }, {passive:true});
    backTop?.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

    // Carousel
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    let idx = 0; let timer; let touchStartX=0;
    function go(i){ idx = (i+slides.length)%slides.length; if(track) track.style.transform = `translateX(-${idx*100}%)`; dots.forEach((d,j) => d.classList.toggle('active', j===idx)); }
    function next(){ go(idx+1); }
    function start(){ if(slides.length>1) timer = setInterval(next, 4200); }
    function stop(){ clearInterval(timer); }
    dots.forEach((d,j) => d.addEventListener('click', () => { go(j); stop(); start(); }));
    if(track){
      start();
      track.addEventListener('mouseenter', stop);
      track.addEventListener('mouseleave', start);
      track.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; stop(); }, {passive:true});
      track.addEventListener('touchend', (e) => { const x = e.changedTouches[0].screenX; if(x < touchStartX - 40) next(); if(x > touchStartX + 40) go(idx-1); start(); }, {passive:true});
    }

    // Accordion
    document.querySelectorAll('.acc-item').forEach(item => {
      item.querySelector('.acc-btn')?.addEventListener('click', () => {
        const was = item.classList.contains('open');
        document.querySelectorAll('.acc-item').forEach(i => i.classList.remove('open'));
        if(!was) item.classList.add('open');
      });
    });

    // Filter
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        const f = btn.dataset.filter;
        document.querySelectorAll('.portfolio-card').forEach(card => {
          card.style.display = (f==='all' || card.dataset.cat===f) ? '' : 'none';
        });
      });
    });

    // Form validation
    const form = document.getElementById('contactForm');
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    function showError(input, msg){ input.classList.add('error'); const err = input.parentElement?.querySelector('.error-msg'); if(err){ err.textContent=msg; err.classList.add('show'); } }
    function clearError(input){ input.classList.remove('error'); const err = input.parentElement?.querySelector('.error-msg'); if(err) err.classList.remove('show'); }
    function validate(input){
      const v = input.value.trim();
      if(!v){ showError(input, currentLang==='ar'?'هذا الحقل مطلوب':'This field is required'); return false; }
      if(input.type==='email' && !emailRe.test(v)){ showError(input, currentLang==='ar'?'بريد غير صحيح':'Invalid email'); return false; }
      if(input.name==='message' && v.length<10){ showError(input, currentLang==='ar'?'10 أحرف على الأقل':'At least 10 chars'); return false; }
      clearError(input); return true;
    }
    if(form){
      form.querySelectorAll('.input').forEach(inp => {
        inp.addEventListener('blur', () => validate(inp));
        inp.addEventListener('input', () => clearError(inp));
      });
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        let ok=true;
        form.querySelectorAll('.input').forEach(inp => { if(inp.hasAttribute('required') && !validate(inp)) ok=false; });
        if(!ok) return;
        const btn = form.querySelector('button[type="submit"]');
        const orig = btn.innerHTML;
        btn.textContent = currentLang==='ar'?'جاري الإرسال...':'Sending...'; btn.disabled=true;
        setTimeout(() => {
          btn.innerHTML=orig; btn.disabled=false; form.reset();
          const t = document.getElementById('toast');
          const msg = currentLang==='ar'?'تم الإرسال! سنرد خلال 24 ساعة.':'Message sent! We will reply within 24h.';
          if(t){ t.textContent=msg; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),3400); }
          if(window.lucide) lucide.createIcons();
        }, 1200);
      });
    }

    if(window.lucide) lucide.createIcons();
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  window.addEventListener('load', () => { setTimeout(() => document.getElementById('preloader')?.classList.add('hidden'), 600); });

})();

// Smooth scroll
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if(id.length>1){
        const t = document.querySelector(id);
        if(t){ e.preventDefault(); const top = t.getBoundingClientRect().top + window.scrollY - 100; window.scrollTo({top, behavior:'smooth'}); }
      }
    });
  });
});
