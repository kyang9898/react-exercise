import React from "react";

const Header = (props) => <h1>{props.course}</h1>;

const Content = (props) => {
  const parts = props.parts;
  return (
    <div>
      {parts.map((e) => (
        <Part part={e.name} exercises={e.exercises} />
      ))}
    </div>
  );
};

const Part = (props) => (
  <div>
    <p>
      {props.part}
      {props.exercises}
    </p>
  </div>
);

const Total = (props) => {
  const exercises = props.exercises;
  return (
    <p>Number of exercises {exercises[0] + exercises[1] + exercises[2]}</p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React ",
      exercises: 10,
    },
    {
      name: "Using props to pass data ",
      exercises: 7,
    },
    {
      name: "State of a component ",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total exercises={parts.map((x) => x["exercises"])} />
    </div>
  );
};

export default App;



