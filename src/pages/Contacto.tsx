import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../libs/supabaseCliente';

interface FormData {
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  empresa: string;
  cargo: string;
  dni: string;
  mensaje: string;
}

const Contacto: React.FC = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    empresa: '',
    cargo: '',
    dni: '',
    mensaje: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const isFormComplete = Object.values(formData).every(value => value.trim() !== '');
    if (!isFormComplete) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }

    if (!validateEmail(formData.email)) {
      alert('Por favor, ingrese un correo electrónico válido.');
      return;
    }

    setLoading(true);

    // --- [CAMBIO LÓGICO]: Se usa .upsert en lugar de .insert con 'onConflict' ---
    // Esto evita el error "duplicate key" si el DNI ya existe, actualizando el registro en su lugar.
   // --- PARTE A: GUARDAR EN SUPABASE ---
    const { error } = await supabase
      .from('consultas_contacto')
      .insert([
        {
          nombre: formData.nombre,
          apellidos: formData.apellidos,
          correo_electronico: formData.email,
          telefono: formData.telefono,
          empresa: formData.empresa,
          cargo: formData.cargo,
          dni: formData.dni,
          mensaje: formData.mensaje
        }
      ]);

    setLoading(false);

    if (error) {
      alert('Hubo un error al registrar tu mensaje: ' + error.message);
      return;
    }

    // --- ENVÍO A WHATSAPP DIRECTO ---
    const phoneNumber = '51987951261';
    const text = `*Nuevo Mensaje de Contacto*\n\n` +
                 `*Nombre:* ${formData.nombre} ${formData.apellidos}\n` +
                 `*Email:* ${formData.email}\n` +
                 `*Teléfono:* ${formData.telefono}\n` +
                 `*Empresa:* ${formData.empresa}\n` +
                 `*Cargo:* ${formData.cargo}\n` +
                 `*DNI:* ${formData.dni}\n` +
                 `*Mensaje:* ${formData.mensaje}`;

    const encodedText = encodeURIComponent(text);
    
    // Detectamos si es móvil o web para evitar el menú intermedio de wa.me
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const whatsappUrl = isMobile 
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodedText}` 
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
    
    setFormData({ nombre: '', apellidos: '', email: '', telefono: '', empresa: '', cargo: '', dni: '', mensaje: '' });
  };

  return (
    <div className="w-full flex flex-col font-sans text-gray-800 bg-white">
      {/* HERO SECTION */}
      <section className="bg-blue-900 py-20 px-6 text-white text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-tight">Contáctanos</h1>
          <nav className="flex justify-center text-sm text-blue-200 font-medium uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contacto</span>
          </nav>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <section className="py-20 px-6 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-16">
          
          {/* FORMULARIO */}
          <div className="md:w-2/3">
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Envíanos un mensaje desde este formulario y con gusto nos pondremos en contacto a la brevedad.
            </p>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700 uppercase">Nombre *</label>
                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all" required />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700 uppercase">Apellidos *</label>
                <input type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all" required />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700 uppercase">Correo electrónico *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all" required />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700 uppercase">Teléfono *</label>
                <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all" required />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700 uppercase">Empresa *</label>
                <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all" required />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700 uppercase">Cargo *</label>
                <input type="text" name="cargo" value={formData.cargo} onChange={handleChange} className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all" required />
              </div>
              
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-bold text-gray-700 uppercase">DNI *</label>
                <input type="text" name="dni" value={formData.dni} onChange={handleChange} className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all" required />
              </div>
              
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-bold text-gray-700 uppercase">Mensaje *</label>
                <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} rows="5" className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all resize-none" required></textarea>
              </div>

              <div className="md:col-span-2">
                <p className="text-xs text-gray-400 mb-6 italic">
                  * Datos necesarios. Sus datos personales están protegidos por la Ley N° 29733.
                </p>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-12 rounded transition-all duration-300 uppercase tracking-widest shadow-lg transform hover:-translate-y-1 disabled:bg-gray-400"
                >
                  {loading ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </div>
            </form>
          </div>

          {/* COLUMNA DERECHA (Información de contacto) */}
          <div className="md:w-1/3 flex flex-col gap-8">
            <h2 className="text-4xl font-extrabold text-slate-800">Estamos en Contacto</h2>
            <p className="text-gray-600 leading-relaxed -mt-4">
              Comunícate con nosotros a través de nuestros canales de atención al cliente.
            </p>

            <div className="space-y-10 mt-4">
              {/* Teléfono */}
              <div className="flex items-center gap-5">
                <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-slate-500 flex items-center justify-center text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-700 leading-tight">Teléfono</h4>
                  <p className="text-gray-600 text-lg">987 951 261</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-5">
                <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-slate-500 flex items-center justify-center text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-700 leading-tight">Email</h4>
                  <p className="text-gray-600 text-lg">ventas@pymesolutions.pe</p>
                </div>
              </div>

              {/* Dirección */}
              <div className="flex items-center gap-5">
                <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-slate-500 flex items-center justify-center text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-700 leading-tight">Dirección</h4>
                  <p className="text-gray-600 text-lg">Guadalupe 125, of. 201, Chorrillos</p>
                </div>
              </div>

              {/* Horario */}
              <div className="flex items-center gap-5">
                <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-slate-500 flex items-center justify-center text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-700 leading-tight">Horario</h4>
                  <p className="text-gray-600 text-lg">Lun a Vie de 9:00am a 6:00pm</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contacto;