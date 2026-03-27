import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importamos useNavigate
import { supabase } from '../libs/supabaseCliente'; // Asegúrate de que la ruta a tu cliente sea correcta

interface LoginCredentials {
  usuario: string;
  contrasena: string;
}

const SignIn: React.FC = (): JSX.Element => {
  const navigate = useNavigate(); // Hook para la redirección
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Redirigir si ya está logueado
  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate('/PanelAdmin');
      }
    };
    checkUser();
  }, [navigate]);

  const [credentials, setCredentials] = useState<LoginCredentials>({
    usuario: '',
    contrasena: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      // Supabase usa 'email' en lugar de 'usuario'
      const { data, error } = await supabase.auth.signInWithPassword({
        email: credentials.usuario,
        password: credentials.contrasena,
      });

      if (error) {
        throw error;
      }

      if (data.user) {
        // Si la autenticación es exitosa, redirigimos al PanelAdmin
        navigate('/PanelAdmin');
      }
    } catch (error: any) {
      setErrorMsg(error.message || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col font-sans text-gray-800 bg-surface-50">
      {/* HERO SECTION SIMPLE */}
      <section className="bg-blue-900 py-12 px-6 text-white text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 uppercase tracking-tight">Acceso Administrativo</h1>
          <nav className="flex justify-center text-sm text-blue-200 font-medium uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Admin</span>
          </nav>
        </div>
      </section>

      {/* FORMULARIO DE INICIO DE SESIÓN */}
      <section className="flex-grow flex items-center justify-center py-16 px-6">
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl border border-gray-100 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-900 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Iniciar Sesión</h2>
            <p className="text-sm text-gray-500 mt-2">Solo personal autorizado</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Mensaje de Error dinámico */}
            {errorMsg && (
              <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-3 text-sm rounded">
                {errorMsg === 'Invalid login credentials' ? 'Usuario o contraseña incorrectos' : errorMsg}
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700 uppercase" htmlFor="usuario">Email / Usuario</label>
              <input 
                type="email" 
                id="usuario"
                name="usuario" 
                value={credentials.usuario} 
                onChange={handleChange} 
                className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all" 
                placeholder="ejemplo@correo.com"
                required 
                autoComplete="username"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700 uppercase" htmlFor="contrasena">Contraseña</label>
              <input 
                type="password" 
                id="contrasena"
                name="contrasena" 
                value={credentials.contrasena} 
                onChange={handleChange} 
                className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all" 
                required 
                autoComplete="current-password"
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className={`mt-4 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3.5 px-6 rounded transition-all duration-300 uppercase tracking-widest shadow-md transform hover:-translate-y-0.5 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Verificando...' : 'Ingresar'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignIn;