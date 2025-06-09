import { useState } from 'react'
import './App.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function MiniCard() {
  const [showCard, setShowCard] = useState(false);
  const [list, setList] = useState([]);
  const [listName, setListName] = useState('')
  const saveList = () => {
    setList([...list,listName])
    setShowCard(false)
    setListName('')
  }
  return (
    <>
      <div className='py-24 px-4'>

        {/* Add another list button */}
        {
          !showCard && (
          <div
            onClick={() => setShowCard(true)}
            className='bg-[#A488D3] rounded-2xl w-72 p-4 text-white font-bold gap-2 flex items-center hover:bg-[#6C4B94] cursor-pointer'
          >
            <FontAwesomeIcon icon={faPlus} /> Add another list
          </div>
          )
        }


        {/* Card input */}
        {
          showCard && (
            <div className='flex flex-col space-y-3 w-72 bg-[#F1F2F4] rounded-2xl pl-3 py-3'>

              <input
              value={listName}
                type="text"
                onChange={(e) => setListName(e.target.value)}
                className="bg-gray-50 border cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-65 p-2.5 h-10"
                placeholder="Enter list name..."
                required
              />


              <div className='flex space-x-2 items-center'>
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

            </div>
          )
        }

        {
          list.map((data) => 
         (
            <div className='flex flex-col space-y-2 p-4 left-5 w-72 bg-[#F1F2F4] rounded-2xl'>

              <div className='pl-3 py-2 font-bold text-left'>{data}</div>

              <div onClick={()=>{}} className='flex items-center gap-2 pl-3 py-2 hover:bg-gray-300 cursor-pointer rounded-2xl'>
                <FontAwesomeIcon icon={faPlus} />
                Add a card
              </div>

            </div>
          )
        )
        }

      </div>
      {/* {
        (
          <div className='flex flex-col space-y-2  pl-3 py-2 left-5 w-72 bg-[#F1F2F4] rounded-2xl'>

            <div className='pl-3 py-2 font-bold text-left'>{list}</div>
            <input

              type="text"
              id="first_name"

              className="bg-gray-50 border cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-65 p-2.5 h-10"
              placeholder="Enter a title or paste a link.."
              required
            />
            <button className="text-white cursor-pointer bg-[#0055CC] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 w-30">
              Add card
            </button>

          </div>
        )
      } */}
    </>
  )
}

export default MiniCard;



