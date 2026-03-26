import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      id: 1,
      categoria: "Consultoría",
      titulo: "Cómo elegir la mejor consultoría para PYMES en Perú",
      extracto: "Si lo que estás buscando es la mejor consultoría para PYMES en Perú, estás en el lugar correcto. En este artículo te brindaremos 5 factores clave para tu elección...",
      fecha: "agosto 10, 2022",
      path: "/la-mejor-consultoria-para-pymes-en-peru"
    },
    {
      id: 2,
      categoria: "Consultoría",
      titulo: "Beneficios de la Gestión por Procesos para PYMES en Perú",
      extracto: "La gestión por procesos para PYMES garantiza una mejora en cualquier rubro. Esta forma de trabajo permite estructurar las actividades y definir los grupos de...",
      fecha: "agosto 1, 2022",
      path: "/beneficios-de-la-gestion-por-procesos-para-pymes-en-peru"
    },
    {
      id: 3,
      categoria: "Consultoría",
      titulo: "¿Cómo mejorar la productividad y la competitividad en las PYMES del Perú?",
      extracto: "En el presente artículo revisaremos cómo mejorar la productividad y la competitividad en las PYMES del Perú. El sector PYME cobra cada vez más relevancia...",
      fecha: "junio 27, 2022",
      path: "/competitividad-en-las-pymes"
    },
    {
      id: 4,
      categoria: "Consultoría",
      titulo: "Cómo aplicar la mejora continua en mi PYME",
      extracto: "La mejora continua para tu PYME ayudará en el crecimiento y desarrollo que necesitas. En Pyme Solutions sabemos la necesidad de cambios que generen resultados...",
      fecha: "junio 27, 2022",
      path: "/mejora-continua-pymes"
    },
    {
      id: 5,
      categoria: "Consultoría",
      titulo: "10 consejos para tener reuniones efectivas de trabajo",
      extracto: "Para tener reuniones efectivas debemos considerar como finalidad el uso eficiente de los recursos, el aporte de ideas valiosas, consensuar acuerdos y proyectar su cumplimiento.",
      fecha: "junio 27, 2022",
      path: "/como-tener-reuniones-efectivas"
    },
    {
      id: 6,
      categoria: "Consultoría",
      titulo: "Cómo hacer un exitoso Plan Estratégico para PYME",
      extracto: "Un plan estratégico para PYME es un documento indispensable que te ayudará a definir hacia dónde va tu negocio. El mercado, en el sector PYME...",
      fecha: "junio 27, 2022",
      path: "/servicios/planeamiento-estrategico"
    }
  ];

  return (
    <div className="w-full flex flex-col font-sans text-gray-800 bg-white">
      {/* HERO SECTION / BREADCRUMBS */}
      <section className="bg-blue-900 py-20 px-6 text-white text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-tight">Nuestro Blog</h1>
          <nav className="flex justify-center text-sm text-blue-200 font-medium uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Blog</span>
          </nav>
        </div>
      </section>

      {/* SECCIÓN PRINCIPAL: GRILLA DE POSTS (TODOS LOS ARTÍCULOS) */}
      <section className="py-20 px-6 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col h-full bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              {/* Espacio para imagen (Placeholder) */}
              <div className="h-48 bg-gray-200 w-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-colors duration-300"></div>
                <div className="flex items-center justify-center h-full">
                   <svg className="w-12 h-12 text-gray-400 opacity-50" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path></svg>
                </div>
              </div>

              {/* Contenido del Post */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[11px] font-bold text-amber-500 uppercase tracking-widest mb-3">
                  {post.categoria}
                </span>
                
                <h2 className="text-xl font-bold text-blue-900 mb-4 leading-snug hover:text-amber-500 transition-colors">
                  <Link to={post.path}>{post.titulo}</Link>
                </h2>
                
                <p className="text-sm text-gray-600 mb-6 leading-relaxed line-clamp-3 text-justify">
                  {post.extracto}
                </p>
                
                <div className="mt-auto">
                  <Link 
                    to={post.path} 
                    className="text-xs font-bold text-blue-900 hover:text-amber-500 flex items-center gap-1 transition-colors uppercase tracking-wider"
                  >
                    Leer más <span className="text-lg">»</span>
                  </Link>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <span className="text-[10px] text-gray-400 uppercase font-medium">
                      {post.fecha}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
