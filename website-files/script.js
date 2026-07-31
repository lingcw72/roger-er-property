const translations = {
  zh: {
    topContact: "联系 Roger",
    heroEyebrow: "Rightmann 房地产顾问公司 · 新加坡",
    heroTitle: "为您安居之处，提供稳健建议。",
    heroLead: "为希望以更从容的方式处理复杂房产决定的业主，提供周到、贴近本地市场的建议。",
    heroCta: "联系 Roger", heroSecondary: "了解服务", dataNote: "公开资料核实于 2026 年 7 月 23 日。",
    portraitNote: "AI 肖像概念图——正式上线前请替换为 Roger 认可的专业照片。",
    proofYears: "15 年", proofYearsLabel: "PropertyGuru 平台经验", proofTransactions: "过去三年成交记录", proofRating: "PropertyGuru 评分",
    servicesEyebrow: "Rightmann 如何协助您", servicesTitle: "务实经验，细心运用。", servicesIntro: "为新加坡房产业主、房东及商业地产客户提供清晰、贴心的支持。",
    serviceSell: "有策略地出售", serviceSellBody: "为组屋、私人住宅及有地住宅业主提供务实建议，包括定位、定价与买家沟通。",
    serviceLease: "安心出租与承租", serviceLeaseBody: "为房东和租户提供推广、看房、协商及交接等全流程协助。",
    serviceCommercial: "商业地产", serviceCommercialBody: "为新加坡商业地产客户提供直接、清晰的建议。",
    experienceEyebrow: "广泛的实战经验", experienceTitle: "从日常居所，到复杂的房产决定。",
    experienceBody: "Roger 是 Rightmann 目前的活跃经纪，也是您的直接联络人。他的公开成交记录涵盖组屋、私人公寓、有地住宅及商业地产，尤其在整套出租与转售交易方面经验丰富。",
    experienceFooter: "PROPERTYGURU 及公开成交记录", viewPropertyGuru: "查看 PropertyGuru 资料", viewRecord: "查看成交记录",
    questionsEyebrow: "从一次有用的交流开始", questionsTitle: "几个问题，更清楚的方向。", questionsIntro: "一次从容的交流，往往是最有帮助的第一步。",
    faqOneQuestion: "Roger 可以协助哪些房产类型？", faqOneAnswer: "组屋、私人公寓、有地住宅及商业地产，涵盖买卖及租赁服务。",
    faqTwoQuestion: "可以用华语沟通吗？", faqTwoAnswer: "可以。Roger 可用英语和华语为客户提供服务。",
    contactEyebrow: "聊聊您的房产计划", contactTitle: "与 Roger 讨论您的下一步计划。", contactBody: "一次简短的交流，往往就能让下一步更清晰。",
    contactWhatsApp: "WhatsApp 联系 Roger", contactCall: "致电 Roger", contactEmail: "电邮给 Roger", previewNote: "仅供私人预览。"
  }
};

const english = {};
document.querySelectorAll("[data-i18n]").forEach((node) => { english[node.dataset.i18n] = node.innerHTML; });

function applyLanguage(language) {
  const isChinese = language === "zh";
  const strings = isChinese ? translations.zh : english;
  document.documentElement.lang = isChinese ? "zh-SG" : "en-SG";
  document.querySelectorAll("[data-i18n]").forEach((node) => { node.innerHTML = strings[node.dataset.i18n] || node.innerHTML; });
  document.title = isChinese ? "Rightmann 房地产顾问公司｜新加坡房产" : "Rightmann P&C | Singapore Property";
  sessionStorage.setItem("roger-language", isChinese ? "zh" : "en");
}

applyLanguage(sessionStorage.getItem("roger-language") || "en");
document.querySelector(".language-toggle").addEventListener("click", () => applyLanguage(document.documentElement.lang.startsWith("zh") ? "en" : "zh"));
