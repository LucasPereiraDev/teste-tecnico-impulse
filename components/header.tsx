export function Header() {
  return (
    <header className="bg-black flex justify-between py-3 px-10 font-[Georgia]">
      <h1 className="text-2xl font-bold text-white text-center items-center justify-center  font-serif">Unique Imobi</h1>
      <nav>
        <ul className="flex text-white gap-5">
          <li>Contato</li>
          <li>Sobre</li>
          <li>+</li>
        </ul>
      </nav>
    </header>
  ) 
}