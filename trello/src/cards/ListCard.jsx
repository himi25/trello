import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import AddForm from "../buttons/AddForm";


function ListCard({ list, setList, setShowCard }) {
  const [selectedCard, setSelectedCard] = useState(false)

  const updateListAndSave = (updatedList) => {
    setList(updatedList);
    localStorage.setItem("myBoard", JSON.stringify(updatedList));
  };
  const saveCard = (cardText, listName) => {
    const updatedList = { ...list };
    updatedList[listName].push(cardText);
    updateListAndSave(updatedList);
    setSelectedCard(false);
  };
  

  return (
    <>
      {
        Object.keys(list).map((data, i) =>
        (

          <div className={`flex flex-col space-y-4 p-4 bg-[#F1F2F4] shadow-[0px_1px_1px_#091e4240,_0px_0px_1px_#091e424f] rounded-2xl min-w-96`}>

            <div onClick={() => { delete [data] }} className='flex justify-between items-center pl-3 py-2 font-bold text-left'>
              <span>{data}</span>
              <i onClick={() => {
                const updatedList = { ...list };
                delete updatedList[data];
                updateListAndSave(updatedList);
              }}
                className="fa-solid fa-trash-can text-gray-500 hover:text-red-500 cursor-pointer"></i>
            </div>



            {
              list[data].map((cardName) =>
              (

                <div className='flex items-center justify-between bg-white p-3 rounded shadow border border-gray-300'>
                  <div className='flex items-center space-x-2'>
                    <input
                      type="checkbox"
                      className="w-5 h-5 accent-blue-600 rounded cursor-pointer"
                    />
                    <span className='text-gray-800'>{cardName}</span>
                  </div>

                  <i
                    onClick={() => {
                      const updatedList = { ...list };
                      updatedList[data] = updatedList[data].filter((card) => card !== cardName);
                      updateListAndSave(updatedList);
                    }}
                    className="fa-solid fa-trash-can text-gray-500 hover:text-red-500 cursor-pointer"></i>
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