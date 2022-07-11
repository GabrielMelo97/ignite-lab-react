import { Logo } from "../components/Logo"
import codeImage from '../assets/code.png'
import reactImage from '../assets/ReactJS_icon.png'
import { useState, FormEvent} from "react"
import { useNavigate } from "react-router-dom"
import { useCreateSubscriberMutation } from "../graphql/generated"
import { Footer } from "../components/footer"

export function Subscribe(){
  const navigate = useNavigate();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [createSubscriber, {loading}] = useCreateSubscriberMutation();

  async function handleSubscriber(event: FormEvent){
    event.preventDefault();

    await createSubscriber({
      variables:{
        name,
        email
      }
    })
    
    navigate('/event')
  }

  return(
    <div>
      <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
        <img src={reactImage} className="absolute z-10" />
        <div className="lg:w-full max-w-[1100px] lg:flex lg:px-4 xl:px-0 items-center justify-between mt-20 mx-auto z-20">
          <div className="max-w-[640px] text-center lg:text-left mb-10 lg:mb-0 px-5 lg:pr-10 xl:pr-0">
            <Logo page="subscribe" />
            <h1 className="mt-8 text-[1.9rem] lg:text-[2.5rem] leading-tight">
              Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
            </p>
          </div>

          <div className="p-8 bg-gray-700 border border-gray-500 rounded">
            <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

            <form onSubmit={handleSubscriber} className="flex flex-col gap-2 w-full">
              <input
                className="bg-gray-900 rounded px-5 h-14" 
                type="text" 
                placeholder="Seu nome completo"
                onChange={event => setName(event.target.value)}
              />
              <input
                className="bg-gray-900 rounded px-5 h-14" 
                type="email"
                placeholder="Digite seu e-mail"
                onChange={event => setEmail(event.target.value)}
              /> 

              <button
                disabled={loading}
                type="submit"
                className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50 disabled:hover:bg-green-500"
              >
                Garantir minha vaga
              </button>
            </form>
          </div>
        </div>

        <img src={codeImage} alt="" />
      </div>

      <Footer />
    </div>
  )
}