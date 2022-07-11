import { Logo } from "./Logo";
import iconList from "../assets/list.png"
import iconClose from "../assets/close.png"
import { useState } from "react"
import { Event } from "../pages/Event"
import { Sidebar } from "./Sidebar"

interface HeaderProps{
  setSidebar : () => void;
}

export function Header({setSidebar}:HeaderProps){
  const [sidebarOn, setSidebarOn] = useState(false)

  function handleSidebar(){
    setSidebarOn(!sidebarOn);
    setSidebar();
  }
  
  return (
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
      <Logo page={null} />

      <button type="button" onClick={handleSidebar} className="lg:hidden mr-5 flex items-center gap-3">
        Aulas
        <img src={iconList} className={sidebarOn ? "hidden transition-all" : ""} />
        <img src={iconClose} className={!sidebarOn ? "hidden transition-all" : ""}/>
      </button>
    </header>
  )
}