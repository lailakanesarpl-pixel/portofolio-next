export const metadata = {
  title: "Tentang Saya | Laila Nur Abidah",
  description:
    "Tentang Laila Nur Abidah, hobi, cita-cita, kemampuan, dan perjalanan belajar.",
};

const kemampuan = [
  {
    nama: "HTML",
    level: "Menengah",
  },
  {
    nama: "CSS",
    level: "Menengah",
  },
  {
    nama: "JavaScript",
    level: "Dasar",
  },
  {
    nama: "Git & GitHub",
    level: "Dasar",
  },
  {
    nama: "Canva",
    level: "Mahir",
  },
  {
    nama: "Next.js",
    level: "Dasar",
  },
];

const jadwalBelajar = [
  {
    hari: "Senin",
    waktu: "19.00 - 20.00",
    kegiatan: "Belajar HTML dan CSS",
  },
  {
    hari: "Selasa",
    waktu: "19.00 - 21.00",
    kegiatan: "Mengerjakan tugas praktik",
  },
  {
    hari: "Rabu",
    waktu: "19.30 - 20.30",
    kegiatan: "Belajar JavaScript dan membuat project",
  },
];

export default function Tentang() {
  return (
    <main className="mx-auto w-full max-w-6xl space-y-6 px-5 py-10 md:px-8 md:py-16">

      {/* JUDUL */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-utama md:text-4xl">
          Tentang Saya
        </h1>

        <p className="mt-2 text-slate-600">
          Kenalan lebih dekat dengan saya dan perjalanan saya di dunia teknologi.
        </p>
      </header>

      {/* PERKENALAN */}
      <section className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-bold text-utama">
          Perkenalan
        </h2>

        <p className="leading-7 text-slate-600">
          Halo, saya{" "}
          <span className="font-semibold text-utama">
            Laila Nur Abidah
          </span>
          . Saya adalah siswa SMK jurusan Rekayasa Perangkat Lunak (RPL)
          yang sedang belajar membuat website dan mengembangkan kemampuan
          di bidang teknologi.
        </p>

        <p className="mt-3 leading-7 text-slate-600">
          Saya tertarik dengan dunia website, desain, dan pemrograman.
          Saya senang mencoba hal baru dan terus belajar untuk meningkatkan
          kemampuan saya dalam membuat website yang menarik dan bermanfaat.
        </p>
      </section>

      {/* HOBI DAN CITA-CITA */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

        {/* HOBI */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-utama">
            Hobi
          </h2>

          <ul className="list-inside list-disc space-y-2 text-slate-600">
            <li>Mendengarkan musik</li>
            <li>Membuat desain</li>
            <li>Belajar membuat website</li>
          </ul>
        </section>

        {/* CITA-CITA */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-utama">
            Cita-cita
          </h2>

          <p className="mb-3 text-slate-600">
            Saya ingin menjadi{" "}
            <span className="font-bold text-utama">
              Junior Web Developer
            </span>
            .
          </p>

          <ol className="list-inside list-decimal space-y-2 text-slate-600">
            <li>Menguasai HTML, CSS, dan JavaScript</li>
            <li>Mempelajari React dan Next.js</li>
            <li>Membuat berbagai project website</li>
            <li>Mendapatkan pengalaman melalui magang</li>
          </ol>
        </section>

      </div>

      {/* KEMAMPUAN */}
      <section className="rounded-2xl bg-white p-6 shadow-sm">

        <h2 className="mb-4 text-2xl font-bold text-utama">
          Kemampuan
        </h2>

        <p className="mb-5 text-slate-600">
          Beberapa kemampuan yang sudah saya pelajari dan sedang saya
          kembangkan:
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {kemampuan.map((item) => (
            <div
              key={item.nama}
              className="rounded-xl border border-slate-100 p-5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="font-bold text-utama">
                {item.nama}
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Level: {item.level}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* JADWAL BELAJAR */}
      <section className="rounded-2xl bg-white p-6 shadow-sm">

        <h2 className="mb-4 text-xl font-bold text-utama">
          Jadwal Belajar
        </h2>

        <div className="overflow-x-auto rounded-lg border border-slate-100">

          <table className="w-full border-collapse text-left text-sm">

            <thead>
              <tr className="bg-utama text-white">
                <th className="p-3 font-semibold">
                  Hari
                </th>

                <th className="p-3 font-semibold">
                  Waktu
                </th>

                <th className="p-3 font-semibold">
                  Kegiatan
                </th>
              </tr>
            </thead>

            <tbody className="text-slate-600">

              {jadwalBelajar.map((item) => (
                <tr
                  key={item.hari}
                  className="border-b border-slate-100 last:border-0"
                >
                  <td className="p-3 font-medium">
                    {item.hari}
                  </td>

                  <td className="p-3">
                    {item.waktu}
                  </td>

                  <td className="p-3">
                    {item.kegiatan}
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>
      </section>

    </main>
  );
}
