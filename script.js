const dashboardData = {
  reportDate: "Hafta 11 • 2026",
  beton: [
    {
      ad: "Finike Beton Santrali",
      uretim_m3: 2693.5,
      tahsilat_tl: 1268925,
      plan_m3_next_week: 1343,
      genel_durum: "Yeşil"
    },
    {
      ad: "Kaş Beton Santrali",
      uretim_m3: 1024,
      tahsilat_tl: 2510005,
      plan_m3_next_week: 500,
      personel_eksigi: "Operatör eksikliği",
      genel_durum: "Sarı"
    },
    {
      ad: "Kalkan Beton Santrali",
      uretim_m3: 1110,
      tahsilat_tl: 2500000,
      plan_m3_next_week: 650,
      pazar_notu: "Rakip firma yaklaşık 300 TL daha düşük fiyat veriyor",
      genel_durum: "Yeşil"
    },
    {
      ad: "Antalya Beton Santrali",
      uretim_m3: 580,
      tahsilat_tl: 40000,
      plan_m3_next_week: 500,
      genel_durum: "Yeşil"
    }
  ],
  agrega: [
    {
      ad: "Finike Agrega Tesisi",
      uretim_ton: 15750,
      sevk_ton: 14550,
      stok: "Kırma kum: Dikkat",
      kritik_ariza: "Yok",
      genel_durum: "Yeşil"
    },
    {
      ad: "Kaş Agrega Tesisi",
      uretim_ton: 24000,
      sevk_ton: 19800,
      stok: "3 numara: Kritik",
      kritik_ariza: "Bunker besleme bandı koptu",
      genel_durum: "Sarı",
      dataWarning: "Veri doğrulama gerekli: kaynak tabloda aşırı yüksek üretim/sevk değeri var."
    }
  ],
  arac: {
    toplam_aktif_arac: 256,
    toplam_arizali_arac: 7,
    bu_hafta_tamir_edilen: 10,
    kapasite_durumu: "Yetersiz",
    ana_risk: "Forklift sayısı yetersiz; arıza olursa operasyon zorlanır",
    yonetim_onayi:
      "Elmalı 07 AGH 136 için mevcut vinç üst yapısının BMC mikser kamyon üzerine alınması",
    acik_ariza_listesi: [
      "07 ALK 016 - Şase çatlak",
      "07 TCS 30 - Şanzıman arızası",
      "07 AAT 886 - Vizelik bakım",
      "07 AAH 366 - Vizelik bakım",
      "07 TM 073 - Vizelik bakım",
      "07 TL 595 - Kaza yaptı",
      "07 AAD 814 - Şase çatlak"
    ]
  },
  mekanik: {
    tamamlanan_bakim_sayisi: 7,
    kritik_tesis_arizalari: [
      "Kırıcı içine metal parça girmesi",
      "Elektrik motorlarının yanması",
      "Bantların ansızın kopması"
    ],
    durus_durumu: "Uzun süreli duruş (2 saatten fazla)",
    tesis_guvenligi: "Dikkat edilmesi gereken konu var",
    yonetim_onayi_gerekenler: [
      "Konkasör tesisine DST kurulması",
      "Dikmilli kırıcı önüne elek kurulması",
      "Hazır sıva tesisinin tamamlanması",
      "Paletli ekskavatörlerin yenilenmesi"
    ]
  },
  kritikKonular: [
    "Kalkan’da rakip fiyatı yaklaşık 300 TL daha düşük.",
    "Kaş’ta operatör / şoför eksikliği devam ediyor.",
    "Kaş agrega tarafında 3 numara stok kritik seviyede.",
    "Forklift kapasitesi yetersiz, operasyon riski oluşuyor.",
    "Mekanik tarafta bant kopması / motor yanması riski sürüyor."
  ]
};

const formatNumber = (value, suffix = "") =>
  `${new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 1 }).format(value)}${suffix}`;

const formatMoney = (value) =>
  new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 0 }).format(value);

const statusClass = (text) => {
  if (!text) return "green";
  const t = text.toLowerCase();
  if (t.includes("kritik") || t.includes("kırmızı")) return "red";
  if (t.includes("sarı") || t.includes("dikkat") || t.includes("yetersiz")) return "yellow";
  return "green";
};

function renderKpis() {
  const toplamBeton = dashboardData.beton.reduce((sum, b) => sum + b.uretim_m3, 0);
  const toplamTahsilat = dashboardData.beton.reduce((sum, b) => sum + b.tahsilat_tl, 0);
  const toplamAgrega = dashboardData.agrega.reduce((sum, a) => sum + a.uretim_ton, 0);
  const riskDurumu = "Dikkat";

  const items = [
    { title: "Toplam Beton Üretimi", value: formatNumber(toplamBeton, " m³") },
    { title: "Toplam Tahsilat", value: formatMoney(toplamTahsilat) },
    { title: "Toplam Agrega Üretimi", value: formatNumber(toplamAgrega, " ton") },
    { title: "Toplam Aktif Araç", value: dashboardData.arac.toplam_aktif_arac },
    { title: "Arızalı Araç Sayısı", value: dashboardData.arac.toplam_arizali_arac },
    { title: "Genel Risk Durumu", value: riskDurumu }
  ];

  document.getElementById("kpiGrid").innerHTML = items
    .map(
      (item) => `
      <article class="card kpi-card">
        <h3>${item.title}</h3>
        <div class="value">${item.value}</div>
      </article>
    `
    )
    .join("");
}

function renderBeton() {
  const max = Math.max(...dashboardData.beton.map((x) => x.uretim_m3));
  document.getElementById("betonBars").innerHTML = dashboardData.beton
    .map(
      (b) => `
      <div class="bar-row">
        <strong>${b.ad.replace(" Beton Santrali", "")}</strong>
        <div class="bar"><span style="width:${Math.round((b.uretim_m3 / max) * 100)}%"></span></div>
        <span>${formatNumber(b.uretim_m3)}</span>
      </div>
    `
    )
    .join("");

  document.getElementById("betonTableBody").innerHTML = dashboardData.beton
    .map(
      (b) => `
      <tr>
        <td>${b.ad}</td>
        <td>${formatNumber(b.uretim_m3)}</td>
        <td>${formatMoney(b.tahsilat_tl)}</td>
        <td>${formatNumber(b.plan_m3_next_week)}</td>
        <td><span class="status ${statusClass(b.genel_durum)}">${b.genel_durum}</span></td>
      </tr>
    `
    )
    .join("");
}

function renderAgrega() {
  document.getElementById("agregaTableBody").innerHTML = dashboardData.agrega
    .map((a) => {
      const warning = a.dataWarning ? `<span class="warn-badge">Veri Doğrulama Gerekli</span>` : "";
      return `
      <tr>
        <td>${a.ad}${warning}<div class="muted">${a.dataWarning ?? ""}</div></td>
        <td>${formatNumber(a.uretim_ton)}</td>
        <td>${formatNumber(a.sevk_ton)}</td>
        <td>${a.stok}</td>
        <td>${a.kritik_ariza}</td>
        <td><span class="status ${statusClass(a.genel_durum)}">${a.genel_durum}</span></td>
      </tr>`;
    })
    .join("");
}

function renderVehicleAndMechanic() {
  const vehicle = dashboardData.arac;
  document.getElementById("vehicleMetrics").innerHTML = `
    <li><strong>Toplam Aktif Araç:</strong> ${vehicle.toplam_aktif_arac}</li>
    <li><strong>Toplam Arızalı Araç:</strong> ${vehicle.toplam_arizali_arac}</li>
    <li><strong>Bu Hafta Tamir Edilen:</strong> ${vehicle.bu_hafta_tamir_edilen}</li>
    <li><strong>Kapasite Durumu:</strong> <span class="status ${statusClass(vehicle.kapasite_durumu)}">${vehicle.kapasite_durumu}</span></li>
    <li><strong>Ana Risk:</strong> ${vehicle.ana_risk}</li>
    <li><strong>Yönetim Onayı:</strong> ${vehicle.yonetim_onayi}</li>
  `;

  document.getElementById("openFaults").innerHTML = vehicle.acik_ariza_listesi.map((f) => `<li>${f}</li>`).join("");

  const mechanic = dashboardData.mekanik;
  document.getElementById("mechanicMetrics").innerHTML = `
    <li><strong>Tamamlanan Bakım:</strong> ${mechanic.tamamlanan_bakim_sayisi}</li>
    <li><strong>Kritik Tesis Arızaları:</strong> ${mechanic.kritik_tesis_arizalari.join("; ")}</li>
    <li><strong>Duruş Durumu:</strong> <span class="status ${statusClass(mechanic.durus_durumu)}">${mechanic.durus_durumu}</span></li>
    <li><strong>Tesis Güvenliği:</strong> <span class="status ${statusClass(mechanic.tesis_guvenligi)}">${mechanic.tesis_guvenligi}</span></li>
  `;

  document.getElementById("mechanicApprovals").innerHTML = mechanic.yonetim_onayi_gerekenler
    .map((item) => `<li>${item}</li>`)
    .join("");
}

function renderCriticalIssues() {
  document.getElementById("criticalIssues").innerHTML = dashboardData.kritikKonular
    .map((item) => `<li>${item}</li>`)
    .join("");
}

function init() {
  document.getElementById("reportDate").textContent = dashboardData.reportDate;
  renderKpis();
  renderBeton();
  renderAgrega();
  renderVehicleAndMechanic();
  renderCriticalIssues();
}

init();
