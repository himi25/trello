import { useState } from 'react'
import '../App.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
function AddForm({ saveFunc, onClose, name, fromAddCard, description,listName}) {
  const [text, setText] = useState('')
  return (
    <>
      <div className={`flex flex-col space-y-3 ${fromAddCard ? 'px-0' : 'px-4 bg-gray-50' } rounded-2xl py-3`}>

        <input
          value={text}
          type="text"
          onChange={(e) => setText(e.target.value)}
          className={`bg-gray-50 border cursor-pointer ${fromAddCard ? 'w-88' : 'w-65'} ${fromAddCard ? 'h-20' : 'h-10'} border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 `}
          placeholder={description}
          required
        />
        <div className='flex space-x-2 items-center'>
          <button onClick={() => saveFunc(text,listName)}
            className={`text-white cursor-pointer bg-[#0055CC] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2`}
          >
            {name} 
          </button>
          <FontAwesomeIcon
            onClick={() => onClose(false)}
            icon={faXmark}
            className="cursor-pointer text-xl text-gray-600 hover:text-black"
          />
        </div>
      </div>
    </>
  )
}

export default AddForm;

