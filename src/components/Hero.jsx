import Image from "next/image";

export default function Hero({ nama, tagline }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      {/* FOTO PROFIL */}
      <div className="w-32 h-32 rounded-full border-4 border-red-500 overflow-hidden shadow-md shrink-0 relative bg-slate-200">
        <Image 
          src="/foto-profil.jpg" // Pastikan nama file ini sama persis dengan yang ada di folder public
          alt="Foto Profil"
          fill
          className="object-cover"
        />
      </div>

      {/* TEKS SAMBUTAN */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          Halo, saya {nama}!
        </h1>
        <p className="text-slate-600 text-base md:text-lg">
          {tagline}
        </p>
      </div>
    </div>
  );
}