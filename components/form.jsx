export function Form() {
  return (
    <form action="" className="flex justify-center items-center w-screen justify-center text-white mt-10">
      <label htmlFor="" className="mr-10">Email:</label>
      <input 
        type="text" 
       name="email" 
       id="email"
        placeholder="Digite o seu Email"
       className="bg-white rounded-sm w-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "/>
    </form>
  )
}