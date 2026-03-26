import React from 'react';
import { Link } from 'react-router-dom';

const EnfoquePyme = () => {
  return (
    <div className="w-full flex flex-col font-sans text-gray-800 bg-white text-justify">
      {/* HERO SECTION / BREADCRUMBS */}
      <section className="bg-blue-900 py-16 px-6 text-white text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight">Conócenos</h1>
          <nav className="flex justify-center text-sm font-medium">
            <Link to="/" className="hover:text-blue-200 transition-colors">Inicio</Link>
            <span className="mx-2"> </span>
            <span className="text-white font-bold uppercase">Enfoque PYME</span>
          </nav>
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b-4 border-amber-500 inline-block pb-2">Sobre Nosotros</h2>
        <p className="text-xl text-gray-700 italic font-medium leading-relaxed">
          "PYME Solutions, Generando resultados"
        </p>
      </section>

      {/* MISIÓN / ¿PARA QUÉ? */}
      <section className="py-12 px-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-blue-900 mb-4 uppercase">¿Para qué?</h3>
          <p className="text-gray-600 leading-relaxed">
            Para fomentar una espiral de mejora continua orientada al desarrollo del sector PYME y de las organizaciones en crecimiento del Perú.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-blue-900 mb-4 uppercase tracking-tighter">Misión</h3>
          <p className="text-gray-600 leading-relaxed">
            Pyme Solutions Perú tiene como misión apoyar a las PYMES y organizaciones en crecimiento, permitiéndoles incrementar su competitividad y rentabilidad a través de la optimización de sus procesos, según sean sus necesidades y la tendencia en su sector, apoyándonos siempre por la metodología y tecnología óptima.
          </p>
        </div>
      </section>

      {/* ¿POR QUÉ? / ¿CÓMO LO HACEMOS? */}
      <section className="py-12 px-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-100">
        <div>
          <h3 className="text-2xl font-bold text-blue-900 mb-4 uppercase">¿Por qué?</h3>
          <p className="text-gray-600 leading-relaxed">
            Porque consideramos que las PYMES y las organizaciones en crecimiento son el motor de la economía del país, y necesitan estructurarse para asegurar su permanencia en el tiempo.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-blue-900 mb-4 uppercase">¿Cómo lo hacemos?</h3>
          <p className="text-gray-600 leading-relaxed">
            Enfocamos la metodología y la estrategia a lo que tu PYME puntualmente necesita, garantizando que cada acción genere un valor real.
          </p>
        </div>
      </section>

      {/* NUESTRO EQUIPO */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-blue-900 uppercase tracking-tight">Nuestro Equipo</h3>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {[1, 2, 3, 4,5].map((member) => (
            <div key={member} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <svg className="w-20 h-20 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-blue-900">Nombre del Miembro</h4>
                <p className="text-amber-600 font-medium text-sm uppercase tracking-wider mt-1">Cargo / Especialidad</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ¿QUÉ NOS DIFERENCIA? */}
      <section className="py-16 px-6 bg-gray-50 border-y border-gray-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-blue-900 mb-6 uppercase">¿Qué nos diferencia?</h3>
          <p className="text-xl text-gray-700 leading-relaxed mb-10">
            Nuestros resultados son garantizados. Nuestro enfoque no es solo la teoría, sino la implementación práctica que genera rentabilidad inmediata.
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

export default EnfoquePyme;
