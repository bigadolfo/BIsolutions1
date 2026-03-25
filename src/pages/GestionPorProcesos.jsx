import React from 'react';
import { Link } from 'react-router-dom';

const GestionPorProcesos = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0e2246] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="text-[#E58A00] font-bold tracking-wider uppercase text-sm mb-4 block">
            Nuestros Servicios
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Gestión por Procesos
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto font-light">
            Ayudamos a las PYMEs a superar sus objetivos asegurando el más alto desempeño operativo, alineando la estructura organizacional con su estrategia de negocio.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Description */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2 border-gray-100">
                Objetivo del Servicio
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                El objetivo principal de nuestra consultoría es adecuar la estructura organizativa de tu empresa para que apoye efectivamente la implementación de la estrategia definida. Logramos esto a través del diseño, mejora y rediseño continuo de tus procesos operativos, garantizando eficiencia y rentabilidad.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-100">
                Líneas de Consultoría
              </h2>
              <p className="text-gray-600 mb-6">Nuestro servicio abarca las siguientes actividades principales estructuradas para generar resultados medibles:</p>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-[#0e2246] mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">Mapeo y Priorización de Procesos</h3>
                    <p className="mt-1 text-gray-600">Identificación y documentación de las actividades críticas que sostienen el modelo de negocio.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-[#0e2246] mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">Optimización y Rediseño</h3>
                    <p className="mt-1 text-gray-600">Mejora estructurada de los flujos de trabajo existentes para eliminar cuellos de botella y maximizar la eficiencia.</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-[#0e2246] mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">Enfoque en Valor</h3>
                    <p className="mt-1 text-gray-600">Orientación estricta hacia la generación de valor para el cliente final y reducción de costos innecesarios en cada actividad operativa.</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-[#0e2246] mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">Monitoreo (KPIs)</h3>
                    <p className="mt-1 text-gray-600">Implementación de indicadores clave de desempeño (KPIs) para medir el rendimiento de los procesos en tiempo real.</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-[#0e2246] mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">Mejora Continua</h3>
                    <p className="mt-1 text-gray-600">Establecimiento de programas y metodologías ágiles para asegurar que la optimización de procesos sea constante y sostenible.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar / CTA */}
          <div className="space-y-8">
            <div className="bg-[#0e2246] rounded-2xl p-8 text-center shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4">Metodología Especializada</h3>
              <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                Trabajamos estrechamente con el cliente para ofrecer una estrategia <strong>puntual</strong>, adaptada exclusivamente a las necesidades y realidad de su PYME.
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-6 text-left">
                <div className="flex items-center text-white mb-2">
                  <svg className="w-5 h-5 mr-2 text-[#E58A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  <span className="font-bold">999 838 200</span>
                </div>
                <div className="flex items-center text-white">
                  <svg className="w-5 h-5 mr-2 text-[#E58A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <span className="text-sm">ventas@pymesolutions.pe</span>
                </div>
              </div>
              <Link 
                to="/contacto" 
                className="inline-block w-full bg-[#E58A00] hover:bg-[#CC7A00] text-white font-bold py-3 px-6 rounded-full transition duration-300"
              >
                SOLICITAR ASESORÍA
              </Link>
            </div>
            
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Otros Servicios</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/servicios/planeamiento-estrategico" className="text-gray-600 hover:text-blue-600 flex items-center group transition-colors">
                    <svg className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    Planeamiento Estratégico
                  </Link>
                </li>
                <li>
                  <Link to="/servicios/auditoria-interna" className="text-gray-600 hover:text-blue-600 flex items-center group transition-colors">
                    <svg className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    Auditoría Interna
                  </Link>
                </li>
                <li>
                  <Link to="/servicios/gestion-de-riesgos" className="text-gray-600 hover:text-blue-600 flex items-center group transition-colors">
                    <svg className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    Gestión de Riesgos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default GestionPorProcesos;