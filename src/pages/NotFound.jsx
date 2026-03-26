import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-6">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-black text-[#0e2246] opacity-10">404</h1>
          <div className="relative -mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 uppercase">Página no encontrada</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Lo sentimos, la página que buscas no existe o ha sido movida temporalmente. 
              Puedes volver a la página de inicio para continuar navegando.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="bg-[#0e2246] text-white font-bold py-3.5 px-10 rounded-full hover:bg-blue-900 transition duration-300 shadow-lg"
          >
            VOLVER AL INICIO
          </Link>
          <Link 
            to="/servicios" 
            className="bg-transparent border-2 border-[#0e2246] text-[#0e2246] font-bold py-3.5 px-10 rounded-full hover:bg-gray-50 transition duration-300"
          >
            VER SERVICIOS
          </Link>
        </div>

        <div className="mt-16 opacity-30">
          <svg className="w-20 h-20 mx-auto text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
