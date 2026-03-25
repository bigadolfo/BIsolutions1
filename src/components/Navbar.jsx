import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      padding: '1rem', 
      backgroundColor: '#f8f9fa',
      borderBottom: '1px solid #dee2e6'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>pyme solutions</div>
      <ul style={{ 
        display: 'flex', 
        listStyle: 'none', 
        gap: '20px', 
        margin: 0, 
        padding: 0 
      }}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/nosotros">Enfoque Pyme</Link></li>
        <li><Link to="/servicios">Lineas de consultoria</Link></li>
        <li><Link to="/nuestra-forma-de-trabajo">Nuestra Forma de trabajo</Link></li>
        <li><Link to="/contacto">contacto</Link></li>
        <li><Link to="/blog">blog</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
