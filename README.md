# Albayrak Grubu Haftalık Yönetim Ritmi Dashboard (Demo)

Tek sayfalık, büyük ekranda toplantı sunumuna uygun, interaktif haftalık operasyon dashboard demosu.

## Öne Çıkan Özellikler

- Türkçe, sade ve kurumsal dashboard görünümü
- Üst KPI kartları + ikincil KPI alanı
- Beton / Agrega / Araç / Mekanik / Finans sekmeleri
- Tesis konfigürasyon ekranı (mikser, pompa, kamyon)
- Finans panelinde eksik veri toleransı ("Veri girilmedi")
- Kritik riskler + haftanın yönetim içgörüleri
- Toplantı Modu (büyük yazı, daha okunabilir görünüm)

## Çalıştırma

### Seçenek 1 — Doğrudan aç
`index.html` dosyasını tarayıcıda açın.

### Seçenek 2 — Local server
```bash
python3 -m http.server 8000
```
Ardından:
- Dashboard: `http://localhost:8000/index.html`
- Veri girişi: `http://localhost:8000/veri-giris.html`

## Veri Kaynakları

- Ana dashboard verisi: `script.js` içindeki `baseData`
- Manuel override: `localStorage` anahtarı `albayrak_manual_data_v1`
- Tesis konfigürasyonu: `localStorage` anahtarı `albayrak_vehicle_config_v1`

## KPI Hesap Mantığı

### Beton

- `m3_per_trip = production_m3 / trip_count`
- `trips_per_mixer = trip_count / mixer_count`
- `m3_per_mixer = production_m3 / mixer_count`
- `m3_per_pump = production_m3 / pump_count`
- `daily_m3_per_pump = m3_per_pump / 6`

### Agrega

- `ton_per_truck_trip = production_ton / truck_trip_count`
- `dispatch_ratio = dispatch_ton / production_ton`
- `fuel_per_truck = fuel_liter / truck_count`
- `fuel_per_ton = fuel_liter / production_ton`

### Özel Kurallar

- `production_ton = 0` ise `fuel_per_ton` hesaplanmaz → **"üretim yok"**
- `truck_count = 0` veya boş ise `fuel_per_truck` hesaplanmaz → **"kamyon sayısı tanımlı değil"**
- Finans sayısal verileri boş/null gelebilir; dashboard kırılmaz, kartta **"Veri girilmedi"** gösterir.

## Kısa Not

- Yeşilköy ayrı tesis olarak ele alınmaz; Kalkan operasyonuna bağlıdır.
- Kalkan konfigürasyonu başlangıçta `mixer_count: 5`, `pump_count: 2`, `truck_count: 11` ile gelir ve ayarlardan değiştirilebilir.
