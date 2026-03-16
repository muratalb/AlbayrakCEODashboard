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
      overall_status: "Yeşil"
    },
    {
      key: "finike_likya",
      plant: "Finike Likya Hazır Beton Tesisi",
      production_m3: 1060.5,
      trip_count: 120,
      next_week_plan_m3: 650,
      featured_customer: "BİZ Yapı İnşaat – 240 m³",
      next_week_jobs: "Yok",
      collection_tl: 3060450,
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
    {
      key: "elmali",
      plant: "Elmalı Beton Santrali",
      production_m3: 357,
      trip_count: 26,
      next_week_plan_m3: 400,
      featured_customer: "Öne çıkan müşteri yok",
      next_week_jobs: "Planlanmış iş yok",
      collection_tl: 0,
      lost_job_note: "Pompalı siparişler geri döndü çünkü pompa vize için Finike'ye gitti ve operatör Ali Kara ameliyat olduğu için yok",
      main_problem: "Pompa ve operatör eksikliği",
      overall_status: "Sarı"
    }
  ],
  aggregateData: [
    {
      key: "finike",
      plant: "Finike Agrega Tesisi",
      production_ton: 15750,
      dispatch_ton: 14550,
      truck_trip_count: 622,
      fuel_liter: 6783,
      kirma_kum_stock: "Dikkat",
      stock_2: "Normal",
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
      fuel_liter: 3429,
      kirma_kum_stock: "Normal",
      stock_2: "Normal",
      stock_3: "Kritik",
      critical_failure: "Bunker besleme bandı koptu",
      failure_status: "Hala devam ediyor",
      overall_status: "Sarı"
    },
    {
      key: "elmali",
      plant: "Elmalı Agrega Tesisi",
      production_ton: 0,
      truck_trip_count: 0,
      dispatch_ton: 221000,
      fuel_liter: 567,
      featured_customer: "Öne çıkan müşteri yok",
      kirma_kum_stock: "Normal",
      stock_2: "Normal",
      stock_3: "Normal",
      operations_note: "Çalışmıyor",
      critical_failure: "Yok",
      failure_status: "Bu hafta hiç arıza yaşanmadı",
      personnel_shortage: "Üretim başlayacağı zaman elektrikçi yok",
      management_support: "Eksik operatörler çoğalıyor, bununla ilgili çalışma isteniyor",
      overall_status: "Yeşil",
      data_quality_note: "Bu veri doğru; geçen hafta üretim yapılmadı"
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
    management_approval: "Elmalı 07 AGH 136 için mevcut vinç üst yapısının BMC mikser kamyon üzerine alınması"
  },
  mechanicalData: {
    completed_maintenance_count: 7,
    ongoing_jobs: ["Kalkan beton santralinin helezon bakımı"],
    critical_plant_failures: ["Kırıcı içine metal parça girmesi", "Elektrik motorlarının yanması", "Bantların ansızın kopması"],
    downtime_status: "Uzun süreli duruş (2 saatten fazla)",
    plant_safety: "Dikkat edilmesi gereken konu var",
    management_approval_required: [
      "Konkasör tesisine DST kurulması",
      "Dikmilli kırıcı önüne elek kurulması",
      "Hazır sıva tesisinin tamamlanması",
      "Paletli ekskavatörlerin yenilenmesi"
    ]
  },
  financeData: {
    total_bank_balance: null,
    cash_on_hand: null,
    fx_bank_and_cash: null,
    total_collection_this_week: null,
    total_payment_this_week: null,
    total_receivables: null,
    total_debt: null,
    receivables_over_30_days: null,
    big_collections: [
      "Likya Hazır Beton - 4.500.000 TL",
      "Özel Kumluca Sınav Koleji - 1.000.000 TL",
      "BYS Daldal - 557.020,80 TL",
      "Mehmet Yavuzer - 413.000 TL"
    ],
    big_payments: [
      "ENS Demir - 3.645.000 TL",
      "Mertsan - 1.675.464 TL",
      "ENS Demir - 1.591.080,84 TL",
      "Admer Enerji - 837.409,14 TL"
    ],
    planned_big_payments: ["Maaş ödemesi", "Akaryakıt ödemesi", "Dökme çimento çek ödemesi"],
    cashflow_note: "Tahsilatlar vadeli yapılırken ödemeleri peşin / 1 hafta / 15 gün planlarla yapıyoruz.",
    management_support_note: "Satın alma yapanlar finans bölümünden ödeme yoğunluğunu öğrenerek karşı tarafa ödeme günü vermeli."
  },
  vehicleConfig: {
    finike: { mixer_count: 14, pump_count: 4, truck_count: 0 },
    finike_likya: { mixer_count: 5, pump_count: 1, truck_count: 0 },
    kas: { mixer_count: 6, pump_count: 2, truck_count: 11 },
    kalkan: { mixer_count: 5, pump_count: 2, truck_count: 11 },
    antalya: { mixer_count: 5, pump_count: 2, truck_count: 0 },
    elmali: { mixer_count: 7, pump_count: 1, truck_count: 0 }
  }
};

const state = { tab: "all", plantFilter: "all", meetingMode: false, config: loadConfig() };
const formatNumber = (v, d = 2) => new Intl.NumberFormat("tr-TR", { maximumFractionDigits: d }).format(v);
const formatInt = (v) => new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 }).format(v);
const formatMoney = (v) => new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 0 }).format(v);
const safeDiv = (a, b) => (a && b ? a / b : null);
const badge = (text, css) => `<span class="status ${css}">${text}</span>`;

function loadConfig() {
  const saved = JSON.parse(localStorage.getItem(CONFIG_KEY) || "null");
  return { ...structuredClone(baseData.vehicleConfig), ...(saved || {}) };
}

function saveConfig() {
  localStorage.setItem(CONFIG_KEY, JSON.stringify(state.config));
}

function getData() {
  const data = structuredClone(baseData);
  const manual = JSON.parse(localStorage.getItem(MANUAL_DATA_KEY) || "null");
  if (!manual) return data;
  data.concreteData = data.concreteData.map((c) => (manual.concrete?.[c.key] ? { ...c, ...manual.concrete[c.key] } : c));
  data.aggregateData = data.aggregateData.map((a) => (manual.aggregate?.[a.key] ? { ...a, ...manual.aggregate[a.key] } : a));
  return data;
}

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
  return d.aggregateData.map((a) => {
    const truck_count = state.config[a.key]?.truck_count;
    return {
      ...a,
      truck_count,
      ton_per_truck_trip: safeDiv(a.production_ton, a.truck_trip_count),
      dispatch_ratio: a.production_ton > 0 ? a.dispatch_ton / a.production_ton : null,
      fuel_per_truck: truck_count ? safeDiv(a.fuel_liter, truck_count) : null,
      fuel_per_ton: a.production_ton > 0 ? safeDiv(a.fuel_liter, a.production_ton) : null
    };
  });
}

function visibleConcrete() {
  const list = concreteWithMetrics();
  return state.plantFilter === "all" ? list : list.filter((x) => x.key === state.plantFilter);
}

function renderFilters() {
  const d = getData();
  const options = [{ key: "all", label: "Tüm Tesisler" }, ...d.concreteData.map((c) => ({ key: c.key, label: c.plant }))];
  const select = document.getElementById("plantFilter");
  select.innerHTML = options.map((o) => `<option value="${o.key}">${o.label}</option>`).join("");
  select.value = state.plantFilter;
  select.onchange = (e) => {
    state.plantFilter = e.target.value;
    renderAll();
  };
}

function renderKpis() {
  const d = getData();
  const concrete = visibleConcrete();
  const aggregate = aggregateWithMetrics();
  const finance = d.financeData;

  const kpis = [
    ["Toplam Beton Üretimi", `${formatNumber(concrete.reduce((s, x) => s + x.production_m3, 0), 1)} m³`],
    ["Toplam Tahsilat", formatMoney(concrete.reduce((s, x) => s + (x.collection_tl || 0), 0))],
    ["Toplam Agrega Üretimi", `${formatNumber(aggregate.reduce((s, x) => s + (x.production_ton || 0), 0), 1)} ton`],
    ["Toplam Aktif Araç", formatInt(d.fleetData.total_active_vehicles)],
    ["Arızalı Araç", formatInt(d.fleetData.total_faulty_vehicles)],
    ["Genel Risk Durumu", "Dikkat"]
  ];

  document.getElementById("kpiGrid").innerHTML = kpis.map(([t, v]) => `<article class="card kpi-card"><h3>${t}</h3><div class="value">${v}</div></article>`).join("");

  const validMixer = concrete.filter((x) => x.trips_per_mixer != null);
  const validPump = concrete.filter((x) => x.daily_m3_per_pump != null);
  const secondary = [
    ["Ortalama m³ / Sefer", formatNumber(safeDiv(concrete.reduce((s, x) => s + x.production_m3, 0), concrete.reduce((s, x) => s + x.trip_count, 0)) || 0)],
    ["Ortalama Günlük m³ / Pompa", validPump.length ? formatNumber(validPump.reduce((s, x) => s + x.daily_m3_per_pump, 0) / validPump.length) : "Veri yok"],
    ["Ortalama Ton / Kamyon Seferi", formatNumber(safeDiv(aggregate.reduce((s, x) => s + x.production_ton, 0), aggregate.reduce((s, x) => s + x.truck_trip_count, 0)) || 0)],
    ["Finans Haftalık Tahsilat", finance.total_collection_this_week == null ? "Eksik veri" : formatMoney(finance.total_collection_this_week)]
  ];
  document.getElementById("secondaryKpiGrid").innerHTML = secondary.map(([t, v]) => `<article class="card kpi-card secondary"><h3>${t}</h3><div class="value">${v}</div></article>`).join("");
}

function renderProductionCharts() {
  const concrete = visibleConcrete();
  const aggregate = aggregateWithMetrics();
  const totalConcreteCapacity = Math.max(concrete.reduce((s, x) => s + x.production_m3, 0), 1);
  const totalAggregateCapacity = Math.max(aggregate.reduce((s, x) => s + x.production_ton, 0), 1);

  const block = (title, rows, max, unit) => `<div class="chart-card"><h3>${title}</h3>${rows
    .map((r) => `<div class="chart-row"><span>${r.name}</span><div class="chart-bar"><i style="width:${Math.round((r.value / max) * 100)}%"></i></div><strong>${formatNumber(r.value, 1)} ${unit}</strong></div>`)
    .join("")}</div>`;

  document.getElementById("productionCharts").innerHTML =
    block("Beton Üretimi", concrete.map((c) => ({ name: c.plant.replace(" Beton Santrali", ""), value: c.production_m3 })), totalConcreteCapacity, "m³") +
    block("Agrega Üretimi", aggregate.map((a) => ({ name: a.plant.replace(" Agrega Tesisi", ""), value: a.production_ton })), totalAggregateCapacity, "ton");
}

function renderConcrete() {
  const concrete = visibleConcrete();
  const total = Math.max(concrete.reduce((s, x) => s + x.production_m3, 0), 1);
  document.getElementById("betonBars").innerHTML = concrete
    .map((c) => `<div class="bar-row"><strong>${c.plant.replace(" Beton Santrali", "")}</strong><div class="bar"><span style="width:${Math.round((c.production_m3 / total) * 100)}%"></span></div><span>${formatNumber(c.production_m3)} m³</span></div>`)
    .join("");

  document.getElementById("betonTableBody").innerHTML = concrete
    .map(
      (c) => `<tr class="clickable" data-drawer="${c.key}"><td>${c.plant}</td><td>${formatNumber(c.production_m3, 1)}</td><td>${formatInt(c.trip_count)}</td><td>${formatMoney(c.collection_tl || 0)}</td><td>${formatNumber(c.next_week_plan_m3 || 0, 1)} m³</td><td>${badge(c.overall_status, statusClass(c.overall_status))}</td></tr>`
    )
    .join("");

  document.querySelectorAll("[data-drawer]").forEach((el) => (el.onclick = () => openDrawer(el.dataset.drawer)));
}

function renderConcreteCards() {
  const concrete = visibleConcrete();
  document.getElementById("concreteCards").innerHTML = concrete
    .map(
      (c) => `<article class="concrete-card"><h4>${c.plant.replace(" Tesisi", "")}</h4><ul>
      <li><strong>Üretim:</strong> ${formatNumber(c.production_m3, 1)} m³</li>
      <li><strong>Sefer:</strong> ${formatInt(c.trip_count)}</li>
      <li><strong>m³/sefer:</strong> ${formatNumber(c.m3_per_trip || 0, 2)}</li>
      <li><strong>Sefer/mikser:</strong> ${c.trips_per_mixer == null ? "Veri yok" : formatNumber(c.trips_per_mixer, 2)}</li>
      <li><strong>m³/mikser:</strong> ${c.m3_per_mixer == null ? "Veri yok" : formatNumber(c.m3_per_mixer, 2)}</li>
      <li><strong>Tahsilat:</strong> ${formatMoney(c.collection_tl || 0)}</li>
      <li><strong>Genel durum:</strong> ${badge(c.overall_status, statusClass(c.overall_status))}</li></ul></article>`
    )
    .join("");
}

function renderLogisticsTable() {
  document.getElementById("logisticsTableBody").innerHTML = visibleConcrete()
    .map(
      (c) => `<tr><td>${c.plant}</td><td>${formatNumber(c.production_m3, 1)}</td><td>${formatInt(c.trip_count)}</td><td>${c.cfg.mixer_count ?? "-"}</td><td>${c.cfg.pump_count ?? "-"}</td><td>${badge(c.m3_per_trip == null ? "Veri yok" : formatNumber(c.m3_per_trip), thresholdStatus(c.m3_per_trip, "m3_trip"))}</td><td>${badge(c.trips_per_mixer == null ? "Veri yok" : formatNumber(c.trips_per_mixer), thresholdStatus(c.trips_per_mixer, "trips_mixer"))}</td><td>${c.m3_per_mixer == null ? badge("Veri yok", "neutral") : formatNumber(c.m3_per_mixer)}</td><td>${badge(c.m3_per_pump == null ? "Veri yok" : formatNumber(c.m3_per_pump), thresholdStatus(c.m3_per_pump, "m3_pump"))}</td><td>${c.daily_m3_per_pump == null ? badge("Veri yok", "neutral") : formatNumber(c.daily_m3_per_pump)}</td></tr>`
    )
    .join("");
}

function renderSettings() {
  const names = { finike: "Finike", finike_likya: "Finike Likya", kas: "Kaş", kalkan: "Kalkan", antalya: "Antalya", elmali: "Elmalı" };
  document.getElementById("settingsGrid").innerHTML = Object.entries(state.config)
    .map(
      ([key, cfg]) => `<div class="setting-card"><h4>${names[key] || key}</h4>
      <label class="setting-row">Mikser <input type="number" data-key="${key}" data-field="mixer_count" value="${cfg.mixer_count ?? ""}" /></label>
      <label class="setting-row">Pompa <input type="number" data-key="${key}" data-field="pump_count" value="${cfg.pump_count ?? ""}" /></label>
      <label class="setting-row">Kamyon <input type="number" data-key="${key}" data-field="truck_count" value="${cfg.truck_count ?? ""}" /></label>
      </div>`
    )
    .join("");

  document.querySelectorAll("#settingsGrid input").forEach((input) => {
    input.oninput = (e) => {
      const { key, field } = e.target.dataset;
      state.config[key][field] = e.target.value === "" ? null : Number(e.target.value);
      saveConfig();
      renderAll();
    };
  });
}

function aggText(a, type) {
  if (type === "dispatch") return a.dispatch_ratio == null ? "üretim yok" : formatNumber(a.dispatch_ratio, 2);
  if (type === "ftruck") return a.truck_count ? `${formatNumber(a.fuel_per_truck, 2)} lt` : "kamyon sayısı tanımlı değil";
  if (type === "fton") return a.production_ton > 0 ? `${formatNumber(a.fuel_per_ton, 3)} lt` : "üretim yok";
  if (type === "tontrip") return a.ton_per_truck_trip == null ? "veri yok" : formatNumber(a.ton_per_truck_trip, 2);
  return "-";
}

function renderAggregate() {
  const rows = aggregateWithMetrics().map((a) => {
    const special = a.production_ton === 0 && a.dispatch_ton > 0 ? '<div class="muted">Bu hafta üretim yapılmadı, stoktan sevk olabilir.</div>' : "";
    const elmaliContext = a.key === "elmali" ? `<div class="muted">Raporlanan durum: ${a.overall_status} • Operasyon notu: ${a.operations_note || "-"}</div>` : "";
    return `<tr>
      <td>${a.plant}${a.data_quality_note ? `<span class="warn-badge">Doğrulandı</span><div class="muted">${a.data_quality_note}</div>` : ""}${special}${elmaliContext}</td>
      <td>${formatNumber(a.production_ton)}</td>
      <td>${formatNumber(a.dispatch_ton)}</td>
      <td>${formatInt(a.truck_trip_count)}</td>
      <td>${aggText(a, "tontrip")}</td>
      <td>${aggText(a, "dispatch")}</td>
      <td>${aggText(a, "ftruck")}</td>
      <td>${aggText(a, "fton")}</td>
      <td>Kırma Kum: ${a.kirma_kum_stock}, 2 No: ${a.stock_2}, 3 No: ${a.stock_3}</td>
      <td>${a.critical_failure}${a.failure_status ? `<div class="muted">${a.failure_status}</div>` : ""}</td>
      <td>${badge(a.overall_status, statusClass(a.overall_status))}</td>
    </tr>`;
  });
  document.getElementById("agregaTableBody").innerHTML = rows.join("");
}

function renderFleetMechanical() {
  const d = getData();
  const f = d.fleetData;
  document.getElementById("fleetMiniKpis").innerHTML = [["Aktif Araç", f.total_active_vehicles], ["Arızalı", f.total_faulty_vehicles], ["Tamir", f.repaired_this_week], ["Kapasite", f.capacity_status]].map(([k, v]) => `<div class="mini-kpi"><p>${k}</p><strong>${v}</strong></div>`).join("");
  document.getElementById("fleetCharts").innerHTML = `<div class="chart-card"><h3>Araç Durumu</h3><div class="chart-row"><span>Aktif</span><div class="chart-bar"><i style="width:${(f.total_active_vehicles / (f.total_active_vehicles + f.total_faulty_vehicles)) * 100}%"></i></div><strong>${f.total_active_vehicles}</strong></div><div class="chart-row"><span>Arızalı</span><div class="chart-bar"><i class="warn" style="width:${(f.total_faulty_vehicles / (f.total_active_vehicles + f.total_faulty_vehicles)) * 100}%"></i></div><strong>${f.total_faulty_vehicles}</strong></div></div>`;
  document.getElementById("openFaults").innerHTML = f.open_faults.map((x) => `<li>${x}</li>`).join("");
  document.getElementById("plannedVehicleMaint").innerHTML = f.planned_maintenances.map((x) => `<li>${x}</li>`).join("");
  document.getElementById("waitingSpare").textContent = f.waiting_spare_part;

  const m = d.mechanicalData;
  document.getElementById("mechanicalMiniKpis").innerHTML = [["Tamamlanan", m.completed_maintenance_count], ["Kritik Başlık", m.critical_plant_failures.length], ["Duruş", m.downtime_status], ["Güvenlik", m.plant_safety]].map(([k, v]) => `<div class="mini-kpi"><p>${k}</p><strong>${v}</strong></div>`).join("");
  document.getElementById("mechanicalCharts").innerHTML = `<div class="chart-card"><h3>Mekanik İş Yükü</h3><div class="chart-row"><span>Tamamlanan</span><div class="chart-bar"><i style="width:${Math.min(m.completed_maintenance_count * 12, 100)}%"></i></div><strong>${m.completed_maintenance_count}</strong></div><div class="chart-row"><span>Devam Eden</span><div class="chart-bar"><i class="warn" style="width:${Math.min(m.ongoing_jobs.length * 25, 100)}%"></i></div><strong>${m.ongoing_jobs.length}</strong></div></div>`;
  document.getElementById("mechanicCritical").innerHTML = m.critical_plant_failures.map((x) => `<li>${x}</li>`).join("");
  document.getElementById("mechanicApprovals").innerHTML = m.management_approval_required.map((x) => `<li>${x}</li>`).join("");
}

function renderFinance() {
  const f = getData().financeData;
  const items = [
    ["Toplam Banka Bakiyesi", f.total_bank_balance],
    ["Kasa Mevcudu", f.cash_on_hand],
    ["Toplam Tahsilat", f.total_collection_this_week],
    ["Toplam Ödeme", f.total_payment_this_week],
    ["Toplam Alacak", f.total_receivables],
    ["Toplam Borç", f.total_debt],
    ["30 Gün Üzeri Alacak", f.receivables_over_30_days]
  ];
  document.getElementById("financeKpis").innerHTML = items
    .map(([k, v]) => `<div class="mini-kpi"><p>${k}</p><strong>${v == null ? '<span class="tag-muted">Veri girilmedi</span>' : formatMoney(v)}</strong></div>`)
    .join("");

  document.getElementById("financeCollections").innerHTML = f.big_collections.map((x) => `<li>${x}</li>`).join("");
  document.getElementById("financePayments").innerHTML = f.big_payments.map((x) => `<li>${x}</li>`).join("");
  document.getElementById("financeNextPayments").innerHTML = f.planned_big_payments.map((x) => `<li>${x}</li>`).join("");
  document.getElementById("financeCashflow").textContent = f.cashflow_note;
  document.getElementById("financeManagement").textContent = f.management_support_note;
}

function renderCriticalIssues() {
  const list = [
    { text: "Kaş agrega tarafında kritik stok ve teknik arıza var", target: "section-aggregate" },
    { text: "Finike agrega kırma kum stoğu dikkat seviyesinde", target: "section-aggregate" },
    { text: "Elmalı agrega üretim yapmadı ancak sevk gerçekleştirdi", target: "section-aggregate" },
    { text: "Elmalı tarafında operasyon başlarsa elektrikçi ve operatör ihtiyacı doğabilir", target: "section-aggregate" },
    { text: "Elmalı: pompa ve operatör eksikliği satış kaybına yol açıyor.", target: "section-concrete" }
  ];
  document.getElementById("criticalIssues").innerHTML = list.map((i) => `<li data-target="${i.target}">${i.text}</li>`).join("");
  document.querySelectorAll("#criticalIssues li").forEach((li) => (li.onclick = () => jumpToSection(li.dataset.target)));
}

function renderInsights() {
  const concrete = concreteWithMetrics();
  const aggregate = aggregateWithMetrics();
  const finance = getData().financeData;
  const topMixer = concrete.slice().sort((a, b) => (b.trips_per_mixer || 0) - (a.trips_per_mixer || 0))[0];
  const lowDispatch = aggregate.filter((a) => a.dispatch_ratio != null).sort((a, b) => a.dispatch_ratio - b.dispatch_ratio)[0];
  const bestAgg = aggregate.filter((a) => a.ton_per_truck_trip != null).sort((a, b) => b.ton_per_truck_trip - a.ton_per_truck_trip)[0];
  const highFuelTruck = aggregate.filter((a) => a.fuel_per_truck != null).sort((a, b) => b.fuel_per_truck - a.fuel_per_truck)[0];
  const highFuelTon = aggregate.filter((a) => a.fuel_per_ton != null).sort((a, b) => b.fuel_per_ton - a.fuel_per_ton)[0];
  const finikeTotal = concrete.filter((c) => c.key === "finike" || c.key === "finike_likya").reduce((s, c) => s + c.production_m3, 0);

  const insights = [
    `Mikser kullanımında en verimli tesis: ${topMixer ? topMixer.plant : "Veri yok"}.`,
    `Kamyon lojistiği verimli tesis: ${bestAgg ? bestAgg.plant : "Veri yok"}.`,
    `Sevk/üretim oranı düşük tesis: ${lowDispatch ? lowDispatch.plant : "Veri yok"}; stok baskısı incelenmeli.`,
    highFuelTruck ? `${highFuelTruck.plant} tarafında araç başına yakıt tüketimi yüksek.` : "Araç başına yakıt KPI için veri yok.",
    highFuelTon ? `${highFuelTon.plant} tarafında ton başına yakıt tüketimi yüksek.` : "Ton başına yakıt KPI için veri yok.",
    "Bu hafta üretim yapılmadan sevkiyat yapılan tesislerde stoktan çıkış olasılığı yüksek.",
    "Finike Likya Beton: operasyon stabil görünüyor, mikser kullanım verimli ve tahsilat güçlü.",
    `Finike bölgesinde iki beton tesisinin toplam haftalık üretimi ${formatNumber(Math.round(finikeTotal / 10) * 10, 0)} m³ seviyesine ulaştı.`,
    "Elmalı Beton: Pompa ve operatör eksikliği nedeniyle pompalı siparişler geri dönüyor. Talep olmasına rağmen üretim kapasitesi kullanılamıyor.",
    "Büyük tahsilatlar Likya Hazır Beton tarafında yoğunlaşıyor.",
    "Büyük ödemeler demir ve malzeme tarafında yoğunlaşıyor.",
    finance.cashflow_note.includes("vadeli") ? "Tahsilat-vade / ödeme-vade dengesizliği nakit baskısı oluşturabilir." : "Nakit akışı dengeli görünüyor.",
    "Satın alma kararlarının finans ödeme planı ile eşgüdümü öneriliyor."
  ];
  document.getElementById("insightList").innerHTML = insights.map((i) => `<li>${i}</li>`).join("");
}

function openDrawer(key) {
  const plant = concreteWithMetrics().find((x) => x.key === key);
  if (!plant) return;
  document.getElementById("drawerTitle").textContent = plant.plant;
  document.getElementById("drawerBody").innerHTML = `<div class="drawer-grid"><div><strong>Üretim:</strong> ${formatNumber(plant.production_m3)} m³</div><div><strong>Sefer:</strong> ${formatInt(plant.trip_count)}</div><div><strong>Tahsilat:</strong> ${formatMoney(plant.collection_tl || 0)}</div><div><strong>Gelecek Hafta Plan:</strong> ${formatNumber(plant.next_week_plan_m3 || 0)} m³</div><div><strong>m³ / sefer:</strong> ${formatNumber(plant.m3_per_trip || 0)}</div><div><strong>Sefer / mikser:</strong> ${plant.trips_per_mixer == null ? "Veri yok" : formatNumber(plant.trips_per_mixer)}</div><div><strong>m³ / mikser:</strong> ${plant.m3_per_mixer == null ? "Veri yok" : formatNumber(plant.m3_per_mixer)}</div><div><strong>m³ / pompa:</strong> ${plant.m3_per_pump == null ? "Veri yok" : formatNumber(plant.m3_per_pump)}</div><div><strong>Günlük m³ / pompa:</strong> ${plant.daily_m3_per_pump == null ? "Veri yok" : formatNumber(plant.daily_m3_per_pump)}</div><div><strong>Öne Çıkan Müşteri:</strong> ${plant.featured_customer || "Yok"}</div><div><strong>Ana Risk:</strong> ${plant.lost_job_note || plant.main_problem || "Yok"}</div><div><strong>Genel Durum:</strong> ${badge(plant.overall_status, statusClass(plant.overall_status))}</div></div>`;
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
  document.querySelectorAll("[data-group]").forEach((el) => {
    if (state.tab === "all") el.classList.remove("hidden-by-tab");
    else el.classList.toggle("hidden-by-tab", el.dataset.group !== state.tab && el.dataset.group !== "all");
  });
  document.querySelectorAll(".tab").forEach((b) => b.classList.toggle("active", b.dataset.tab === state.tab));
}

function renderAll() {
  const d = getData();
  document.getElementById("reportDate").textContent = d.reportDate;
  renderFilters();
  renderKpis();
  renderProductionCharts();
  renderConcrete();
  renderConcreteCards();
  renderLogisticsTable();
  renderSettings();
  renderAggregate();
  renderFleetMechanical();
  renderFinance();
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
