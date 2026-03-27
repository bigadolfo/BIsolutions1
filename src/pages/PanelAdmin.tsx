import React, { useEffect, useState, useMemo } from 'react';
import { supabase } from '../libs/supabaseCliente';
import { Link, useNavigate } from 'react-router-dom';

interface Consulta {
  id: string;
  nombre: string;
  apellidos: string;
  correo_electronico: string;
  telefono: string;
  empresa: string;
  cargo: string;
  dni: string;
  mensaje: string;
  created_at: string;
}

const PanelAdmin: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortConfig, setSortConfig] = useState<{ key: keyof Consulta; direction: 'asc' | 'desc' } | null>(null);

  // 1. Verificar sesión y Obtener datos
  const fetchConsultas = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate('/signin');
      return;
    }

    setLoading(true);
    const { data, error } = await supabase
      .from('consultas_contacto')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error al cargar consultas:', error.message);
    } else {
      setConsultas(data || []);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert('Error al cerrar sesión: ' + error.message);
    } else {
      navigate('/signin');
    }
  };

  useEffect(() => {
    fetchConsultas();
  }, [navigate]);

  // 2. Lógica de Filtro (DataTable style)
  const filteredData = useMemo(() => {
    let data = [...consultas];

    // Búsqueda global
    if (searchTerm) {
      const lowerCaseTerm = searchTerm.toLowerCase();
      data = data.filter(item => 
        Object.values(item).some(val => 
          String(val).toLowerCase().includes(lowerCaseTerm)
        )
      );
    }

    // Ordenación
    if (sortConfig !== null) {
      data.sort((a, b) => {
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];
        if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return data;
  }, [consultas, searchTerm, sortConfig]);

  const requestSort = (key: keyof Consulta) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="min-h-screen bg-surface-100 flex flex-col font-sans">
      {/* HEADER DEL PANEL */}
      <header className="bg-nav-bg shadow-sm border-b border-gray-200 py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-xl font-bold text-nav-text">Panel de Administración</h1>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Gestión de Consultas</p>
          </div>
          {/* Botón de regreso al Home */}
          <Link to="/" className="hidden sm:flex text-sm text-brand-info hover:text-brand-primary-light font-bold transition-colors items-center ml-4 px-4 py-2 bg-blue-50 rounded-lg hover:bg-blue-100">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Volver al Sitio
          </Link>
        </div>
        <div className="flex items-center gap-4">
           {/* Botón de regreso al Home (Móvil) */}
           <Link to="/" className="sm:hidden text-sm text-brand-info hover:text-brand-primary-light font-bold transition-colors flex items-center bg-blue-50 p-2 rounded-lg hover:bg-blue-100">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          </Link>
          <button 
            onClick={handleLogout}
            className="text-sm font-bold text-gray-600 hover:text-red-600 transition-colors flex items-center bg-transparent border-none cursor-pointer"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
            <span className="hidden sm:inline">Cerrar Sesión</span>
          </button>
        </div>
      </header>

      <main className="flex-grow p-6 lg:p-10">
        <div className="max-w-[120rem] mx-auto bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          
          {/* CONTROLES TIPO DATATABLE */}
          <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-50/50">
            <div className="relative w-full md:w-96">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </span>
              <input 
                type="text" 
                placeholder="Buscar en todos los campos..." 
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-info focus:border-transparent transition-all text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="text-sm text-gray-500 font-medium">
              Mostrando <span className="text-gray-800">{filteredData.length}</span> registros
            </div>
          </div>

          {/* TABLA */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-100">
                <tr>
                  {[
                    { label: 'Nombre', key: 'nombre' },
                    { label: 'DNI', key: 'dni' },
                    { label: 'Email', key: 'correo_electronico' },
                    { label: 'Teléfono', key: 'telefono' },
                    { label: 'Empresa', key: 'empresa' },
                    { label: 'Cargo', key: 'cargo' },
                    { label: 'Mensaje', key: 'mensaje' },
                    { label: 'Fecha', key: 'created_at' }
                  ].map((col) => (
                    <th 
                      key={col.key} 
                      onClick={() => requestSort(col.key as keyof Consulta)}
                      className="px-6 py-4 font-bold cursor-pointer hover:bg-gray-100 transition-colors whitespace-nowrap"
                    >
                      <div className="flex items-center">
                        {col.label}
                        <svg className={`ml-1 w-3 h-3 text-gray-400 ${sortConfig?.key === col.key ? 'text-brand-info' : ''}`} fill="currentColor" viewBox="0 0 24 24"><path d="M12 5l-8 8h16l-8-8zm0 14l8-8H4l8 8z" /></svg>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {loading ? (
                  <tr>
                    <td colSpan={8} className="px-6 py-20 text-center text-gray-500 font-medium">
                      <div className="flex flex-col items-center gap-2">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-info"></div>
                        Cargando consultas...
                      </div>
                    </td>
                  </tr>
                ) : filteredData.length > 0 ? (
                  filteredData.map((row) => (
                    <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-gray-900">{row.nombre} {row.apellidos}</td>
                      <td className="px-6 py-4 text-gray-600">{row.dni}</td>
                      <td className="px-6 py-4 text-brand-info font-medium">{row.correo_electronico}</td>
                      <td className="px-6 py-4 text-gray-600">{row.telefono}</td>
                      <td className="px-6 py-4 text-gray-600 font-medium">{row.empresa}</td>
                      <td className="px-6 py-4 text-gray-500 text-xs italic">{row.cargo}</td>
                      <td className="px-6 py-4 text-gray-600 max-w-xs truncate" title={row.mensaje}>{row.mensaje}</td>
                      <td className="px-6 py-4 text-gray-500 text-[10px] whitespace-nowrap">
                        {new Date(row.created_at).toLocaleDateString()} {new Date(row.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={8} className="px-6 py-10 text-center text-gray-400 italic">
                      No se encontraron resultados que coincidan con la búsqueda.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* FOOTER TABLA */}
          <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
            <p className="text-[10px] text-gray-400 uppercase tracking-tighter">Sistema de Monitoreo Interno - BIsolutions1</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PanelAdmin;