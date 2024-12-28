import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Table from './components/Table'

function App() {
 const [email, setEmail] = useState("");
 const [name, setName] = useState("");
 const [number, setNumber] = useState();

 const data = [
  {
    name: 'rafay',
    email: 'rafay9908@gmail.com',
    number: '03000000',
  },{
    name: 'Taha',
    email: 'Taha9908@gmail.com',
    number: '03000000',
  },
 ]

  return (
    <>
    <Form 
    name={name} 
    email={email} 
    number={number} 
    onNameChange={(name) => setName(name)}
    onEmailChange={(email) => setEmail(email)}
    onNumberChange={(number) => setNumber(number)}
    />
    <Table data={data}/>
    </>
  )
}

export default App
