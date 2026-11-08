
import Hero from "../components/Hero";
import SkillCard from "../components/SkillCard";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f0fdf4] p-6 text-slate-800 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100 md:p-12">
      <div className="mx-auto max-w-4xl space-y-8">

        {/* Hero / Profil */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <Hero
            nama="Laila Nur Abidah"
            tagline="Siswa kelas X SMK, calon Junior Web Developer di Kelas Industri UBIG."
          />
        </section>

        {/* Tentang Saya */}
        <section
          id="tentang"
          className="scroll-mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
        >
          <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-gray-100">
            Tentang Saya
          </h2>
          <p className="leading-7 text-gray-700 dark:text-gray-300">
            Saya senang mempelajari hal baru di dunia teknologi,
            khususnya pengembangan website. Saya ingin terus meningkatkan
            kemampuan agar bisa membuat website yang bermanfaat.
          </p>
        </section>

        {/* Hobi dan Cita-cita */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-gray-100">
              Hobi
            </h2>
            <ul className="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
              <li>Dance</li>
              <li>Menyanyi</li>
              <li>Bermain Roblox</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-gray-100">
              Cita-cita
            </h2>
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              Menjadi Junior Web Developer. Langkah yang saya rencanakan:
            </p>
            <ol className="list-inside list-decimal space-y-2 text-gray-700 dark:text-gray-300">
              <li>Menyelesaikan pembelajaran di kelas industri UBIG.</li>
              <li>Magang di perusahaan teknologi.</li>
              <li>Bekerja sebagai Web Developer.</li>
            </ol>
          </section>
        </div>

        {/* Keahlian */}
        <section id="keahlian" className="scroll-mt-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-2xl font-bold text-slate-900 dark:text-gray-100">
              Keahlian
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {skills.map((skill) => (
                <SkillCard
                  key={skill.nama}
                  nama={skill.nama}
                  level={skill.level}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Jadwal Belajar */}
        <section>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-2xl font-bold text-slate-900 dark:text-gray-100">
              Jadwal Belajar
            </h2>

            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
              <table className="w-full text-left">
                <thead className="bg-slate-800 text-white">
                  <tr>
                    <th className="p-3">Hari</th>
                    <th className="p-3">Waktu</th>
                    <th className="p-3">Kegiatan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-700 dark:divide-gray-700 dark:text-gray-300">
                  <tr>
                    <td className="p-3">Senin</td>
                    <td className="p-3">19.00–20.00</td>
                    <td className="p-3">Membaca ulang modul</td>
                  </tr>
                  <tr>
                    <td className="p-3">Selasa</td>
                    <td className="p-3">19.00–21.00</td>
                    <td className="p-3">Mengerjakan tugas praktik</td>
                  </tr>
                  <tr>
                    <td className="p-3">Rabu</td>
                    <td className="p-3">19.30–20.30</td>
                    <td className="p-3">Membuat proyek website</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
