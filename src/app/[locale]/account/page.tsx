import { locales } from "@/i18n";
import AccountContent from "./AccountContent";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function AccountPage() {
  return <AccountContent />;
}