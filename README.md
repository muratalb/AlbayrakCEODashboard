# Albayrak Grubu — CEO Weekly Operations Dashboard (Demo)

Bu proje, yönetim toplantılarında büyük ekranda açılabilecek şekilde hazırlanmış **tek sayfalık** bir haftalık operasyon dashboard demosudur.

## Özellikler

- Türkçe, sade ve kurumsal arayüz
- Açık zemin + koyu mavi vurgu
- Büyük KPI kartları
- Beton ve agrega tesisleri performans görünümü
- Araç & iş makinesi özeti
- Mekanik durum özeti
- Haftanın kritik konuları için alarm paneli
- Veri doğrulama gerektiren satırlar için uyarı etiketi

## Dosya Yapısı

- `index.html`: Dashboard iskeleti
- `styles.css`: Görsel tema ve responsive düzen
- `script.js`: Sabit demo verisi + tüm render mantığı

## Çalıştırma

### Seçenek 1 — Doğrudan aç
`index.html` dosyasını çift tıklayıp tarayıcıda açabilirsiniz.

### Seçenek 2 — Basit local server
Terminalde proje klasöründe:

```bash
python3 -m http.server 8000
```

Ardından tarayıcıdan:

- `http://localhost:8000`

## Veri Güncelleme

Tüm demo verisi `script.js` içinde `dashboardData` objesi altında yer alır.

- Beton tesisleri: `dashboardData.beton`
- Agrega tesisleri: `dashboardData.agrega`
- Araç verisi: `dashboardData.arac`
- Mekanik verisi: `dashboardData.mekanik`
- Alarm paneli: `dashboardData.kritikKonular`

Not: Kaş Agrega tesisi için kaynak veride olası giriş hatası bulunduğu için, demoda makul değer gösterilir ve "Veri Doğrulama Gerekli" etiketi sunulur.
