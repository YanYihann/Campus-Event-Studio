export const sectionIds = ["home", "services", "packages", "portfolio", "booking", "contact"] as const;

export type SectionId = (typeof sectionIds)[number];
export type Language = "en" | "zh";

type NavItem = {
  id: SectionId;
  label: string;
};

type ServiceItem = {
  title: string;
  description: string;
};

type ServiceWorkflowStep = {
  step: string;
  title: string;
  description: string;
  services: string[];
};

type PackageItem = {
  name: string;
  price: string;
  label: string;
  suitedFor: string;
  description: string;
  features: string[];
  featured?: boolean;
};

type PortfolioCase = {
  title: string;
  category: "student" | "club" | "academic" | "festival";
  context: string;
  outcome: string;
  packageFit: string;
  services: string[];
  client: string;
  budget: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type FieldCopy = {
  label: string;
  placeholder: string;
  helper: string;
  required: string;
};

export type Translation = {
  meta: {
    languageName: string;
    htmlLang: string;
  };
  brand: {
    name: string;
    shortName: string;
    slogan: string;
    description: string;
  };
  nav: {
    items: NavItem[];
    cta: string;
    menuOpen: string;
    menuClose: string;
    languageLabel: string;
  };
  home: {
    eyebrow: string;
    title: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    valueTitle: string;
    valueProps: string[];
    eventTypesTitle: string;
    eventTypes: string[];
    howItWorksTitle: string;
    howItWorks: string[];
    boardTitle: string;
    boardItems: string[];
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    groups: {
      title: string;
      items: ServiceItem[];
    }[];
    workflow: ServiceWorkflowStep[];
  };
  packages: {
    eyebrow: string;
    title: string;
    intro: string;
    recommended: string;
    cta: string;
    customQuoteTitle: string;
    customQuote: string;
    pricingNote: string;
    tiers: PackageItem[];
  };
  portfolio: {
    eyebrow: string;
    title: string;
    intro: string;
    serviceLabel: string;
    clientLabel: string;
    budgetLabel: string;
    contextLabel: string;
    outcomeLabel: string;
    packageLabel: string;
    cta: string;
    filters: {
      all: string;
      student: string;
      club: string;
      academic: string;
      festival: string;
    };
    empty: string;
    cases: PortfolioCase[];
  };
  booking: {
    eyebrow: string;
    title: string;
    intro: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    reset: string;
    requiredNote: string;
    contactRequirement: string;
    servicesLegend: string;
    groups: {
      contact: string;
      event: string;
      budget: string;
      support: string;
      details: string;
    };
    fields: {
      fullName: FieldCopy;
      role: FieldCopy;
      wechat: FieldCopy;
      email: FieldCopy;
      phone: FieldCopy;
      eventType: FieldCopy;
      eventDate: FieldCopy;
      eventTime: FieldCopy;
      eventLocation: FieldCopy;
      participants: FieldCopy;
      budgetRange: FieldCopy;
      preferredPackage: FieldCopy;
      servicesNeeded: FieldCopy;
      theme: FieldCopy;
      requirements: FieldCopy;
    };
    options: {
      roles: string[];
      eventTypes: string[];
      budgetRanges: string[];
      packages: string[];
      services: string[];
    };
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    hoursTitle: string;
    channels: {
      label: string;
      value: string;
    }[];
    hours: string[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: FaqItem[];
  };
  footer: {
    quickLinks: string;
    services: string;
    contact: string;
    copyright: string;
  };
};

export const translations: Record<Language, Translation> = {
  en: {
    meta: {
      languageName: "English",
      htmlLang: "en",
    },
    brand: {
      name: "Campus Event Studio",
      shortName: "CES",
      slogan: "Creative Events, Easy Campus Life",
      description:
        "A campus-focused event service for WKU students, clubs, faculty, staff, and departments.",
    },
    nav: {
      items: [
        { id: "home", label: "Home" },
        { id: "services", label: "Services" },
        { id: "packages", label: "Packages" },
        { id: "portfolio", label: "Portfolio" },
        { id: "booking", label: "Booking" },
        { id: "contact", label: "Contact" },
      ],
      cta: "Book a Free Consultation",
      menuOpen: "Open navigation",
      menuClose: "Close navigation",
      languageLabel: "Choose language",
    },
    home: {
      eyebrow: "For WKU campus events",
      title: "Creative Events, Easy Campus Life",
      intro: "A campus-focused event service for WKU students, clubs, faculty, staff, and departments.",
      primaryCta: "Book a Free Consultation",
      secondaryCta: "View Packages",
      valueTitle: "Why campus groups choose us",
      valueProps: ["Creative Designs", "Convenient Support", "Affordable Packages", "Reliable Campus Service"],
      eventTypesTitle: "Popular event types",
      eventTypes: [
        "Birthday Decorations",
        "Club Activities",
        "Graduation Events",
        "Academic Events",
        "Festival Parties",
        "Campus Department Events",
      ],
      howItWorksTitle: "How it works",
      howItWorks: ["Tell us your event idea", "Choose a package", "We prepare and set up", "Enjoy your event"],
      boardTitle: "Campus event flow",
      boardItems: ["Idea", "Package", "Preparation", "Setup", "Event day"],
    },
    services: {
      eyebrow: "Services",
      title: "Support from first idea to final cleanup.",
      intro:
        "Choose one service or combine several. The studio is built for club mixers, department receptions, birthday setups, workshops, and campus celebrations.",
      groups: [
        {
          title: "Planning",
          items: [
            {
              title: "Event Planning",
              description: "Theme selection, schedule planning, activity flow design, and event arrangement.",
            },
            {
              title: "Venue Booking Assistance",
              description: "Helping customers understand available campus or nearby spaces and prepare basic arrangement plans.",
            },
          ],
        },
        {
          title: "Design and supplies",
          items: [
            {
              title: "Theme Decoration",
              description:
                "Birthday themes, club activity themes, festival decorations, academic event decoration, and customized visual design.",
            },
            {
              title: "Party Supplies & Furniture Rental",
              description: "Tables, chairs, backdrops, balloons, lighting, signs, table decorations, and event props.",
            },
            {
              title: "Promotional Support",
              description: "Posters, WeChat announcements, simple digital invitations, and event communication materials.",
            },
          ],
        },
        {
          title: "On-site",
          items: [
            {
              title: "On-site Coordination",
              description: "Setup, event support, coordination, and post-event cleanup.",
            },
          ],
        },
      ],
      workflow: [
        {
          step: "01",
          title: "Share the idea",
          description: "Tell us the occasion, guest count, budget, time, and campus space you are considering.",
          services: ["Event Planning", "Venue Booking Assistance"],
        },
        {
          step: "02",
          title: "Shape the plan",
          description: "We turn the idea into a workable theme, schedule, setup scope, and supply list.",
          services: ["Event Planning", "Theme Decoration"],
        },
        {
          step: "03",
          title: "Prepare the look",
          description: "Backdrops, balloons, table details, signs, props, and rental items are selected around your budget.",
          services: ["Theme Decoration", "Party Supplies & Furniture Rental"],
        },
        {
          step: "04",
          title: "Promote and set up",
          description: "We help with simple posters or invitations, then prepare the room before guests arrive.",
          services: ["Promotional Support", "On-site Coordination"],
        },
        {
          step: "05",
          title: "Run the event",
          description: "On the day, we support setup checks, quick coordination, and post-event cleanup when requested.",
          services: ["On-site Coordination", "Cleanup Support"],
        },
      ],
    },
    packages: {
      eyebrow: "Packages",
      title: "Flexible options for different campus budgets.",
      intro: "Affordable and flexible pricing for WKU students and campus groups.",
      recommended: "Recommended",
      cta: "Book a Free Consultation",
      customQuoteTitle: "Custom Quote",
      customQuote: "For unique events, customers can request a customized plan.",
      pricingNote: "Affordable and flexible pricing for WKU students and campus groups.",
      tiers: [
        {
          name: "Basic Package",
          price: "100–300 RMB / 300–500 RMB",
          label: "Small gatherings",
          suitedFor: "Small birthdays, simple room decorations, small private gatherings",
          description: "A focused setup for low-budget student events that still need a clear visual direction.",
          features: [
            "Basic decoration materials",
            "Simple party supplies rental",
            "Small setup support",
            "Suitable for low-budget student events",
          ],
        },
        {
          name: "Standard Package",
          price: "300–500 RMB / 400–800 RMB",
          label: "Most requested",
          suitedFor: "Club activities, classroom events, small campus events",
          description: "A balanced package for groups that need decoration, setup, coordination, and simple promotion.",
          features: [
            "Decoration and supplies",
            "Basic event coordination",
            "Setup support",
            "Simple promotional material support",
          ],
          featured: true,
        },
        {
          name: "Premium Package",
          price: "500–1000 RMB+",
          label: "Larger events",
          suitedFor: "Graduation events, department events, larger campus events",
          description: "A more complete plan for larger events that need a custom theme and stronger on-site support.",
          features: [
            "Customized event planning",
            "Theme design",
            "Promotional materials",
            "On-site coordination",
            "Cleanup support",
          ],
        },
      ],
    },
    portfolio: {
      eyebrow: "Portfolio",
      title: "Sample campus events and setup ideas.",
      intro:
        "Browse mock-up cases to understand how Campus Event Studio can shape different WKU event formats.",
      serviceLabel: "Services",
      clientLabel: "Best for",
      budgetLabel: "Budget",
      contextLabel: "Event brief",
      outcomeLabel: "Setup result",
      packageLabel: "Package fit",
      cta: "Want a similar event? Book a Free Consultation",
      filters: {
        all: "All",
        student: "Student Events",
        club: "Club Events",
        academic: "Academic Events",
        festival: "Festival Events",
      },
      empty: "No examples match this filter yet. View all cases to keep browsing.",
      cases: [
        {
          title: "Birthday Room Decoration",
          category: "student",
          context: "A dorm birthday surprise planned after evening classes with a small friend group and limited setup time.",
          outcome: "Warm backdrop, balloon corner, table styling, and easy cleanup after the celebration.",
          packageFit: "Basic or Standard",
          services: ["theme decoration", "balloons", "backdrop", "table setup"],
          client: "students",
          budget: "300–500 RMB",
        },
        {
          title: "Club Recruitment Booth",
          category: "club",
          context: "A student organization needs a clear booth identity for a busy recruitment table near campus traffic.",
          outcome: "Poster layout, signs, table props, and a compact booth plan that can be installed quickly.",
          packageFit: "Standard",
          services: ["booth layout", "posters", "signs", "simple decoration"],
          client: "student organizations",
          budget: "400–800 RMB",
        },
        {
          title: "Graduation Celebration Corner",
          category: "student",
          context: "Graduating students and a department want a small photo moment without renting a large venue.",
          outcome: "Photo backdrop, warm lighting, custom signs, and a tidy corner for group photos.",
          packageFit: "Premium or Custom",
          services: ["photo backdrop", "lighting", "customized signs"],
          client: "students and departments",
          budget: "500–1000 RMB",
        },
        {
          title: "Academic Seminar Setup",
          category: "academic",
          context: "Faculty and department staff need a classroom seminar to feel organized, visible, and easy to navigate.",
          outcome: "Entrance signage, seating support, printed materials, and a clean speaker area.",
          packageFit: "Standard or Premium",
          services: ["signage", "seating layout support", "promotional material"],
          client: "faculty and campus departments",
          budget: "500–1000 RMB",
        },
        {
          title: "Festival Party Decoration",
          category: "festival",
          context: "A club night needs a stronger theme and room transformation for photos, games, and gathering.",
          outcome: "Theme props, lighting, room zones, and a coordinated visual direction across the space.",
          packageFit: "Premium",
          services: ["theme design", "props", "lighting", "room transformation"],
          client: "clubs and student groups",
          budget: "500–1000 RMB+",
        },
        {
          title: "Small Classroom Event",
          category: "academic",
          context: "A small workshop or staff activity needs simple materials, clear layout, and light coordination.",
          outcome: "Basic decoration, supply setup, table flow, and support before the session starts.",
          packageFit: "Basic or Standard",
          services: ["simple decoration", "supplies", "basic coordination"],
          client: "students and staff",
          budget: "300–500 RMB",
        },
      ],
    },
    booking: {
      eyebrow: "Booking",
      title: "Submit a booking request.",
      intro:
        "Share the key details. We will review your request and recommend the right service scope.",
      submit: "Submit Booking Request",
      submitting: "Sending booking request",
      successTitle: "Booking request received",
      successMessage:
        "Thank you! We have received your request and will contact you within 24 hours through your preferred contact method.",
      reset: "Submit another request",
      requiredNote: "Required fields are name, identity, WeChat or email, event type, event date, and budget range.",
      contactRequirement: "Please enter either your WeChat ID or email.",
      servicesLegend: "Services Needed",
      groups: {
        contact: "Contact",
        event: "Event basics",
        budget: "Budget and package",
        support: "Support needed",
        details: "Style notes",
      },
      fields: {
        fullName: {
          label: "Full Name",
          placeholder: "Your full name",
          helper: "Use the name we should use when contacting you.",
          required: "Please enter your full name.",
        },
        role: {
          label: "Role / Identity",
          placeholder: "Select your identity",
          helper: "This helps us understand the event context.",
          required: "Please select your identity.",
        },
        wechat: {
          label: "WeChat ID",
          placeholder: "Your WeChat ID",
          helper: "Required if email is not provided.",
          required: "Please enter your WeChat ID or email.",
        },
        email: {
          label: "Email",
          placeholder: "name@example.com",
          helper: "Required if WeChat is not provided.",
          required: "Please enter your email or WeChat ID.",
        },
        phone: {
          label: "Phone Number",
          placeholder: "+86 000 0000 0000",
          helper: "Optional backup contact method.",
          required: "Please enter a phone number.",
        },
        eventType: {
          label: "Event Type",
          placeholder: "Select event type",
          helper: "Choose the closest match.",
          required: "Please select an event type.",
        },
        eventDate: {
          label: "Event Date",
          placeholder: "Choose a date",
          helper: "An approximate date is fine for consultation.",
          required: "Please choose an event date.",
        },
        eventTime: {
          label: "Event Time",
          placeholder: "For example, 18:30",
          helper: "Optional if the time is not decided.",
          required: "Please enter an event time.",
        },
        eventLocation: {
          label: "Event Location",
          placeholder: "Campus room, dorm, outdoor area, or nearby space",
          helper: "Optional if the venue is not decided.",
          required: "Please enter an event location.",
        },
        participants: {
          label: "Expected Number of Participants",
          placeholder: "For example, 45",
          helper: "A rough estimate helps with supplies and layout.",
          required: "Please enter the expected number of participants.",
        },
        budgetRange: {
          label: "Budget Range",
          placeholder: "Select budget range",
          helper: "Choose the range closest to your plan.",
          required: "Please select a budget range.",
        },
        preferredPackage: {
          label: "Preferred Package",
          placeholder: "Select preferred package",
          helper: "You can change this after consultation.",
          required: "Please select a preferred package.",
        },
        servicesNeeded: {
          label: "Services Needed",
          placeholder: "Select services needed",
          helper: "Choose all services that may apply.",
          required: "Please select at least one service.",
        },
        theme: {
          label: "Theme / Style Preferences",
          placeholder: "Color, mood, theme, references, or setup style",
          helper: "Optional, but helpful for visual planning.",
          required: "Please enter theme or style preferences.",
        },
        requirements: {
          label: "Additional Requirements",
          placeholder: "Venue rules, time limits, delivery needs, cleanup notes",
          helper: "Share any special constraints or requests.",
          required: "Please enter additional requirements.",
        },
      },
      options: {
        roles: ["Student", "Student Organization", "Faculty", "Staff", "Campus Department", "Other"],
        eventTypes: [
          "Birthday",
          "Club Activity",
          "Graduation Event",
          "Academic Event",
          "Festival Party",
          "Campus Department Event",
          "Other",
        ],
        budgetRanges: ["100–300 RMB", "300–500 RMB", "500–1000 RMB", "1000 RMB+", "Not sure yet"],
        packages: ["Basic Package", "Standard Package", "Premium Package", "Custom Plan", "Not sure yet"],
        services: [
          "Event Planning",
          "Theme Decoration",
          "Party Supplies / Furniture Rental",
          "Venue Booking Assistance",
          "Promotional Support",
          "On-site Coordination",
          "Cleanup",
        ],
      },
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact Campus Event Studio",
      intro:
        "Have an event idea? Contact us for a free consultation and we will help you choose the right package.",
      hoursTitle: "Working Hours",
      channels: [
        { label: "WeChat", value: "CampusEventStudio" },
        { label: "Email", value: "campuseventstudio@wku.edu" },
        { label: "Phone", value: "+86 000 0000 0000" },
        { label: "Location", value: "On or near WKU campus" },
        { label: "Service Area", value: "WKU community and nearby campus spaces" },
      ],
      hours: [
        "Monday–Friday: 10:00 AM – 8:00 PM",
        "Saturday–Sunday: 9:00 AM – 9:00 PM",
        "Extended hours available during busy event seasons",
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common planning questions.",
      items: [
        {
          question: "Do you only serve WKU students?",
          answer: "No. We serve WKU students, student organizations, faculty, staff, and campus departments.",
        },
        {
          question: "Can I request a custom theme?",
          answer: "Yes. You can share a theme, color direction, reference image, or event mood in the booking form.",
        },
        {
          question: "How early should I book?",
          answer: "One to two weeks is recommended for most events. Larger setups should be discussed earlier.",
        },
        {
          question: "Do you provide cleanup service?",
          answer: "Yes. Cleanup can be included as part of the selected package or requested as an add-on.",
        },
        {
          question: "Can student clubs get discounts?",
          answer: "Student organizations can request flexible pricing based on event size, service scope, and budget.",
        },
      ],
    },
    footer: {
      quickLinks: "Quick Links",
      services: "Services",
      contact: "Contact",
      copyright: "Campus Event Studio. All rights reserved.",
    },
  },
  zh: {
    meta: {
      languageName: "中文",
      htmlLang: "zh-CN",
    },
    brand: {
      name: "Campus Event Studio",
      shortName: "CES",
      slogan: "创意活动，轻松校园生活",
      description: "一个面向 WKU 学生、社团、教师、员工和校园部门的校园活动服务。",
    },
    nav: {
      items: [
        { id: "home", label: "首页" },
        { id: "services", label: "服务介绍" },
        { id: "packages", label: "套餐价格" },
        { id: "portfolio", label: "案例展示" },
        { id: "booking", label: "在线预约" },
        { id: "contact", label: "联系我们" },
      ],
      cta: "预约免费咨询",
      menuOpen: "打开导航",
      menuClose: "关闭导航",
      languageLabel: "选择语言",
    },
    home: {
      eyebrow: "面向 WKU 校园活动",
      title: "创意活动，轻松校园生活",
      intro: "一个面向 WKU 学生、社团、教师、员工和校园部门的校园活动服务。",
      primaryCta: "预约免费咨询",
      secondaryCta: "查看套餐",
      valueTitle: "校园用户选择我们的理由",
      valueProps: ["创意设计", "便利支持", "可负担套餐", "可靠的校园服务"],
      eventTypesTitle: "热门活动类型",
      eventTypes: ["生日布置", "社团活动", "毕业活动", "学术活动", "节日派对", "校园部门活动"],
      howItWorksTitle: "服务流程",
      howItWorks: ["告诉我们你的活动想法", "选择合适套餐", "我们准备并完成布置", "享受你的活动"],
      boardTitle: "校园活动流程",
      boardItems: ["活动想法", "套餐选择", "物料准备", "现场布置", "活动当天"],
    },
    services: {
      eyebrow: "服务介绍",
      title: "从初步想法到活动结束后的清理。",
      intro:
        "你可以单独选择某项服务，也可以组合使用。我们适合支持社团联谊、部门接待、生日布置、工作坊和校园庆祝活动。",
      groups: [
        {
          title: "策划",
          items: [
            {
              title: "活动策划",
              description: "提供主题选择、时间安排、活动流程设计和整体活动规划。",
            },
            {
              title: "场地预订协助",
              description: "帮助客户了解校内或周边可用场地，并准备基础布置方案。",
            },
          ],
        },
        {
          title: "设计与物料",
          items: [
            {
              title: "主题装饰",
              description: "提供生日、社团、节日、学术活动等主题装饰和定制视觉设计。",
            },
            {
              title: "派对用品与家具租赁",
              description: "提供桌椅、背景板、气球、灯光、标识、桌面装饰和活动道具等。",
            },
            {
              title: "宣传支持",
              description: "提供海报、微信推文、电子邀请函和活动宣传材料支持。",
            },
          ],
        },
        {
          title: "现场",
          items: [
            {
              title: "现场协调",
              description: "提供现场布置、活动支持、现场协调和活动后清理。",
            },
          ],
        },
      ],
      workflow: [
        {
          step: "01",
          title: "说明活动想法",
          description: "告诉我们活动类型、预计人数、预算、时间和正在考虑的校园空间。",
          services: ["活动策划", "场地预订协助"],
        },
        {
          step: "02",
          title: "梳理活动方案",
          description: "我们把初步想法整理成主题、时间安排、布置范围和物料清单。",
          services: ["活动策划", "主题装饰"],
        },
        {
          step: "03",
          title: "准备视觉与物料",
          description: "根据预算选择背景板、气球、桌面细节、标识、道具和可租赁用品。",
          services: ["主题装饰", "派对用品与家具租赁"],
        },
        {
          step: "04",
          title: "宣传与现场布置",
          description: "支持简单海报或邀请函，并在来宾到达前完成基础场地准备。",
          services: ["宣传支持", "现场协调"],
        },
        {
          step: "05",
          title: "活动当天支持",
          description: "活动当天提供布置检查、临时协调，以及按需提供活动后清理。",
          services: ["现场协调", "活动后清理"],
        },
      ],
    },
    packages: {
      eyebrow: "套餐价格",
      title: "适合不同校园预算的灵活方案。",
      intro: "为 WKU 学生和校园组织提供灵活、可负担的价格选择。",
      recommended: "推荐",
      cta: "预约免费咨询",
      customQuoteTitle: "定制报价",
      customQuote: "如果活动有特殊需求，可以申请定制方案。",
      pricingNote: "为 WKU 学生和校园组织提供灵活、可负担的价格选择。",
      tiers: [
        {
          name: "基础套餐",
          price: "100–300 RMB / 300–500 RMB",
          label: "小型聚会",
          suitedFor: "小型生日、简单房间布置、小型私人聚会",
          description: "适合预算有限但仍需要清晰视觉方向的学生活动。",
          features: ["基础装饰材料", "简单派对用品租赁", "小型布置支持", "适合预算有限的学生活动"],
        },
        {
          name: "标准套餐",
          price: "300–500 RMB / 400–800 RMB",
          label: "最常预约",
          suitedFor: "社团活动、教室活动、小型校园活动",
          description: "适合需要装饰、布置、基础协调和简单宣传支持的校园组织。",
          features: ["装饰与活动用品", "基础活动协调", "布置支持", "简单宣传材料支持"],
          featured: true,
        },
        {
          name: "高级套餐",
          price: "500–1000 RMB+",
          label: "较大型活动",
          suitedFor: "毕业活动、部门活动、较大型校园活动",
          description: "适合需要定制主题、完整策划和更强现场支持的较大型活动。",
          features: ["定制活动策划", "主题设计", "宣传材料", "现场协调", "活动后清理"],
        },
      ],
    },
    portfolio: {
      eyebrow: "案例展示",
      title: "校园活动案例与布置想法。",
      intro: "浏览以下模拟案例，了解 Campus Event Studio 可以如何支持不同类型的 WKU 活动。",
      serviceLabel: "服务内容",
      clientLabel: "适合客户",
      budgetLabel: "预算范围",
      contextLabel: "活动背景",
      outcomeLabel: "布置结果",
      packageLabel: "适合套餐",
      cta: "想要类似活动？预约免费咨询",
      filters: {
        all: "全部",
        student: "学生活动",
        club: "社团活动",
        academic: "学术活动",
        festival: "节日活动",
      },
      empty: "当前筛选下暂无示例。查看全部案例可以继续浏览。",
      cases: [
        {
          title: "生日房间布置",
          category: "student",
          context: "学生希望在晚课后给朋友准备宿舍生日惊喜，人数不多，但布置时间有限。",
          outcome: "完成温暖背景、气球角、桌面布置，并在庆祝后便于整理清理。",
          packageFit: "基础套餐或标准套餐",
          services: ["主题装饰", "气球", "背景板", "桌面布置"],
          client: "学生",
          budget: "300–500 RMB",
        },
        {
          title: "社团招新展位",
          category: "club",
          context: "学生组织需要在校园人流区域设置清晰、有识别度的招新桌面。",
          outcome: "完成海报布局、标识、桌面道具和可快速安装的展位方案。",
          packageFit: "标准套餐",
          services: ["展位布局", "海报", "标识", "简单装饰"],
          client: "学生组织",
          budget: "400–800 RMB",
        },
        {
          title: "毕业庆祝角",
          category: "student",
          context: "毕业生和校园部门希望在不租用大型场地的情况下设置一个拍照区域。",
          outcome: "完成拍照背景、暖色灯光、定制标识和适合合影的小型空间。",
          packageFit: "高级套餐或定制方案",
          services: ["拍照背景", "灯光", "定制标识"],
          client: "学生和校园部门",
          budget: "500–1000 RMB",
        },
        {
          title: "学术讲座布置",
          category: "academic",
          context: "教师和部门员工希望教室讲座更有秩序，来宾能快速识别入口和座位。",
          outcome: "完成入口标识、座位布局支持、宣传材料和整洁的主讲区域。",
          packageFit: "标准套餐或高级套餐",
          services: ["标识", "座位布局支持", "宣传材料"],
          client: "教师和校园部门",
          budget: "500–1000 RMB",
        },
        {
          title: "节日派对装饰",
          category: "festival",
          context: "社团活动希望节日派对更有主题感，适合拍照、游戏和聚会。",
          outcome: "完成主题道具、灯光、空间分区和统一的视觉方向。",
          packageFit: "高级套餐",
          services: ["主题设计", "道具", "灯光", "空间改造"],
          client: "社团和学生团体",
          budget: "500–1000 RMB+",
        },
        {
          title: "小型教室活动",
          category: "academic",
          context: "小型工作坊或员工活动需要基础物料、清晰桌面布局和轻量现场支持。",
          outcome: "完成简单装饰、活动用品、桌面动线和活动开始前的基础协调。",
          packageFit: "基础套餐或标准套餐",
          services: ["简单装饰", "活动用品", "基础协调"],
          client: "学生和员工",
          budget: "300–500 RMB",
        },
      ],
    },
    booking: {
      eyebrow: "在线预约",
      title: "提交预约申请。",
      intro: "填写关键活动信息，我们会帮你判断合适的服务范围和套餐。",
      submit: "提交预约申请",
      submitting: "正在提交预约申请",
      successTitle: "预约申请已收到",
      successMessage: "谢谢！我们已收到你的预约申请，并将在 24 小时内通过你偏好的联系方式联系你。",
      reset: "提交新的预约",
      requiredNote: "必填字段包括姓名、身份、微信号或邮箱、活动类型、活动日期和预算范围。",
      contactRequirement: "请填写微信号或邮箱。",
      servicesLegend: "所需服务",
      groups: {
        contact: "联系信息",
        event: "活动基础信息",
        budget: "预算与套餐",
        support: "所需支持",
        details: "风格说明",
      },
      fields: {
        fullName: {
          label: "姓名",
          placeholder: "你的姓名",
          helper: "请填写我们联系你时使用的称呼。",
          required: "请填写姓名。",
        },
        role: {
          label: "身份",
          placeholder: "请选择身份",
          helper: "这有助于我们判断活动背景。",
          required: "请选择身份。",
        },
        wechat: {
          label: "微信号",
          placeholder: "你的微信号",
          helper: "如果未填写邮箱，则需要填写微信号。",
          required: "请填写微信号或邮箱。",
        },
        email: {
          label: "邮箱",
          placeholder: "name@example.com",
          helper: "如果未填写微信号，则需要填写邮箱。",
          required: "请填写邮箱或微信号。",
        },
        phone: {
          label: "电话",
          placeholder: "+86 000 0000 0000",
          helper: "可选备用联系方式。",
          required: "请填写电话。",
        },
        eventType: {
          label: "活动类型",
          placeholder: "请选择活动类型",
          helper: "选择最接近的活动类型。",
          required: "请选择活动类型。",
        },
        eventDate: {
          label: "活动日期",
          placeholder: "选择日期",
          helper: "早期咨询可以填写大致日期。",
          required: "请选择活动日期。",
        },
        eventTime: {
          label: "活动时间",
          placeholder: "例如 18:30",
          helper: "如果时间未定，可以暂时不填。",
          required: "请填写活动时间。",
        },
        eventLocation: {
          label: "活动地点",
          placeholder: "校园教室、宿舍、户外空间或周边场地",
          helper: "如果地点未定，可以暂时不填。",
          required: "请填写活动地点。",
        },
        participants: {
          label: "预计人数",
          placeholder: "例如 45",
          helper: "大致人数有助于判断物料和场地布局。",
          required: "请填写预计人数。",
        },
        budgetRange: {
          label: "预算范围",
          placeholder: "请选择预算范围",
          helper: "选择最接近你计划的预算。",
          required: "请选择预算范围。",
        },
        preferredPackage: {
          label: "偏好套餐",
          placeholder: "请选择偏好套餐",
          helper: "咨询后可以调整。",
          required: "请选择偏好套餐。",
        },
        servicesNeeded: {
          label: "所需服务",
          placeholder: "请选择所需服务",
          helper: "可以多选。",
          required: "请至少选择一项服务。",
        },
        theme: {
          label: "主题或风格偏好",
          placeholder: "颜色、氛围、主题、参考图或布置风格",
          helper: "可选，但有助于视觉规划。",
          required: "请填写主题或风格偏好。",
        },
        requirements: {
          label: "其他需求",
          placeholder: "场地规则、时间限制、配送需求、清理说明",
          helper: "写下任何特殊限制或需求。",
          required: "请填写其他需求。",
        },
      },
      options: {
        roles: ["学生", "学生组织", "教师", "员工", "校园部门", "其他"],
        eventTypes: ["生日", "社团活动", "毕业活动", "学术活动", "节日派对", "校园部门活动", "其他"],
        budgetRanges: ["100–300 RMB", "300–500 RMB", "500–1000 RMB", "1000 RMB+", "暂不确定"],
        packages: ["基础套餐", "标准套餐", "高级套餐", "定制方案", "暂不确定"],
        services: [
          "活动策划",
          "主题装饰",
          "派对用品与家具租赁",
          "场地预订协助",
          "宣传支持",
          "现场协调",
          "活动后清理",
        ],
      },
    },
    contact: {
      eyebrow: "联系我们",
      title: "联系 Campus Event Studio",
      intro: "有活动想法？欢迎联系我们进行免费咨询，我们会帮助你选择合适的套餐。",
      hoursTitle: "工作时间",
      channels: [
        { label: "微信", value: "CampusEventStudio" },
        { label: "邮箱", value: "campuseventstudio@wku.edu" },
        { label: "电话", value: "+86 000 0000 0000" },
        { label: "地址", value: "WKU 校园内或校园周边" },
        { label: "服务范围", value: "WKU 社区及校园周边活动空间" },
      ],
      hours: ["周一至周五：10:00–20:00", "周六至周日：9:00–21:00", "活动旺季可根据需求延长服务时间"],
    },
    faq: {
      eyebrow: "FAQ",
      title: "常见活动问题。",
      items: [
        {
          question: "你们只服务 WKU 学生吗？",
          answer: "不是。我们服务 WKU 学生、学生组织、教师、员工和校园部门。",
        },
        {
          question: "可以定制主题吗？",
          answer: "可以。你可以在预约表单中填写主题、颜色方向、参考图或活动氛围。",
        },
        {
          question: "需要提前多久预约？",
          answer: "大多数活动建议提前一到两周预约。较大型布置建议更早沟通。",
        },
        {
          question: "你们提供活动后清理吗？",
          answer: "提供。活动后清理可以包含在套餐中，也可以作为附加服务申请。",
        },
        {
          question: "学生社团可以获得折扣吗？",
          answer: "学生组织可以根据活动规模、服务范围和预算申请灵活价格。",
        },
      ],
    },
    footer: {
      quickLinks: "快速链接",
      services: "服务",
      contact: "联系方式",
      copyright: "Campus Event Studio。保留所有权利。",
    },
  },
};
