import PageDetail from "@/components/page-detail";
import AsyaHunBayrak from "@/public/asya-hun.svg";
import AvrupaHunBayrak from "@/public/avrupa-hun.svg";

export const metadata = {
  title: "Türk Tarihi - Ehl-i Tarih",
};

export default function page() {
  return (
    <div className="px-80 flex items-center gap-5">
      <PageDetail
        title="Asya Hun Devleti"
        subtitle="MÖ 220-MÖ 58"
        src={AsyaHunBayrak}
        href="/turk-tarihi/asya-hun-devleti"
      />

      <PageDetail
        title="Avrupa Hun Devleti"
        subtitle="370 - 469"
        src={AvrupaHunBayrak}
        href="/turk-tarihi/asya-hun-devleti"
      />
    </div>
  );
}
