const translations = {
  zh: {
    skip: "跳至主要内容",
    brandRole: "房地产顾问公司",
    navApproach: "服务理念",
    navServices: "专业服务",
    navExperience: "专业经验",
    navContact: "联系 Roger",
    heroEyebrow: "Rightmann 房地产顾问公司 · 新加坡",
    heroTitle: "让每一个房产决定，<br><em>更清晰从容。</em>",
    heroLead: "无论出售、购买或出租，Rightmann 凭借丰富的新加坡组屋、私人住宅及商业地产经验，为您提供务实、清晰的建议。",
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
    approachBody: "Rightmann 创立于 1990 年，多年来一直协助新加坡客户更有信心地作出房产决定。在 rightmann.casa，<em>casa</em> 在西班牙语中意为“家”，我们以这份历史为基础，坚持以家为先的个人化视角，并结合 Roger 在 PropertyGuru 平台 15 年的经验。",
    approachQuote: "“好的房产建议，应让您更确定，而不是更有压力。”",
    servicesEyebrow: "Rightmann 如何协助您",
    servicesTitle: "一位顾问，<br>陪您走过每一步。",
    serviceSell: "有策略地出售",
    serviceSellBody: "根据您的时间规划定位、定价与买家沟通，而不只是安排刊登。",
    serviceBuy: "有依据地购买",
    serviceBuyBody: "从价值、适合度及每个选择的取舍出发，为您提供务实的第二意见。",
    serviceLease: "安心出租与承租",
    serviceLeaseBody: "为房东和租户提供推广、看房、协商及交接等全流程协助。",
    serviceCommercial: "商业地产",
    serviceCommercialBody: "针对企业自用及投资需求，提供清晰的新加坡商业地产建议。",
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
    marketBusiness: "企业与投资",
    marketSingapore: "覆盖新加坡",
    marketDistricts: "多个地区",
    listingEyebrow: "最新房源",
    listingTitle: "想了解目前市场上的机会？",
    listingBody: "房源随时变化。您可查看 Roger 在房产平台上发布的最新信息，或直接告诉他您的具体需求。",
    listingCta: "查看最新房源",
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
