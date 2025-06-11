import { useState } from 'react'
import '../App.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
function AddListButton({setShowCard}){

     return (
        <>

        <div
            onClick={() => setShowCard(true)}
            className='bg-[#A488D3] h-12 rounded-2xl w-72 p-4 text-white font-bold gap-2 flex items-center hover:bg-[#6C4B94] cursor-pointer'
          >
            <FontAwesomeIcon icon={faPlus} /> Add another list
          </div>
        
        </>
     )
}

export default AddListButton;
    
              