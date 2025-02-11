import React from 'react';
import { Sun } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-400 via-orange-400 to-red-500 flex items-center justify-center p-4">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 text-center max-w-2xl mx-auto">
        <div className="flex justify-center mb-6">
          <Sun className="w-16 h-16 text-yellow-500 animate-spin-slow" />
        </div>
        <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-4">
          ¡Hola Mundo!
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Welcome to our vibrant Spanish greeting
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700">
          <div className="bg-yellow-100 p-4 rounded-lg">
            <p className="font-semibold">Spanish</p>
            <p>Hola Mundo</p>
          </div>
          <div className="bg-orange-100 p-4 rounded-lg">
            <p className="font-semibold">English</p>
            <p>Hello World</p>
          </div>
          <div className="bg-red-100 p-4 rounded-lg">
            <p className="font-semibold">Pronunciation</p>
            <p>OH-lah MOON-doh</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;