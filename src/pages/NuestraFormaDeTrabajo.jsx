import React from 'react';
import { Link } from 'react-router-dom';

const NuestraFormaDeTrabajo = () => {
  const etapas = [
    {
      titulo: "Planificar",
      descripcion: "Tendremos reuniones efectivas (2 a 3 horas) con los roles puntuales de tu organización para efectuar el análisis y establecer los objetivos para que tu PYME logre resultados de acuerdo a la estrategia, políticas y sobre todo a tus expectativas.",
      color: "text-blue-900"
    },
    {
      titulo: "Hacer",
      descripcion: "Implementaremos los procesos y requisitos identificados, acorde a la situación de tu PYME, en base a 4 posibles enfoques: dirección, procesos, personas y clientes. El objetivo es ayudar a tu organización a mejorar sus procesos y toma de decisiones.",
      color: "text-blue-900"
    },
    {
      titulo: "Verificar",
      descripcion: "Realizaremos el seguimiento y la medición de los resultados logrados y requisitos cumplidos.",
      color: "text-blue-900"
    },
    {
      titulo: "Actuar",
      descripcion: "Implementaremos un programa de mejora continua que asegure cada vez un mejor desempeño de tu PYME.",
      color: "text-blue-900"
    }
  ];

  return (
    <div className="w-full flex flex-col font-sans text-gray-800 bg-white">
      {/* HERO SECTION / BREADCRUMBS */}
      <section className="bg-blue-900 py-16 px-6 text-white text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestra Metodología</h1>
          <nav className="flex justify-center text-sm font-medium">
            <Link to="/" className="hover:text-blue-200 transition-colors">Inicio</Link>
            <span className="mx-2"> </span>
            <span className="text-white font-bold">Nuestra Forma de Trabajo</span>
          </nav>
        </div>
      </section>

      {/* METODOLOGÍA PHVA */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {etapas.map((etapa, index) => (
            <div key={index} className="flex flex-col border-l-4 border-amber-500 pl-8 py-4">
              <h2 className={`text-2xl font-bold mb-4 ${etapa.color}`}>
                {etapa.titulo}
              </h2>
              <p className="text-gray-600 leading-relaxed text-justify">
                {etapa.descripcion}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CIERRE Y CTA */}
      <section className="py-16 px-6 bg-gray-50 border-t border-gray-100 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-700 leading-relaxed mb-10 italic">
            "En PYME Solutions trabajamos estrechamente con nuestros clientes para adecuar los procesos y estructura organizativa de manera que apoyen efectivamente en la implementación de la estrategia."
          </p>
          <Link 
            to="/contacto" 
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-12 rounded-full transition duration-300 shadow-lg uppercase tracking-wider"
          >
            Contáctanos
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NuestraFormaDeTrabajo;
