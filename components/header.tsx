export function Header() {
  return (
    <header className="bg-zinc-950 shadow-xl flex flex-wrap justify-between py-3 px-10 font-serif items-center">
      <h1 className="text-2xl sm:text-4xl font-bold text-white"><span className="text-blue-400 ">Unique </span>Imobi</h1>
      <nav className="hidden sm:block">
        <ul className="flex flex-wrap text-white text-base gap-6 tracking-wider font-mono">
          <li className="hover:text-gray-400 cursor-pointer mr-10">O que você vai aprender</li>
          <li className="hover:text-gray-400 cursor-pointer">Depoimentos</li>
        </ul>
      </nav>
    </header>
  ) 
}