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
    <main className="min-h-screen bg-[#f0fdf4] p-6 md:p-12 text-slate-800">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Bagian Hero / Profil (Foto dan Teks diatur langsung oleh komponen Hero) */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <Hero
            nama="Laila Nur Abidah"
            tagline="Siswa kelas X SMK, calon Junior Web Developer di Kelas Industri UBIG."
          />
        </section>

        {/* Tentang Saya */}
        <section 
          id="tentang"
          className="scroll-mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Tentang Saya</h2>
          <p className="leading-7 text-gray-700">
            Saya senang mempelajari hal baru di dunia teknologi,
            khususnya pengembangan website. Saya ingin terus meningkatkan 
            kemampuan agar bisa membuat website yang bermanfaat.
          </p>
        </section>

        {/* Hobi & Cita-cita (Grid 2 Kolom) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Hobi</h2>
            <ul className="list-inside list-disc space-y-2 text-gray-700">
              <li>Dance</li>
              <li>Menyanyi</li>
              <li>Bermain Roblox</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Cita-cita</h2>
            <p className="mb-3 text-gray-700">
              Menjadi Junior Web Developer. Langkah yang saya rencanakan:
            </p>
            <ol className="list-inside list-decimal space-y-2 text-gray-700">
              <li>Menyelesaikan pembelajaran di kelas industri UBIG.</li>
              <li>Magang di perusahaan teknologi.</li>
              <li>Bekerja sebagai Web Developer.</li>
            </ol>
          </section>
        </div>

        {/* Keahlian */}
        <section id="keahlian" className="scroll-mt-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-2xl font-bold text-slate-900">Keahlian</h2>

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
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-2xl font-bold text-slate-900">Jadwal Belajar</h2>

            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-left">
                <thead className="bg-slate-800 text-white">
                  <tr>
                    <th className="p-3">Hari</th>
                    <th className="p-3">Waktu</th>
                    <th className="p-3">Kegiatan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-700">
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