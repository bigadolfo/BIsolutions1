import React from 'react';
import { Link } from 'react-router-dom';

const BeneficiosProcesos = () => {
  const beneficios = [
    {
      title: "Estandarización de actividades",
      description: "Permite estructurar las tareas de manera uniforme. Al tener procesos definidos, se reduce la variabilidad en la ejecución, lo que garantiza que el producto o servicio mantenga siempre el mismo estándar de calidad.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
        </svg>
      )
    },
    {
      title: "Ahorro de tiempo",
      description: "La gestión por procesos elimina pasos innecesarios y reduce la duplicidad de tareas. Al optimizar el flujo de trabajo, la empresa se vuelve más ágil y eficiente en sus operaciones diarias.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      title: "Asignación de responsables claros",
      description: "Uno de los mayores problemas en las PYMES es la confusión sobre quién debe hacer qué. Este enfoque asigna un responsable directo para cada proceso, lo que mejora la rendición de cuentas y evita vacíos de responsabilidad.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
      )
    },
    {
      title: "Definición de Objetivos y KPIs",
      description: "Facilita la medición del rendimiento. Al tener procesos claros, es posible establecer indicadores que permitan monitorear si se están cumpliendo las metas y dónde se requieren ajustes.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
      )
    },
    {
      title: "Mejora Continua y Satisfacción",
      description: "La metodología está orientada al ciclo PDCA (Planificar, Hacer, Verificar y Actuar). Al enfocarse en la optimización constante, la PYME puede adaptarse mejor a las necesidades del mercado peruano, elevando la satisfacción final del cliente.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.757a2 2 0 011.707 3.05l-4.13 6.608a2 2 0 01-1.707.942H10.24a2 2 0 01-1.707-.942l-4.13-6.608A2 2 0 016.11 10H11V4a1 1 0 112 0v6z"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Beneficios de la gestión por procesos para PYMES en Perú
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">
            La gestión por procesos no es solo una cuestión de orden, sino una herramienta estratégica para mejorar la competitividad, la rentabilidad y asegurar la continuidad del negocio en un entorno exigente.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-6">
                  {beneficio.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{beneficio.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {beneficio.description}
                </p>
              </div>
            ))}
          </div>

          {/* Conclusion / Summary */}
          <div className="mt-20 bg-white rounded-3xl p-10 shadow-lg border-l-8 border-blue-600 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Por qué es vital en el mercado peruano?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Para las PYMES en Perú, implementar esta metodología enfocada en el ciclo <strong>PDCA (Planificar, Hacer, Verificar y Actuar)</strong> permite elevar los estándares de calidad y la satisfacción final del cliente, adaptándose con agilidad a las exigencias locales.
            </p>
            <div className="flex justify-center">
              <Link to="/contacto" className="bg-blue-900 text-white font-bold py-3 px-10 rounded-full hover:bg-blue-800 transition duration-300">
                MEJORAR MIS PROCESOS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BeneficiosProcesos;
