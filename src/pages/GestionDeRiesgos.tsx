import React from 'react';
import { Link } from 'react-router-dom';

const GestionDeRiesgos = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0e2246] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="text-[#E58A00] font-bold tracking-wider uppercase text-sm mb-4 block">
            Nuestros Servicios
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Gestión de Riesgos
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto font-light">
            Ayudamos a las PYMEs a administrar riesgos a nivel de procesos, personal y sistemas de información para asegurar el cumplimiento de sus objetivos.
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
                Enfoque del Servicio
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Ofrecemos consultoría especializada para que las empresas en crecimiento logren sus objetivos mediante una adecuada administración de riesgos. Nuestra metodología se adapta a las necesidades puntuales de cada PYME, trabajando estrechamente para adecuar los procesos y la estructura organizativa.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-100">
                Servicios Específicos
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-[#0e2246] mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                    Diagnóstico de Riesgos y Controles
                  </h3>
                  <p className="text-gray-600 mb-2">Realizado bajo los más altos estándares internacionales:</p>
                  <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1">
                    <li>COSO 2013</li>
                    <li>COSO ERM</li>
                    <li>ISO 31000</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#0e2246] mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    Riesgos Operacionales y Normativos
                  </h3>
                  <p className="text-gray-600">Diagnóstico basado en las normativas vigentes de la SBS (Superintendencia de Banca, Seguros y AFP) y la SMV (Superintendencia del Mercado de Valores).</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#0e2246] mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                    Políticas y Manuales
                  </h3>
                  <p className="text-gray-600">Diseño e implementación de Políticas y el Manual de Gestión Integral de Riesgos, asegurando una cultura de prevención en toda la organización.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#E58A00] p-8 rounded-2xl shadow-md text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                Nuestra Garantía
              </h2>
              <p className="text-lg font-medium">
                Somos la única consultora en el Perú especializada exclusivamente en PYMES. Ofrecemos una garantía del 100% de satisfacción o la devolución total de tu inversión.
              </p>
            </div>
          </div>

          {/* Sidebar / CTA */}
          <div className="space-y-8">
            <div className="bg-[#0e2246] rounded-2xl p-8 text-center shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4">Protege tu Negocio</h3>
              <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                Nuestra gestión abarca procesos operativos, seguridad de la información y gestión del talento humano.
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
                  <Link to="/servicios/auditoria-interna" className="text-gray-600 hover:text-blue-600 flex items-center group transition-colors">
                    <svg className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    Auditoría Interna
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

export default GestionDeRiesgos;
