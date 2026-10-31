import ContactForm from '../../components/ContactForm';

export const metadata = {
  title: "Kontak | Laila Nur Abidah",
  description: "Hubungi Laila Nur Abidah.",
};

export default function KontakPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8 md:py-16">

      {/* JUDUL */}
      <header className="mb-8">
        <p className="font-semibold text-red-700">
          Ada pertanyaan?
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
          Hubungi Saya
        </h1>

        <p className="mt-3 max-w-2xl leading-7 text-slate-600">
          Punya pertanyaan atau ingin bekerja sama? Isi formulir berikut.
        </p>
      </header>

      {/* FORM DAN INFORMASI KONTAK */}
      <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-[minmax(0,2fr)_minmax(10rem,1fr)] md:gap-5">

        <ContactForm />

        <aside className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
          <h2 className="text-xl font-bold text-slate-900">
            Temukan Saya di
          </h2>

          <ul className="mt-3 space-y-3">

            {/* GITHUB */}
            <li>
              <a
                href="https://github.com/lailakanesarpl-pixel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-red-700 hover:underline"
              >
                GitHub
              </a>
            </li>

            {/* EMAIL */}
            <li>
              <a
                href="mailto:lailakanesarpl@gmail.com"
                className="break-all text-sm font-medium text-red-700 hover:underline"
              >
                emailkamu@gmail.com
              </a>
            </li>

          </ul>
        </aside>

      </div>
    </main>
  );
}