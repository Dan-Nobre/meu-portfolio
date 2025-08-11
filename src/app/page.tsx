import Image from "next/image";
import Navbar from "./Components/Sessions/Navbar";
import SobreMim from "./Components/Sessions/SobreMim";
import MeusProjetos from "./Components/Sessions/MeusProjetos";
import Contatos from "./Components/Sessions/Contatos";
import Footer from "./Components/Sessions/Footer";
import Botãonavbar from "./Components/ui/botão-navbar";


export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-purple-900">
      <Navbar />
      <div className="pt-16">
        <Botãonavbar />
        <SobreMim />
        <MeusProjetos />
        <Contatos />
        <Footer />
      </div>
    </main>
  );
}
