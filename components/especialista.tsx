export function Especialista () {
  return (
    <section className="mt-12 text-center px-6 flex justify-center flex-col items-center">
      <h2 className="text-3xl font-bold text-yellow-400">Quem vai te ensinar?</h2>
      <div className="mt-6 max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <img src="/avatar3.jpg" alt="avatar especialista" width={200} height={50} className="rounded-full mx-auto" />
        <h3 className="text-2xl text-white mt-4">Carlos Souza</h3>
        <p className="text-gray-300 mt-2">Investidor e mentor com mais de 10 anos no mercado imobiliário. Já ajudou mais de 1.000 alunos a alcançarem o sucesso.</p>
      </div>
    </section>
  )
}