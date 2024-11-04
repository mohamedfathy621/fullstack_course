const Header= (props) =>{
  return(
    <h1>{props.course_name}</h1>
  )
}
const Part = (props) =>{
  return(
    <p>{props.part_name} {props.part_number}</p>
  )
}
const Content =(props) =>{
  return (
    <div>
          {props.parts.map((part,index)=> <Part key={index} part_name={part.name} part_number={part.exercises}/>)}
    </div>

  )
}
const Total =(props) =>{
  return(
    <p>Number of exercises {props.total}</p>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
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
  let total=0;
  course.parts.forEach(part=>total=total+part.exercises)
  return (
    <div>
      <Header course_name={course.name}/>
      <Content parts={course.parts}/>
      <Total total={total}/>
    </div>
  )
}

export default App