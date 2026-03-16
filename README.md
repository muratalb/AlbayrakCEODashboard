# Albayrak Grubu — CEO Weekly Operations Dashboard (Demo)

Tek sayfalık, büyük ekranda toplantı sunumuna uygun, interaktif haftalık operasyon dashboard demosu.

## Öne Çıkan Özellikler

- Türkçe, kurumsal ve sade arayüz
- Büyük KPI kartları + ikincil KPI alanı
- Beton, agrega, araç ve mekanik bölümleri
- Tesis filtresi ve sekmeli görünüm (Beton / Agrega / Araç / Mekanik)
- Tesis konfigürasyonu (mikser/pompa/kamyon) düzenleme alanı
- Beton tesis satırına tıklayınca detay drawer/popup
- Kritik risk kutusundan ilgili bölüme odaklama
- Toplantı Modu (metin büyütme, sadeleştirme)
- LocalStorage ile ayarların korunması

## Dosya Yapısı

- `index.html`: Sayfa iskeleti, bölümler, filtreler, drawer
- `styles.css`: Kurumsal tema, tablo/kart düzeni, toplantı modu stilleri
- `script.js`: Statik veri modeli, KPI hesapları, render ve interaktif davranışlar

## Çalıştırma

### Seçenek 1 — Doğrudan aç
`index.html` dosyasını çift tıklayıp tarayıcıda açabilirsiniz.

### Seçenek 2 — Local server
```bash
python3 -m http.server 8000
```
Ardından `http://localhost:8000` adresini açın.

## KPI Hesap Mantığı

### Beton KPI formülleri

- **m3_per_trip** = `production_m3 / trip_count`
- **trips_per_mixer** = `trip_count / mixer_count`
- **m3_per_mixer** = `production_m3 / mixer_count`
- **m3_per_pump** = `production_m3 / pump_count`
- **daily_m3_per_pump** = `m3_per_pump / 6`

Notlar:
- `mixer_count` boşsa mikser bazlı KPI'lar **Veri yok** gösterir.
- `pump_count` 0 veya boşsa pompa bazlı KPI'lar **Veri yok** gösterir.

### Beton eşik renkleri

- **m³ / sefer**: Yeşil ≥ 8, Sarı 6–8, Kırmızı < 6
- **Sefer / mikser**: Yeşil ≥ 25, Sarı 18–25, Kırmızı < 18
- **m³ / pompa**: Yeşil ≥ 600, Sarı 400–600, Kırmızı < 400

### Agrega KPI formülleri

- **ton_per_truck_trip** = `production_ton / truck_trip_count`
- **dispatch_ratio** = `dispatch_ton / production_ton`

## Veri Güncelleme

Tüm statik demo verisi `script.js` dosyasındaki `data` objesi altındadır:

- `concreteData`
- `aggregateData`
- `fleetData`
- `mechanicalData`
- `vehicleConfig`

## Toplantıda Kullanım Önerisi

1. Sayfayı açıp **Toplantı Modu**'nu aktif edin.
2. Üst KPI + İkincil KPI ile 10 saniyelik genel durum özeti verin.
3. Kritik risk kutularına tıklayarak ilgili bölüme odaklanın.
4. Gerekirse tesis satırına tıklayıp detay drawer üzerinden soru yanıtlayın.
