
const Header= ({name}) =>{
    return(
        <h2>
            {name}
        </h2>
    )
}
const Part=({name,exercises}) =>{
    return(
        <p>{name} {exercises}</p>
    )
}
const Total= ({array})=>{
    const total=array.reduce((sum,exercise)=>{
        return sum+exercise;
    },0)
    return(
        <h4>total of {total} exercises</h4>
    )
}
const Course = ({course}) =>{
    return(
        <>
         <Header name={course.name}/>
         {course.parts.map((part) => <Part name={part.name} exercises={part.exercises} />)}
         <Total array={course.parts.map((part)=>part.exercises)}/>
        </>
       
        
    )
}
export default Course;