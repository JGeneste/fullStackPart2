import Person from './Person'

const Persons = ({people}) => {
  return(
    <ul>
      {people.map(person => 
        <li key={person.name}>{person.name} {person.number}</li>)}
    </ul>
  )
}

export default Persons