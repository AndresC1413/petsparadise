import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="App">
      {/* Menú superior */}
      <nav style={{
        width: '100%',
        background: '#282c34',
        padding: '1rem 0',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <button
          onClick={toggleSidebar}
          style={{
            position: 'absolute',
            left: '2rem',
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: '2rem',
            cursor: 'pointer',
            outline: 'none',
            padding: 0
          }}
          aria-label="Abrir menú lateral"
        >
          <img src={process.env.PUBLIC_URL + '/img/clic.gif'} alt="Abrir menú" style={{ width: '32px', height: '32px' }} />
        </button>
        <ul style={{
          display: 'flex',
          justifyContent: 'center',
          listStyle: 'none',
          margin: 0,
          padding: 0
        }}>
          <li style={{ margin: '0 2rem' }}><a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Inicio</a></li>
          <li style={{ margin: '0 2rem' }}><a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Mascotas</a></li>
          <li style={{ margin: '0 2rem' }}><a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Contacto</a></li>
        </ul>
      </nav>

      {/* Sidebar lateral */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: sidebarOpen ? 0 : '-250px',
          width: '250px',
          height: '100%',
          background: '#222',
          color: '#fff',
          transition: 'left 0.3s',
          zIndex: 2000,
          paddingTop: '4.5rem',
          boxShadow: sidebarOpen ? '2px 0 8px rgba(0,0,0,0.2)' : 'none'
        }}
      >
        {sidebarOpen && (
          <button
            onClick={toggleSidebar}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '-2.5rem',
              background: '#282c34',
              border: 'none',
              color: '#fff',
              fontSize: '1.5rem',
              cursor: 'pointer',
              borderRadius: '50%',
              width: '2.5rem',
              height: '2.5rem',
              boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
            }}
            aria-label="Cerrar menú lateral"
          >
            ×
          </button>
        )}
        <ul style={{ listStyle: 'none', padding: '2rem 1rem' }}>
          <li style={{ margin: '1.5rem 0' }}><a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Dashboard</a></li>
          <li style={{ margin: '1.5rem 0' }}><a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Perfil</a></li>
          <li style={{ margin: '1.5rem 0' }}><a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Configuración</a></li>
        </ul>
      </div>

      {/* Contenido principal */}
      <div style={{ paddingTop: '5rem' }}>
        <header className="App-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0rem' }}>
          <img src={logo} className="App-logo" alt="logo" />
          <img src={process.env.PUBLIC_URL + '/img/cargando.gif'} alt="Cargando" style={{ width: '100px', height: '100px' }} />
          <div>
            <p>
              pagina en construccion Pets Paradise
            </p>
            <a
              className="App-link"
              href="https://www.americadecali.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              solo para ver el proyecto
            </a>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
