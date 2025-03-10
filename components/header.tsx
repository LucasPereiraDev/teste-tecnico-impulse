export function Header() {
  return (
    <header className="bg-black flex flex-wrap justify-between py-3 px-10 font-serif items-center">
      <h1 className="text-3xl font-bold text-white font-serif">Unique Imobi</h1>
      <nav>
        <ul className="flex flex-wrap text-white gap-6 tracking-wider">
          <li className="hover:text-gray-400 cursor-pointer">O que você vai aprender</li>
          <li className="hover:text-gray-400 cursor-pointer">Depoimentos</li>
          <li className="hover:text-gray-400 cursor-pointer">Contato</li>
        </ul>
      </nav>
    </header>
  ) 
}