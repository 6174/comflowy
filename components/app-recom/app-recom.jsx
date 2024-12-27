import { useLang } from "@/i18n";
import AppCards from "./app-cards";


export function AppRecom() {
  const lang = useLang();
  return (
    <div>
      <AppCards />
    </div>
  )
}