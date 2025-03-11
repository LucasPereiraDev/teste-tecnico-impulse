export function Beneficios() {
  return (
    <section className="my-12 flex flex-col justify-center items-center ">
      
      <div className="flex flex-wrap justify-center items-center mt-10 sm:bg-zinc-950 bg-transparent w-auto h-auto rounded-md max-w-full">
        <img src="/invest.jpg" width={800} height={400} alt={"investimento"} className="rounded-md object-fit" />
        
        <ul className="space-y-6 text-base sm:text-lg text-white px-6 py-6">
          <h2 className="text-lg sm:text-3xl font-bold text-yellow-400 mb-10 ">Por que participar?</h2>
          <li className="flex gap-3 ">
            <img src="/Group.svg" width={25} height={25} alt="selo check"/> 
            Aprenda os segredos do mercado imobiliário
          </li>
          <li className="flex gap-3">
            <img src="/Group.svg" width={25} height={25} alt="selo check"/> 
            Técnicas de negociação para fechar grandes negócios
            </li>
          <li className="flex gap-3">
            <img src="/Group.svg" width={25} height={25} alt="selo check"/> 
            Estratégias de captação de imóveis lucrativos
          </li>
          <li className="flex gap-3">
            <img src="/Group.svg" width={25} height={25} alt="selo check"/> 
          Certificado na conclusão da mentoria
          </li>
        </ul>
      </div>

    </section>
  )
}