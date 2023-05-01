import React, { useState } from 'react';
import SideNavigation from '../general-components/SideNavigation';
// import ChatInfo from '../chat-component/ChatInfo';
import ReceiveMessage from '../chat-component/ReceiveMessage';
import SendMessage from '../chat-component/SendMessage';
import smartNotesApiEndpoint from '../../../apiendpoints/smartNotesApiEndpoint';

function Grammer() {
  const [question, setQuestion] = useState('');
  const [ans, setAns] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAns((prevAns) => [...prevAns, { formSelf: true, msg: question }]);
    const response = await smartNotesApiEndpoint({ inputNote: question });
    setAns((prevAns) => [...prevAns, { formSelf: false, msg: response.data.summary }]);
  };
  return (
    <>
      <SideNavigation />
      <section className="font-['poppins'] flex flex-col w-[80%] ml-[265px] h-[100vh] " style={{ width: 'calc(100vw - 280px)' }}>
        <div className="h-full ml-[70px] mr-[70px] mt-[50px] flex flex-col gap-6">
          <div className="heading | bg-[#0079BC] text-white font-[poppins] text-[44px] font-bold py-[30px] px-[50px]  rounded-[20px]">GRAMMAR CORRECTOR</div>

          <div className="p-4 rounded-[20px] bg-[#fff]">
            <div className="bg-[#FFF] overflow-y-auto flex flex-col p-[40px] gap-4 max-h-[65vh]">
              {' '}
              <div className="flex items-center">
                <hr className="w-full border-1 border-gray-300" />
                <p className="px-3 font-bold">RECENTLY</p>
                <hr className="w-full border-1 border-gray-300" />
              </div>

              {/* SENDING MESSAGE LAYOUT */}
              <SendMessage
                message="Correct this to standard English:
                    She no went to the market."
              />

              {/* RECEIVING MESSAGE LAYOUT */}
              <ReceiveMessage message="She did not go to the market." />
              {ans.map((items) => (items.formSelf === true ? <SendMessage message={items.msg} />
                : <ReceiveMessage message={items.msg} />))}
            </div>
            {/* COMPOSE NEW MESSAGE */}
            <form className="flex justify-center items-center gap-4 bg-[#fff] py-4 px-8 " onSubmit={handleSubmit}>
              <input
                type="text"
                className="bg-[#DBDCDC] h-[5rem] w-full rounded-[20px] px-[30px] text-[28px]"
                placeholder="TEXT TO BE GRAMMATICALLY CORRECTED..."
                onChange={(e) => (setQuestion(e.target.value))}
              />
              <button className="bg-[#FFC100] h-[5rem] px-[30px] rounded-[20px] text-[28px]" type="submit">CORRECT</button>
            </form>
          </div>
        </div>

      </section>
    </>
  );
}

export default Grammer;
