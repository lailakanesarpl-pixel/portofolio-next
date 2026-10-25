import ProyekCard from "@/components/ProyekCard";

// Data proyek langsung ditulis di sini agar 100% aman dari error import
const proyek = [
  {
    id: 1,
    judul: "Website Portofolio",
    deskripsi: "Portofolio pribadi menggunakan Next.js dan Tailwind CSS.",
  },
];

export default function DaftarProyek() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Daftar Proyek Saya</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {proyek.map((item) => (
          <ProyekCard 
            key={item.id} 
            judul={item.judul} 
            deskripsi={item.deskripsi} 
          />
        ))}
      </div>
    </main>
  );
}