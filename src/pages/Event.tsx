import { useState } from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event(){
  const [sidebarActive, setSidebarActive] = useState(false)

  function handleSidebarActive(){
    setSidebarActive(!sidebarActive);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header setSidebar={handleSidebarActive} />
      <main className="flex flex-1 relative">
        <Video/>
        <Sidebar active={sidebarActive} />
      </main>

      <Footer />
    </div>
  )
}