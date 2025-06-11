import { useState } from 'react'
import '../App.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
function AddCardButton({saveList,setShowCard}){
    
     return (
        <>
        
         <div className={`flex space-x-2 items-center`}>
                <button onClick={saveList}
                  className="text-white cursor-pointer bg-[#0055CC] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2"
                >
                  Add List
                </button>
                <FontAwesomeIcon
                  onClick={() => setShowCard(false)}
                  icon={faXmark}
                  className="cursor-pointer text-xl text-gray-600 hover:text-black"
                />
              </div>
        </>
     )
}

export default AddCardButton;
    
              