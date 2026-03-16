const MANUAL_DATA_KEY = "albayrak_manual_data_v1";
const CONFIG_KEY = "albayrak_vehicle_config_v1";

const baseData = {
  reportDate: "Hafta 11 • 2026",
  concreteData: [
    {
      key: "finike",
      plant: "Finike Beton Santrali",
      production_m3: 2693.5,
      trip_count: 291,
      next_week_plan_m3: 1343,
      featured_customer: "Ahmet Yenigün 240 m³, Hill Grup 266 m³",
      next_week_jobs: "Yaztaş 120 m³, Kemal Gökçe ve Onur Konsantre 100 m³",
      collection_tl: 1268925,
      market_note: "Bu hafta pazarda fiyat artışı yaşandı",
      lost_job_note: "HSD'nin yönlendirdiği sahil güvenlik müteahhidi çekle çalışmak istediği için iş olmadı",
      overall_status: "Yeşil"
    },
    {
      key: "kas",
      plant: "Kaş Beton Santrali",
      production_m3: 1024,
      trip_count: 143,
      next_week_plan_m3: 500,
      featured_customer: "Kanyon Mimarlık",
      next_week_jobs: "Yok",
      collection_tl: 2510005,
      market_note: "Fiyat düşük olduğu için rekabet baskısı var",
      lost_job_note: "Fiyat yükseldiği için iş Atlas Beton’a gitti",
      personnel_shortage: "Operatör eksikliği",
      overall_status: "Sarı"
    },
    {
      key: "kalkan",
      plant: "Kalkan Beton Santrali",
      production_m3: 1110,
      trip_count: 157,
      next_week_plan_m3: 650,
      featured_customer: "İZZ Yapı 194 m³",
      next_week_jobs: "İZZ Yapı 250 m³",
      collection_tl: 2500000,
      market_note: "Rakip firma yaklaşık 300 TL daha düşük fiyat veriyor",
      lost_job_note: "Rakiplerin fiyatı daha aşağıda olduğu için kaçan iş oldu",
      critical_failure: "Silo helezonları söküldü",
      overall_status: "Yeşil"
    },
    {
      key: "antalya",
      plant: "Antalya Beton Santrali",
      production_m3: 580,
      trip_count: 53,
      next_week_plan_m3: 500,
      featured_customer: "Uçar İnşaat, Akil Global",
      next_week_jobs: "Big Yapı",
      collection_tl: 40000,
      overall_status: "Yeşil"
    },
    { key: "elmali", plant: "Elmalı Beton", no_weekly_data: true, note: "Bu hafta üretim raporu yok" }
  ],
  aggregateData: [
    {
      key: "finike",
      plant: "Finike Agrega Tesisi",
      production_ton: 15750,
      dispatch_ton: 14550,
      truck_trip_count: 622,
      kirma_kum_stock: "Dikkat",
      stock_3: "Normal",
      critical_failure: "Yok",
      overall_status: "Yeşil"
    },
    {
      key: "kas",
      plant: "Kaş Agrega Tesisi",
      production_ton: 5118.62,
      dispatch_ton: 2464.87,
      truck_trip_count: 242,
      kirma_kum_stock: "Normal",
      stock_3: "Kritik",
      critical_failure: "Bunker besleme bandı koptu",
      downtime_hours: 16,
      personnel_shortage: "Şoför",
      data_quality_note: "Eski veri formatı düzeltilmiş ve doğrulanmış",
      overall_status: "Sarı"
    },
    {
      key: "elmali",
      plant: "Elmalı Agrega Tesisi",
      production_ton: 0,
      dispatch_ton: 0,
      truck_trip_count: 0,
      kirma_kum_stock: "Veri bekleniyor",
      stock_3: "Veri bekleniyor",
      critical_failure: "Veri bekleniyor",
      overall_status: "Normal"
    }
  ],
  fleetData: {
    total_active_vehicles: 256,
    total_faulty_vehicles: 7,
    repaired_this_week: 10,
    open_faults: [
      "07 ALK 016 - Şase çatlak",
      "07 TCS 30 - Şanzıman arızası",
      "07 AAT 886 - Vizelik bakım",
      "07 AAH 366 - Vizelik bakım",
      "07 TM 073 - Vizelik bakım",
      "07 TL 595 - Kaza yaptı",
      "07 AAD 814 - Şase çatlak"
    ],
    waiting_spare_part: "07 TL 595 - Sigorta onayı bekleniyor",
    planned_maintenances: [
      "Vizelik araçlar",
      "07 AAD 814 şase yapıldı, damper montaj yapılacak",
      "07 ALK 016 bayramdan sonra şase yapılacak",
      "07 TL 595 kaporta montaj / tamir bakım"
    ],
    capacity_status: "Yetersiz",
    main_risk: "Forklift sayısı yetersiz; arıza olursa operasyon zorlanır",
    management_approval: "Elmalı 07 AGH 136 için mevcut vinç üst yapısının BMC mikser kamyon üzerine alınması",
    overall_status: "Normal"
  },
  mechanicalData: {
    completed_maintenance_count: 7,
    ongoing_jobs: ["Kalkan (Yeşilköy) beton santralinin helezon bakımı"],
    critical_plant_failures: [
      "Kırıcı içine metal parça girmesi",
      "Elektrik motorlarının yanması",
      "Bantların ansızın kopması"
    ],
    downtime_status: "Uzun süreli duruş (2 saatten fazla)",
    plant_safety: "Dikkat edilmesi gereken konu var",
    management_approval_required: [
      "Konkasör tesisine DST kurulması",
      "Dikmilli kırıcı önüne elek kurulması",
      "Hazır sıva tesisinin tamamlanması",
      "Paletli ekskavatörlerin yenilenmesi"
    ],
    overall_status: "Dikkat"
  },
  vehicleConfig: {
    finike: { mixer_count: 14, pump_count: 4, truck_count: 0 },
    antalya: { mixer_count: 5, pump_count: 2, truck_count: 0 },
    elmali: { mixer_count: 7, pump_count: 1, truck_count: 0 },
    kas: { mixer_count: 6, pump_count: 2, truck_count: 6 },
    kalkan: { mixer_count: null, pump_count: 2, truck_count: 11 }
  }
};

const state = {
  tab: "all",
  plantFilter: "all",
  meetingMode: false,
  config: loadConfig()
};

function loadConfig() {
  const saved = JSON.parse(localStorage.getItem(CONFIG_KEY) || "null");
  return { ...structuredClone(baseData.vehicleConfig), ...(saved || {}) };
}

function mergeManualData() {
  const data = structuredClone(baseData);
  const manual = JSON.parse(localStorage.getItem(MANUAL_DATA_KEY) || "null");
  if (!manual) return data;

  data.concreteData = data.concreteData.map((c) => {
    const o = manual.concrete?.[c.key];
    if (!o) return c;
    if (c.no_weekly_data) return { ...c, ...o, no_weekly_data: false, note: "" };
    return { ...c, ...o };
  });
  data.aggregateData = data.aggregateData.map((a) => {
    const o = manual.aggregate?.[a.key];
    return o ? { ...a, ...o } : a;
  });
  return data;
}

function saveConfig() {
  localStorage.setItem(CONFIG_KEY, JSON.stringify(state.config));
}

const formatNumber = (v, d = 2) => new Intl.NumberFormat("tr-TR", { maximumFractionDigits: d }).format(v);
const formatInt = (v) => new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 }).format(v);
const formatMoney = (v) => new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 0 }).format(v);
const safeDiv = (a, b) => (a && b ? a / b : null);

function statusClass(text) {
  if (!text) return "neutral";
  const t = text.toLowerCase();
  if (t.includes("kritik") || t.includes("kırmızı")) return "red";
  if (t.includes("sarı") || t.includes("dikkat") || t.includes("yetersiz")) return "yellow";
  if (t.includes("normal")) return "neutral";
  return "green";
}

function thresholdStatus(value, metric) {
  if (value == null) return "neutral";
  if (metric === "m3_trip") return value >= 8 ? "green" : value >= 6 ? "yellow" : "red";
  if (metric === "trips_mixer") return value >= 25 ? "green" : value >= 18 ? "yellow" : "red";
  if (metric === "m3_pump") return value >= 600 ? "green" : value >= 400 ? "yellow" : "red";
  return "neutral";
}

function getData() {
  return mergeManualData();
}

function concreteWithMetrics() {
  const d = getData();
  return d.concreteData.map((c) => {
    const cfg = state.config[c.key] || {};
    const m3_per_trip = safeDiv(c.production_m3, c.trip_count);
    const trips_per_mixer = safeDiv(c.trip_count, cfg.mixer_count);
    const m3_per_mixer = safeDiv(c.production_m3, cfg.mixer_count);
    const m3_per_pump = safeDiv(c.production_m3, cfg.pump_count);
    const daily_m3_per_pump = safeDiv(m3_per_pump, 6);
    return { ...c, cfg, m3_per_trip, trips_per_mixer, m3_per_mixer, m3_per_pump, daily_m3_per_pump };
  });
}

function aggregateWithMetrics() {
  const d = getData();
  return d.aggregateData.map((a) => ({
    ...a,
    ton_per_truck_trip: safeDiv(a.production_ton, a.truck_trip_count),
    dispatch_ratio: safeDiv(a.dispatch_ton, a.production_ton)
  }));
}

function visibleConcrete() {
  const list = concreteWithMetrics().filter((x) => !x.no_weekly_data);
  return state.plantFilter === "all" ? list : list.filter((x) => x.key === state.plantFilter);
}

function renderFilters() {
  const d = getData();
  const plantSelect = document.getElementById("plantFilter");
  const options = [{ key: "all", label: "Tüm Tesisler" }, ...d.concreteData.map((c) => ({ key: c.key, label: c.plant }))];
  plantSelect.innerHTML = options.map((o) => `<option value="${o.key}">${o.label}</option>`).join("");
  plantSelect.value = state.plantFilter;
  plantSelect.onchange = (e) => {
    state.plantFilter = e.target.value;
    renderAll();
  };
}

const badge = (text, css) => `<span class="status ${css}">${text}</span>`;
const fmtOrNA = (v, suffix = "") => (v == null ? badge("Veri yok", "neutral") : `${formatNumber(v)}${suffix}`);

function renderKpis() {
  const d = getData();
  const concrete = visibleConcrete();
  const aggregate = aggregateWithMetrics();

  const kpis = [
    ["Toplam Beton Üretimi", `${formatNumber(concrete.reduce((s, x) => s + x.production_m3, 0), 1)} m³`],
    ["Toplam Tahsilat", formatMoney(concrete.reduce((s, x) => s + (x.collection_tl || 0), 0))],
    ["Toplam Agrega Üretimi", `${formatNumber(aggregate.reduce((s, x) => s + x.production_ton, 0), 2)} ton`],
    ["Toplam Aktif Araç", formatInt(d.fleetData.total_active_vehicles)],
    ["Arızalı Araç Sayısı", formatInt(d.fleetData.total_faulty_vehicles)],
    ["Genel Risk Durumu", "Dikkat"]
  ];

  document.getElementById("kpiGrid").innerHTML = kpis.map(([t, v]) => `<article class="card kpi-card"><h3>${t}</h3><div class="value">${v}</div></article>`).join("");

  const validMixer = concrete.filter((x) => x.trips_per_mixer != null);
  const validPump = concrete.filter((x) => x.daily_m3_per_pump != null);
  const avgM3Trip = safeDiv(concrete.reduce((s, x) => s + x.production_m3, 0), concrete.reduce((s, x) => s + x.trip_count, 0));
  const avgDailyPump = safeDiv(validPump.reduce((s, x) => s + x.daily_m3_per_pump, 0), validPump.length);
  const avgTonTrip = safeDiv(aggregate.reduce((s, x) => s + x.production_ton, 0), aggregate.reduce((s, x) => s + x.truck_trip_count, 0));
  const bestMixer = validMixer.slice().sort((a, b) => b.trips_per_mixer - a.trips_per_mixer)[0];

  const secondary = [
    ["Ortalama m³ / Sefer", avgM3Trip ? formatNumber(avgM3Trip) : "Veri yok"],
    ["Ortalama Günlük m³ / Pompa", avgDailyPump ? formatNumber(avgDailyPump) : "Veri yok"],
    ["Ortalama Ton / Kamyon Seferi", avgTonTrip ? formatNumber(avgTonTrip) : "Veri yok"],
    ["En Verimli Mikser Kullanımı", bestMixer ? `${bestMixer.plant.replace(" Beton Santrali", "")} (${formatNumber(bestMixer.trips_per_mixer)})` : "Veri yok"]
  ];

  document.getElementById("secondaryKpiGrid").innerHTML = secondary.map(([t, v]) => `<article class="card kpi-card secondary"><h3>${t}</h3><div class="value">${v}</div></article>`).join("");
}

function renderProductionCharts() {
  const concrete = visibleConcrete();
  const aggregate = aggregateWithMetrics();
  const totalConcreteCapacity = Math.max(concrete.reduce((s, x) => s + (x.production_m3 || 0), 0), 1);
  const totalAggregateCapacity = Math.max(aggregate.reduce((s, x) => s + (x.production_ton || 0), 0), 1);

  const block = (title, rows, max, unit) => `<div class="chart-card"><h3>${title}</h3>${rows
    .map(
      (r) => `<div class="chart-row"><span>${r.name}</span><div class="chart-bar"><i style="width:${Math.round((r.value / max) * 100)}%"></i></div><strong>${formatNumber(r.value, 1)} ${unit}</strong></div>`
    )
    .join("")}</div>`;

  document.getElementById("productionCharts").innerHTML =
    block(
      "Beton Üretimi",
      concrete.map((c) => ({ name: c.plant.replace(" Beton Santrali", ""), value: c.production_m3 })),
      totalConcreteCapacity,
      "m³"
    ) +
    block(
      "Agrega Üretimi",
      aggregate.map((a) => ({ name: a.plant.replace(" Agrega Tesisi", ""), value: a.production_ton })),
      totalAggregateCapacity,
      "ton"
    );
}

function renderConcrete() {
  const d = getData();
  const concrete = visibleConcrete();
  const totalConcreteCapacity = Math.max(concrete.reduce((s, x) => s + (x.production_m3 || 0), 0), 1);
  document.getElementById("betonBars").innerHTML = concrete
    .map((c) => `<div class="bar-row"><strong>${c.plant.replace(" Beton Santrali", "")}</strong><div class="bar"><span style="width:${Math.round((c.production_m3 / totalConcreteCapacity) * 100)}%"></span></div><span>${formatNumber(c.production_m3)} m³</span></div>`)
    .join("");

  const noData = d.concreteData.find((x) => x.no_weekly_data && (state.plantFilter === "all" || x.key === state.plantFilter));
  const rows = concrete
    .map(
      (c) => `<tr class="clickable" data-drawer="${c.key}">
        <td>${c.plant}</td><td>${formatNumber(c.production_m3, 1)}</td><td>${formatInt(c.trip_count)}</td>
        <td>${formatMoney(c.collection_tl || 0)}</td><td>${formatNumber(c.next_week_plan_m3 || 0, 1)} m³</td>
        <td>${badge(c.overall_status, statusClass(c.overall_status))}</td></tr>`
    )
    .join("");
  document.getElementById("betonTableBody").innerHTML = rows + (noData ? `<tr><td>${noData.plant}</td><td colspan="5"><span class="warn-badge">Veri Yok</span> ${noData.note}</td></tr>` : "");
  document.querySelectorAll("[data-drawer]").forEach((el) => (el.onclick = () => openDrawer(el.dataset.drawer)));
}

function renderLogisticsTable() {
  document.getElementById("logisticsTableBody").innerHTML = concreteWithMetrics()
    .filter((c) => !c.no_weekly_data && (state.plantFilter === "all" || c.key === state.plantFilter))
    .map((c) => {
      const mixWarn = c.cfg.mixer_count == null ? '<span class="warn-badge">Mikser verisi eksik</span>' : "";
      return `<tr>
        <td>${c.plant} ${mixWarn}</td>
        <td>${formatNumber(c.production_m3, 1)}</td><td>${formatInt(c.trip_count)}</td><td>${c.cfg.mixer_count ?? "-"}</td><td>${c.cfg.pump_count ?? "-"}</td>
        <td>${badge(fmtOrNA(c.m3_per_trip), thresholdStatus(c.m3_per_trip, "m3_trip"))}</td>
        <td>${badge(fmtOrNA(c.trips_per_mixer), thresholdStatus(c.trips_per_mixer, "trips_mixer"))}</td>
        <td>${fmtOrNA(c.m3_per_mixer)}</td>
        <td>${badge(fmtOrNA(c.m3_per_pump), thresholdStatus(c.m3_per_pump, "m3_pump"))}</td>
        <td>${fmtOrNA(c.daily_m3_per_pump)}</td></tr>`;
    })
    .join("");
}

function renderSettings() {
  const names = { finike: "Finike", antalya: "Antalya", elmali: "Elmalı", kas: "Kaş", kalkan: "Kalkan (Yeşilköy ile aynı)" };
  document.getElementById("settingsGrid").innerHTML = Object.entries(state.config)
    .map(([key, cfg]) => `<div class="setting-card"><h4>${names[key] || key}</h4>
      ${key === "kalkan" ? '<p class="muted">Yeşilköy ve Kalkan aynı lokasyon olarak işlendi.</p>' : ""}
      <label class="setting-row">Mikser <input type="number" data-key="${key}" data-field="mixer_count" value="${cfg.mixer_count ?? ""}" /></label>
      <label class="setting-row">Pompa <input type="number" data-key="${key}" data-field="pump_count" value="${cfg.pump_count ?? ""}" /></label>
      <label class="setting-row">Kamyon <input type="number" data-key="${key}" data-field="truck_count" value="${cfg.truck_count ?? ""}" /></label>
    </div>`)
    .join("");

  document.querySelectorAll("#settingsGrid input").forEach((input) => {
    input.oninput = (e) => {
      const key = e.target.dataset.key;
      const field = e.target.dataset.field;
      state.config[key][field] = e.target.value === "" ? null : Number(e.target.value);
      saveConfig();
      renderAll();
    };
  });
}

function renderAggregate() {
  document.getElementById("agregaTableBody").innerHTML = aggregateWithMetrics()
    .filter((a) => state.plantFilter === "all" || a.key === state.plantFilter)
    .map(
      (a) => `<tr>
      <td>${a.plant}${a.data_quality_note ? `<span class="warn-badge">Doğrulandı</span><div class="muted">${a.data_quality_note}</div>` : ""}</td>
      <td>${formatNumber(a.production_ton)}</td><td>${formatNumber(a.dispatch_ton)}</td><td>${formatInt(a.truck_trip_count)}</td>
      <td>${formatNumber(a.ton_per_truck_trip)}</td><td>${formatNumber(a.dispatch_ratio)}</td>
      <td>Kırma Kum: ${a.kirma_kum_stock}, 3 No: ${a.stock_3}</td><td>${a.critical_failure}</td>
      <td>${badge(a.overall_status, statusClass(a.overall_status))}</td></tr>`
    )
    .join("");
}

function renderFleetMechanical() {
  const d = getData();
  const f = d.fleetData;
  document.getElementById("fleetMiniKpis").innerHTML = [
    ["Aktif Araç", f.total_active_vehicles],
    ["Arızalı Araç", f.total_faulty_vehicles],
    ["Tamir Edilen", f.repaired_this_week],
    ["Kapasite", f.capacity_status]
  ]
    .map(([k, v]) => `<div class="mini-kpi"><p>${k}</p><strong>${v}</strong></div>`)
    .join("");

  document.getElementById("fleetCharts").innerHTML = `<div class="chart-card"><h3>Araç Durumu</h3>
    <div class="chart-row"><span>Aktif</span><div class="chart-bar"><i style="width:${(f.total_active_vehicles / (f.total_active_vehicles + f.total_faulty_vehicles)) * 100}%"></i></div><strong>${f.total_active_vehicles}</strong></div>
    <div class="chart-row"><span>Arızalı</span><div class="chart-bar"><i style="width:${(f.total_faulty_vehicles / (f.total_active_vehicles + f.total_faulty_vehicles)) * 100}%" class="warn"></i></div><strong>${f.total_faulty_vehicles}</strong></div>
  </div>
  <div class="chart-card"><h3>Haftalık Atölye Çıkışı</h3>
    <div class="chart-row"><span>Tamir Edilen</span><div class="chart-bar"><i style="width:${Math.min(f.repaired_this_week * 10, 100)}%"></i></div><strong>${f.repaired_this_week}</strong></div>
    <div class="chart-row"><span>Açık Arıza</span><div class="chart-bar"><i style="width:${Math.min(f.open_faults.length * 10, 100)}%" class="warn"></i></div><strong>${f.open_faults.length}</strong></div>
  </div>`;

  document.getElementById("openFaults").innerHTML = f.open_faults.map((x) => `<li>${x}</li>`).join("");
  document.getElementById("plannedVehicleMaint").innerHTML = f.planned_maintenances.map((x) => `<li>${x}</li>`).join("");
  document.getElementById("waitingSpare").textContent = f.waiting_spare_part;

  const m = d.mechanicalData;
  document.getElementById("mechanicalMiniKpis").innerHTML = [
    ["Tamamlanan Bakım", m.completed_maintenance_count],
    ["Kritik Arıza Başlığı", m.critical_plant_failures.length],
    ["Duruş Durumu", m.downtime_status],
    ["Tesis Güvenliği", m.plant_safety]
  ]
    .map(([k, v]) => `<div class="mini-kpi"><p>${k}</p><strong>${v}</strong></div>`)
    .join("");

  document.getElementById("mechanicalCharts").innerHTML = `<div class="chart-card"><h3>Mekanik İş Yükü</h3>
      <div class="chart-row"><span>Tamamlanan</span><div class="chart-bar"><i style="width:${Math.min(m.completed_maintenance_count * 12, 100)}%"></i></div><strong>${m.completed_maintenance_count}</strong></div>
      <div class="chart-row"><span>Devam Eden</span><div class="chart-bar"><i style="width:${Math.min(m.ongoing_jobs.length * 25, 100)}%" class="warn"></i></div><strong>${m.ongoing_jobs.length}</strong></div>
    </div>
    <div class="chart-card"><h3>Kritik Risk Dağılımı</h3>
      ${m.critical_plant_failures.map((x, i) => `<div class="chart-row"><span>${x}</span><div class="chart-bar"><i style="width:${90 - i * 20}%" class="warn"></i></div><strong>${i + 1}</strong></div>`).join("")}
    </div>`;

  document.getElementById("mechanicCritical").innerHTML = m.critical_plant_failures.map((x) => `<li>${x}</li>`).join("");
  document.getElementById("mechanicApprovals").innerHTML = m.management_approval_required.map((x) => `<li>${x}</li>`).join("");
}

function renderCriticalIssues() {
  const list = [
    { text: "Finike kırma kum stoğu dikkat", target: "section-aggregate" },
    { text: "Kaş 3 numara stok kritik", target: "section-aggregate" },
    { text: "Kaş bunker besleme bandı koptu, 16 saat duruş devam ediyor", target: "section-aggregate" },
    { text: "Kalkan/Yeşilköy aynı lokasyon: mikser verisi doğrulanmalı", target: "section-settings" },
    { text: "Forklift kapasitesi yetersiz", target: "section-fleet" }
  ];
  document.getElementById("criticalIssues").innerHTML = list.map((i) => `<li data-target="${i.target}">${i.text}</li>`).join("");
  document.querySelectorAll("#criticalIssues li").forEach((li) => (li.onclick = () => jumpToSection(li.dataset.target)));
}

function renderInsights() {
  const concrete = concreteWithMetrics().filter((x) => !x.no_weekly_data);
  const aggregate = aggregateWithMetrics();
  const validMixer = concrete.filter((x) => x.trips_per_mixer != null);
  const validPump = concrete.filter((x) => x.daily_m3_per_pump != null);
  const topMixer = validMixer.slice().sort((a, b) => b.trips_per_mixer - a.trips_per_mixer)[0];
  const lowPump = validPump.slice().sort((a, b) => a.daily_m3_per_pump - b.daily_m3_per_pump)[0];
  const bestAgg = aggregate.slice().sort((a, b) => b.ton_per_truck_trip - a.ton_per_truck_trip)[0];
  const lowDispatch = aggregate.slice().sort((a, b) => a.dispatch_ratio - b.dispatch_ratio)[0];

  const insights = [
    `Mikser kullanımında en verimli tesis: ${topMixer ? topMixer.plant : "Veri yok"}.`,
    `Pompa kapasitesi en düşük kullanılan tesis: ${lowPump ? lowPump.plant : "Veri yok"}.`,
    "Kalkan lojistikte güçlü görünüyor ancak mikser sayısı doğrulanmalı.",
    `Kamyon lojistiği daha verimli tesis: ${bestAgg ? bestAgg.plant : "Veri yok"}.`,
    `Sevk/üretim oranı düşük tesis: ${lowDispatch ? lowDispatch.plant : "Veri yok"}; stok baskısı incelenmeli.`,
    "Kaş agrega tarafında kritik stok ve insan kaynağı riski var.",
    "Finike agrega tarafında kırma kum stoğu dikkat seviyesinde.",
    "Antalya düşük aktivite gösteriyor.",
    "Kalkan ve Kaş tarafında fiyat rekabeti baskısı var."
  ];
  document.getElementById("insightList").innerHTML = insights.map((i) => `<li>${i}</li>`).join("");
}

function openDrawer(key) {
  const plant = concreteWithMetrics().find((x) => x.key === key);
  if (!plant) return;
  document.getElementById("drawerTitle").textContent = plant.plant;
  document.getElementById("drawerBody").innerHTML = `<div class="drawer-grid">
      <div><strong>Üretim:</strong> ${formatNumber(plant.production_m3)} m³</div>
      <div><strong>Sefer:</strong> ${formatInt(plant.trip_count)}</div>
      <div><strong>Tahsilat:</strong> ${formatMoney(plant.collection_tl || 0)}</div>
      <div><strong>Gelecek Hafta Plan:</strong> ${formatNumber(plant.next_week_plan_m3 || 0)} m³</div>
      <div><strong>m³ / sefer:</strong> ${fmtOrNA(plant.m3_per_trip)}</div>
      <div><strong>Sefer / mikser:</strong> ${fmtOrNA(plant.trips_per_mixer)}</div>
      <div><strong>m³ / mikser:</strong> ${fmtOrNA(plant.m3_per_mixer)}</div>
      <div><strong>m³ / pompa:</strong> ${fmtOrNA(plant.m3_per_pump)}</div>
      <div><strong>Günlük m³ / pompa:</strong> ${fmtOrNA(plant.daily_m3_per_pump)}</div>
      <div><strong>Öne Çıkan Müşteri:</strong> ${plant.featured_customer || "Yok"}</div>
      <div><strong>Ana Risk:</strong> ${plant.lost_job_note || plant.critical_failure || "Yok"}</div>
      <div><strong>Genel Durum:</strong> ${badge(plant.overall_status, statusClass(plant.overall_status))}</div>
    </div>`;
  document.getElementById("plantDrawer").classList.add("open");
}

function jumpToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  document.querySelectorAll(".highlight").forEach((x) => x.classList.remove("highlight"));
  el.classList.add("highlight");
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function applyTab() {
  const group = state.tab;
  document.querySelectorAll("[data-group]").forEach((el) => {
    if (group === "all") el.classList.remove("hidden-by-tab");
    else el.classList.toggle("hidden-by-tab", el.dataset.group !== group && el.dataset.group !== "all");
  });
  document.querySelectorAll(".tab").forEach((b) => b.classList.toggle("active", b.dataset.tab === group));
}

function renderAll() {
  const d = getData();
  document.getElementById("reportDate").textContent = d.reportDate;
  renderFilters();
  renderKpis();
  renderProductionCharts();
  renderConcrete();
  renderLogisticsTable();
  renderSettings();
  renderAggregate();
  renderFleetMechanical();
  renderCriticalIssues();
  renderInsights();
  applyTab();
}

document.getElementById("closeDrawer").onclick = () => document.getElementById("plantDrawer").classList.remove("open");
document.getElementById("plantDrawer").onclick = (e) => {
  if (e.target.id === "plantDrawer") document.getElementById("plantDrawer").classList.remove("open");
};
document.getElementById("meetingModeBtn").onclick = () => {
  state.meetingMode = !state.meetingMode;
  document.body.classList.toggle("meeting-mode", state.meetingMode);
};
document.querySelectorAll(".tab").forEach((btn) => {
  btn.onclick = () => {
    state.tab = btn.dataset.tab;
    applyTab();
  };
});

renderAll();
