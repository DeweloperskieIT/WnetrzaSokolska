import { getDictionary, Locales } from "@/app/dictionaries";
import Footer from "@/components/FooterFiles/Footer";
import Header from "@/components/HeaderFiles/Header";

export default async function Layout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locales };
}) {
  const dict = await getDictionary(locale as Locales);
  if (!dict) {
    return;
  }
  return (
    <main className="overflow-auto flex flex-col">
      <Header dict={dict} />
      <div className="landing-page">{children}</div>
      <Footer dict={dict} />
    </main>
  );
}
