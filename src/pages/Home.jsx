import React from 'react';
import { Link } from 'react-router-dom';
import portada from '../images/portada.jpeg';

const Home = () => {
  return (
    <div className="w-full flex flex-col font-sans text-gray-800">
      {/* HERO SECTION */}
      <section 
        className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${portada})` }}
      >
        {/* Capa superpuesta (Overlay) para legibilidad del texto */}
        <div className="absolute inset-0 bg-brand-primary/60"></div>
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
            Somos especialistas en creación de valor para PYMES.
          </h1>
          <p className="text-lg md:text-2xl mb-10 text-white/90 font-light max-w-2xl mx-auto drop-shadow-sm">
            Optimizamos tu estrategia y procesos. Garantizamos resultados para hacer crecer tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* [TEMA BOTONES]: Botón principal con variables dinámicas */}
            <Link 
              to="/servicios" 
              className="bg-btn-bg hover:bg-btn-hover text-btn-text font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              DESCUBRE MÁS
            </Link>
            <Link 
              to="/contacto" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-full transition duration-300"
            >
              CONTÁCTANOS
            </Link>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION / ABOUT US SECTION */}
      <section className="py-20 px-6 bg-surface-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-2">Enfoque Pyme</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Expertos en la gestión empresarial de pequeñas y medianas empresas
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Entendemos que las PYMES son el motor de la economía. Nuestro enfoque está diseñado para abordar los desafíos específicos que enfrentan las empresas en crecimiento, proporcionando soluciones prácticas y estratégicas que optimizan los recursos y maximizan la rentabilidad.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Metodología adaptada a tu realidad',
                'Acompañamiento constante',
                'Enfoque en resultados medibles'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700 font-medium">
                  <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/nosotros" className="text-blue-600 font-bold hover:text-blue-800 flex items-center transition-colors">
              Conoce más sobre nosotros
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>
          <div className="md:w-1/2 relative">
            <div className="aspect-w-4 aspect-h-3 bg-gray-300 rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for an image */}
              <div className="w-full h-full bg-blue-100 flex items-center justify-center p-12">
                 <svg className="w-32 h-32 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-green-500">
              <p className="text-3xl font-bold text-gray-900">+10</p>
              <p className="text-sm text-gray-600 font-medium uppercase">Años de experiencia</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES (LÍNEAS DE CONSULTORÍA) SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-2">Nuestros Servicios</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">Líneas de Consultoría</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Gestión por Procesos</h4>
              <p className="text-gray-600 mb-6 text-sm">Optimizamos los flujos de trabajo para aumentar la eficiencia y reducir costos operativos.</p>
              <Link to="/servicios/gestion-por-procesos" className="text-blue-600 font-semibold hover:text-blue-800 text-sm flex items-center">
                Ver más <span className="ml-1">→</span>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Planeamiento Estratégico</h4>
              <p className="text-gray-600 mb-6 text-sm">Definimos el rumbo de tu empresa alineando objetivos a largo plazo con acciones concretas.</p>
              <Link to="/servicios/planeamiento-estrategico" className="text-blue-600 font-semibold hover:text-blue-800 text-sm flex items-center">
                Ver más <span className="ml-1">→</span>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Auditoría Interna</h4>
              <p className="text-gray-600 mb-6 text-sm">Evaluamos y mejoramos la eficacia de los procesos de gestión de riesgos y control.</p>
              <Link to="/servicios/auditoria-interna" className="text-blue-600 font-semibold hover:text-blue-800 text-sm flex items-center">
                Ver más <span className="ml-1">→</span>
              </Link>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Gestión de Riesgos</h4>
              <p className="text-gray-600 mb-6 text-sm">Identificamos y mitigamos amenazas potenciales para proteger el valor de tu negocio.</p>
              <Link to="/servicios/gestion-de-riesgos" className="text-blue-600 font-semibold hover:text-blue-800 text-sm flex items-center">
                Ver más <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
          
          <div className="mt-12">
            {/* [TEMA BOTONES]: Botón principal con variables dinámicas */}
            <Link to="/servicios" className="inline-block bg-btn-bg hover:bg-btn-hover text-btn-text font-bold py-3 px-8 rounded-full transition duration-300">
              VER TODOS LOS SERVICIOS
            </Link>
          </div>
        </div>
      </section>

      {/* GUARANTEE / TRUST BANNER */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white text-blue-600 mb-6">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Resultados 100% Garantizados</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
            Confiamos tanto en nuestra metodología que nuestro compromiso es con tu crecimiento real y medible.
          </p>
          <Link to="/garantia" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 shadow-md">
            CONOCE NUESTRA GARANTÍA
          </Link>
        </div>
      </section>

      {/* BLOG / NEWS SECTION */}
      <section className="py-20 px-6 bg-surface-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-2">Actualidad</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Lee Nuestro Blog</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <span className="text-xs font-semibold text-green-500 uppercase tracking-wider">Consultoría</span>
                <h4 className="text-xl font-bold mt-2 mb-3 text-gray-900 leading-tight">
                  <Link to="/la-mejor-consultoria-para-pymes-en-peru" className="hover:text-blue-600 transition-colors">
                    La mejor consultoría para PYMES en Perú
                  </Link>
                </h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  Descubre qué factores clave debes considerar al elegir una consultora para llevar tu PYME al siguiente nivel en el competitivo mercado peruano.
                </p>
                <Link to="/la-mejor-consultoria-para-pymes-en-peru" className="text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors">
                  Leer artículo completo
                </Link>
              </div>
            </article>

            {/* Blog Post 2 */}
            <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <span className="text-xs font-semibold text-green-500 uppercase tracking-wider">Procesos</span>
                <h4 className="text-xl font-bold mt-2 mb-3 text-gray-900 leading-tight">
                  <Link to="/beneficios-de-la-gestion-por-procesos-para-pymes-en-peru" className="hover:text-blue-600 transition-colors">
                    Beneficios de la gestión por procesos
                  </Link>
                </h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  Implementar una correcta gestión por procesos puede ser la diferencia entre estancarse o escalar. Conoce los beneficios inmediatos.
                </p>
                <Link to="/beneficios-de-la-gestion-por-procesos-para-pymes-en-peru" className="text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors">
                  Leer artículo completo
                </Link>
              </div>
            </article>

            {/* Blog Post 3 */}
            <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <span className="text-xs font-semibold text-green-500 uppercase tracking-wider">Estrategia</span>
                <h4 className="text-xl font-bold mt-2 mb-3 text-gray-900 leading-tight">
                  <Link to="/competitividad-en-las-pymes" className="hover:text-blue-600 transition-colors">
                    Mejorando la competitividad en las PYMES
                  </Link>
                </h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  Estrategias prácticas para destacar en tu sector. Analizamos casos de éxito y metodologías aplicables a la realidad empresarial de hoy.
                </p>
                <Link to="/competitividad-en-las-pymes" className="text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors">
                  Leer artículo completo
                </Link>
              </div>
            </article>
          </div>
          
          <div className="text-center mt-12">
            {/* [TEMA BOTONES]: Botón outline usando los tokens */}
            <Link to="/blog" className="inline-block border-2 border-btn-bg text-btn-bg hover:bg-btn-bg hover:text-btn-text font-bold py-3 px-8 rounded-full transition duration-300">
              VER MÁS ARTÍCULOS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
