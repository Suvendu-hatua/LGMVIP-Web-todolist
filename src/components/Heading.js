import React from 'react'
import { useState } from 'react';
export default function Heading(props) {
     const [value, setValue] = useState("")
    const handleChange=(event)=>{
           setValue(event.target.value);
    }
    const handleClick=()=>{
    let val=value;
    setValue("")
    props.handleClick(val);
     
    }
    return (
        <div className='container head'>
            <div className="heading">
                <h2 className='mb-4'>{props.title}</h2>
                <input type="text"  name="" id="" value={value} onChange={handleChange} placeholder='Title...' autoComplete='off' />
                <button className=" mx-2" type="submit" onClick={handleClick}>Add </button>
            </div>
        </div>
    )
}
