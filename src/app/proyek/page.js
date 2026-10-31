export default function DaftarProyek() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">

      {/* JUDUL HALAMAN */}
      <p className="font-semibold text-red-700">
        Hasil belajar
      </p>

      <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
        Proyek Saya
      </h1>

      <p className="mt-3 text-gray-600">
        Kumpulan hasil belajar saya. Pilih kartu untuk melihat detail setiap proyek.
      </p>

      {/* DAFTAR PROYEK */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {/* PROYEK 1 */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-md">

          <div className="h-52 overflow-hidden bg-slate-800">
            <img
              src="/Proyek1.png"
              alt="Proyek 1"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-5">
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-green-50 px-3 py-1 text-sm text-gray-600">
                HTML
              </span>
              <span className="rounded-full bg-green-50 px-3 py-1 text-sm text-gray-600">
                CSS
              </span>
            </div>

            <h2 className="text-xl font-bold text-slate-900">
              Project Website
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Website sederhana yang saya buat sebagai hasil belajar HTML dan CSS.
            </p>
          </div>
        </div>


        {/* PROYEK 2 */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-md">

          <div className="h-52 overflow-hidden bg-slate-800">
            <img
              src="/project2.png"
              alt="Proyek 2"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-5">
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-green-50 px-3 py-1 text-sm text-gray-600">
                HTML
              </span>
              <span className="rounded-full bg-green-50 px-3 py-1 text-sm text-gray-600">
                CSS
              </span>
            </div>

            <h2 className="text-xl font-bold text-slate-900">
              Responsive Website
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Website responsive yang dapat menyesuaikan tampilan dengan ukuran layar.
            </p>
          </div>
        </div>


        {/* PROYEK 3 */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-md">

          <div className="h-52 overflow-hidden bg-slate-800">
            <img
              src="/Proyek3.png"
              alt="Proyek 3"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-5">
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-green-50 px-3 py-1 text-sm text-gray-600">
                HTML
              </span>
              <span className="rounded-full bg-green-50 px-3 py-1 text-sm text-gray-600">
                CSS
              </span>
              <span className="rounded-full bg-green-50 px-3 py-1 text-sm text-gray-600">
                JavaScript
              </span>
            </div>

            <h2 className="text-xl font-bold text-slate-900">
              Interactive Digital Profile
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Website profil digital interaktif yang dibuat menggunakan HTML,
              CSS, dan JavaScript.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}