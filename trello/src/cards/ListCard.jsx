import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import AddForm from "../buttons/AddForm";


function ListCard({ list, setList, setShowCard }) {
  const [selectedCard, setSelectedCard] = useState(false)

  const saveCard = (cardText, listName) => {
    list[listName].push(cardText)
    setList(list)
    setSelectedCard(false)
  }

  return (
    <>
      {
        Object.keys(list).map((data, i) =>
        (
          <div className={`flex flex-col space-y-4 p-4 bg-[#F1F2F4] shadow-[0px_1px_1px_#091e4240,_0px_0px_1px_#091e424f] rounded-2xl w-96`}>

            <div className='pl-3 py-2 font-bold text-left'>{data}</div>
            {
              list[data].map((cardName) =>
              (

                <div className='flex items-center space-x-2 bg-white p-3 rounded shadow border border-gray-300'>
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-blue-600 rounded cursor-pointer"
                  />
                  <span className='text-gray-800'>{cardName}</span>
                </div>

              ))
            }
            {
              (selectedCard === i) ?
                <AddForm
                  saveFunc={saveCard}
                  listName={data}
                  onClose={setSelectedCard}
                  name={"Add Card"}
                  fromAddCard={true}
                  description={"Add a new card"}
                />
                :
                (
                  <>
                    <div onClick={() => { setSelectedCard(i); setShowCard(false) }} className='flex items-center gap-2 pl-3 py-2 hover:bg-gray-300 cursor-pointer rounded-2xl'>
                      <FontAwesomeIcon icon={faPlus} />
                      Add a card
                    </div>
                  </>
                )
            }

          </div>
        )
        )
      }
    </>
  );
}

export default ListCard;