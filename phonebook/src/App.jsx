import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
    /*{ name: 'Arto Hellas', number: '040-1234567', id: 1},
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2},
    { name: 'Dan Abramov', number: '12-43-234345', id: 3},
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4}
  ]) */
  const [newName, setNewName] = useState('')
  const [newNum,setNewNum] = useState('')
  const [search,setSearch] = useState('')

  useEffect(() =>{
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  },[])
  console.log('render',persons.length,'persons')

  //function for checking duplicates
  const duplicate = (arrObj) => {
    return arrObj.name === newName
  }

  const addPerson = (event) => {
    event.preventDefault()
    //prevent entry of duplicate names
    if(!persons.some(duplicate)){
      const personObject = {
        name: newName, number: newNum
      }
      setPersons(persons.concat(personObject))
    }else{
      alert('${newName} is already added to phonebook')
    }
    setNewName('')
    setNewNum('')
  }

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    setNewNum(event.target.value)
  }

  const handleNameSearch = (event) => {
    setSearch(event.target.value)
  }

  /*peeps = array of people who have been searched for.*/
  const peeps = (search === '')
    ? persons
    : persons.filter(person => 
      person.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter search={search} handleNameSearch={handleNameSearch}/>
      
      <h3>Add a new</h3>
      
        <PersonForm addPerson={addPerson} newName={newName}
          handleNameChange={handleNameChange} newNum={newNum}
          handleNumChange={handleNumChange}/>
      
      <h3>Numbers</h3>
      
      <Persons people={peeps}/>
    
    </div>
  )
}

export default App