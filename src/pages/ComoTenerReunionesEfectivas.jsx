import React from 'react';
import { Link } from 'react-router-dom';

const ComoTenerReunionesEfectivas = () => {
  const fases = [
    {
      titulo: "Planificación",
      descripcion: "Definir objetivos claros, elaborar una agenda con los puntos a tratar y seleccionar cuidadosamente a los convocados.",
      icono: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      titulo: "Desarrollo",
      descripcion: "Ejecutar la reunión siguiendo la agenda establecida y fomentando la participación activa de los asistentes.",
      icono: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      titulo: "Seguimiento",
      descripcion: "Asegurar que los acuerdos se cumplan y proyectar su ejecución para generar resultados concretos.",
      icono: (
        <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    }
  ];

  const consejos = [
    "Define si es necesaria la reunión.",
    "Ten el objetivo claro y visible.",
    "Convoca solo a los necesarios.",
    "Planifica con una agenda estructurada.",
    "Respeta el tiempo (inicio y fin puntual).",
    "Fija reglas previas de participación.",
    "Evita distracciones y mantén el foco.",
    "Fomenta la escucha activa real.",
    "Aclara dudas antes de terminar.",
    "Toma acción con resultados concretos."
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0e2246] text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-[#E58A00] font-bold tracking-wider uppercase text-sm mb-4 block">
            Productividad y Gestión
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight max-w-4xl">
            Cómo tener reuniones efectivas en tu PYME
          </h1>
          <p className="text-lg md:text-2xl text-blue-100 max-w-3xl font-light">
            Transforma reuniones ordinarias en herramientas estratégicas que pongan en valor los recursos de tu empresa, evitando el desgaste y la frustración.
          </p>
        </div>
      </section>

      {/* Fases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e2246] mb-4">Las 3 Fases de una Reunión Efectiva</h2>
          <div className="h-1 w-24 bg-[#E58A00] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {fases.map((fase, index) => (
            <div key={index} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-6 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                {fase.icono}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{fase.titulo}</h3>
              <p className="text-gray-600 leading-relaxed">
                {fase.descripcion}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0e2246] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">10 Consejos Prácticos</h2>
              <p className="text-blue-100 mb-10 text-lg leading-relaxed">
                Sigue estas pautas clave para asegurar que cada minuto invertido en equipo genere valor real para el negocio.
              </p>
              <Link to="/contacto" className="inline-block bg-[#E58A00] text-white font-bold py-4 px-10 rounded-full hover:bg-orange-600 transition-colors w-fit shadow-lg">
                SOLICITAR ASESORÍA
              </Link>
            </div>
            <div className="lg:w-1/2 bg-blue-50/5 p-12 lg:p-20 border-l border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {consejos.map((consejo, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-[#E58A00] font-black text-xl mr-4">{(index + 1).toString().padStart(2, '0')}</span>
                    <p className="text-blue-50 font-medium">{consejo}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
        <p className="text-2xl text-gray-700 leading-relaxed font-light">
          "El enfoque principal de esta metodología es evitar el desgaste, transformando procesos ordinarios en <strong>herramientas de alto valor</strong>."
        </p>
      </section>
    </div>
  );
};

export default ComoTenerReunionesEfectivas;
