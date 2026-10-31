"use client";

export default function ContactForm() {
  return (
    <form className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      
      {/* NAMA */}
      <div>
        <label className="mb-2 block font-semibold text-slate-700">
          Nama
        </label>
        <input
          type="text"
          placeholder="Masukkan nama kamu"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-red-500"
        />
      </div>

      {/* EMAIL */}
      <div className="mt-4">
        <label className="mb-2 block font-semibold text-slate-700">
          Email
        </label>
        <input
          type="email"
          placeholder="Masukkan email kamu"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-red-500"
        />
      </div>

      {/* PESAN */}
      <div className="mt-4">
        <label className="mb-2 block font-semibold text-slate-700">
          Pesan
        </label>
        <textarea
          rows="5"
          placeholder="Tulis pesan..."
          className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-red-500"
        ></textarea>
      </div>

      {/* TOMBOL */}
      <button
        type="submit"
        className="mt-5 rounded-lg bg-red-700 px-5 py-3 font-semibold text-white hover:bg-red-800"
      >
        Kirim Pesan
      </button>

    </form>
  );
}