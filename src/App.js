import './App.css';
import React from 'react'
import Heading from './components/Heading';
import List from './components/List';
import { useState } from 'react';
import Footer from './components/Footer';

export default function App() {
  const [item, setItem] = useState([]);
  const handleClick=(value)=>{
    setItem([...item,value]);
  }
  const handleDelete=(index)=>{
    setItem(item.filter((ele,id)=>{
      return id!==index;
    }))
    // console.log(item);
  }
  return (
    <div className='App'>
     <Heading title="WelCome to ToDo List"
      handleClick={handleClick}
     />
     <List itemList={item} handleDelete={handleDelete}/>
     <Footer/> 
    </div>  
  )
}


