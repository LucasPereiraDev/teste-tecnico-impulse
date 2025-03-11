export function Faq() {
  const faqItems = [
    {
      id: 1,
      question: "Quando será a mentoria?",
      description: "As aulas acontecerão ao vivo no dia XX/XX às XXh.",
      icon: "/calendar.svg",
    },
    {
      id: 2,
      question: "Como vou acessar?",
      description: "Após a inscrição, você receberá um e-mail com todas as instruções.",
      icon: "/net.svg",
    },
    {
      id: 3,
      question: "Receberei certificado?",
      description: "Sim! Todos os participantes receberão um certificado digital.",
      icon: "/certificado.svg",
    },
  ];

  return (
    <div className="mt-24 text-base sm:text-lg text-white  flex flex-col gap-3">

      {faqItems.map((item) => (
       <details
          key={item.id}
          className="bg-zinc-950 p-5 mt-3 group open:transition-all open:duration-300 open:ease-in-out">
          <summary className="cursor-pointer font-bold pt-2 flex  items-center relative">
            <img src={item.icon} alt="icon" className="mr-5"/>
            {item.question}
            <span className="transition-transform duration-300 group-open:rotate-180 ml-10 block sm:absolute right-10 bottom-0">▼</span>
          </summary>
          <p className="mt-2">
            {item.description}
          </p>
       </details>
      )
      )}
    </div>

  )
}