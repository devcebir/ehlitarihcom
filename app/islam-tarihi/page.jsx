import PageDetail from "@/components/page-detail";
import AsyaHunBayrak from "@/public/asya-hun.svg";
import AvrupaHunBayrak from "@/public/avrupa-hun.svg";
import GokturkBayrak from "@/public/gokturk.svg";
import UygurkBayrak from "@/public/uygur.svg";
import AvarBayrak from "@/public/avar.svg";
import KırgızBayrak from "@/public/kırgız.svg";
import BulgarBayrak from "@/public/bulgar.svg";
import TurksBayrak from "@/public/turks.svg";

export const metadata = {
  title: "İslam Tarihi / Ehl-i Tarih",
  description: "İslam Tarihi / Ehl-i Tarih",
};

export default function page() {
  return (
    <div
      className="px-80 flex flex-col items-center justify-center gap-5 h-screen max-[1286px]:px-56 max-[1024px]:px-40 
    max-[600px]:px-10 max-[570px]:px-3 max-[480px]:px-10 max-[325px]:px-5 max-[1670px]:my-5 max-[1240px]:my-10 max-[920px]:my-20 max-[850px]:my-[30rem] max-[540px]:my-[27rem] max-[500px]:my-[30rem] max-[360px]:my-[33rem]"
    >
      <div className="flex flex-col items-center justify-center text-center max-[500px]:text-start gap-3 my-5">
        <h3 className="text-3xl font-bold">İslam Tarihi</h3>
        <p className="text-lg">
          Bu sayfada yer alan linklere tıklayarak,{" "}
          <span className="font-bold">İslam</span> ve{" "}
          <span className="font-bold">Türk</span> medeniyetlerinin izinde dolaşacak
          ve tarihte önemli bir rol oynamış İslam devletlerinin detaylı
          hikayelerine ulaşacaksınız. Her bir sayfa, o devletin kuruluşundan
          yıkılışına kadar olan olayları, lider figürleri ve etkileşimde
          bulunduğu diğer medeniyetleri içeren bilgilerle doludur.
        </p>
      </div>
      <div className="flex items-center justify-center gap-3 flex-wrap">
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
          href="/turk-tarihi/avrupa-hun-devleti"
        />

        <PageDetail
          title="Göktürkler"
          subtitle="552 – 630"
          src={GokturkBayrak}
          href="/turk-tarihi/gokturk-devleti"
        />

        <PageDetail
          title="Uygurlar"
          subtitle="745 – 840"
          src={UygurkBayrak}
          href="/turk-tarihi/uygur-devleti"
        />
        <PageDetail
          title="Avarlar"
          subtitle="560 – 805"
          src={AvarBayrak}
          href="/turk-tarihi/avar-devleti"
        />

        <PageDetail
          title="Kırgızlar"
          subtitle="745 – 840"
          src={KırgızBayrak}
          href="/turk-tarihi/kirgiz-devleti"
        />

        <PageDetail
          title="Bulgarlar"
          subtitle="583 – 665"
          src={BulgarBayrak}
          href="/turk-tarihi/bulgar-devleti"
        />

        <PageDetail
          title="Türk Devlet ve Boyları"
          subtitle=""
          src={TurksBayrak}
          href="/turk-tarihi/turk-devlet-ve-boylari"
        />
      </div>
    </div>
  );
}
