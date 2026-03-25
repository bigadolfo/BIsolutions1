import React from 'react';
import { Link } from 'react-router-dom';

const ConsultoriaPymes = () => {
  const factores = [
    {
      title: "Identificar necesidades",
      description: "Es fundamental tener mapeadas las actividades que se desean mejorar. Un consultor experto puede ayudarte en este diagnóstico inicial para trazar la ruta correcta.",
      icon: "01"
    },
    {
      title: "Trayectoria de consultores",
      description: "Verifica la carrera, especialización y años de experiencia. Una entrevista personal te permitirá confirmar si tienen la capacidad de entender tu negocio.",
      icon: "02"
    },
    {
      title: "Servicios especializados",
      description: "Asegúrate de que ofrezcan soluciones específicas para el mundo PYME en áreas de Estrategia, Procesos, Auditoría y Riesgos.",
      icon: "03"
    },
    {
      title: "Forma de trabajo",
      description: "Cada consultora tiene una metodología distinta. Es vital que esta se alinee con la cultura y los valores de tu empresa para que la implementación sea exitosa.",
      icon: "04"
    },
    {
      title: "Garantía de resultados",
      description: "Busca empresas que se comprometan con resultados tangibles. Nosotros ofrecemos una garantía de cumplimiento o devolución de inversión.",
      icon: "05"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
            Cómo elegir la mejor consultoría para PYMES en Perú
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-light max-w-3xl leading-relaxed">
            La consultoría es un proceso de asesoramiento y mejora continua que incluye el diagnóstico, propuesta e implementación de mejoras estratégicas.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Un socio estratégico para tu crecimiento</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            En el mercado peruano, elegir adecuadamente a tu socio de consultoría puede marcar la diferencia entre un gasto innecesario y una inversión que impulse tu rentabilidad. Aquí te presentamos los factores críticos que debes evaluar.
          </p>
        </div>
      </section>

      {/* Factors Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {factores.map((factor, index) => (
              <div key={index} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:border-blue-500 transition-colors duration-300">
                <div className="text-4xl font-black text-blue-100 mb-4">{factor.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{factor.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto bg-blue-50 rounded-3xl p-12 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 uppercase tracking-tight">Especialistas en creación de valor</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              PYME Solutions se posiciona como el aliado experto para organizaciones en crecimiento en el Perú, ofreciendo servicios de <strong>gestión por procesos, planeamiento estratégico y optimización de la rentabilidad</strong> con metodologías probadas.
            </p>
            <Link to="/nosotros" className="text-blue-700 font-bold hover:underline">
              Conoce nuestra trayectoria →
            </Link>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="bg-blue-600 text-white p-8 rounded-full w-48 h-48 flex flex-col items-center justify-center text-center shadow-xl">
              <span className="text-4xl font-bold">100%</span>
              <span className="text-xs uppercase font-medium">Garantía de Satisfacción</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">¿Listo para dar el siguiente paso?</h2>
        <Link to="/contacto" className="bg-[#E58A00] text-white font-bold py-4 px-12 rounded-full hover:bg-orange-600 transition duration-300 shadow-lg">
          SOLICITAR UNA CITA
        </Link>
      </section>
    </div>
  );
};

export default ConsultoriaPymes;
