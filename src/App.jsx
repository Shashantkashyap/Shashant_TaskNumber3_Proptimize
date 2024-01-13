import React, { useState } from 'react';
import './App.css';
import { IoMdChatbubbles } from 'react-icons/io';
import { HiDotsVertical } from "react-icons/hi";


const App = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = () => {
    if (message.trim() !== '') {
      setMessages([...messages, { text: message, timestamp: new Date() }]);
      setMessage('');
    }
  };

  return (
    <div className="w-screen h-screen flex">
      {/* Left Sidebar */}
      <div id="left" className="w-1/4 min-h-screen bg-slate-700 text-white flex flex-col items-center justify-center ">
        <h1 className="text-3xl font-bold mb-4">PROPTIMIZE</h1>
        <button className="flex items-center justify-center gap-1 bg-white text-black w-4/5 p-3 rounded-full">
          <IoMdChatbubbles />
          <div>New Chat</div>
        </button>
        <h2 className="text-xl font-bold mb-2 mt-2">Recent Messages:</h2>
        {/* Display recent messages in the left section */}
        <div className="mt-4 recent-messages-container w-[75%] flex flex-col gap-2">
          
          
          {messages.slice().reverse().map((msg, index) => (
            <div className=' '>
              <div key={index}  className="recent-message flex text-black hover:font-semibold hover:text-white justify-between items-center w-[75%] mx-auto ">
              
              {
                msg.text < 20 ? (msg.text) : (msg.text.slice(0,28) + "...")
              }
              <HiDotsVertical/>
            </div>
            
            </div>
          ))}

          
          
        </div>
      </div>

      {/* Right Content */}
      <div id="right" className="backImage w-3/4 flex flex-col text-white justify-between items-center min-h-screen p-8">
        <div className="text-4xl font-bold mb-4">
          Welcome, How can I assist you...
        </div>
        <div className="text-lg mb-4 font-semibold">
          "Use the search feature for all your doubts."
        </div>
        <div className="flex items-center w-[75%] mx-auto gap-3">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-2 border-2 border-white outline-none bg-transparent text-white placeholder-white w-[90%] transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSubmit}
            className="p-3 font-semibold ml-2 bg-blue-500 text-white rounded transition-all duration-200 hover:scale-[1.1]"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
