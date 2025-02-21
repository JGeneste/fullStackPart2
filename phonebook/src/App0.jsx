import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567', id: 1},
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2},
    { name: 'Dan Abramov', number: '12-43-234345', id: 3},
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum,setNewNum] = useState('')
  const [newSearch,setNewSearch] = useState('')

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
    setNewSearch(event.target.value)
  }

  /*peeps = array of people who have been searched for.*/
  const peeps = (newSearch === '')
    ? persons
    : persons.filter(person => 
      person.name.toLowerCase().includes(newSearch.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input type="search" value={newSearch} 
        onChange={handleNameSearch}/>
      </div>
      <h3>Add a new</h3>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNum} onChange={handleNumChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      <ul>
        {peeps.map(peep => 
        <li key={peep.name}>{peep.name} {peep.number}</li>)}
      </ul>
    </div>
  )
}

export default App