import React from 'react';
import { Link } from 'react-router-dom';

const CompetitividadPymes = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0e2246] text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-[#E58A00] font-bold tracking-wider uppercase text-sm mb-4 block">
            Actualidad y Estrategia
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight max-w-4xl">
            Impulsando la Competitividad en las PYMES
          </h1>
          <p className="text-lg md:text-2xl text-blue-100 max-w-3xl font-light">
            Descubre cómo las pequeñas y medianas empresas pueden adoptar herramientas de grandes corporaciones para asegurar su éxito y escalabilidad en el mercado actual.
          </p>
        </div>
        {/* Background Decorative Element */}
        <div className="absolute right-0 bottom-0 opacity-10">
          <svg className="w-96 h-96" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M44.7,-76.4C58.3,-69.2,70.1,-59,78.5,-46.2C86.8,-33.4,91.8,-18,91.4,-2.5C91,-13,85.2,-25.9,76.4,-36.8C67.7,-47.7,56,-56.6,43.2,-62.7C30.4,-68.8,16.5,-72.1,2.1,-68.5C-12.3,-64.8,-27.2,-54.2,-39.8,-42.8C-52.4,-31.4,-62.7,-19.1,-67.1,-5.1C-71.5,8.9,-70,24.6,-63.1,38C-56.3,51.4,-44,62.5,-30.1,69.1C-16.2,75.7,-0.7,77.8,14.7,75.5C30.1,73.1,45.4,66.4,56.7,55.4C68,44.4,75.3,29.1,78.2,13.2C81.1,-2.7,79.5,-19.2,73.1,-33.8C66.7,-48.4,55.5,-61.2,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* Article Area */}
          <div className="lg:w-2/3 space-y-12">
            
            {/* Intro Section */}
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-xl font-medium text-gray-800 leading-relaxed mb-6">
                La competitividad en las PYMES no es un estado estático, sino un proceso de adaptación continua donde la innovación y la calidad son las herramientas principales para cerrar la brecha con las grandes empresas.
              </p>
              <p>
                Hoy en día, la supervivencia y el éxito de las pequeñas y medianas empresas dependen de su capacidad para adoptar procesos y tecnologías eficientes adaptadas a su escala.
              </p>
            </div>

            {/* Pilares */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-4 font-bold text-xl">01</div>
                <h3 className="font-bold text-gray-900 mb-2">Innovación Constante</h3>
                <p className="text-sm text-gray-600">Reinventar procesos y modelos de negocio para crecer un 20% más que el promedio.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-xl flex items-center justify-center mb-4 font-bold text-xl">02</div>
                <h3 className="font-bold text-gray-900 mb-2">Transformación Digital</h3>
                <p className="text-sm text-gray-600">Priorizar la presencia online y el e-commerce para conectar con nuevos clientes.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 text-[#E58A00] rounded-xl flex items-center justify-center mb-4 font-bold text-xl">03</div>
                <h3 className="font-bold text-gray-900 mb-2">Foco en el Cliente</h3>
                <p className="text-sm text-gray-600">Convertir al cliente en el eje central mediante la fidelización y el servicio personalizado.</p>
              </div>
            </div>

            {/* Decalogo Section */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-[#0e2246] mb-8">Decálogo de Competitividad</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
                {[
                  "Ser innovador y adaptarse al cambio.",
                  "Interactuar con nuevas tecnologías digitales.",
                  "Mantener una actitud emprendedora proactiva.",
                  "Excelencia en la calidad del servicio.",
                  "Invertir en la capacitación del talento humano.",
                  "Explorar mercados internacionales.",
                  "Optimizar procesos para la eficiencia operativa.",
                  "Mejorar el acceso a financiamiento estratégico.",
                  "Generar alianzas estratégicas y vinculación.",
                  "Adoptar metodologías de sostenibilidad."
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-[#E58A00] mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Area */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-8">
              
              {/* Desafíos Card */}
              <div className="bg-[#0e2246] text-white p-8 rounded-3xl shadow-lg">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-[#E58A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                  Principales Desafíos
                </h3>
                <ul className="space-y-4">
                  <li className="pb-4 border-b border-white/10">
                    <span className="block font-bold text-[#E58A00]">Restricciones financieras</span>
                    <span className="text-sm text-blue-100">Dificultad de acceso al crédito para inversión tecnológica.</span>
                  </li>
                  <li className="pb-4 border-b border-white/10">
                    <span className="block font-bold text-[#E58A00]">Escasa vinculación</span>
                    <span className="text-sm text-blue-100">Falta de integración con grandes cadenas de suministro.</span>
                  </li>
                  <li>
                    <span className="block font-bold text-[#E58A00]">Brecha de capacidades</span>
                    <span className="text-sm text-blue-100">Retos para atraer y retener personal altamente competente.</span>
                  </li>
                </ul>
              </div>

              {/* Contact Mini CTA */}
              <div className="bg-gray-100 p-8 rounded-3xl text-center border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">¿Buscas potenciar la competitividad de tu empresa?</h4>
                <Link to="/contacto" className="inline-block bg-[#0e2246] text-white font-bold py-3 px-8 rounded-full hover:bg-blue-900 transition-colors">
                  CONTÁCTANOS HOY
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CompetitividadPymes;
