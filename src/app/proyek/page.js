import FilterProyek from "../../components/FilterProyek";
import { proyek } from "../../data/proyek";

export default function DaftarProyek() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Proyek Saya
      </h1>

      <p className="mt-3 text-gray-600 dark:text-gray-300">
        Berikut adalah hasil pengerjaan Modul 1, Modul 2, dan Modul 3.
      </p>

      <FilterProyek proyek={proyek} />
    </main>
  );
}