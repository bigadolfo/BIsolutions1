import React from 'react';
import { Link } from 'react-router-dom';

const PlaneamientoEstrategico = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0e2246] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="text-[#E58A00] font-bold tracking-wider uppercase text-sm mb-4 block">
            Nuestros Servicios
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Planeamiento Estratégico
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto font-light">
            Guiamos a las PYMEs en su proceso de gestión estratégica para asegurar un crecimiento rentable y sostenido en el tiempo.
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
                Propuesta de Valor
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Nuestro enfoque se centra en anticipar el futuro del sector y los cambios en el mercado para elaborar estrategias personalizadas. Entendemos que cada PYME es única, por lo que nuestras soluciones se adaptan a las necesidades puntuales de tu negocio para garantizar viabilidad y éxito.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-100">
                Etapas del Servicio
              </h2>
              <p className="text-gray-600 mb-8">El proceso de planeamiento estratégico se divide en tres etapas fundamentales:</p>
              
              <div className="space-y-8">
                {/* Stage 1 */}
                <div className="relative pl-8 sm:pl-10">
                  <div className="absolute left-0 top-0 mt-1 h-full w-0.5 bg-blue-100"></div>
                  <div className="absolute left-[-5px] top-1 h-3 w-3 rounded-full bg-[#E58A00]"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">1. Elaboración de Planes Estratégicos</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-[#0e2246]">
                    <li>Diagnóstico profundo interno y del entorno del mercado.</li>
                    <li>Desarrollo del plan estratégico empresarial y de áreas funcionales.</li>
                    <li>Implementación del Balanced Scorecard (Cuadro de Mando Integral).</li>
                    <li>Elaboración de cronogramas detallados de implementación.</li>
                  </ul>
                </div>

                {/* Stage 2 */}
                <div className="relative pl-8 sm:pl-10">
                  <div className="absolute left-0 top-0 mt-1 h-full w-0.5 bg-blue-100"></div>
                  <div className="absolute left-[-5px] top-1 h-3 w-3 rounded-full bg-[#E58A00]"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2. Implementación de la Estrategia</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-[#0e2246]">
                    <li>Elaboración de guías prácticas para la ejecución del plan.</li>
                    <li>Acompañamiento directo y constante durante toda la fase de implementación.</li>
                    <li>Alineación del equipo con los nuevos objetivos.</li>
                  </ul>
                </div>

                {/* Stage 3 */}
                <div className="relative pl-8 sm:pl-10">
                  <div className="absolute left-[-5px] top-1 h-3 w-3 rounded-full bg-[#E58A00]"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">3. Monitoreo y Control</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 marker:text-[#0e2246]">
                    <li>Diseño e implementación de indicadores de gestión efectivos.</li>
                    <li>Seguimiento periódico del avance de la estrategia.</li>
                    <li>Ajustes ágiles basados en resultados medibles.</li>
                  </ul>
                </div>
              </div>
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
                  <Link to="/servicios/gestion-por-procesos" className="text-gray-600 hover:text-blue-600 flex items-center group transition-colors">
                    <svg className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    Gestión por Procesos
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

export default PlaneamientoEstrategico;