
/*peeps = array of people who have been searched for.*/
const Peeps = (newSearch,persons) => {
  return (newSearch === '') 
    ? persons
    : persons.filter(person => 
      person.name.toLowerCase().includes(newSearch.toLowerCase()))
    }

const Filter = ({search,handleNameSearch}) => {
  return(
    <div>
    filter shown with <input type="search" value={search} 
      onChange={handleNameSearch}/>
    </div>
  )
}

export default Filter