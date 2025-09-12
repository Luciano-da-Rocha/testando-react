
import { Header } from './components/header.tsx'
import { Footer } from './components/footer.tsx';
import {useState} from 'react'

export default function App(){



  const [input, setInput] = useState("")
  const [aluno, setAluno] = useState("No Name")
  const [instante, setInstante] = useState<string | number>("")
  

  function mostrarNome(){
    setAluno(input)
  }
  
  

  

  
  return(
    <div>
    <Header title="Curso React + Typescript"/>
    
    <Titulo name="Titulo do Ola mundo criado por componente"/>
    <Botao name="Botão 1"/><br></br>
    <Botao name="Botão 2"/><br></br>
    <Cliente aluno="Lucas" modalidade="Ginastica" idade={7}/>


    <hr></hr>

    
    <h1>Conhecendo o Use State</h1>
    <input 
    placeholder="Digite seu nome" 
    value = {input} 
    onChange={ (e) => setInput(e.target.value)} />
    
    <button onClick={mostrarNome}>Mostrar Nome</button>
    <h3>Bem Vindo {aluno}</h3>
    <hr></hr>    

    <input placeholder='digite'
    value={instante}
    onChange={(evento) => setInstante(evento.target.value)}/>

    <h3>Voce digitou: {instante}</h3>
    
    
    
    

    


    <Footer/>
    
    </div>
    

  )
}

// As propriedades dos componentes criados são definidos com a interface



interface BotaoProps{
  name: string;
}

//Componente  Botão criado 
function Botao({name}: BotaoProps){
  return(
<button>{name}</button>

  )
}
interface TituloProps{
  name: string;
}

function Titulo({name}: TituloProps){
  return(
    <h1>{name}</h1>
  )
}

interface ClienteProps{
  aluno: string;
  modalidade: string;
  idade: number;

}

function Cliente({aluno, idade, modalidade}: ClienteProps){
  
  return(
    <div>
    
      <h1>Aluno: {aluno}</h1>
      <h2>Modalidade: {modalidade}</h2>
      <h3>Idade: {idade}</h3>

    </div>
  )

}