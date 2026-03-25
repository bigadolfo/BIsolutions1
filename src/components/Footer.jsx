import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#001d3d] text-white pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* COLUMNA 1: NAVEGACIÓN */}
        <div>
          <h4 className="text-xl font-bold mb-6 border-b-2 border-amber-500 inline-block pb-1">Mapa del Sitio</h4>
          <ul className="space-y-3">
            <li><Link to="/" className="text-gray-300 hover:text-amber-500 transition-colors flex items-center gap-2"><span>›</span> Inicio</Link></li>
            <li><Link to="/nosotros" className="text-gray-300 hover:text-amber-500 transition-colors flex items-center gap-2"><span>›</span> Enfoque PYME</Link></li>
            <li><Link to="/servicios" className="text-gray-300 hover:text-amber-500 transition-colors flex items-center gap-2"><span>›</span> Líneas de Consultorías</Link></li>
            <li><Link to="/nuestra-forma-de-trabajo" className="text-gray-300 hover:text-amber-500 transition-colors flex items-center gap-2"><span>›</span> Nuestra Forma de Trabajo</Link></li>
            <li><Link to="/contacto" className="text-gray-300 hover:text-amber-500 transition-colors flex items-center gap-2"><span>›</span> Contacto</Link></li>
            <li><Link to="/blog" className="text-gray-300 hover:text-amber-500 transition-colors flex items-center gap-2"><span>›</span> Blog</Link></li>
          </ul>
        </div>

        {/* COLUMNA 2: CONTACTO */}
        <div>
          <h4 className="text-xl font-bold mb-6 border-b-2 border-amber-500 inline-block pb-1">Contáctanos</h4>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
              <span>Guadalupe 125, of. 201, Chorrillos, Lima - Perú</span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
              <span>999 838 200</span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
              <span>ventas@pymesolutions.pe</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path></svg>
              <span>Lun - Vie: 09:00 - 18:00</span>
            </li>
          </ul>
        </div>

        {/* COLUMNA 3: SOCIAL & LOGO */}
        <div className="flex flex-col items-center md:items-start">
          <div className="text-2xl font-bold mb-4">pyme<span className="text-amber-500">solutions</span></div>
          <p className="text-gray-400 text-sm mb-6 text-center md:text-left">
            Generando resultados tangibles para la pequeña y mediana empresa en el Perú.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="max-w-6xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>© 2026 PYME Solutions. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <Link to="/garantia" className="hover:text-amber-500 transition-colors">Garantía</Link>
          <Link to="/blog" className="hover:text-amber-500 transition-colors">Política de Privacidad</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
