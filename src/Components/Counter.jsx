import React, { useState } from 'react'
import {MDBBtn} from 'mdb-react-ui-kit';

function Counter() {
    //state creation
    const  [counter,setCounter]=useState(0)//Apply 0 as intial state value
    // function define 
    function incrementCounter()
    {
        // increment by 1
         setCounter(counter+1)
    }  
// function fefine for decrementCounter

     // decrement by 1
     function decrementCounter(){
     if(counter!==0)
     {
        setCounter(counter-1)
     }
    }
     // reset
     function  reset()
         {
            setCounter(0)
         }
   

  return (
    <div className='m-5 p-5 d-flex justify-content-center'>
        <div className='container m-5 p-5 border border-2  border-dark  shadow round w-50 bg-dark'>
                <h1 className='text-center text-danger'>Counter App</h1>
                <h1 className='text-center text-light'>{counter}</h1>

                <div className='d-flex justify-content-center '>
                <MDBBtn  className='me-5 bg-danger'  onClick={incrementCounter} >Increment</MDBBtn>
                <MDBBtn className=' bg-danger me-5' onClick={decrementCounter} >Decrement</MDBBtn>
                <MDBBtn className=' bg-danger'  onClick={reset}>Reset</MDBBtn>
                </div>
        </div>
      
    </div>
  )
}

export default Counter