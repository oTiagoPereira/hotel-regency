import { Footer, NavBar } from "@shared";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col min-h-screen bg-background">
      <NavBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </section>
  );
}
