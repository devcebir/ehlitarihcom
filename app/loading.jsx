import { GiBowArrow } from "react-icons/gi";

export default function loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <GiBowArrow className="animate-pulse text-9xl" />
    </div>
  );
}
