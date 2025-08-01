import React, { useState } from 'react';

const conversations = [
  { id: 1, name: 'Dr. Smith', lastMessage: 'See you then.', timestamp: '10:30 AM' },
  { id: 2, name: 'Nurse Jane', lastMessage: 'Okay, will do.', timestamp: '9:45 AM' },
];

const messages = {
  1: [
    { from: 'other', text: 'Hello! Just confirming our meeting at 11.' },
    { from: 'me', text: 'Yes, confirmed.' },
    { from: 'other', text: 'See you then.' },
  ],
  2: [
    { from: 'other', text: 'Please check on the patient in room 3.' },
    { from: 'me', text: 'Okay, will do.' },
  ],
};

const ChatPage: React.FC = () => {
  const [activeChat, setActiveChat] = useState<number | null>(1);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Chat</h1>
      <div className="flex h-[calc(100vh-200px)] bg-white rounded-lg shadow">
        {/* Conversation List */}
        <div className="w-1/3 border-r">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold">Inbox</h2>
          </div>
          <div>
            {conversations.map((convo) => (
              <div
                key={convo.id}
                onClick={() => setActiveChat(convo.id)}
                className={`p-4 cursor-pointer ${activeChat === convo.id ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
              >
                <div className="flex justify-between">
                  <span className="font-semibold">{convo.name}</span>
                  <span className="text-xs text-gray-500">{convo.timestamp}</span>
                </div>
                <p className="text-sm text-gray-600 truncate">{convo.lastMessage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Message Window */}
        <div className="w-2/3 flex flex-col">
          {activeChat ? (
            <>
              <div className="p-4 border-b">
                <h2 className="text-xl font-semibold">{conversations.find(c => c.id === activeChat)?.name}</h2>
              </div>
              <div className="flex-1 p-4 overflow-y-auto">
                {messages[activeChat as keyof typeof messages].map((msg, index) => (
                  <div key={index} className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'} mb-4`}>
                    <div className={`p-3 rounded-lg max-w-xs ${msg.from === 'me' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="w-full p-2 border rounded-lg"
                  disabled // Mocked, so disabled
                />
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Select a conversation to start chatting.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
