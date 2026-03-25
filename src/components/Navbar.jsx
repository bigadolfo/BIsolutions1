import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo1.PNG';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiciosOpen, setIsServiciosOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsServiciosOpen(false);
  };

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/nosotros', label: 'Nosotros' },
    { path: '/clientes', label: 'Clientes' },
     { 
      path: '/servicios', 
      label: 'Líneas de Consultoría',
      submenu: [
        { path: '/servicios/gestion-por-procesos', label: 'Gestión por Proceso' },
        { path: '/servicios/planeamiento-estrategico', label: 'Planeamiento Estratégico' },
        { path: '/servicios/auditoria-interna', label: 'Auditoría Interna' },
        { path: '/servicios/gestion-de-riesgos', label: 'Gestión de Riesgos' },
      ]
    },
    { path: '/nuestra-forma-de-trabajo', label: 'Forma de Trabajo' },
    { path: '/blog', label: 'Blog' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid de 3 columnas para centrado exacto en desktop */}
        <div className="grid grid-cols-2 xl:grid-cols-3 items-center h-24">
          
          {/* 1. Logo (Izquierda) */}
          <div className="flex justify-start">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Logo" className="h-14 w-auto object-contain" />
            </Link>
          </div>

          {/* 2. Desktop Menu (CENTRADO) */}
          <div className="hidden xl:flex justify-center items-center h-full">
            <ul className="flex items-center space-x-2">
              {navLinks.map((link) => (
                <li key={link.path} className="relative group">
                  {link.submenu ? (
                    <>
                      <Link 
                        to={link.path}
                        className="flex items-center text-[#0e2246] hover:text-blue-600 px-3 py-2 rounded-md text-[14px] font-bold transition-colors whitespace-nowrap outline-none"
                      >
                        {link.label}
                        <svg className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </Link>
                      {/* Submenú centrado respecto al padre */}
                      <div className="absolute left-1/2 -translate-x-1/2 mt-0 w-60 bg-white border border-gray-100 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 py-2">
                        {link.submenu.map((sub) => (
                          <Link key={sub.path} to={sub.path} className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600">
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link to={link.path} className="text-[#0e2246] hover:text-blue-600 px-3 py-2 rounded-md text-[14px] font-bold transition-colors whitespace-nowrap">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contacto y Mobile Toggle (Derecha) */}
          <div className="flex justify-end items-center space-x-4">
            <div className="hidden md:flex items-center text-[#0e2246] font-bold text-base mr-4">
              <span className="whitespace-nowrap">(511) 987 951 261</span>
            </div>
            
            <Link to="/contacto" className="hidden sm:flex bg-[#E58A00] hover:bg-[#CC7A00] text-white px-6 py-2.5 rounded-full font-bold text-[12px] tracking-widest transition-colors">
              CONTACTO
            </Link>

            {/* Botón Hamburguesa */}
            <button onClick={toggleMenu} className="xl:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100">
              {isOpen ? (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Centrado */}
      <div className={`${isOpen ? 'block' : 'hidden'} xl:hidden bg-white border-t border-gray-100`}>
        <div className="px-4 py-8 flex flex-col items-center space-y-4 text-center">
          {navLinks.map((link) => (
            <div key={link.path} className="w-full max-w-xs border-b border-gray-50 last:border-0 pb-2">
              {link.submenu ? (
                <div className="flex flex-col items-center">
                  <button 
                    onClick={() => setIsServiciosOpen(!isServiciosOpen)} 
                    className="flex items-center justify-center py-3 text-[#0e2246] text-lg font-bold w-full"
                  >
                    {link.label}
                    <svg className={`ml-2 h-5 w-5 transition-transform ${isServiciosOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isServiciosOpen && (
                    <div className="bg-gray-50 rounded-lg w-full py-2 mb-2">
                      {link.submenu.map((sub) => (
                        <Link key={sub.path} to={sub.path} onClick={() => setIsOpen(false)} className="block py-3 text-sm text-gray-600 font-medium">
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link to={link.path} onClick={() => setIsOpen(false)} className="block py-3 text-[#0e2246] text-lg font-bold">
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          
          {/* Info de contacto móvil centrada */}
          <div className="pt-4 flex flex-col items-center space-y-4">
            <span className="text-[#0e2246] font-bold">(511) 987 951 261</span>
            <Link to="/contacto" onClick={() => setIsOpen(false)} className="bg-[#E58A00] text-white px-8 py-3 rounded-full font-bold text-sm tracking-widest">
              CONTACTO
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;