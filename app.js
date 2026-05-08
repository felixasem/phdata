const useCases = {
  asthma: {
    title: "Asthma Risk Agent Dashboard",
    observance: "Asthma Awareness Month",
    lede:
      "Early-warning view for teams monitoring air quality, weather, school symptoms, medication access, emergency visits, and community reports.",
    areaLabel: "City",
    kpis: ["High-risk areas", "Average AQI", "ER visit trend", "Refill gap"],
    signals: [
      ["Air quality", "aqi", "AQI", "Outdoor activity guidance and respiratory alert trigger", 160],
      ["School symptoms", "schoolSymptoms", "%", "School nurse reports and asthma-related absenteeism", 25],
      ["Medication access", "refillGap", "%", "Controller medication refill gap among known patients", 40],
      ["Community reports", "communityReports", "", "Calls, housing concerns, and respiratory complaints", 50],
    ],
    rows: [
      row("Accra", "38,200 residents", 84, 128, 24, 31, [66, 72, 84, 79, 70, 62], ["PM2.5 spike", "Controller refill delay", "School nurse reports"], { schoolSymptoms: 19, communityReports: 42 }),
      row("Kumasi", "24,800 residents", 71, 104, 18, 24, [58, 64, 71, 74, 68, 61], ["Ozone watch", "Rising ER visits", "Missed refills"], { schoolSymptoms: 13, communityReports: 28 }),
      row("Tamale", "31,900 residents", 63, 92, 9, 18, [49, 54, 63, 59, 52, 48], ["Pollen surge", "Housing complaints"], { schoolSymptoms: 11, communityReports: 21 }),
      row("Tema", "45,600 residents", 52, 77, 5, 14, [44, 48, 52, 50, 47, 43], ["Heat exposure", "Moderate AQI"], { schoolSymptoms: 7, communityReports: 16 }),
    ],
    audiences: {
      families: "Air quality and pollen may make asthma symptoms worse. Keep rescue inhalers nearby, follow your asthma action plan, and contact your clinic if medication is running low.",
      schools: "Review asthma action plans, limit strenuous outdoor activity during poor air-quality periods, and notify families when students report respiratory symptoms.",
      clinics: "Prioritize refill outreach, same-week appointments for high-risk patients, and follow-up for recent emergency department discharges.",
    },
    actionTitles: ["Clinical outreach", "Community messaging", "School coordination", "Leadership brief"],
    actions: (area, hotCount) => [
      `Notify clinics serving ${area.name} to prioritize refill outreach for patients with recent emergency visits or missed controller fills.`,
      `Send plain-language air-quality guidance to families and community health workers in ${hotCount || 1} priority area${hotCount === 1 ? "" : "s"}.`,
      "Ask schools to review asthma action plans and adjust outdoor activity while AQI, pollen, or heat indicators remain elevated.",
      "Prepare a trend brief linking ER visits, school reports, medication access, and environmental triggers.",
    ],
  },
  handHygiene: {
    title: "Hand Hygiene Agent Dashboard",
    observance: "World Hand Hygiene Day",
    lede:
      "Operational view for infection prevention teams watching compliance gaps, sanitizer stockouts, device-associated infection signals, and high-risk units.",
    areaLabel: "City",
    kpis: ["Units above threshold", "Compliance gap", "HAI signal trend", "Stockout risk"],
    signals: [
      ["Compliance gap", "signalOne", "%", "Missed hand hygiene moments from direct observation and dispenser analytics", 45],
      ["HAI signal trend", "signalTwo", "%", "Change in device-associated or unit-linked infection signals", 35],
      ["Sanitizer stockout", "signalThree", "%", "Supply risk across wall units and mobile carts", 35],
      ["High-risk contacts", "signalFour", "", "Isolation room entries and intensive care contact volume", 60],
    ],
    rows: [
      row("Accra", "36 beds", 82, 28, 22, 24, [62, 69, 82, 78, 70, 64], ["Low compliance", "Isolation contact surge", "Sanitizer restock delay"], { signalFour: 54 }),
      row("Kumasi", "48 beds", 69, 21, 16, 18, [55, 61, 69, 66, 59, 53], ["Post-op infection watch", "Evening shift misses"], { signalFour: 37 }),
      row("Cape Coast", "52 bays", 64, 18, 13, 21, [50, 57, 64, 60, 56, 49], ["High patient turnover", "Cart stockout risk"], { signalFour: 42 }),
      row("Ho", "26 beds", 41, 9, 4, 8, [34, 38, 41, 40, 36, 32], ["Stable compliance"], { signalFour: 19 }),
    ],
    audiences: {
      staff: "Hand hygiene reminders are being targeted to moments and units with the highest preventable risk, with special attention to isolation rooms and device care.",
      managers: "Review dispenser coverage, refill routes, and shift-level compliance patterns before the next safety huddle.",
      prevention: "The agent is surfacing units where compliance gaps and early infection signals overlap, making them suitable for focused observation.",
    },
    actionTitles: ["Safety huddle", "Supply check", "Observation plan", "Executive summary"],
    actions: (area) => [
      `Schedule a focused safety huddle for ${area.name} and review missed moments by shift.`,
      "Send supply team a restock route for dispensers and mobile carts with low coverage.",
      "Assign infection prevention observation time to rooms or workflows with repeated missed moments.",
      "Summarize compliance, stockout risk, and infection signals for the daily hospital operations call.",
    ],
  },
  mentalHealth: {
    title: "Mental Health Navigation Agent Dashboard",
    observance: "Mental Health Awareness Month",
    lede:
      "Navigation dashboard for public mental health systems coordinating demand, urgency, referral completion, follow-up, and crisis service capacity.",
    areaLabel: "City",
    kpis: ["Zones above threshold", "Navigation demand", "Urgent triage trend", "Referral gap"],
    signals: [
      ["Navigation demand", "signalOne", "", "Requests for service matching, benefits help, and appointment support", 130],
      ["Urgent triage", "signalTwo", "%", "Share of contacts requiring same-day human review", 35],
      ["Referral gap", "signalThree", "%", "Referrals not completed within target window", 45],
      ["Crisis capacity", "signalFour", "%", "Mobile crisis and stabilization capacity pressure", 100],
    ],
    rows: [
      row("Accra", "18 clinics", 79, 118, 27, 34, [61, 67, 79, 75, 70, 66], ["High referral backlog", "Crisis capacity pressure", "Youth demand"], { signalFour: 86 }),
      row("Takoradi", "11 clinics", 67, 93, 22, 29, [52, 58, 67, 65, 61, 55], ["Transportation barriers", "Appointment delays"], { signalFour: 72 }),
      row("Koforidua", "9 clinics", 56, 72, 15, 21, [45, 50, 56, 58, 53, 49], ["Warm handoff gap"], { signalFour: 61 }),
      row("Bolgatanga", "8 clinics", 43, 48, 9, 14, [36, 40, 43, 42, 39, 35], ["Stable capacity"], { signalFour: 47 }),
    ],
    audiences: {
      residents: "Support is available. The navigation team can help match you to services, explain options, and connect urgent needs to a person who can respond.",
      providers: "Please review open referrals, prioritize same-day review flags, and confirm warm handoffs for residents with access barriers.",
      leaders: "Demand is concentrated in zones where referral gaps and crisis capacity pressure overlap. Staffing and call-back queues should be adjusted this week.",
    },
    actionTitles: ["Triage queue", "Referral support", "Capacity shift", "Equity review"],
    actions: (area) => [
      `Route urgent contacts in ${area.name} to human review and keep low-risk navigation tasks in the agent-assisted queue.`,
      "Generate referral completion lists for people who have not connected to care within the target window.",
      "Shift navigator hours toward service zones with crisis capacity pressure and high appointment delays.",
      "Check whether language, transport, insurance, or digital access barriers are driving referral gaps.",
    ],
  },
  womensHealth: {
    title: "Women's Preventive Health Agent Dashboard",
    observance: "National Women's Health Week",
    lede:
      "Care-gap dashboard for preventive screening, maternal follow-up, chronic condition management, and outreach across underserved communities.",
    areaLabel: "City",
    kpis: ["Segments above threshold", "Screening gap", "Follow-up trend", "Care gap"],
    signals: [
      ["Screening gap", "signalOne", "%", "Overdue preventive screenings and annual wellness visits", 45],
      ["Postpartum follow-up", "signalTwo", "%", "Missed postpartum or maternal health follow-up contacts", 40],
      ["Chronic care gap", "signalThree", "%", "Hypertension, diabetes, and medication follow-up gaps", 45],
      ["Access barriers", "signalFour", "", "Transport, childcare, language, and appointment availability flags", 80],
    ],
    rows: [
      row("Tamale", "6,400 residents", 76, 33, 21, 34, [58, 65, 76, 74, 68, 60], ["Missed postpartum visits", "Hypertension follow-up", "Transport barriers"], { signalFour: 66 }),
      row("Wa", "9,200 residents", 68, 29, 12, 31, [51, 59, 68, 64, 60, 57], ["Breast screening gap", "Clinic distance"], { signalFour: 58 }),
      row("Accra", "12,300 residents", 55, 22, 10, 23, [42, 48, 55, 53, 49, 44], ["Wellness visit gap"], { signalFour: 39 }),
      row("Kumasi", "4,900 residents", 62, 25, 14, 28, [47, 54, 62, 61, 56, 52], ["Language access", "Insurance navigation"], { signalFour: 63 }),
    ],
    audiences: {
      patients: "You may be due for preventive care or follow-up. Appointments, transportation help, and language support may be available through local care teams.",
      clinics: "Please review outreach lists for overdue screenings, postpartum follow-up, and chronic condition care gaps.",
      navigators: "Focus calls on residents with multiple barriers, especially transport, childcare, language access, and recent missed appointments.",
    },
    actionTitles: ["Screening outreach", "Maternal follow-up", "Barrier removal", "Partner brief"],
    actions: (area) => [
      `Create an outreach list for ${area.name} residents with overdue screenings or missed preventive visits.`,
      "Escalate postpartum hypertension and maternal health follow-up gaps to care managers.",
      "Match residents with transport, childcare, insurance, and language assistance before appointment booking.",
      "Share a weekly care-gap report with clinics and community partners.",
    ],
  },
  hepatitis: {
    title: "Hepatitis Screening Agent Dashboard",
    observance: "Hepatitis Awareness Month",
    lede:
      "Screening and linkage-to-care dashboard for identifying eligible patients, outreach readiness, test completion, and treatment connection gaps.",
    areaLabel: "City",
    kpis: ["Cohorts above threshold", "Eligible unscreened", "Testing trend", "Linkage gap"],
    signals: [
      ["Eligible unscreened", "signalOne", "%", "People meeting age, pregnancy, risk, or clinical screening criteria", 55],
      ["Testing trend", "signalTwo", "%", "Change in completed HBV or HCV tests", 35],
      ["Linkage gap", "signalThree", "%", "Positive tests without completed care connection", 45],
      ["Outreach readiness", "signalFour", "", "Records with valid contact details and preferred language", 100],
    ],
    rows: [
      row("Kumasi", "18,600 patients", 78, 41, 18, 32, [60, 66, 78, 73, 67, 62], ["High unscreened share", "Linkage gap", "Primary care backlog"], { signalFour: 82 }),
      row("Accra", "2,200 patients", 66, 29, 22, 18, [51, 58, 66, 64, 57, 52], ["HBV screening gap", "Prenatal follow-up"], { signalFour: 76 }),
      row("Sekondi-Takoradi", "4,800 patients", 73, 37, 16, 35, [56, 64, 73, 76, 70, 64], ["HCV risk", "Care linkage delay"], { signalFour: 68 }),
      row("Sunyani", "34,000 patients", 49, 20, 8, 16, [40, 43, 49, 48, 45, 41], ["Routine screening gap"], { signalFour: 71 }),
    ],
    audiences: {
      patients: "You may be eligible for hepatitis B or C screening. Testing is straightforward, and care teams can help with next steps if treatment is needed.",
      clinics: "Review agent-generated lists for eligible unscreened patients and prioritize those with pregnancy, risk, or abnormal liver indicators.",
      careTeams: "Focus linkage-to-care calls on positive results without confirmed follow-up, treatment evaluation, or partner service documentation.",
    },
    actionTitles: ["Eligibility list", "Testing outreach", "Linkage queue", "Quality report"],
    actions: (area) => [
      `Generate a screening list for ${area.name}, grouped by eligibility reason and preferred outreach channel.`,
      "Draft patient messages in plain language and route them for human review before sending.",
      "Create a linkage-to-care queue for positive results without documented follow-up.",
      "Summarize screening completion and linkage gaps for the hepatitis awareness campaign brief.",
    ],
  },
  stroke: {
    title: "Stroke Prevention Agent Dashboard",
    observance: "Ghana Stroke Month",
    lede:
      "Prevention dashboard for blood-pressure risk, medication adherence, prior TIA follow-up, education outreach, and rapid escalation opportunities.",
    areaLabel: "City",
    kpis: ["Groups above threshold", "BP control gap", "Follow-up trend", "Adherence gap"],
    signals: [
      ["BP control gap", "signalOne", "%", "Patients with uncontrolled or missing blood pressure follow-up", 50],
      ["Post-TIA follow-up", "signalTwo", "%", "Missed appointments after transient ischemic attack or warning event", 35],
      ["Medication adherence", "signalThree", "%", "Antihypertensive or anticoagulant refill gaps", 45],
      ["Education reach", "signalFour", "%", "High-risk patients reached with FAST and risk-factor education", 100],
    ],
    rows: [
      row("Accra", "15,200 patients", 81, 39, 19, 33, [63, 70, 81, 78, 72, 66], ["BP control gap", "Medication refill delays", "High ED utilization"], { signalFour: 54 }),
      row("Kumasi", "2,900 patients", 74, 31, 27, 26, [58, 64, 74, 72, 68, 61], ["Missed neurology follow-up", "Anticoagulant gap"], { signalFour: 61 }),
      row("Tamale", "8,700 patients", 67, 30, 14, 29, [50, 58, 67, 66, 60, 55], ["Chronic care gap"], { signalFour: 57 }),
      row("Cape Coast", "11,400 patients", 54, 22, 9, 18, [43, 49, 54, 52, 48, 44], ["Education reach gap"], { signalFour: 63 }),
    ],
    audiences: {
      patients: "Blood pressure control and medication follow-up can reduce stroke risk. Contact your care team if readings are high, medication is running low, or symptoms appear.",
      clinics: "Prioritize outreach for uncontrolled blood pressure, missed TIA follow-up, and anticoagulant or antihypertensive refill gaps.",
      partners: "Community education should focus on FAST symptom recognition, blood-pressure checks, and same-day escalation pathways.",
    },
    actionTitles: ["BP outreach", "TIA follow-up", "Medication support", "Education push"],
    actions: (area) => [
      `Prioritize ${area.name} for outreach based on blood-pressure control and medication adherence gaps.`,
      "Create a same-week follow-up queue for recent TIA or warning-event patients.",
      "Route refill gaps to pharmacy partners and care managers for rapid resolution.",
      "Schedule community FAST education and blood-pressure screening with local partners.",
    ],
  },
  preparedness: {
    title: "Emergency Preparedness Agent Dashboard",
    observance: "Public Health Preparedness",
    lede:
      "Situation-awareness dashboard for weather alerts, hospital capacity, shelter demand, medication supply, transport constraints, and public messaging.",
    areaLabel: "City",
    kpis: ["Zones above threshold", "Hospital pressure", "Shelter trend", "Supply risk"],
    signals: [
      ["Hospital pressure", "signalOne", "%", "Emergency department load, inpatient capacity, and transfer constraints", 100],
      ["Shelter demand", "signalTwo", "%", "Projected demand for cooling, warming, evacuation, or respite shelter", 100],
      ["Medication supply", "signalThree", "%", "Risk to oxygen, insulin, dialysis, and critical medication access", 60],
      ["Transport constraints", "signalFour", "", "Road closures, transit disruption, and paratransit requests", 80],
    ],
    rows: [
      row("Ada", "4 shelters", 83, 88, 76, 42, [62, 71, 83, 86, 78, 69], ["Flood watch", "Shelter demand", "Oxygen supply risk"], { signalFour: 67 }),
      row("Accra", "7 hospitals", 72, 81, 54, 34, [58, 64, 72, 76, 70, 61], ["ED pressure", "Transit disruption"], { signalFour: 61 }),
      row("Yendi", "3 hospitals", 68, 63, 49, 38, [51, 57, 68, 71, 66, 59], ["Road closures", "Dialysis transport"], { signalFour: 72 }),
      row("Bolgatanga", "2 shelters", 46, 42, 29, 18, [36, 41, 46, 44, 40, 37], ["Stable operations"], { signalFour: 28 }),
    ],
    audiences: {
      public: "Local public health teams are monitoring conditions. Follow official alerts, check on neighbors, and use designated shelters or cooling centers if needed.",
      hospitals: "Please update capacity, transfer constraints, and critical supply status so resource requests can be prioritized.",
      responders: "Focus operational checks on shelter demand, medically vulnerable residents, transport needs, and critical medication continuity.",
    },
    actionTitles: ["Situation report", "Resource request", "Shelter routing", "Public alert"],
    actions: (area) => [
      `Create an operational situation report for ${area.name} using hospital, shelter, transport, and supply signals.`,
      "Escalate resource requests for oxygen, insulin, dialysis transport, and other critical continuity needs.",
      "Route shelter staffing and supplies toward projected demand peaks.",
      "Draft public messages aligned with official weather, transport, and shelter guidance.",
    ],
  },
  misinformation: {
    title: "Health Misinformation Response Dashboard",
    observance: "Public Health Communications",
    lede:
      "Communications dashboard for detecting emerging misinformation, estimating reach, mapping community concerns, and preparing evidence-based responses.",
    areaLabel: "City",
    kpis: ["Clusters above threshold", "Reach index", "Escalation trend", "Trust gap"],
    signals: [
      ["Reach index", "signalOne", "", "Estimated visibility across public channels, search, and community reports", 100],
      ["Escalation trend", "signalTwo", "%", "Growth rate of repeated claims and questions", 60],
      ["Trust gap", "signalThree", "%", "Share of posts or calls expressing uncertainty, fear, or low institutional trust", 70],
      ["Response readiness", "signalFour", "%", "Approved plain-language answers and partner toolkits prepared", 100],
    ],
    rows: [
      row("Accra", "9 channels", 80, 84, 42, 51, [60, 69, 80, 77, 69, 63], ["High reach", "Parent questions", "Low response readiness"], { signalFour: 45 }),
      row("Tamale", "4 communities", 69, 72, 35, 39, [52, 59, 69, 73, 66, 58], ["Local concern", "Rapid sharing"], { signalFour: 52 }),
      row("Kumasi", "6 channels", 57, 55, 24, 28, [43, 49, 57, 56, 51, 46], ["Unclear shelter eligibility"], { signalFour: 68 }),
      row("Ho", "3 channels", 48, 46, 18, 24, [38, 42, 48, 47, 43, 39], ["Moderate reach"], { signalFour: 72 }),
    ],
    audiences: {
      public: "We are seeing questions about this topic. Use official local public health sources, and look for clear evidence, date, and source before sharing.",
      partners: "Please use the approved talking points and route new concerns back to the communications team for rapid review.",
      comms: "Prioritize responses where reach, uncertainty, and low response readiness overlap. Keep language specific, calm, and locally relevant.",
    },
    actionTitles: ["Claim brief", "Partner toolkit", "Response draft", "Trust check"],
    actions: (area) => [
      `Prepare a claim brief for ${area.name} with the core narrative, affected communities, and recommended response posture.`,
      "Draft plain-language responses for partner review, including what is known, what is not known, and where to get help.",
      "Identify trusted messengers and channels already serving the affected communities.",
      "Track whether questions decline after response deployment or shift into a new concern.",
    ],
  },
  chw: {
    title: "Community Health Worker Copilot Dashboard",
    observance: "Community Health Operations",
    lede:
      "Field-support dashboard helping community health workers prepare visits, summarize needs, flag urgency, and connect residents to services.",
    areaLabel: "City",
    kpis: ["Caseloads above threshold", "Visit complexity", "Urgent need trend", "Referral gap"],
    signals: [
      ["Visit complexity", "signalOne", "", "Average count of health, social, and administrative needs per visit", 12],
      ["Urgent needs", "signalTwo", "%", "Same-day escalation flags across active caseloads", 35],
      ["Referral gap", "signalThree", "%", "Food, housing, transport, or care referrals not yet completed", 45],
      ["Documentation load", "signalFour", "", "Minutes of notes, forms, and follow-up tasks per day", 90],
    ],
    rows: [
      row("Accra", "320 clients", 77, 9, 24, 34, [58, 66, 77, 75, 69, 61], ["Housing referral backlog", "Medication access", "High documentation load"], { signalFour: 74 }),
      row("Tamale", "180 clients", 64, 7, 18, 26, [49, 55, 64, 62, 57, 50], ["Postpartum follow-up", "Transport barriers"], { signalFour: 58 }),
      row("Kumasi", "410 clients", 70, 8, 20, 31, [54, 61, 70, 68, 63, 56], ["Food insecurity", "Medication reminders"], { signalFour: 69 }),
      row("Techiman", "145 clients", 59, 6, 14, 28, [45, 51, 59, 58, 52, 47], ["Language access", "Benefits navigation"], { signalFour: 62 }),
    ],
    audiences: {
      workers: "The copilot can prepare visit context, summarize open referrals, draft notes, and flag urgent needs for human review.",
      supervisors: "Caseload pressure is highest where visit complexity, referral gaps, and documentation load overlap.",
      partners: "Please confirm referral capacity and eligibility details so CHWs can connect residents without repeated handoffs.",
    },
    actionTitles: ["Visit prep", "Referral queue", "Urgency review", "Admin relief"],
    actions: (area) => [
      `Prepare visit summaries for ${area.name}, including recent contacts, open referrals, barriers, and preferred language.`,
      "Flag same-day needs for supervisor review before field visits begin.",
      "Create a referral follow-up queue grouped by food, housing, transport, benefits, and clinical care.",
      "Draft structured notes and next steps so CHWs spend less time on documentation after visits.",
    ],
  },
  environmental: {
    title: "Environmental Health Surveillance Dashboard",
    observance: "Environmental Health Surveillance",
    lede:
      "Neighborhood surveillance dashboard connecting air, water, heat, housing complaints, and emergency department data to detect risks earlier.",
    areaLabel: "City",
    kpis: ["Areas above threshold", "Exposure index", "ED trend", "Complaint gap"],
    signals: [
      ["Exposure index", "signalOne", "", "Combined air, water, heat, and housing exposure score", 100],
      ["ED trend", "signalTwo", "%", "Change in environment-linked emergency visits", 35],
      ["Complaint gap", "signalThree", "%", "Open housing, mold, water, or pest complaints past target", 45],
      ["Inspection load", "signalFour", "", "Inspection, sampling, and follow-up workload", 80],
    ],
    rows: [
      row("Sekondi-Takoradi", "21,400 residents", 82, 88, 24, 36, [62, 70, 82, 80, 74, 66], ["Water advisory", "Mold complaints", "ED respiratory rise"], { signalFour: 69 }),
      row("Tema", "18,700 residents", 75, 81, 19, 31, [58, 64, 75, 77, 71, 63], ["Air exposure", "Inspection backlog"], { signalFour: 73 }),
      row("Kumasi", "26,300 residents", 63, 66, 12, 27, [49, 55, 63, 61, 56, 50], ["Heat island", "Housing complaints"], { signalFour: 54 }),
      row("Sunyani", "14,900 residents", 44, 42, 4, 13, [36, 40, 44, 43, 39, 35], ["Stable indicators"], { signalFour: 29 }),
    ],
    audiences: {
      residents: "Public health is monitoring local environmental conditions. Follow official guidance and report water, mold, pest, heat, or air-quality concerns.",
      inspectors: "Prioritize inspections where exposure signals, complaints, and health indicators overlap.",
      leaders: "The strongest signal is where environmental exposure and health outcomes are moving together, especially with unresolved complaints.",
    },
    actionTitles: ["Exposure review", "Inspection route", "Resident alert", "Agency brief"],
    actions: (area) => [
      `Prioritize ${area.name} for exposure review because environmental and health signals are overlapping.`,
      "Build an inspection route around unresolved complaints, sampling needs, and high-risk buildings.",
      "Draft resident guidance for water, air, heat, housing, or pest risks using plain local language.",
      "Share a cross-agency brief linking environmental indicators, complaints, inspections, and ED trends.",
    ],
  },
};

const state = {
  useCase: "asthma",
  selected: "All areas",
  threshold: 65,
  audience: "",
};

const elements = {
  observanceLabel: document.querySelector("#observanceLabel"),
  dashboardTitle: document.querySelector("#dashboardTitle"),
  dashboardLede: document.querySelector("#dashboardLede"),
  refreshTime: document.querySelector("#refreshTime"),
  refreshDashboard: document.querySelector("#refreshDashboard"),
  kpiOneValue: document.querySelector("#kpiOneValue"),
  kpiOneLabel: document.querySelector("#kpiOneLabel"),
  kpiTwoValue: document.querySelector("#kpiTwoValue"),
  kpiTwoLabel: document.querySelector("#kpiTwoLabel"),
  kpiThreeValue: document.querySelector("#kpiThreeValue"),
  kpiThreeLabel: document.querySelector("#kpiThreeLabel"),
  kpiFourValue: document.querySelector("#kpiFourValue"),
  kpiFourLabel: document.querySelector("#kpiFourLabel"),
  useCaseSelect: document.querySelector("#useCaseSelect"),
  areaSelect: document.querySelector("#areaSelect"),
  timeWindow: document.querySelector("#timeWindow"),
  threshold: document.querySelector("#threshold"),
  thresholdLabel: document.querySelector("#thresholdLabel"),
  selectedBadge: document.querySelector("#selectedBadge"),
  riskHeading: document.querySelector("#riskHeading"),
  riskList: document.querySelector("#riskList"),
  signalTitle: document.querySelector("#signalTitle"),
  signalGrid: document.querySelector("#signalGrid"),
  riskBars: document.querySelector("#riskBars"),
  timelineNote: document.querySelector("#timelineNote"),
  actionList: document.querySelector("#actionList"),
  messageDraft: document.querySelector("#messageDraft"),
  briefingText: document.querySelector("#briefingText"),
  tabs: document.querySelector(".message-tabs"),
};

initialize();

function initialize() {
  elements.useCaseSelect.replaceChildren(
    ...Object.entries(useCases).map(([key, useCase]) => optionFor(key, useCase.title)),
  );

  elements.useCaseSelect.addEventListener("change", () => {
    state.useCase = elements.useCaseSelect.value;
    state.selected = "All areas";
    state.audience = "";
    render();
  });

  elements.areaSelect.addEventListener("change", () => {
    state.selected = elements.areaSelect.value;
    render();
  });

  elements.threshold.addEventListener("input", () => {
    state.threshold = Number(elements.threshold.value);
    render();
  });

  elements.timeWindow.addEventListener("change", render);

  elements.refreshDashboard.addEventListener("click", () => {
    elements.refreshTime.textContent = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    render();
  });

  render();
}

function render() {
  const useCase = currentUseCase();
  const selectedRows = getSelectedRows(useCase);
  const primary = selectedRows[0];
  const priorityRows = useCase.rows.filter((item) => item.risk >= state.threshold);
  const audienceKeys = Object.keys(useCase.audiences);

  if (!state.audience || !useCase.audiences[state.audience]) {
    state.audience = audienceKeys[0];
  }

  elements.observanceLabel.textContent = useCase.observance;
  elements.dashboardTitle.textContent = useCase.title;
  elements.dashboardLede.textContent = useCase.lede;
  elements.riskHeading.textContent = `${useCase.areaLabel} Risk`;
  elements.thresholdLabel.textContent = `${state.threshold} risk score`;
  elements.selectedBadge.textContent = state.selected;
  elements.signalTitle.textContent =
    state.selected === "All areas" ? "Current Drivers" : `${primary.name} Drivers`;

  renderSelectors(useCase);
  renderKpis(useCase, selectedRows, priorityRows);
  renderRiskList(useCase);
  renderSignals(useCase, selectedRows);
  renderTimeline(primary);
  renderActions(useCase, primary, priorityRows.length);
  renderAudienceTabs(useCase);
  renderBriefing(useCase, selectedRows, priorityRows);
}

function renderSelectors(useCase) {
  const areaOptions = [optionFor("All areas", `All ${pluralize(useCase.areaLabel).toLowerCase()}`)].concat(
    useCase.rows.map((item) => optionFor(item.name, item.name)),
  );
  elements.areaSelect.replaceChildren(...areaOptions);
  elements.useCaseSelect.value = state.useCase;
  elements.areaSelect.value = state.selected;
}

function renderKpis(useCase, rows, priorityRows) {
  const [first, second, third, fourth] = useCase.kpis;
  elements.kpiOneLabel.textContent = first;
  elements.kpiTwoLabel.textContent = second;
  elements.kpiThreeLabel.textContent = third;
  elements.kpiFourLabel.textContent = fourth;
  elements.kpiOneValue.textContent = priorityRows.length;
  elements.kpiTwoValue.textContent = Math.round(average(rows, "signalOne"));
  elements.kpiThreeValue.textContent = `${formatSigned(Math.round(average(rows, "signalTwo")))}%`;
  elements.kpiFourValue.textContent = `${Math.round(average(rows, "signalThree"))}%`;
}

function renderRiskList(useCase) {
  const rows = [...useCase.rows]
    .sort((a, b) => b.risk - a.risk)
    .map((area) => {
      const rowElement = document.createElement("article");
      const button = document.createElement("button");
      const score = document.createElement("span");

      rowElement.className = `risk-row ${state.selected === area.name ? "active" : ""}`;
      button.type = "button";
      button.innerHTML = `<strong>${area.name}</strong><small>${area.meta} | ${area.drivers.join(", ")}</small>`;
      button.addEventListener("click", () => {
        state.selected = area.name;
        render();
      });

      score.className = `risk-score ${riskClass(area.risk)}`;
      score.textContent = area.risk;
      rowElement.append(button, score);
      return rowElement;
    });

  elements.riskList.replaceChildren(...rows);
}

function renderSignals(useCase, rows) {
  const cards = useCase.signals.map(([label, key, unit, note, max]) => {
    const value = Math.round(average(rows, key));
    const width = Math.min(100, Math.round((value / max) * 100));
    const card = document.createElement("article");
    card.className = "signal-card";
    card.innerHTML = `
      <strong>${label}</strong>
      <div class="signal-value"><span>${value}</span><em>${unit}</em></div>
      <div class="signal-meter" aria-hidden="true"><div style="width:${width}%"></div></div>
      <small>${note}</small>
    `;
    return card;
  });

  elements.signalGrid.replaceChildren(...cards);
}

function renderTimeline(area) {
  const labels = ["Now", "12h", "24h", "36h", "48h", "72h"];
  const limit = elements.timeWindow.value === "24" ? 3 : 6;
  const bars = area.outlook.slice(0, limit).map((value, index) => {
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.innerHTML = `
      <div class="bar-fill" style="height:${Math.max(28, value * 1.55)}px"></div>
      <span>${labels[index]}</span>
    `;
    return bar;
  });

  elements.timelineNote.textContent =
    area.risk >= state.threshold ? "Above intervention threshold" : "Below current intervention threshold";
  elements.riskBars.replaceChildren(...bars);
}

function renderActions(useCase, area, priorityCount) {
  const actions = useCase.actions(area, priorityCount);
  const cards = actions.map((text, index) => {
    const card = document.createElement("article");
    card.className = "action-card";
    card.innerHTML = `
      <span class="action-index">${index + 1}</span>
      <div><strong>${useCase.actionTitles[index]}</strong><small>${text}</small></div>
    `;
    return card;
  });

  elements.actionList.replaceChildren(...cards);
}

function renderAudienceTabs(useCase) {
  const buttons = Object.keys(useCase.audiences).map((key) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.audience = key;
    button.textContent = titleCase(key);
    button.classList.toggle("active", key === state.audience);
    button.addEventListener("click", () => {
      state.audience = key;
      render();
    });
    return button;
  });

  elements.tabs.replaceChildren(...buttons);
  elements.messageDraft.textContent = `${selectedAreaName()}: ${useCase.audiences[state.audience]}`;
}

function renderBriefing(useCase, rows, priorityRows) {
  const topArea = [...useCase.rows].sort((a, b) => b.risk - a.risk)[0];
  const avgRisk = Math.round(average(rows, "risk"));
  const names = priorityRows.map((area) => area.name).join(", ") || `no ${useCase.areaLabel.toLowerCase()}s`;

  elements.briefingText.textContent =
    `The agent estimates an average risk score of ${avgRisk}. ${names} currently meet the intervention threshold of ${state.threshold}. ` +
    `${topArea.name} remains the highest-priority ${useCase.areaLabel.toLowerCase()}, driven by ${topArea.drivers.join(", ").toLowerCase()}. ` +
    "Recommended next step: move from monitoring to targeted outreach, partner coordination, and human review of high-impact decisions.";
}

function row(name, meta, risk, signalOne, signalTwo, signalThree, outlook, drivers, extra = {}) {
  return {
    name,
    meta,
    risk,
    signalOne,
    signalTwo,
    signalThree,
    signalFour: extra.signalFour ?? extra.communityReports ?? 0,
    schoolSymptoms: extra.schoolSymptoms ?? signalTwo,
    communityReports: extra.communityReports ?? extra.signalFour ?? 0,
    aqi: signalOne,
    erTrend: signalTwo,
    refillGap: signalThree,
    outlook,
    drivers,
  };
}

function currentUseCase() {
  return useCases[state.useCase];
}

function getSelectedRows(useCase) {
  if (state.selected === "All areas") return useCase.rows;
  return useCase.rows.filter((area) => area.name === state.selected);
}

function selectedAreaName() {
  return state.selected === "All areas" ? "All areas" : state.selected;
}

function optionFor(value, text = value) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = text;
  return option;
}

function average(items, key) {
  return items.reduce((sum, item) => sum + item[key], 0) / items.length;
}

function riskClass(value) {
  if (value >= 70) return "risk-high";
  if (value >= 55) return "risk-watch";
  return "risk-steady";
}

function titleCase(value) {
  return value
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (letter) => letter.toUpperCase());
}

function pluralize(value) {
  if (value.endsWith("y")) return `${value.slice(0, -1)}ies`;
  return `${value}s`;
}

function formatSigned(value) {
  return value > 0 ? `+${value}` : String(value);
}
