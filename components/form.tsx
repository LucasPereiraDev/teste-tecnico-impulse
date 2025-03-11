export function Form() {
  return (
    <div className="mt-8 bg-gray-950 p-6 mx-6 rounded-lg shadow-lg w-full max-w-md flex flex-col justify-self-center ">
      <p className="text-base sm:text-lg text-center text-zinc-300 mb-4">Preencha com seu melhor e-mail e receba o link para garantir sua vaga!</p>
      <form className="flex flex-col">
        <input 
        type="text" 
        name="email" 
        id="email"
        placeholder="Digite o seu melhor e-mail"
        className="bg-white text-black p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </form>
      <button 
      type="submit"
      className="bg-blue-600 text-white font-bold text-base sm:text-lg px-5 py-3 mt-4 rounded-md hover:bg-blue-700 transition-all cursor-pointer">
        Quero minha vaga agora!
      </button>
    </div>
  )
}