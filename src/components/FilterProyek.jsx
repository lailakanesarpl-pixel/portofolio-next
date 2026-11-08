
"use client";

import { useState } from "react";
import ProyekCard from "./ProyekCard";

const daftarKategori = ["Semua", "HTML", "CSS", "JavaScript", "Next.js"];

const tombolBiasa =
  "rounded-full border border-utama dark:border-sky-200 px-4 py-1 text-sm font-semibold text-utama dark:text-sky-200";

const tombolAktif =
  "rounded-full border border-aksen bg-aksen px-4 py-1 text-sm font-semibold text-white";

export default function FilterProyek({ proyek }) {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [kata, setKata] = useState("");

  // Mengubah kata pencarian menjadi huruf kecil
  const kataKecil = kata.toLowerCase();

  // Menggabungkan filter kategori dan pencarian
  const hasil = proyek.filter((p) => {
    const cocokKategori =
      kategoriAktif === "Semua" || p.kategori === kategoriAktif;

    const cocokKata = p.title.toLowerCase().includes(kataKecil);

    return cocokKategori && cocokKata;
  });

  return (
    <div className="mt-8">
      {/* Tombol kategori */}
      <div className="flex flex-wrap gap-2">
        {daftarKategori.map((k) => (
          <button
            key={k}
            onClick={() => setKategoriAktif(k)}
            className={
              kategoriAktif === k ? tombolAktif : tombolBiasa
            }
          >
            {k}
          </button>
        ))}
      </div>

      {/* Kolom pencarian */}
      <div className="mt-6">
        <label htmlFor="cari" className="block font-semibold">
          Cari proyek
        </label>

        <input
          type="text"
          id="cari"
          value={kata}
          onChange={(e) => setKata(e.target.value)}
          placeholder="Contoh: kalkulator"
          className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-2 md:w-80"
        />
      </div>

      {/* Daftar proyek */}
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {hasil.map((item) => (
          <ProyekCard key={item.slug} proyek={item} />
        ))}
      </div>

      {/* Pesan jika proyek tidak ditemukan */}
      {hasil.length === 0 && (
        <p className="mt-6 rounded-xl border border-dashed border-gray-300 dark:border-gray-600 p-6 text-center text-gray-600 dark:text-gray-400">
          Belum ada proyek yang cocok.
        </p>
      )}
    </div>
  );
}
