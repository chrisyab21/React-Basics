

import {useRef, FC} from 'react'

export const FocusScreen:FC = () => {


const inputRef = useRef<HTMLInputElement>(null);


const onClick = ():void =>{

    console.log(inputRef);

    inputRef.current!.select();

}


  return (
    <>   
    <div>FocusScreen</div>

    <input 
        className='form-control mt-2'
        ref={inputRef}          
        ></input>

    <button 
    className='btn btn-primary mt-2 ms-2'
    onClick={() => onClick()}
    >
        Focus
    </button>


    </>
   
  )
}
