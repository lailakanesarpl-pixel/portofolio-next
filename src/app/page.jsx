
import Link from "next/link";
import Hero from "../components/Hero";
import SkillCard from "../components/SkillCard";
import proyek from "../data/proyek";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f1faee] px-5 py-10 text-slate-800 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100 md:px-8">
      <div className="mx-auto max-w-5xl space-y-14">

        {/* HERO */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-10">
          <Hero
            nama="Laila Nur Abidah"
            tagline="Siswa kelas X SMK, calon Junior Web Developer di Kelas Industri UBIG."
          />

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/tentang"
              className="rounded-lg bg-red-700 px-5 py-3 font-semibold text-white transition hover:bg-red-800"
            >
              Tentang Saya
            </Link>

            <Link
              href="/tentang#keahlian"
              className="rounded-lg border border-red-700 px-5 py-3 font-semibold text-red-700 transition hover:bg-red-700 hover:text-white dark:text-red-300"
            >
              Lihat Keahlian
            </Link>
          </div>
        </section>

        {/* KEAHLIAN */}
        <section>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-red-700 dark:text-red-400">
                Kemampuan Saya
              </p>
              <h2 className="mt-1 text-3xl font-bold">
                Keahlian
              </h2>
            </div>

            <Link
              href="/tentang#keahlian"
              className="font-semibold text-red-700 hover:underline dark:text-red-400"
            >
              Lihat semua keahlian →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard
                key={skill.nama}
                nama={skill.nama}
                level={skill.level}
              />
            ))}
          </div>
        </section>

        {/* PROYEK TERBARU */}
        <section>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-red-700 dark:text-red-400">
                Hasil Karya
              </p>
              <h2 className="mt-1 text-3xl font-bold">
                Proyek Terbaru
              </h2>
            </div>

            <Link
              href="/proyek"
              className="font-semibold text-red-700 hover:underline dark:text-red-400"
            >
              Lihat semua proyek →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {proyek.slice(0, 3).map((item) => (
              <article
                key={item.slug}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-48 w-full object-cover"
                  />
                )}

                <div className="p-5">
                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 leading-6 text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>

                  <Link
                    href={`/proyek/${item.slug}`}
                    className="mt-4 inline-block font-semibold text-red-700 hover:underline dark:text-red-400"
                  >
                    Lihat detail →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
