# Albayrak Grubu Haftalık Yönetim Ritmi Dashboard (Demo)

Tek sayfalık, büyük ekranda toplantı sunumuna uygun, interaktif haftalık operasyon dashboard demosu.

## Öne Çıkan Özellikler

- Üst başlık güncellendi: **Albayrak Grubu Haftalık Yönetim Ritmi Dashboard**
- Kurumsal logo eklendi (`logo.svg`)
- KPI kartları + ikincil KPI alanı
- Beton ve agrega üretim grafik blokları
- Araç/iş makinesi ve mekanik durum bölümlerinde görsel KPI kartları + grafik özetleri
- Tesis filtresi ve sekmeli görünüm (Beton / Agrega / Araç / Mekanik)
- Kritik risk kutusundan ilgili bölüme odaklanma
- Toplantı modu
- Kalkan ve Yeşilköy tek lokasyon olarak işlenir

## 2. Sayfa: Elle Veri Girişi

`veri-giris.html` sayfasında haftalık sayılar manuel girilebilir ve kaydedilebilir.

- Beton için: `production_m3`, `trip_count`, `collection_tl`, `next_week_plan_m3`
- Agrega için: `production_ton`, `dispatch_ton`, `truck_trip_count`

Kaydedilen veriler `localStorage` üzerinde `albayrak_manual_data_v1` anahtarıyla tutulur.

## Dosya Yapısı

- `index.html`: Dashboard arayüzü
- `veri-giris.html`: Manuel veri giriş ekranı
- `styles.css`: Tema ve görsel düzen
- `script.js`: Veri modeli, KPI hesapları, interaktif davranışlar
- `logo.svg`: Şirket logosu

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

## KPI Hesap Mantığı

### Beton KPI formülleri

- `m3_per_trip = production_m3 / trip_count`
- `trips_per_mixer = trip_count / mixer_count`
- `m3_per_mixer = production_m3 / mixer_count`
- `m3_per_pump = production_m3 / pump_count`
- `daily_m3_per_pump = m3_per_pump / 6`

Not:
- `mixer_count` boşsa mikser bazlı KPI'lar **Veri yok**.
- `pump_count` 0/boşsa pompa bazlı KPI'lar **Veri yok**.

### Beton eşik renkleri

- `m³ / sefer`: Yeşil ≥ 8, Sarı 6–8, Kırmızı < 6
- `Sefer / mikser`: Yeşil ≥ 25, Sarı 18–25, Kırmızı < 18
- `m³ / pompa`: Yeşil ≥ 600, Sarı 400–600, Kırmızı < 400

### Agrega KPI formülleri

- `ton_per_truck_trip = production_ton / truck_trip_count`
- `dispatch_ratio = dispatch_ton / production_ton`
