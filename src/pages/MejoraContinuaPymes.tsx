import React from 'react';
import { Link } from 'react-router-dom';

const MejoraContinuaPymes = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0e2246] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-[#E58A00] font-bold tracking-wider uppercase text-sm mb-4 block">
            Estrategia Empresarial
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Cómo aplicar la mejora continua en mi PYME
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl font-light">
            Implementar la metodología PDCA como una herramienta estratégica es el factor determinante para evitar el estancamiento y asegurar la sostenibilidad del negocio.
          </p>
        </div>
      </section>

      {/* PDCA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0e2246] mb-4">El Ciclo PDCA (Metodología Recomendada)</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Utilizamos el ciclo de mejora continua para reducir fallas, incrementar la eficiencia operativa y eliminar riesgos innecesarios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Planificar */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mb-6 font-bold text-xl">P</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Planificar (Plan)</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Identificar procesos de mejora.</li>
              <li>• Definir objetivos y KPIs.</li>
              <li>• Involucrar equipos mixtos.</li>
            </ul>
          </div>

          {/* Hacer */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 text-green-800 rounded-full flex items-center justify-center mb-6 font-bold text-xl">D</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Hacer (Do)</h3>
            <p className="text-sm text-gray-600">
              Ejecutar las acciones y cambios planificados para la implementación efectiva de las mejoras.
            </p>
          </div>

          {/* Verificar */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-orange-100 text-[#E58A00] rounded-full flex items-center justify-center mb-6 font-bold text-xl">C</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Verificar (Check)</h3>
            <p className="text-sm text-gray-600">
              Medir y analizar los resultados obtenidos frente a los objetivos iniciales establecidos.
            </p>
          </div>

          {/* Actuar */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-100 text-red-800 rounded-full flex items-center justify-center mb-6 font-bold text-xl">A</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Actuar (Act)</h3>
            <p className="text-sm text-gray-600">
              Estandarizar los cambios exitosos o realizar ajustes si los resultados no fueron los esperados.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[#0e2246] mb-6">Beneficios para la PYME</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                <div>
                  <h4 className="font-bold text-gray-900">Competitividad</h4>
                  <p className="text-sm text-gray-600">Adaptación rápida a las exigencias del mercado.</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                <div>
                  <h4 className="font-bold text-gray-900">Productividad</h4>
                  <p className="text-sm text-gray-600">Optimización del desempeño del equipo.</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                <div>
                  <h4 className="font-bold text-gray-900">Ahorro de costos</h4>
                  <p className="text-sm text-gray-600">Reducción de desperdicios y errores.</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                <div>
                  <h4 className="font-bold text-gray-900">Satisfacción</h4>
                  <p className="text-sm text-gray-600">Mejora en el cumplimiento de expectativas.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 bg-blue-50 p-8 rounded-3xl border border-blue-100">
            <h3 className="text-xl font-bold text-blue-900 mb-4 italic">Recomendaciones Estratégicas</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-blue-800">
                <span className="w-2 h-2 bg-[#E58A00] rounded-full mr-3"></span>
                <strong>Cultura Organizacional:</strong> Fomentar una mentalidad de cambio.
              </li>
              <li className="flex items-center text-blue-800">
                <span className="w-2 h-2 bg-[#E58A00] rounded-full mr-3"></span>
                <strong>Simplicidad:</strong> Sistemas simples que generen resultados rápidos.
              </li>
            </ul>
            <Link to="/contacto" className="mt-8 inline-block bg-[#E58A00] text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition duration-300">
              SOLICITAR ASESORÍA
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MejoraContinuaPymes;
