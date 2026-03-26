import React from 'react';
import { Link } from 'react-router-dom';

const LineasConsultoria = () => {
  const servicios = [
    {
      title: "Gestión por Procesos",
      path: "/servicios/gestion-por-procesos",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
      ),
      description: "Identificación, diseño y mejora de los procesos de negocio para incrementar la productividad y reducir costos, alineando las operaciones con los objetivos estratégicos."
    },
    {
      title: "Planeamiento Estratégico",
      path: "/servicios/planeamiento-estrategico",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
      ),
      description: "Definición de misión, visión y objetivos a largo plazo. Creación de una hoja de ruta con acciones específicas y KPIs para asegurar un crecimiento sostenible."
    },
    {
      title: "Auditoría Interna",
      path: "/servicios/auditoria-interna",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
      ),
      description: "Evaluación independiente y objetiva de los controles internos, gestión de riesgos y gobierno corporativo, asegurando el cumplimiento legal y normativo."
    },
    {
      title: "Gestión de Riesgos",
      path: "/servicios/gestion-de-riesgos",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
      ),
      description: "Identificación de amenazas potenciales (financieras, operativas o reputacionales) y desarrollo de estrategias para mitigarlas, garantizando la continuidad del negocio."
    }
  ];

  return (
    <div className="w-full flex flex-col font-sans text-gray-800">
      {/* HERO SECTION / BREADCRUMBS */}
      <section className="bg-blue-900 py-20 px-6 text-white text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">¿Qué podemos ofrecerte?</h1>
          <nav className="flex justify-center text-sm text-blue-200 font-medium uppercase tracking-wider">
            <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Líneas de Consultorías</span>
          </nav>
        </div>
      </section>

      {/* INTRODUCCIÓN */}
      <section className="py-16 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Nuestras Líneas de Consultoría</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Enfocamos nuestra metodología y estrategia a lo que tu PYME puntualmente necesita. 
            Contamos con soluciones integrales diseñadas para cada etapa de tu negocio.
          </p>
        </div>
      </section>

      {/* GRID DE SERVICIOS */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicios.map((servicio, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-2xl shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                {servicio.icon}
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{servicio.title}</h3>
              <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                {servicio.description}
              </p>
              <Link 
                to={servicio.path} 
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-10 rounded-full transition duration-300 shadow-lg transform group-hover:scale-105"
              >
                DESCUBRE MÁS
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* BANNER DE GARANTÍA (CTA) */}
      <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800 rounded-full -mr-48 -mt-48 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800 rounded-full -ml-48 -mb-48 opacity-50"></div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block bg-amber-500 p-4 rounded-full mb-8">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Resultados 100% Garantizados</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 font-light max-w-3xl mx-auto">
            Nuestro compromiso es con tu crecimiento. Si no logramos los resultados pactados, 
            <span className="font-bold text-amber-500"> te devolvemos el monto de tu inversión.</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/contacto" 
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-12 rounded-full transition duration-300 shadow-xl"
            >
              SOLICITAR CONSULTORÍA
            </Link>
            <Link 
              to="/garantia" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-12 rounded-full transition duration-300"
            >
              VER GARANTÍA
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-around items-center gap-8 text-blue-900 font-bold">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
            <span>999 838 200</span>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
            <span>ventas@pymesolutions.pe</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LineasConsultoria;
