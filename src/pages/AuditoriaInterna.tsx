import React from 'react';
import { Link } from 'react-router-dom';

const AuditoriaInterna = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0e2246] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="text-[#E58A00] font-bold tracking-wider uppercase text-sm mb-4 block">
            Nuestros Servicios
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Auditoría Interna
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto font-light">
            Ayudamos a las PYMEs en crecimiento a establecer un gobierno corporativo sólido y controles efectivos para mitigar riesgos.
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
                Desafíos en las PYMEs
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Entendemos que las empresas en crecimiento, especialmente las PYMEs, enfrentan desafíos significativos para lograr un gobierno corporativo adecuado. Nuestro servicio de Auditoría Interna proporciona la estructura y los controles necesarios para asegurar que tu empresa opere bajo los más altos estándares de eficiencia y transparencia.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-100">
                Servicios Principales
              </h2>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-[#0e2246] mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">Outsourcing de Auditoría Interna</h3>
                    <p className="mt-1 text-gray-600">Servicio externo especializado para la gestión integral de auditorías, permitiendo una visión objetiva e independiente.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-[#0e2246] mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">Documentación Normativa</h3>
                    <p className="mt-1 text-gray-600">Elaboración de estatutos, políticas y manuales detallados para regular y fortalecer la actividad de auditoría en tu empresa.</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-[#0e2246] mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">Diagnóstico de Riesgos y Controles</h3>
                    <p className="mt-1 text-gray-600">Evaluación exhaustiva de los procesos operativos para identificar riesgos potenciales y establecer controles preventivos y correctivos.</p>
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
                Trabajamos estrechamente con el cliente para adecuar procesos y estructuras organizativas que respalden la implementación de su estrategia de negocio.
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
                  <Link to="/servicios/gestion-por-procesos" className="text-gray-600 hover:text-blue-600 flex items-center group transition-colors">
                    <svg className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    Gestión por Procesos
                  </Link>
                </li>
                <li>
                  <Link to="/servicios/planeamiento-estrategico" className="text-gray-600 hover:text-blue-600 flex items-center group transition-colors">
                    <svg className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    Planeamiento Estratégico
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

export default AuditoriaInterna;
