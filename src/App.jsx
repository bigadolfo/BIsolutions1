import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ padding: '2rem', flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<EnfoquePyme />} />
            <Route path="/servicios" element={<LineasConsultoria />} />
            <Route path="/nuestra-forma-de-trabajo" element={<NuestraFormaDeTrabajo />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/servicios/gestion-por-procesos" element={<GestionPorProcesos />} />
            <Route path="/servicios/planeamiento-estrategico" element={<PlaneamientoEstrategico />} />
            <Route path="/servicios/auditoria-interna" element={<AuditoriaInterna />} />
            <Route path="/servicios/gestion-de-riesgos" element={<GestionDeRiesgos />} />
            <Route path="/la-mejor-consultoria-para-pymes-en-peru" element={<ConsultoriaPymes />} />
            <Route path="/beneficios-de-la-gestion-por-procesos-para-pymes-en-peru" element={<BeneficiosProcesos />} />
            <Route path="/competitividad-en-las-pymes" element={<CompetitividadPymes />} />
            <Route path="/garantia" element={<Garantia />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
