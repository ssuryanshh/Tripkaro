import React from 'react'
import './BoxContainer.css'
import Box from '../Box/Box'


function BoxContainer() 
{
    
const a = [];
for (let i = 1; i <= 100; i++) {
    a.push(i);
    }
    // const children = []
    // a.forEach((num)=>{
    //     children.push(<Box num={num}/>)
    // })
  return (
    <>
    
    <h4>Click on the box to find where the number is even, odd or pime</h4>
    <br/>
    <div className='box-header'>
    <div className='even'>Even</div>
    <div className='odd'>Odd</div>
    <div className='prime'>Prime</div>
  </div>
<br/>
    <div className='box-container'>
      {a.map((num) => (
        <Box num={num}/> 
        ))}
        {/* {children} */}
    </div>
  
</>  )
}

export default BoxContainer
