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
      
      "service.healthcheck.title": "Departmental Healthcheck",
      "service.healthcheck.desc": "Detailed operational assessments identifying efficiency gaps and data analysis that generate custom KPI-driven action plans that deliver measurable performance improvements.",
      
      "service.warranty.title": "Warranty Consulting",
      "service.warranty.desc": "Strategic warranty claim optimization and compliance auditing that increases accuracy and maximises departmental revenue against manufacturers approved methodologies.",
      
      "service.staffing.title": "Staffing Solutions",
      "service.staffing.desc": "Specialized recruitment and interim management for dealerships and OEMs. Placing high-performing technical specialists and executives with premium automotive experience across a global footprint.",
      
      "service.sourcing.title": "Vehicle Sourcing & Logistics",
      "service.sourcing.desc": "End-to-end sourcing and transportation of luxury & specialist vehicles with secure global shipping networks, customs expertise, and specialized handling for high-value assets across international markets.",
      
      "action.requestQuote": "Get in Contact",
      
      "contact.title": "Set Up an Inquiry",
      "contact.desc": "Drop us a message if you'd like to discuss your unique goals. Because when your performance accelerates, so does ours.",
      "contact.form.name": "Full Name",
      "contact.form.email": "Email Address",
      "contact.form.service": "Service of Interest",
      "contact.form.service.general": "General Inquiry",
      "contact.form.message": "Your Message",
      "contact.form.submit": "Send Inquiry",
      
      "contact.title.custom": "Commission a Consultation",
      "contact.subtitle.custom": "Begin the restoration journey",
      "contact.success.title": "Transmission Successful",
      "contact.success.desc": "Thank you for your inquiry. Our specialists will review your project details and contact you to schedule a consultation.",
      "contact.error.msg": "An error occurred during transmission. Please ensure your connection is stable and try again.",
      "contact.form.fullName": "Full Name",
      "contact.form.fullName.placeholder": "E.g. John Doe",
      "contact.form.email.placeholder": "E.g. john@example.com",
      "contact.form.phone": "Phone Number",
      "contact.form.phone.placeholder": "+1 (555) 000-0000",
      "contact.form.inquiry": "Project Inquiry",
      "contact.form.inquiry.placeholder": "Describe your restoration goals or service requirements...",
      "contact.form.transmitting": "Transmitting...",
      "contact.form.submitInquiry": "Submit Inquiry",

      "opp.title": "Current Opportunities",
      "opp.job.title": "High-Earning Automotive Aftersales Roles Across the UK",
      "opp.job.desc": "Are you a skilled Passenger Car or Light Commercial Vehicle (LCV) Aftersales Specialist looking for an immediate upgrade to your career and earning potential? We are partnering with a renowned UK National Automotive Group to find top talent for multiple prestigious dealerships nationwide.",
      "opp.job.req.title": "What We're Looking For",
      "opp.job.req.1": "Qualification: NVQ Level 3 or equivalent technician certification (or higher). Experienced Aftersales Management, Workshop Control and Advisory Personnel.",
      "opp.job.req.2": "Status: Unrestricted Right to Work in the UK.",
      "opp.job.req.3": "Goal: Seeking a permanent, long-term position.",
      "opp.job.why.title": "Why Join Us?",
      "opp.job.why.1": "Exceptional Earning Potential: Highly competitive packages with attractive, uncapped bonus structures. Your hard work directly translates to your pay slip!",
      "opp.job.why.2": "Career Progression: Access to state-of-the-art facilities, ongoing training, and a clear path for professional development.",
      "opp.job.why.3": "Commitment: Work for an automotive group that truly invests in its technicians.",
      "opp.job.locations": "Immediate Openings in Locations Including: Watford, Hatfield, Cambridge, Chester, Farnborough, Basingstoke, Manchester, Sevenoaks, Liverpool, Guildford, and more!",
      "opp.job.apply.title": "Ready to Drive Your Career Forward? Apply Now!",
      "opp.job.apply.desc": "These highly sought-after roles are being filled immediately.",
      "opp.job.email": "registeryourcv@advantageautomotivesolutions.com",
      "opp.job.call": "We will arrange an initial confidential call to discuss the best roles for you!",
      
      "footer.insights": "Follow our page for insights, updates, and industry strategies.",
      "footer.rights": "© 2026 Advantage Automotive Solutions. All rights reserved."
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
      
      "service.healthcheck.title": "الفحص الصحي للأقسام",
      "service.healthcheck.desc": "تقييمات تشغيلية مفصلة تحدد فجوات الكفاءة وتحليل البيانات الذي يولد خطط عمل مخصصة تعتمد على مؤشرات الأداء الرئيسية التي تقدم تحسينات أداء قابلة للقياس.",
      
      "service.warranty.title": "استشارات الضمان",
      "service.warranty.desc": "التحسين الاستراتيجي لمطالبات الضمان وتدقيق الامتثال الذي يزيد من الدقة ويزيد من إيرادات القسم مقابل المنهجيات المعتمدة من الشركات المصنعة.",
      
      "service.staffing.title": "حلول التوظيف",
      "service.staffing.desc": "توظيف متخصص وإدارة مؤقتة للوكلاء والشركات المصنعة للمعدات الأصلية. وضع أخصائيين تقنيين وتنفيذيين ذوي أداء عالٍ مع خبرة سيارات متميزة عبر نطاق عالمي.",
      
      "service.sourcing.title": "توفير المركبات والخدمات اللوجستية",
      "service.sourcing.desc": "توفير ونقل شامل للمركبات الفاخرة والمتخصصة مع شبكات شحن عالمية آمنة، وخبرة جمركية، وتعامل متخصص مع الأصول عالية القيمة عبر الأسواق الدولية.",
      
      "action.requestQuote": "تواصل معنا",
      
      "contact.title": "قم بإعداد استفسار",
      "contact.desc": "اترك لنا رسالة إذا كنت ترغب في مناقشة أهدافك الفريدة. لأنه عندما يتسارع أدائك، يتسارع أداؤنا.",
      "contact.form.name": "الاسم الكامل",
      "contact.form.email": "عنوان البريد الإلكتروني",
      "contact.form.service": "الخدمة المطلوبة",
      "contact.form.service.general": "استفسار عام",
      "contact.form.message": "رسالتك",
      "contact.form.submit": "إرسال استفسار",
      
      "contact.title.custom": "طلب استشارة",
      "contact.subtitle.custom": "ابدأ رحلة الترميم",
      "contact.success.title": "تم الإرسال بنجاح",
      "contact.success.desc": "شكرا لاستفسارك. سيقوم المتخصصون لدينا بمراجعة تفاصيل مشروعك والاتصال بك لتحديد موعد للاستشارة.",
      "contact.error.msg": "حدث خطأ أثناء الإرسال. يرجى التأكد من استقرار اتصالك والمحاولة مرة أخرى.",
      "contact.form.fullName": "الاسم الكامل",
      "contact.form.fullName.placeholder": "مثال: جون دو",
      "contact.form.email.placeholder": "مثال: john@example.com",
      "contact.form.phone": "رقم الهاتف",
      "contact.form.phone.placeholder": "+1 (555) 000-0000",
      "contact.form.inquiry": "استفسار عن المشروع",
      "contact.form.inquiry.placeholder": "صف أهداف الترميم الخاصة بك أو متطلبات الخدمة...",
      "contact.form.transmitting": "جاري الإرسال...",
      "contact.form.submitInquiry": "إرسال الاستفسار",

      "opp.title": "الفرص الحالية",
      "opp.job.title": "أدوار ما بعد البيع للسيارات ذات الدخل المرتفع في جميع أنحاء المملكة المتحدة",
      "opp.job.desc": "هل أنت متخصص ماهر في ما بعد البيع لسيارات الركاب أو المركبات التجارية الخفيفة (LCV) وتتطلع إلى ترقية فورية لمسيرتك المهنية وإمكانيات كسبك؟ نحن نتعاون مع مجموعة سيارات وطنية شهيرة في المملكة المتحدة للعثور على أفضل المواهب لعدة وكالات مرموقة على مستوى البلاد.",
      "opp.job.req.title": "ما نبحث عنه",
      "opp.job.req.1": "المؤهلات: شهادة فني مستوى NVQ 3 أو ما يعادلها (أو أعلى). خبرة في إدارة ما بعد البيع، والتحكم في الورش، والكوادر الاستشارية.",
      "opp.job.req.2": "الحالة: حق غير مقيد في العمل في المملكة المتحدة.",
      "opp.job.req.3": "الهدف: البحث عن وظيفة دائمة وطويلة الأجل.",
      "opp.job.why.title": "لماذا الانضمام إلينا؟",
      "opp.job.why.1": "إمكانات كسب استثنائية: حزم تنافسية للغاية مع هياكل مكافآت جذابة وغير محدودة. يترجم عملك الجاد مباشرة إلى راتبك!",
      "opp.job.why.2": "التقدم الوظيفي: الوصول إلى مرافق حديثة وتدريب مستمر ومسار واضح للتطوير المهني.",
      "opp.job.why.3": "الالتزام: العمل في مجموعة سيارات تستثمر حقًا في الفنيين لديها.",
      "opp.job.locations": "وظائف شاغرة فورية في: واتفورد، هاتفيلد، كامبريدج، تشيستر، فارنبورو، باسينجستوك، مانشستر، سيفينواكس، ليفربول، جيلفورد، والمزيد!",
      "opp.job.apply.title": "هل أنت مستعد لدفع مسيرتك المهنية إلى الأمام؟ قدم الآن!",
      "opp.job.apply.desc": "يتم شغل هذه الأدوار المطلوبة بشدة على الفور. للتقديم، يرجى استخدام زر الاتصال أعلاه للتواصل مع فريقنا وإرفاق سيرتك الذاتية (بتنسيق Word) بما في ذلك منطقة العمل الجغرافية المفضلة لديك، وأحدث تفاصيل الاتصال، والحزمة الحالية، ومدى التوفر.",
      "opp.job.email": "registeryourcv@advantageautomotivesolutions.com",
      "opp.job.call": "سنقوم بترتيب مكالمة سرية أولية لمناقشة أفضل الأدوار لك!",
      
      "footer.insights": "تابع صفحتنا للحصول على الرؤى والتحديثات واستراتيجيات الصناعة.",
      "footer.rights": "© 2026 أدفانتج أوتوموتيف سوليوشنز. جميع الحقوق محفوظة."
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
      
      "service.healthcheck.title": "部门健康检查",
      "service.healthcheck.desc": "详细的运营评估，识别效率差距和数据分析，生成以KPI驱动的定制行动计划，实现可衡量的绩效改进。",
      
      "service.warranty.title": "保修咨询",
      "service.warranty.desc": "战略保修索赔优化和合规审计，提高准确性，并根据制造商批准的方法最大化部门收入。",
      
      "service.staffing.title": "人员配备解决方案",
      "service.staffing.desc": "为经销商和汽车原始设备制造商提供专业的招聘和过渡管理。在全球范围内安排具有丰富汽车经验的高绩效技术专家和高管。",
      
      "service.sourcing.title": "车辆采购与物流",
      "service.sourcing.desc": "通过安全的全球运输网络、海关专业知识和在国际市场上对高价值资产的专业处理，提供豪华和特种车辆的端到端采购和运输。",
      
      "action.requestQuote": "联系我们",
      
      "contact.title": "建立咨询",
      "contact.desc": "如果您想讨论您的独特目标，请给我们留言。因为当您的业务加速发展时，我们也会与您共同成长。",
      "contact.form.name": "全名",
      "contact.form.email": "电子邮件",
      "contact.form.service": "感兴趣的服务",
      "contact.form.service.general": "一般咨询",
      "contact.form.message": "您的留言",
      "contact.form.submit": "发送咨询",
      
      "contact.title.custom": "预约咨询",
      "contact.subtitle.custom": "开启修复之旅",
      "contact.success.title": "发送成功",
      "contact.success.desc": "感谢您的查询。我们的专家将审查您的项目详细信息并与您联系安排咨询。",
      "contact.error.msg": "传输过程中发生错误。请确保您的连接稳定并重试。",
      "contact.form.fullName": "全名",
      "contact.form.fullName.placeholder": "例如：约翰·多恩",
      "contact.form.email.placeholder": "例如：john@example.com",
      "contact.form.phone": "电话号码",
      "contact.form.phone.placeholder": "+1 (555) 000-0000",
      "contact.form.inquiry": "项目咨询",
      "contact.form.inquiry.placeholder": "描述您的修复目标或服务要求...",
      "contact.form.transmitting": "发送中...",
      "contact.form.submitInquiry": "提交查询",

      "opp.title": "当前的工作机会",
      "opp.job.title": "全英高收益汽车售后服务职位",
      "opp.job.desc": "您是一位熟练的乘用车或轻型商用车（LCV）售后专家，正在寻求职业和收入潜力的立即提升吗？我们正与一家著名的英国全国性汽车集团合作，为全国多家知名经销商寻找顶尖人才。",
      "opp.job.req.title": "我们正在寻找",
      "opp.job.req.1": "资格：NVQ 3级或同等技术人员认证（或更高级别）。经验丰富的售后管理、车间控制和咨询人员。",
      "opp.job.req.2": "身份：拥有在英国的无限制工作权利。",
      "opp.job.req.3": "目标：寻求长期的固定职位。",
      "opp.job.why.title": "为何加入我们？",
      "opp.job.why.1": "卓越的收入潜力：极具竞争力的套餐，带有吸引力的无上限奖金结构。您的辛勤工作直接转化为您的工资！",
      "opp.job.why.2": "职业发展：使用最先进的设施，提供持续的培训，以及清晰的职业发展路径。",
      "opp.job.why.3": "承诺：为一个真正投资其技术人员的汽车集团工作。",
      "opp.job.locations": "直接空缺职位位于：沃特福德，哈特菲尔德，剑桥，切斯特，法恩伯勒，贝辛斯托克，曼彻斯特，塞文欧克斯，利物浦，吉尔福德等！",
      "opp.job.apply.title": "准备好推动您的职业发展了吗？立即申请！",
      "opp.job.apply.desc": "这些备受追捧的职位正在立即填补。要申请，请使用上方的联系按钮与我们的团队取得联系，需包括您的个人简历（Word格式）、您的首选地理工作区域、最新联系方式、当前薪酬包裹以及可用时间。",
      "opp.job.email": "registeryourcv@advantageautomotivesolutions.com",
      "opp.job.call": "我们将安排一次初步的保密电话，以讨论最适合您的角色！",
      
      "footer.insights": "关注我们的页面获取行业洞察、更新与战略。",
      "footer.rights": "© 2026 Advantage Automotive Solutions。保留所有权利。"
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
