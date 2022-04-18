import React from "react";
const Header = (props) => <h1>{props.course}</h1>;
const Content = (props) => (
  <div>
    <Part part={props.part1} />
    <Part part={props.part2} />
    <Part part={props.part3} />
  </div>
);
const Part = (props) => (
  <div>
    {" "}
    <p>
      {props.part.exercises}
    </p>
  </div>
);
const Total = (props) => (
  <div>
    <p>Number of exercises {props.totalNumberofExercises}</p>
  </div>
);

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />
      <Total totalNumberofExercises={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
};

export default App;
