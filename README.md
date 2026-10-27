# Arah Tanpa Peta — aka & awa

Novel interaktif 8 bab. Statis (HTML + CSS + JS), tanpa dependency, jalan offline.

## Cara buka

- Live Server VS Code (port bebas), atau dari folder ini:
  ```bash
  python -m http.server 5510
  ```
  lalu buka `http://127.0.0.1:5510/index.html`.
- Jangan dibuka lewat `file://` — lagu, foto, dan video butuh server lokal.

## Alur

| Bab | Isi | Interaksi |
|-----|-----|-----------|
| Sampul | buku ketutup sulur & bunga | klik/gesek sulurnya (opsional, kalau semua tersibak bukunya kebuka sendiri) atau langsung pencet **BUKA BUKUNYA** |
| 01 | malam dimsum | dialog komik + satu pilihan |
| 02 | hal-hal yang disukai | 8 kertas tempel yang dibalik |
| 03 | barisan kata | dialog + pilihan kalimat yang dikirim |
| 04 | badai komunikasi | tahan tombol NAPAS sampai penuh |
| 05 | isi kepala aka | bola kata 3D yang diputar + brankas kepercayaan (puter 3x) |
| 06 | kenangan | dinding polaroid + video, klik buat diperbesar |
| 07 | arsip cawaaa | 8 puisi lengkap + catatan pinggir |
| 08 | penutup | gambar sendiri jalannya dari A ke S |

## Tautan langsung

`index.html#bab5` langsung lompat ke bab 5 tanpa lewat sampul. Alamatnya juga ikut berubah tiap ganti bab,
jadi bisa di-bookmark.

## Gembok bab

Bab yang ada obrolannya (01, 03, 04) ngunci tombol **LANJUT**, panah, swipe, dan daftar bab sampai
dialognya kelar — khusus bab 04 sampai tombol **TAHAN NAPAS** penuh dan obrolan lanjutannya habis.
Bab yang udah pernah kelar nggak bakal ngunci lagi, dan mundur ke bab sebelumnya selalu boleh.
Mau ganti bab mana yang dikunci: ubah `gate: true` di definisi bab dalam `script.js`.

## Kontrol

`klik / spasi` lanjutin dialog · `← →` pindah bab · swipe di HP · `M` lagu · `S` bunyi ketikan · `H` bantuan · `ESC` tutup pop-up

## Mau ganti kata-kata

Semua teks ada di bagian **BAGIAN 0** di `script.js`:

- `PHOTOS` — daftar foto + caption + tanggal
- `POEMS` — 8 puisi (ditulis ulang persis dari PDF di `puisi/`) + `note` = catatan pinggir aka
- `NOTES` — isi 8 kertas tempel bab 02
- `MIND` — isi kepala bab 05
- `SCRIPTS` — naskah dialog bab 01, 03, 04
- `FINALE` — kalimat penutup bab 08
- `CFG.volume` — volume lagu (0–1)

Nambah foto: taruh filenya di `assets/awa/` atau `assets/aka/`, lalu tambahin satu baris di `PHOTOS`.

## Isi folder

```
index.html    kerangka + filter SVG
style.css     desain neobrutalism, layout buku 3D, responsif
script.js     data naskah + mesin dialog + 8 bab
assets/       foto aka, awa, berdua
lagu/         backsound
puisi/        PDF asli karya cawaaa (arsip, nggak dipakai web)
```

Responsif: layar ≥900px tampil dua halaman (spread), di bawah itu jadi satu halaman dengan panel komik nempel di atas.
