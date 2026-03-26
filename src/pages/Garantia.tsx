import React from 'react';
import { Link } from 'react-router-dom';

const Garantia = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0e2246] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-[#E58A00] font-bold tracking-wider uppercase text-sm mb-4 block">
            Nuestro Compromiso
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Garantía de Resultados
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto font-light">
            En PYME Solutions, tu éxito es nuestra prioridad. Estamos tan seguros de nuestra metodología que garantizamos resultados reales y medibles.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Main Promise Card */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-t-8 border-[#E58A00] text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-100 text-[#E58A00] mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-[#0e2246] mb-6">Resultados 100% Garantizados</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8 italic">
              "¡Garantizamos resultados! Nuestro compromiso es cumplir con el objetivo de la consultoría y con tus expectativas, o te devolvemos tu dinero."
            </p>
            <div className="h-1 w-24 bg-gray-200 mx-auto mb-8"></div>
            <p className="text-gray-600 text-lg">
              Confiamos plenamente en nuestra capacidad para transformar tu negocio. Si no cumplimos con los objetivos pactados al inicio del proyecto, te devolvemos el monto total de tu inversión. Así de simple, sin letras pequeñas.
            </p>
          </div>

          {/* How we do it */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-[#0e2246] mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mr-3 text-sm">01</span>
                Planificar y Hacer
              </h3>
              <p className="text-gray-600">Diseñamos estrategias a medida basadas en un diagnóstico profundo y las ejecutamos con un acompañamiento directo.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-[#0e2246] mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mr-3 text-sm">02</span>
                Verificar y Actuar
              </h3>
              <p className="text-gray-600">Monitoreamos cada indicador clave y realizamos los ajustes necesarios para asegurar que los resultados se cumplan.</p>
            </div>
          </div>

          {/* CTA Area */}
          <div className="bg-[#0e2246] rounded-3xl p-10 text-center text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">¿Listo para hacer crecer tu PYME con seguridad?</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Únete a las empresas líderes que ya han transformado su gestión con nosotros bajo una garantía total de satisfacción.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contacto" className="bg-[#E58A00] hover:bg-[#CC7A00] text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg transform hover:-translate-y-1">
                SOLICITAR CONSULTORÍA
              </Link>
              <Link to="/servicios" className="bg-transparent border-2 border-white hover:bg-white hover:text-[#0e2246] text-white font-bold py-3 px-8 rounded-full transition duration-300">
                VER NUESTROS SERVICIOS
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Garantia;
