import React from 'react';
import { Link } from 'react-router-dom';

const Contacto = () => {
  return (
    <div className="w-full flex flex-col font-sans text-gray-800 bg-white">
      {/* HERO SECTION / BREADCRUMBS */}
      <section className="bg-blue-900 py-20 px-6 text-white text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-tight">Contáctanos</h1>
          <nav className="flex justify-center text-sm text-blue-200 font-medium uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contacto</span>
          </nav>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL: FORMULARIO + INFO */}
      <section className="py-20 px-6 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-16">
          
          {/* COLUMNA IZQUIERDA: FORMULARIO */}
          <div className="md:w-2/3">
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Envíanos un mensaje desde este formulario y con gusto nos pondremos en contacto a la brevedad.
            </p>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700 uppercase">Nombre *</label>
                <input type="text" className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all" required />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700 uppercase">Apellidos *</label>
                <input type="text" className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all" required />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700 uppercase">Correo electrónico *</label>
                <input type="email" className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all" required />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700 uppercase">Teléfono *</label>
                <input type="tel" className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all" required />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700 uppercase">Empresa *</label>
                <input type="text" className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all" required />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700 uppercase">Cargo *</label>
                <input type="text" className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all" required />
              </div>
              
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-bold text-gray-700 uppercase">DNI *</label>
                <input type="text" className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all" required />
              </div>
              
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-bold text-gray-700 uppercase">Mensaje *</label>
                <textarea rows="5" className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all resize-none" required></textarea>
              </div>

              <div className="md:col-span-2">
                <p className="text-xs text-gray-400 mb-6 italic">
                  * Datos necesarios. Sus datos personales están protegidos por la Ley N° 29733 de Protección de Datos Personales.
                </p>
                <button type="submit" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-12 rounded transition-all duration-300 uppercase tracking-widest shadow-lg transform hover:-translate-y-1">
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>

          {/* COLUMNA DERECHA: INFO DE CONTACTO */}
          <div className="md:w-1/3">
            <h2 className="text-sm font-bold text-amber-500 tracking-[0.2em] uppercase mb-4">Estamos en Contacto</h2>
            <h3 className="text-3xl font-bold text-blue-900 mb-10 leading-tight">
              Canales de atención
            </h3>
            
            <div className="space-y-10">
              {/* Teléfono */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-full text-blue-900">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Teléfono</p>
                  <p className="text-lg font-bold text-blue-900">999 838 200</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-full text-blue-900">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">E-mail</p>
                  <p className="text-lg font-bold text-blue-900">ventas@pymesolutions.pe</p>
                </div>
              </div>

              {/* Dirección */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-full text-blue-900">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Dirección</p>
                  <p className="text-lg font-bold text-blue-900 leading-tight">Guadalupe 125, of. 201, Chorrillos</p>
                </div>
              </div>

              {/* Horario */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-full text-blue-900">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Horario</p>
                  <p className="text-lg font-bold text-blue-900">Lun a Vie de 9:00am a 6:00pm</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* MAPA (REPRESENTACIÓN VISUAL) */}
      <section className="w-full h-96 bg-gray-200 flex items-center justify-center relative overflow-hidden">
         {/* Aquí iría el iframe de Google Maps */}
         <div className="absolute inset-0 bg-blue-900/5 z-10"></div>
         <div className="text-center z-20">
            <svg className="w-16 h-16 text-blue-900 mx-auto mb-4 opacity-30" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
            <p className="text-blue-900 font-bold uppercase tracking-widest">Vista de Mapa de Ubicación</p>
         </div>
      </section>
    </div>
  );
};

export default Contacto;
