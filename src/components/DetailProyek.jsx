
import Image from "next/image";
import Link from "next/link";

export default function DetailProyek({ data }) {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-10">
      <Link
        href="/proyek"
        className="mb-8 inline-block font-semibold text-blue-600 hover:underline dark:text-sky-300"
      >
        ← Kembali ke Daftar Proyek
      </Link>

      <div className="mb-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {data.kategori.map((kat, index) => (
            <span
              key={index}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-800 dark:text-sky-200"
            >
              {kat}
            </span>
          ))}
        </div>

        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
          {data.minggu}
        </p>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
          {data.judul}
        </h1>

        <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
          {data.deskripsi}
        </p>
      </div>

      <div className="mb-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
        <Image
          src={data.gambar}
          alt={`Tangkapan layar ${data.judul}`}
          width={1200}
          height={750}
          className="h-auto w-full"
        />
      </div>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <h2 className="mb-5 text-2xl font-bold text-gray-900 dark:text-white">
          Fitur dan Hal yang Saya Pelajari
        </h2>

        <ul className="list-inside list-disc space-y-3 text-gray-600 dark:text-gray-300">
          {data.fitur.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
