import React from 'react';

function CreatePage() {
  return (
    <div className="min-h-screen bg-[#b1b5de] flex flex-col justify-center items-center px-4 text-center font-sans">
      <h1 className="text-2xl font-bold text-white mb-6">Pick a Game to Host</h1>

      <button onClick={() => window.location.href = "https://liar-1.vercel.app"} className="bg-white text-[#b1b5de] px-6 py-3 rounded-xl shadow font-bold hover:opacity-90 transition mb-4 w-64">
        Number Picker
      </button>
      <button onClick={() => window.location.href = "https://liar-point.vercel.app"} className="bg-white text-[#b1b5de] px-6 py-3 rounded-xl shadow font-bold hover:opacity-90 transition mb-4 w-64">
        Point it Out
      </button>
      <button onClick={() => window.location.href = "https://liar-hand.vercel.app"} className="bg-white text-[#b1b5de] px-6 py-3 rounded-xl shadow font-bold hover:opacity-90 transition mb-4 w-64">
        Raise Your Hands
      </button>
      <button onClick={() => window.location.href = "https://liar-celebrities.vercel.app"} className="bg-white text-[#b1b5de] px-6 py-3 rounded-xl shadow font-bold hover:opacity-90 transition mb-4 w-64">
        Celebrities
      </button>
      <button className="bg-gray-400 text-white px-6 py-3 rounded-xl shadow font-bold mb-4 w-64 cursor-not-allowed" disabled>
        Imposter
      </button>
    </div>
  );
}

export default CreatePage;