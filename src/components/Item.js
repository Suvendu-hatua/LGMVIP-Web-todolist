import React from 'react'

function Item(props) {
    const handleClick=()=>{
        props.handleDelete(props.id);
    }
  return (
    <div className='item '>
    <p><i className="fa-solid fa-circle mx-2"></i>{props.title} </p>
    <p className='delete' onClick={handleClick}>Delete</p>
    
    </div>
  )
}

export default Item