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
      "nav.opportunities": "Opportunities",
      
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

      "opp.title": "Current Opportunities",
      "opp.job.title": "High-Earning Automotive Aftersales Roles Across the UK",
      "opp.job.desc": "Are you a skilled Passenger Car or Light Commercial Vehicle (LCV) Aftersales Specialist looking for an immediate upgrade to your career and earning potential? We are partnering with a renowned UK National Automotive Group to find top talent for multiple prestigious dealerships nationwide.",
      "opp.job.req.title": "What We're Looking For",
      "opp.job.req.1": "Qualification: NVQ Level 3 or equivalent technician certification (or higher). Experienced Aftersales Management, Workshop Control and Advisory Personnel.",
      "opp.job.req.2": "Status: Unrestricted Right to Work in the UK.",
      "opp.job.req.3": "Goal: Seeking a permanent, long-term position.",
      "opp.job.why.title": "Why Join Our Client?",
      "opp.job.why.1": "Exceptional Earning Potential: Highly competitive packages with attractive, uncapped bonus structures. Your hard work directly translates to your pay slip!",
      "opp.job.why.2": "Career Progression: Access to state-of-the-art facilities, ongoing training, and a clear path for professional development.",
      "opp.job.why.3": "Commitment: Work for an automotive group that truly invests in its technicians.",
      "opp.job.locations": "Immediate Openings in Locations Including: Watford, Hatfield, Cambridge, Chester, Farnborough, Basingstoke, Manchester, Sevenoaks, Liverpool, Guildford, and more!",
      "opp.job.apply.title": "Ready to Drive Your Career Forward? Apply Now!",
      "opp.job.apply.desc": "These highly sought-after roles are being filled immediately. To apply, please send your CV (in Word format) including your preferred geographical working area, latest contact details, current package, and availability to:",
      "opp.job.email": "registeryourcv@advantageautomotivesolutions.com",
      "opp.job.call": "We will arrange an initial confidential call to discuss the best roles for you!",
      
      "footer.insights": "Follow our page for insights, updates, and industry strategies.",
      "footer.rights": "© 2024 Advantage Automotive Solutions. All rights reserved."
    }
  },
  ar: {
    translation: {
      "nav.home": "الرئيسية",
      "nav.services": "الحلول",
      "nav.contact": "اتصل بنا",
      "nav.opportunities": "الفرص",
      
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

      "opp.title": "الفرص الحالية",
      "opp.job.title": "أدوار ما بعد البيع للسيارات ذات الدخل المرتفع في جميع أنحاء المملكة المتحدة",
      "opp.job.desc": "هل أنت متخصص ماهر في ما بعد البيع لسيارات الركاب أو المركبات التجارية الخفيفة (LCV) وتتطلع إلى ترقية فورية لمسيرتك المهنية وإمكانيات كسبك؟ نحن نتعاون مع مجموعة سيارات وطنية شهيرة في المملكة المتحدة للعثور على أفضل المواهب لعدة وكالات مرموقة على مستوى البلاد.",
      "opp.job.req.title": "ما نبحث عنه",
      "opp.job.req.1": "المؤهلات: شهادة فني مستوى NVQ 3 أو ما يعادلها (أو أعلى). خبرة في إدارة ما بعد البيع، والتحكم في الورش، والكوادر الاستشارية.",
      "opp.job.req.2": "الحالة: حق غير مقيد في العمل في المملكة المتحدة.",
      "opp.job.req.3": "الهدف: البحث عن وظيفة دائمة وطويلة الأجل.",
      "opp.job.why.title": "لماذا الانضمام إلى عميلنا؟",
      "opp.job.why.1": "إمكانات كسب استثنائية: حزم تنافسية للغاية مع هياكل مكافآت جذابة وغير محدودة. يترجم عملك الجاد مباشرة إلى راتبك!",
      "opp.job.why.2": "التقدم الوظيفي: الوصول إلى مرافق حديثة وتدريب مستمر ومسار واضح للتطوير المهني.",
      "opp.job.why.3": "الالتزام: العمل في مجموعة سيارات تستثمر حقًا في الفنيين لديها.",
      "opp.job.locations": "وظائف شاغرة فورية في: واتفورد، هاتفيلد، كامبريدج، تشيستر، فارنبورو، باسينجستوك، مانشستر، سيفينواكس، ليفربول، جيلفورد، والمزيد!",
      "opp.job.apply.title": "هل أنت مستعد لدفع مسيرتك المهنية إلى الأمام؟ قدم الآن!",
      "opp.job.apply.desc": "يتم شغل هذه الأدوار المطلوبة بشدة على الفور. للتقديم، يرجى إرسال سيرتك الذاتية (بتنسيق Word) بما في ذلك منطقة العمل الجغرافية المفضلة لديك، وأحدث تفاصيل الاتصال، والحزمة الحالية، ومدى التوفر إلى:",
      "opp.job.email": "registeryourcv@advantageautomotivesolutions.com",
      "opp.job.call": "سنقوم بترتيب مكالمة سرية أولية لمناقشة أفضل الأدوار لك!",
      
      "footer.insights": "تابع صفحتنا للحصول على الرؤى والتحديثات واستراتيجيات الصناعة.",
      "footer.rights": "© 2024 أدفانتج أوتوموتيف سوليوشنز. جميع الحقوق محفوظة."
    }
  },
  zh: {
    translation: {
      "nav.home": "首页",
      "nav.services": "解决方案",
      "nav.contact": "联系我们",
      "nav.opportunities": "工作机会",
      
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

      "opp.title": "当前的工作机会",
      "opp.job.title": "全英高收益汽车售后服务职位",
      "opp.job.desc": "您是一位熟练的乘用车或轻型商用车（LCV）售后专家，正在寻求职业和收入潜力的立即提升吗？我们正与一家著名的英国全国性汽车集团合作，为全国多家知名经销商寻找顶尖人才。",
      "opp.job.req.title": "我们正在寻找",
      "opp.job.req.1": "资格：NVQ 3级或同等技术人员认证（或更高级别）。经验丰富的售后管理、车间控制和咨询人员。",
      "opp.job.req.2": "身份：拥有在英国的无限制工作权利。",
      "opp.job.req.3": "目标：寻求长期的固定职位。",
      "opp.job.why.title": "为何加入我们的客户？",
      "opp.job.why.1": "卓越的收入潜力：极具竞争力的套餐，带有吸引力的无上限奖金结构。您的辛勤工作直接转化为您的工资！",
      "opp.job.why.2": "职业发展：使用最先进的设施，提供持续的培训，以及清晰的职业发展路径。",
      "opp.job.why.3": "承诺：为一个真正投资其技术人员的汽车集团工作。",
      "opp.job.locations": "直接空缺职位位于：沃特福德，哈特菲尔德，剑桥，切斯特，法恩伯勒，贝辛斯托克，曼彻斯特，塞文欧克斯，利物浦，吉尔福德等！",
      "opp.job.apply.title": "准备好推动您的职业发展了吗？立即申请！",
      "opp.job.apply.desc": "这些备受追捧的职位正在立即填补。要申请，请将您的个人简历（Word格式）发送至以下邮箱，需包括您的首选地理工作区域、最新联系方式、当前薪酬包裹以及可用时间：",
      "opp.job.email": "registeryourcv@advantageautomotivesolutions.com",
      "opp.job.call": "我们将安排一次初步的保密电话，以讨论最适合您的角色！",
      
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
