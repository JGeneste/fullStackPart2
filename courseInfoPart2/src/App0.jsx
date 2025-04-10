import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'


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

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  return <Course course={course} />
}

export default App