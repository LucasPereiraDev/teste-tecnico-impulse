export function Depoimentos() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center text-yellow-400">O que nossos alunos dizem?</h2>

      <div className="mt-6 flex flex-col md:flex-row gap-6 justify-center content-center text-center m-3 ">

        <div className="bg-gray-800 p-4 rounded-lg shadow-lg max-w-sm flex flex-col items-center">
        <img src="/avatar2.jpg" width={200} height={50} alt="avatar" className="rounded-full my-5"/>
          <p className="text-gray-300 mt-4">"Essa mentoria mudou minha vida! Fechei meu primeiro grande negócio em menos de 2 meses."</p>
          <p className="text-yellow-300 font-bold mt-2">Lucas Pereira</p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow-lg max-w-sm flex flex-col items-center">
          <img src="/avatar.jpg" width={200} height={50} alt="avatar" className="rounded-full my-5"/>
          <p className="text-gray-300 mt-4">"O conhecimento que adquiri aqui vale ouro. Recomendo para qualquer um que queira crescer!"</p>
          <p className="text-yellow-300 font-bold mt-2">Lucas Silveira</p>
        </div>

      </div>
    </section>
    
  )
}