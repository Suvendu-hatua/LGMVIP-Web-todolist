import React from 'react'
import Item from './Item'

export default function List(props) {
  const handleDelete=(index)=>{
     props.handleDelete(index);
  }
  return (
    <div className='container'>
        <div className="box my-4">
           
            {props.itemList.map((ele,index)=>{
             return ele.length>0?<Item title={ele} key={index} id={index} handleDelete={handleDelete}/>:null
            })}
           
        </div>
    </div>
  )
}
