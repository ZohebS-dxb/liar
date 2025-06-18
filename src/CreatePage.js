import React from 'react';

function CreatePage() {
  return (
    <div className="min-h-screen bg-[#b1b5de] flex flex-col justify-center items-center px-4 text-center font-poppins">
      <h1 className="text-3xl font-bold text-[#fef1dd] mb-6">Pick a Game to Host</h1>

      <button onClick={() => window.location.href = "https://liar-1.vercel.app"} className="bg-[#fef1dd] text-[#b1b5de] text-xl px-8 py-4 rounded-2xl font-bold mb-4 w-64 active:scale-95 transition-transform duration-100">
        Number Picker
      </button>
      <button onClick={() => window.location.href = "https://liar-point.vercel.app"} className="bg-[#fef1dd] text-[#b1b5de] text-xl px-8 py-4 rounded-2xl font-bold mb-4 w-64 active:scale-95 transition-transform duration-100">
        Point it Out
      </button>
      <button onClick={() => window.location.href = "https://liar-hand.vercel.app"} className="bg-[#fef1dd] text-[#b1b5de] text-xl px-8 py-4 rounded-2xl font-bold mb-4 w-64 active:scale-95 transition-transform duration-100">
        Raise Your Hands
      </button>
      <button onClick={() => window.location.href = "https://liar-celebrities.vercel.app"} className="bg-[#fef1dd] text-[#b1b5de] text-xl px-8 py-4 rounded-2xl font-bold mb-4 w-64 active:scale-95 transition-transform duration-100">
        Celebrities
      </button>
      <button className="bg-gray-400 text-white text-xl px-8 py-4 rounded-2xl font-bold mb-4 w-64 cursor-not-allowed" disabled>
        Imposter
      </button>
    </div>
  );
}

export default CreatePage;