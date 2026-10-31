
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-utama text-white">
      <nav className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between">
        
        <Link href="/" className="text-2xl font-bold">
          Laila Nur Abidah
        </Link>

        <div className="flex flex-wrap gap-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>

          <Link href="/tentang" className="hover:underline">
            Tentang
          </Link>

          <Link href="/proyek" className="hover:underline">
            Proyek
          </Link>

          <Link href="/kontak" className="hover:underline">
            Kontak
          </Link>
        </div>

      </nav>
    </header>
  );
}
