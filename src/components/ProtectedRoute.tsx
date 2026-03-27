import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../libs/supabaseCliente';

// Definimos la interfaz para las props
interface ProtectedRouteProps {
  children: React.ReactNode; // ReactNode es más flexible que JSX.Element
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Obtenemos la sesión actual de Supabase
        const { data: { session } } = await supabase.auth.getSession();
        
        // !!session convierte el objeto en true si existe, o false si es null
        setIsAuthenticated(!!session);
      } catch (error) {
        console.error("Error verificando autenticación:", error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();

    // Opcional: Escuchar cambios en el estado de autenticación (login/logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Estado de carga inicial para evitar parpadeos o redirecciones falsas
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
        <span className="ml-3 text-gray-600 font-medium">Verificando acceso...</span>
      </div>
    );
  }

  // Si no está autenticado, redirigimos a /signin
  // El "replace" evita que el usuario vuelva aquí al presionar "atrás"
  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  // Si está autenticado, renderizamos los componentes hijos (PanelAdmin)
  return <>{children}</>;
};