import React, { useState } from 'react';
import './App.css';
import List from './components/list/List';
import AddToList from './components/AddToList';

export interface IState{
  people:{
    name:string,
    age:number,
    url:string,
    note?:string
  }[]
}

function App() {
  
  const [people,setPeople]=useState<IState["people"]>([
    {
      name:"LeBron James",
      age:36,
      url: require('./img/lebron.jpg'),
      note:"Allergic to staying on the same team" 
    }
  ])

  return (
    <div className="app">
      <h1 className='app-header'>People invited to my party</h1>
      < List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
