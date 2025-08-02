import Footer from "../components/Footer";
import Navbar  from "../components/NavBar";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </section>
  );
}
