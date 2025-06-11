import { useState } from 'react'
import './App.css'
import { faDashboard, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';


import AddListButton from './buttons/AddListButton';
import ListCard from './cards/ListCard';
import AddForm from './buttons/AddForm';



function Dashboard() {
  const [showCard, setShowCard] = useState(false);
  const [list, setList] = useState(() => {
    const saved = localStorage.getItem("myBoard");
    return saved ? JSON.parse(saved) : {};
  });
  
  const saveList = (text) => {
    if (text.trim() === '') return;
  
    const updatedList = { ...list, [text]: [] };  // make a new object
    setList(updatedList);
    localStorage.setItem("myBoard", JSON.stringify(updatedList));  // also save here
    setShowCard(false);
  };
  return (
    <>

      <div className='flex flex-row items-start py-24 px-4 gap-3'>

        <ListCard list={list} setList={setList} setShowCard={setShowCard} />

        {
          showCard && (

            <AddForm
              saveFunc={saveList}
              onClose={setShowCard}
              name = {"Add List"}
              description={"Enter new List"}
            />


          )
        }
        {
          !showCard && (
            <AddListButton
              setShowCard={setShowCard}
            />
          )
        }


      </div>
   
    </>
  )
}

export default Dashboard;