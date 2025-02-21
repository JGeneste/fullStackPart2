
const Course = ({course}) => {
  const Header = ({ course }) => <h1>{course}</h1>

  const Total = ({ sum }) => <p>total of {sum} exercises</p>

  const Part = ({ part }) => {
    return(
      <p>
        {part.name} {part.exercises}
      </p>
    )
  }

  const Content = ({ parts }) => {
    return(
      parts.map(part => <Part key={part.id} part={part}/>)
    )
  }

  const Sum = ({parts}) => {
    const sum = parts.map(part => part.exercises).reduce(
      (accum,curr) => accum + curr, 0);
    return(
      <Total sum={sum}/>
    )
  }

  return(
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Sum parts={course.parts}/>
    </div>
  )
}

export default Course