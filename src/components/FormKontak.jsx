
"use client";

import { useState } from "react";

export default function FormKontak() {
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus(
      "Terima kasih! Formulir berhasil diisi. Pengiriman pesan otomatis belum diaktifkan."
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-slate-900"
    >
      <div>
        <h2 className="text-2xl font-bold text-utama dark:text-white">
          Hubungi Saya
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          Punya pertanyaan atau ingin bekerja sama? Isi formulir berikut.
        </p>
      </div>

      <div>
        <label className="mb-2 block font-medium text-gray-700 dark:text-gray-200">
          Nama lengkap
        </label>
        <input
          type="text"
          placeholder="Masukkan nama lengkap"
          required
          className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-aksen focus:ring-2 focus:ring-aksen/20 dark:border-gray-600 dark:bg-slate-800 dark:text-white"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium text-gray-700 dark:text-gray-200">
          Email
        </label>
        <input
          type="email"
          placeholder="nama@email.com"
          required
          className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-aksen focus:ring-2 focus:ring-aksen/20 dark:border-gray-600 dark:bg-slate-800 dark:text-white"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium text-gray-700 dark:text-gray-200">
          Nomor HP
        </label>
        <input
          type="tel"
          placeholder="Contoh: 081234567890"
          required
          className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-aksen focus:ring-2 focus:ring-aksen/20 dark:border-gray-600 dark:bg-slate-800 dark:text-white"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium text-gray-700 dark:text-gray-200">
          Keperluan
        </label>
        <select
          required
          defaultValue=""
          className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-aksen dark:border-gray-600 dark:bg-slate-800 dark:text-white"
        >
          <option value="" disabled>
            Pilih keperluan
          </option>
          <option value="Pertanyaan">Pertanyaan</option>
          <option value="Kerja sama">Kerja sama</option>
          <option value="Proyek">Proyek</option>
          <option value="Lainnya">Lainnya</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block font-medium text-gray-700 dark:text-gray-200">
          Pesan
        </label>
        <textarea
          rows="5"
          placeholder="Tuliskan pesan kamu di sini..."
          required
          className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-aksen focus:ring-2 focus:ring-aksen/20 dark:border-gray-600 dark:bg-slate-800 dark:text-white"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-aksen px-5 py-3 font-semibold text-white transition hover:opacity-90"
      >
        Kirim Pesan
      </button>

      {status && (
        <p className="rounded-lg bg-blue-50 p-3 text-sm text-blue-700 dark:bg-slate-800 dark:text-blue-300">
          {status}
        </p>
      )}

      <p className="text-center text-xs text-gray-500 dark:text-gray-400">
        Formulir ini belum terhubung dengan layanan pengiriman pesan otomatis.
      </p>
    </form>
  );
}
