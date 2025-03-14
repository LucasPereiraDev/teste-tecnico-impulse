export function Depoimentos() {
  return (
    <section>
      <h2 className="text-xl sm:text-3xl font-bold text-center text-yellow-400 mt-24">O que nossos alunos dizem?</h2>

      <div className="my-6 flex flex-col sm:flex-row gap-6 justify-center items-center text-center  ">

        <div className="bg-gray-800 p-4 rounded-lg  max-w-md flex flex-col items-center mx-6">
        <img src="/avatar2.jpg" width={200} height={50} alt="avatar" className="rounded-full shadow-lg blur-sm"/>
          <p className="text-gray-300 mt-4">"Essa mentoria mudou minha vida! Fechei meu primeiro grande negócio em menos de 2 meses."</p>
          <p className="text-yellow-300 font-bold mt-2">Lucas Pereira</p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg  max-w-md flex flex-col items-center mx-6">
          <img src="/avatar.jpg" width={200} height={50} alt="avatar" className="rounded-full shadow-lg blur-sm"/>
          <p className="text-gray-300 mt-4">"O conhecimento que adquiri aqui vale ouro. Recomendo para qualquer um que queira crescer!"</p>
          <p className="text-yellow-300 font-bold mt-2">Lucas Silveira</p>
        </div>

      </div>
    </section>
    
  )
}