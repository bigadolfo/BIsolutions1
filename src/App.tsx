import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Componentes Globales
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ProtectedRoute } from './components/ProtectedRoute'; // Debes crear este archivo

// Páginas Públicas
import Home from './pages/Home';
import EnfoquePyme from './pages/EnfoquePyme';
import LineasConsultoria from './pages/LineasConsultoria';
import NuestraFormaDeTrabajo from './pages/NuestraFormaDeTrabajo';
import Contacto from './pages/Contacto';
import Blog from './pages/Blog';
import GestionPorProcesos from './pages/GestionPorProcesos';
import PlaneamientoEstrategico from './pages/PlaneamientoEstrategico';
import AuditoriaInterna from './pages/AuditoriaInterna';
import GestionDeRiesgos from './pages/GestionDeRiesgos';
import ConsultoriaPymes from './pages/ConsultoriaPymes';
import BeneficiosProcesos from './pages/BeneficiosProcesos';
import CompetitividadPymes from './pages/CompetitividadPymes';
import Garantia from './pages/Garantia';
import Clientes from './pages/Clientes';
import MejoraContinuaPymes from './pages/MejoraContinuaPymes';
import ComoTenerReunionesEfectivas from './pages/ComoTenerReunionesEfectivas';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';

// Página Privada (Panel de Administración)
import PanelAdmin from './pages/PanelAdmin';

const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 1. RUTA PROTEGIDA: Panel de Administración (Sin Navbar/Footer públicos) */}
        <Route 
          path="/PanelAdmin" 
          element={
            <ProtectedRoute>
              <PanelAdmin />
            </ProtectedRoute>
          } 
        />

        {/* 2. RUTAS PÚBLICAS: Envueltas en el Layout estándar de la web */}
        <Route
          path="*"
          element={
            <div className="app-container flex flex-col min-h-screen">
              <Navbar />
              <main className="main-content flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/nosotros" element={<EnfoquePyme />} />
                  <Route path="/clientes" element={<Clientes />} />
                  <Route path="/mejora-continua-pymes" element={<MejoraContinuaPymes />} />
                  <Route path="/como-tener-reuniones-efectivas" element={<ComoTenerReunionesEfectivas />} />
                  <Route path="/servicios" element={<LineasConsultoria />} />
                  <Route path="/nuestra-forma-de-trabajo" element={<NuestraFormaDeTrabajo />} />
                  <Route path="/contacto" element={<Contacto />} />
                  <Route path="/blog" element={<Blog />} />
                  
                  {/* Sub-rutas de servicios */}
                  <Route path="/servicios/gestion-por-procesos" element={<GestionPorProcesos />} />
                  <Route path="/servicios/planeamiento-estrategico" element={<PlaneamientoEstrategico />} />
                  <Route path="/servicios/auditoria-interna" element={<AuditoriaInterna />} />
                  <Route path="/servicios/gestion-de-riesgos" element={<GestionDeRiesgos />} />
                  
                  {/* Rutas SEO / Artículos específicos */}
                  <Route path="/la-mejor-consultoria-para-pymes-en-peru" element={<ConsultoriaPymes />} />
                  <Route path="/beneficios-de-la-gestion-por-procesos-para-pymes-en-peru" element={<BeneficiosProcesos />} />
                  <Route path="/competitividad-en-las-pymes" element={<CompetitividadPymes />} />
                  <Route path="/garantia" element={<Garantia />} />
                  
                  {/* Autenticación */}
                  <Route path="/signin" element={<SignIn />} />
                  
                  {/* Manejo de error 404 */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;