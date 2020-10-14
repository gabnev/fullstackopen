import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.courseTitle}</h1>
  )
}

const Part = (prop) => {  
  return (
    <>
      <p>{prop.courseName}: {prop.courseExercices}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part courseName={props.coursePart[0].name} courseExercices={props.coursePart[0].exercises}/>
      <Part courseName={props.coursePart[1].name} courseExercices={props.coursePart[1].exercises}/>
      <Part courseName={props.coursePart[2].name} courseExercices={props.coursePart[2].exercises}/>
    </>
  )

}

const Total = (props) => {
  return (
    <>
      <strong>
        <p>Number of exercises: {props.coursePart[0].exercises + props.coursePart[1].exercises + props.coursePart[2].exercises}</p>
      </strong>
    </>
  )

}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    coursePart: [{
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
    ]
  }

  return (
    <>
      <Header courseTitle={course.name} />      
      <Content coursePart={course.coursePart}/>
      <Total coursePart={course.coursePart} />
    </>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))
