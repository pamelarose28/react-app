import React from 'react';
import './App.css';

/*
   Code challenge:

  1. add the data of user names to the table! create a row for each user, and display a column for name and age.
     the name should be their full name like: "Danny Davenport"

  2. Sort the users by age

  3. (hard) uppercase the first letters of the names

  4. (hard) sort the columns by clicking on the headings!



*/

const data = [
  { first_name: 'bilbo', last_name: 'baggins', age: 111 },
  { first_name: 'frodo', last_name: 'baggins', age: 34 },
  { first_name: 'samwise', last_name: 'gamgee', age: 55 },
  { first_name: 'mary', last_name: 'smith', age: 92 },
  { first_name: 'john', last_name: 'smith', age: 11 },
  { first_name: 'william', last_name: 'johnson', age: 22 },
  { first_name: 'jeff', last_name: 'borris', age: 21 },
  { first_name: 'ashley', last_name: 'morrison', age: 101 },
  { first_name: 'karen', last_name: 'williams', age: 33 },
  { first_name: 'ashleigh', last_name: 'wilson', age: 18 },
  { first_name: 'fred', last_name: 'smith', age: 24 },
  { first_name: 'bob', last_name: 'hess', age: 42 },
  { first_name: 'bill', last_name: 'higgons', age: 56 }
];

const columnHeadings = ['Name', 'Age'];

function App() {
  return (
    <div className="App">
      <div className="row header">
        {columnHeadings &&
          columnHeadings.map(heading => (
            <div className="column">{heading}</div>
          ))}
      </div>
    </div>
  );
}

export default App;
