import { useState } from "react"
import Header from "./Components/Header"
import Formulario from "./Components/Formulario"
import ListadoPacientes from "./Components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState ({})


  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
      <Formulario 
        pacientes={pacientes}
        setPacientes={setPacientes}
      />
      <ListadoPacientes
        pacientes={pacientes}
        setPaciente={setPaciente}/>
        
      </div>
    </div>
  )
}

export default App
