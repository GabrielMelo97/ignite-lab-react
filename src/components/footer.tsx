import rockeatLogo from '../assets/Logo-rockeat.png';

export function Footer(){
  return(
    <footer>
      <div className="mx-9 py-6 border-t border-gray-500 text-center  md:text-left md:flex justify-between items-center">
        <span className="md:flex items-center">
          <img src={rockeatLogo} alt="logo-rocket" className="mx-auto md:mx-0 mb-4 md:mb-0" />
          <strong className="text-gray-300 md:ml-7 font-normal py-4">
            Rocketseat - Todos os direitos reservados
          </strong>
        </span>

        <strong className="text-gray-300 font-normal block md:flex mt-4 md:mt-0">
          Políticas de privacidade
        </strong>
      </div>
    </footer>
  )
}