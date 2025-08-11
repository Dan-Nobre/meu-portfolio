export default function Navbar() {
    return (
      <nav className="bg-gray-800 text-white fixed w-full top-0 left-0 z-50">
        <ul className="flex justify-center gap-8 p-4">
          <li><a href="#sobre" className="hover:text-blue-400">Sobre mim</a></li>
          <li><a href="#projetos" className="hover:text-blue-400">Meus Projetos</a></li>
          <li><a href="#contatos" className="hover:text-blue-400">Contatos</a></li>
        </ul>
      </nav>
    );
  }
  