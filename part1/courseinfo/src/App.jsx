function Header({course}) {
  return(
    <div>
      <h1>{course}</h1>
    </div>
  );
}

function Part({name, exc}) {
  return(
    <p>{name} {exc}</p>
  )
}

function Content({content}) {
  let part1 = content.part1;
  let part2 = content.part2;
  let part3 = content.part3;
  let exercises1 = content.exercises1;
  let exercises2 = content.exercises2;
  let exercises3 = content.exercises3;
  return(
    <div>
      <Part name={part1} exc={exercises1}/>
      <Part name={part2} exc={exercises2}/>
      <Part name={part3} exc={exercises3}/>
    </div>
  );
}

function Total({excercises}){
  let exercises1 = excercises.exercises1
  let exercises2 = excercises.exercises2
  let exercises3 = excercises.exercises3
  return(
    <div>
      <p>
        Number of exercises {exercises1 + exercises2 + exercises3}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content content={{part1, exercises1, part2, exercises2, part3, exercises3}} />
      <Total excercises={{exercises1, exercises2, exercises3}}/>
    </div>
  )
}

export default App