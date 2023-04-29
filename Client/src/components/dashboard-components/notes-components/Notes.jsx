import React, { useState } from 'react';
import TopNav from '../general-components/TopNav';
import SideNavigation from '../general-components/SideNavigation';
import BottomNavigation from '../general-components/BottomNavigation';
import smartNotesApiEndpoint from '../../../apiendpoints/smartNotesApiEndpoint';

async function handleSubmit(e, notesHeading) {
  e.preventDefault();
  const result = document.getElementById('result');
  const retval = await smartNotesApiEndpoint({ inputNote: notesHeading });
  result.innerHTML = retval.data.summary;
}

function Notes() {
  const [notesHeading, setNotesHeading] = useState('');
  //   console.log(notesHeading);
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleEditTodo = (index, newValue) => {
    const newTodos = [...todos];
    newTodos[index] = newValue;
    setTodos(newTodos);
  };

  return (
    <main>
      <TopNav title="NEW CLASSROOM" />
      <div className="hidden md:flex justify-center">
        <SideNavigation />
      </div>
      {/* MIDDLE SECTION FOR DESKTOP */}
      <section className="font-['poppins'] flex flex-col md:justify-center items-center h-[100vh]">

        <form onSubmit={(e) => handleSubmit(e, notesHeading)} className="flex flex-col justify-center items-center p-8  gap-4 bg-[#0079BC] rounded-[20px] w-[80%] md:w-[30%]">
          <div className="rounded-[10px] text-[18px] text-[#fff] bg-[#0081C9] flex justify-center items-center p-4 w-full ">
            <div className="w-full flex justify-center items-center">CREATE SMART NOTES!</div>
          </div>

          <input
            onChange={(e) => {
              setNotesHeading(e.target.value);
            }}
            className="rounded-[20px] px-4 py-2 w-full"
            type="text"
            id="note"
            name="note"
            placeholder="Enter topic here"
          />
          <button type="submit" className="bg-[#FFC100] px-4 py-3 rounded-[20px] text-[18px] w-full border-[1px] border-black flex justify-center items-center mt-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">SUBMIT</button>
          <textarea rows={10} className="rounded-[20px] px-4 py-2 w-full text-[#000]" placeholder="AI Generated Summary..." id="result" disabled />
        </form>
        <div className="">
          {' '}
          <h2>Todo List</h2>
          <div>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button type="button" onClick={handleAddTodo}>Add</button>
          </div>
          <ul>
            {todos.map((todo, index) => (
            // eslint-disable-next-line react/no-array-index-key
              <li key={index}>
                <input
                  type="text"
                  value={todo}
                  onChange={(event) => handleEditTodo(index, event.target.value)}
                />
                <button type="button" onClick={() => handleDeleteTodo(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>

      </section>

      <BottomNavigation />
    </main>
  );
}

export default Notes;