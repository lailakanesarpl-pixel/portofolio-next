
import { notFound } from "next/navigation";
import { proyek } from "../../../data/proyek";
import DetailProyek from "../../../components/DetailProyek";

export default function ModulTiga() {
  const data = proyek.find((item) => item.slug === "modul-3");

  if (!data) notFound();

  return <DetailProyek data={data} />;
}
