import Link from "next/link";
import Image from "next/image";

export default function ProyekCard({ proyek }) {
  if (!proyek) {
    return null;
  }

  return (
    <Link
      href={`/proyek/${proyek.slug}`}
      className="block overflow-hidden rounded-xl border"
    >
      {proyek.image && (
        <Image
          src={proyek.image}
          alt={proyek.title || "Gambar proyek"}
          width={600}
          height={400}
          className="h-auto w-full object-cover"
        />
      )}

      <div className="p-4">
        <h3 className="text-lg font-bold">
          {proyek.title || "Proyek"}
        </h3>

        <p>{proyek.description || ""}</p>
      </div>
    </Link>
  );
}