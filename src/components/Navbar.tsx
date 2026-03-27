import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo1.PNG';
import { supabase } from '../libs/supabaseCliente';

interface SubMenuItem {
  path: string;
  label: string;
}

interface NavLink {
  path: string;
  label: string;
  submenu?: SubMenuItem[];
}

const Navbar: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isServiciosOpen, setIsServiciosOpen] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAdmin(!!session);
    };
    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAdmin(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
    setIsServiciosOpen(false);
  };

  const navLinks: NavLink[] = [
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
    <>
      <nav className="bg-nav-bg shadow-md sticky top-0 z-50">
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            
            {/* LOGO - Siempre visible */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="Logo" className="h-12 md:h-14 w-auto object-contain" />
              </Link>
            </div>

            {/* MENÚ DESKTOP (xl y superiores) */}
            <div className="hidden xl:flex items-center justify-center flex-grow px-4">
              <ul className="flex items-center space-x-2 2xl:space-x-6">
                {navLinks.map((link) => (
                  <li key={link.path} className="relative group">
                    {link.submenu ? (
                      <>
                        <Link 
                          to={link.path}
                          className="flex items-center text-nav-text hover:text-nav-hover px-2 py-2 rounded-md text-[13px] 2xl:text-[14px] font-bold transition-colors whitespace-nowrap"
                        >
                          {link.label}
                          <svg className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </Link>
                        {/* Submenú Desktop */}
                        <div className="absolute left-1/2 -translate-x-1/2 mt-0 w-60 bg-white border border-gray-100 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 py-2">
                          {link.submenu.map((sub) => (
                            <Link key={sub.path} to={sub.path} className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-nav-hover">
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link to={link.path} className="text-nav-text hover:text-nav-hover px-2 py-2 rounded-md text-[13px] 2xl:text-[14px] font-bold transition-colors whitespace-nowrap">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* ACCIONES DERECHA */}
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Teléfono: Oculto en móviles pequeños, visible desde md */}
              <div className="hidden md:flex items-center text-nav-text font-bold text-sm 2xl:text-base whitespace-nowrap">
                (+51) 987 951 261
              </div>
              
              {/* Admin: Solo visible en pantallas grandes para no amontonar */}
              <Link to={isAdmin ? "/PanelAdmin" : "/signin"} className="hidden lg:flex items-center text-[10px] 2xl:text-xs text-gray-500 hover:text-nav-hover font-medium transition-colors">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="hidden 2xl:inline">¿Es administrador?</span>
              </Link>

              {/* Botón Contacto: Oculto en móviles, visible desde sm */}
              <Link to="/contacto" className="hidden sm:flex bg-btn-bg hover:bg-btn-hover text-btn-text px-4 md:px-6 py-2.5 rounded-full font-bold text-[10px] md:text-[12px] tracking-widest transition-colors">
                CONTACTO
              </Link>

              {/* Botón Hamburguesa: Visible solo debajo de xl */}
              <button onClick={toggleMenu} className="xl:hidden p-2 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
                {isOpen ? (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* MENÚ DESPLEGABLE MÓVIL (xl:hidden) */}
        <div className={`${isOpen ? 'block' : 'hidden'} xl:hidden bg-nav-bg border-t border-gray-100 overflow-y-auto max-h-[calc(100vh-6rem)]`}>
          <div className="px-4 py-6 flex flex-col items-center space-y-2 text-center">
            {navLinks.map((link) => (
              <div key={link.path} className="w-full max-w-xs border-b border-gray-50 last:border-0 pb-1">
                {link.submenu ? (
                  <div className="flex flex-col items-center">
                    <button 
                      onClick={() => setIsServiciosOpen(!isServiciosOpen)} 
                      className="flex items-center justify-center py-3 text-nav-text hover:text-nav-hover text-base font-bold w-full"
                    >
                      {link.label}
                      <svg className={`ml-2 h-4 w-4 transition-transform ${isServiciosOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isServiciosOpen && (
                      <div className="bg-gray-50 rounded-lg w-full py-1 mb-2">
                        {link.submenu.map((sub) => (
                          <Link key={sub.path} to={sub.path} onClick={() => setIsOpen(false)} className="block py-2 text-sm text-gray-600 font-medium">
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link to={link.path} onClick={() => setIsOpen(false)} className="block py-3 text-nav-text hover:text-nav-hover text-base font-bold">
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Detalles extra en móvil */}
            <div className="pt-4 flex flex-col items-center space-y-4">
              <span className="text-nav-text font-bold text-sm">(+51) 987 951 261</span>
              <Link to="/contacto" onClick={() => setIsOpen(false)} className="bg-btn-bg text-btn-text px-8 py-3 rounded-full font-bold text-xs tracking-widest sm:hidden">
                CONTACTO
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;