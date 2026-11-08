
"use client";

import { useState } from "react";
import ProyekCard from "./ProyekCard";

const daftarkategori = [
  "Semua",
  "HTML",
  "CSS",
  "JavaScript",
  "Responsive",
  "CodePen",
];

export default function FilterProyek({ proyek }) {
  const [kategori, setKategori] = useState("Semua");
  const [kata, setKata] = useState("");

  const hasil = proyek.filter((p) => {
    const textKategori = p.kategori.join(" ").toLowerCase();

    const cocokKategori =
      kategori === "Semua" ||
      textKategori.includes(kategori.toLowerCase());

    const cocokKata = p.judul.toLowerCase().includes(kata.toLowerCase());

    return cocokKategori && cocokKata;
  });

  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-2">
        {daftarkategori.map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setKategori(k)}
            className={
              kategori === k
                ? "rounded-full border border-blue-600 bg-blue-600 px-4 py-1 text-sm font-semibold text-white"
                : "rounded-full border border-gray-400 px-4 py-1 text-sm font-semibold text-gray-700 dark:border-sky-200 dark:text-sky-200"
            }
          >
            {k}
          </button>
        ))}
      </div>

      <p className="mt-4 text-gray-700 dark:text-gray-300">
        Kategori terpilih: {kategori}
      </p>

      <div className="mt-6">
        <label htmlFor="cari" className="block font-semibold">
          Cari proyek
        </label>

        <input
          type="text"
          id="cari"
          value={kata}
          onChange={(e) => setKata(e.target.value)}
          placeholder="Contoh: Modul 1"
          className="mt-2 w-full rounded-lg border border-gray-400 bg-white p-2 dark:border-gray-600 dark:bg-gray-800 md:w-80"
        />

        {kata !== "" && (
          <button
            type="button"
            onClick={() => setKata("")}
            className="ml-3 text-sm font-semibold text-blue-600 hover:underline"
          >
            Hapus pencarian
          </button>
        )}

        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Menampilkan {hasil.length} dari {proyek.length} proyek
        </p>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-6">
        {hasil.map((item) => (
          <div key={item.slug} className="w-full max-w-[400px]">
            <ProyekCard proyek={item} />
          </div>
        ))}
      </div>

      {hasil.length === 0 && (
        <p className="mt-6 rounded-xl border-2 border-dashed border-gray-400 p-6 text-center text-gray-600 dark:text-gray-300">
          Belum ada proyek yang cocok.
        </p>
      )}
    </div>
  );
}
