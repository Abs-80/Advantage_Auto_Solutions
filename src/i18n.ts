import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// In a real production app, these translations would typically be loaded
// from external JSON files (e.g., public/locales/en/translation.json).
const resources = {
  en: {
    translation: {
      "nav.home": "Home",
      "nav.services": "Solutions",
      "nav.contact": "Contact",
      
      "hero.title": "Global Expertise, Local Impact.",
      "hero.subtitle": "Empowering automotive businesses through consulting, recruitment, and training solutions that tackle real-world challenges.",
      "hero.cta": "Discover Our Solutions",
      
      "about.title": "90+ Years of Combined Global Expertise",
      "about.desc": "At Advantage Automotive Solutions, we live at the cutting-edge of innovation and industry know-how. From optimizing operations to embracing new technologies or unlocking untapped opportunities, our mission is to be more than just advisors — we're your global partners on the road to lasting success.",
      
      "global.title": "Global Reach, Timezone Ready",
      "global.desc": "Our team is based in key global hotspots across the Middle East, Asia, the USA & Canada, and Europe (including the UK), ensuring we are always able to support you in whichever timezone you operate.",
      
      "services.title": "Our Solutions",
      "services.desc": "Maneuver through our product catalog. Request localized quotes suited perfectly to your market needs.",
      
      "service.consulting.title": "Consulting Solutions",
      "service.consulting.desc": "Optimize operations and embrace cutting-edge technologies to unlock untapped automotive opportunities.",
      
      "service.recruitment.title": "Recruitment Services",
      "service.recruitment.desc": "Discover top global talent that understands the specific challenges & nuances of the automotive industry.",
      
      "service.training.title": "Training & Development",
      "service.training.desc": "Empower your team with advanced industry strategies and measurable growth-oriented training paradigms.",
      
      "action.requestQuote": "Request Quote",
      
      "contact.title": "Set Up an Inquiry",
      "contact.desc": "Drop us a message if you'd like to discuss your unique goals. Because when your performance accelerates, so does ours.",
      "contact.form.name": "Full Name",
      "contact.form.email": "Email Address",
      "contact.form.service": "Service of Interest",
      "contact.form.service.general": "General Inquiry",
      "contact.form.message": "Your Message",
      "contact.form.submit": "Send Inquiry",
      
      "footer.insights": "Follow our page for insights, updates, and industry strategies.",
      "footer.rights": "© 2024 Advantage Automotive Solutions. All rights reserved."
    }
  },
  ar: {
    translation: {
      "nav.home": "الرئيسية",
      "nav.services": "الحلول",
      "nav.contact": "اتصل بنا",
      
      "hero.title": "خبرة عالمية، تأثير محلي.",
      "hero.subtitle": "تمكين شركات السيارات من خلال الاستشارات والتوظيف وحلول التدريب التي تعالج تحديات العالم الحقيقي.",
      "hero.cta": "اكتشف حلولنا",
      
      "about.title": "أكثر من 90 عاماً من الخبرة العالمية المشتركة",
      "about.desc": "في أدفانتج أوتوموتيف سوليوشنز، نعيش في طليعة الابتكار والمعرفة الصناعية. من تحسين العمليات إلى تبني تقنيات جديدة أو إطلاق الفرص غير المستغلة، مهمتنا هي أن نكون أكثر من مجرد مستشارين — نحن شركاؤك العالميون على طريق النجاح الدائم.",
      
      "global.title": "وصول عالمي، جاهزون في كل وقت",
      "global.desc": "يقع فريقنا في مراكز عالمية رئيسية في جميع أنحاء الشرق الأوسط وآسيا والولايات المتحدة وكندا وأوروبا (بما في ذلك المملكة المتحدة)، مما يضمن أننا قادرون دائمًا على دعمك في أي منطقة زمنية تعمل فيها.",
      
      "services.title": "حلولنا",
      "services.desc": "تصفح عبر كتالوج منتجاتنا. اطلب عروض أسعار محلية تناسب احتياجات السوق الخاصة بك تمامًا.",
      
      "service.consulting.title": "حلول استشارية",
      "service.consulting.desc": "تحسين العمليات وتبني أحدث التقنيات لفتح فرص للسيارات غير مستغلة.",
      
      "service.recruitment.title": "خدمات التوظيف",
      "service.recruitment.desc": "اكتشف أفضل المواهب العالمية التي تفهم التحديات والفروق الدقيقة في صناعة السيارات.",
      
      "service.training.title": "التدريب والتطوير",
      "service.training.desc": "مكّن فريقك باستراتيجيات الصناعة المتقدمة ونماذج التدريب الموجهة نحو النمو القابل للقياس.",
      
      "action.requestQuote": "طلب عرض سعر",
      
      "contact.title": "قم بإعداد استفسار",
      "contact.desc": "اترك لنا رسالة إذا كنت ترغب في مناقشة أهدافك الفريدة. لأنه عندما يتسارع أدائك، يتسارع أداؤنا.",
      "contact.form.name": "الاسم الكامل",
      "contact.form.email": "عنوان البريد الإلكتروني",
      "contact.form.service": "الخدمة المطلوبة",
      "contact.form.service.general": "استفسار عام",
      "contact.form.message": "رسالتك",
      "contact.form.submit": "إرسال استفسار",
      
      "footer.insights": "تابع صفحتنا للحصول على الرؤى والتحديثات واستراتيجيات الصناعة.",
      "footer.rights": "© 2024 أدفانتج أوتوموتيف سوليوشنز. جميع الحقوق محفوظة."
    }
  },
  zh: {
    translation: {
      "nav.home": "首页",
      "nav.services": "解决方案",
      "nav.contact": "联系我们",
      
      "hero.title": "全球视野，本土影响。",
      "hero.subtitle": "通过解决实际挑战的咨询、招聘和培训解决方案，助力汽车企业发展。",
      "hero.cta": "探索我们的解决方案",
      
      "about.title": "逾90年全球经验的结晶",
      "about.desc": "在 Advantage Automotive Solutions，我们始终走在创新和行业知识的前沿。从优化运营到采用新技术，再到开启尚未开发的机遇，我们的使命不仅是做您的顾问，更是您在持续成功道路上的全球合作伙伴。",
      
      "global.title": "全球布局，跨越时区",
      "global.desc": "我们的团队分布在中东、亚洲、美国与加拿大以及欧洲（包括英国）等全球关键中心，确保我们能够随时在您所在的时区为您提供支持。",
      
      "services.title": "我们的解决方案",
      "services.desc": "浏览我们的产品目录。索取完全符合您市场需求的本地化报价。",
      
      "service.consulting.title": "咨询解决方案",
      "service.consulting.desc": "优化运营并采用前沿技术，释放尚未开发的汽车行业机遇。",
      
      "service.recruitment.title": "招聘服务",
      "service.recruitment.desc": "发掘了解汽车行业面临的特定挑战与细节的全球顶尖人才。",
      
      "service.training.title": "培训与发展",
      "service.training.desc": "用先进的行业战略和以可衡量增长为导向的培训模式武装您的团队。",
      
      "action.requestQuote": "获取报价",
      
      "contact.title": "建立咨询",
      "contact.desc": "如果您想讨论您的独特目标，请给我们留言。因为当您的业务加速发展时，我们也会与您共同成长。",
      "contact.form.name": "全名",
      "contact.form.email": "电子邮件",
      "contact.form.service": "感兴趣的服务",
      "contact.form.service.general": "一般咨询",
      "contact.form.message": "您的留言",
      "contact.form.submit": "发送咨询",
      
      "footer.insights": "关注我们的页面获取行业洞察、更新与战略。",
      "footer.rights": "© 2024 Advantage Automotive Solutions。保留所有权利。"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;
