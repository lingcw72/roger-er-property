const translations = {
  zh: {
    skip: "跳至主要内容",
    brandRole: "房地产顾问公司",
    navApproach: "服务理念",
    navServices: "专业服务",
    navExperience: "专业经验",
    navQuestions: "常见问题",
    navContact: "联系 Roger",
    heroEyebrow: "Rightmann 房地产顾问公司 · 新加坡",
    heroTitle: "让每一个房产决定，<br><em>更清晰从容。</em>",
    heroLead: "无论出售或出租，Rightmann 凭借丰富的新加坡组屋、私人住宅、有地住宅及商业地产经验，为您提供务实、清晰的建议。",
    heroCta: "开始咨询",
    heroSecondary: "认识您的专属顾问",
    proofYears: "15 年",
    proofYearsLabel: "PropertyGuru 平台经验",
    proofTransactions: "过去三年成交记录",
    proofRating: "PropertyGuru 评分",
    dataNote: "公开资料核实于 2026 年 7 月 23 日。",
    portraitNote: "AI 肖像概念图——正式上线前请替换为 Roger 认可的专业照片。",
    approachEyebrow: "更从容的房产旅程",
    approachTitle: "先了解您的目标，<br>再规划每一步。",
    approachBody: "每一次房产决定，都源于真实的生活目标：提升回报、缩短空置期、为家人换取更大空间，或开启人生新阶段。Roger 从您的目标出发，以市场洞察、细致协调和清晰沟通推进整个过程。",
    approachQuote: "“好的房产建议，应让您更确定，而不是更有压力。”",
    servicesEyebrow: "Rightmann 如何协助您",
    servicesTitle: "一位顾问，<br>陪您走过每一步。",
    serviceSell: "有策略地出售",
    serviceSellBody: "为组屋、私人住宅及有地住宅业主提供务实建议，包括定位、定价与买家沟通。",
    servicePrivate: "私人住宅与有地住宅",
    servicePrivateBody: "为私人公寓及有地住宅业主的房产决定提供清晰支持。",
    serviceLease: "安心出租与承租",
    serviceLeaseBody: "为房东和租户提供推广、看房、协商及交接等全流程协助。",
    serviceCommercial: "商业地产",
    serviceCommercialBody: "为新加坡商业地产客户提供直接、清晰的建议。",
    experienceEyebrow: "广泛的实战经验",
    experienceTitle: "从日常居所，到复杂的房产决定。",
    experienceBody: "Roger 是 Rightmann 目前的活跃经纪，也是您的直接联络人。他的公开成交记录涵盖组屋、私人公寓、有地住宅及商业地产，尤其在整套出租与转售交易方面经验丰富。",
    viewPropertyGuru: "查看 PropertyGuru 资料",
    viewRecord: "查看成交记录",
    marketLabel: "房产经验",
    marketHdb: "组屋",
    marketSalesRentals: "买卖与出租",
    marketPrivate: "私人住宅",
    marketCondos: "公寓与有地住宅",
    marketCommercial: "商业地产",
    marketBusiness: "客户代理服务",
    marketSingapore: "覆盖新加坡",
    marketDistricts: "多个地区",
    listingEyebrow: "最新房源",
    listingTitle: "想了解目前市场上的机会？",
    listingBody: "房源随时变化。您可查看 Roger 在房产平台上发布的最新信息，或直接告诉他您的具体需求。",
    listingCta: "查看最新房源",
    questionsEyebrow: "从一次有用的交流开始",
    questionsTitle: "几个问题，<br>更清楚的方向。",
    faqOneQuestion: "Roger 可以协助哪些房产类型？",
    faqOneAnswer: "Roger 为组屋、私人公寓、有地住宅及商业地产客户提供服务，涵盖买卖、租赁、房东出租协助及租户代理服务。",
    faqTwoQuestion: "如何查看目前的房源机会？",
    faqTwoAnswer: "房源变化很快。您可查看 Roger 的 PropertyGuru 资料，或直接告诉他您考虑的房产类型、区域和时间安排。",
    faqThreeQuestion: "可以用华语沟通吗？",
    faqThreeAnswer: "可以。Roger 可用英语和华语为客户提供服务。",
    contactEyebrow: "聊聊您的房产计划",
    contactTitle: "与 Roger 讨论您的下一步计划。",
    contactBody: "一次简短的交流，往往就能让下一步更清晰。",
    contactWhatsApp: "WhatsApp 联系 Roger",
    contactCall: "致电 Roger",
    contactEmail: "电邮给 Roger",
    contactNote: "Eddy Er 是 Rightmann 的负责人。Roger 是处理网站咨询的活跃经纪。",
    footerRole: "房地产顾问公司"
  }
};

const english = {};
document.querySelectorAll("[data-i18n]").forEach((node) => {
  english[node.dataset.i18n] = node.innerHTML;
});

function applyLanguage(language) {
  const isChinese = language === "zh";
  const strings = isChinese ? translations.zh : english;
  document.documentElement.lang = isChinese ? "zh-SG" : "en-SG";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const translated = strings[node.dataset.i18n];
    if (translated) node.innerHTML = translated;
  });
  document.title = isChinese
    ? "Rightmann 房地产顾问公司｜新加坡房产"
    : "Rightmann Properties & Consultants | Singapore Property";
  sessionStorage.setItem("roger-language", isChinese ? "zh" : "en");
}

const savedLanguage = sessionStorage.getItem("roger-language");
applyLanguage(savedLanguage || "en");

document.querySelector(".language-toggle").addEventListener("click", () => {
  applyLanguage(document.documentElement.lang.startsWith("zh") ? "en" : "zh");
});

document.getElementById("year").textContent = new Date().getFullYear();
