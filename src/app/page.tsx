import Image from "next/image";
import Navbar from "./Components/Navbar";
import SobreMim from "./Components/SobreMim";
import MeusProjetos from "./Components/MeusProjetos";
import Contatos from "./Components/Contatos";
import Footer from "./Components/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-900">
      <Navbar />
      <div className="pt-16">
        <SobreMim />
        <MeusProjetos />
        <Contatos />
        <Footer />
      </div>
    </main>
  );
}
