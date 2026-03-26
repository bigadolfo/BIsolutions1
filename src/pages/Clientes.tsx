import React from 'react';

const Clientes = () => {
  const clientsData = [
    {
      company: "Volcan Compañia minera S.A.A",
      category: "Mantenimiento de aplicaciones",
      projects: [
        "Sistema de seguridad ocupacional SOMA",
        "Sistema de operaciones mineras SIOM",
        "Sistema de control de perforadoras",
        "Dataentries para actualización de datamarts",
        "Datamarts de procesos de producción, logística, costos y gastos administrativos",
        "Sistema de calidad, muestras y sondajes"
      ]
    },
    {
      company: "Roche",
      category: "Desarrollo de aplicaciones",
      projects: ["Intranet para el área de recursos humanos"]
    },
    {
      company: "Hunter Douglas",
      category: "Desarrollo de aplicaciones",
      projects: ["Implementación de sistema de recursos humanos"]
    },
    {
      company: "Universidad Continental",
      category: "Desarrollo y mantenimiento de aplicaciones",
      projects: [
        "Mantenimiento de aplicaciones financieras",
        "Desarrollo de aplicación para notificación a deudores",
        "Automatización de creación de cuentas (Gmail, AD, Moodle)",
        "Mantenimiento de portales de estudiantes (Instituto, Universidad, Postgrado, Idiomas)",
        "Elaboración y mantenimiento de reportes",
        "Gestión de cuenta corriente (Sede Florida)",
        "Emisión de comprobantes electrónicos",
        "Mantenimiento de aplicaciones de pagos electrónicos"
      ]
    },
    {
      company: "Pacifico",
      category: "Desarrollo de aplicaciones",
      projects: ["Aplicativo Telebusca para gestión de llamadas de callcenters"]
    },
    {
      company: "Benoti",
      category: "Desarrollo de software",
      projects: ["Implementación y personalización del sistema financiero contable (Contabilidad, RRHH, Logística)"]
    },
    {
      company: "Agrobanco",
      category: "Desarrollo de software",
      projects: ["Sistema de gestión y administración de auditorías"]
    },
    {
      company: "Naviera Transoceánica",
      category: "Desarrollo y mantenimiento de aplicaciones",
      projects: [
        "Sistema de facturación de servicios",
        "Sistema de gestión de remolcadores",
        "Portal de proveedores",
        "Portal depósito marítimo",
        "Generación de datamarts comerciales"
      ]
    },
    {
      company: "Reyes Consultores",
      category: "Desarrollo web",
      projects: ["Desarrollo y mantenimiento del buscador normativo"]
    },
    {
      company: "Renadsa",
      category: "Desarrollo y mantenimiento de aplicaciones",
      projects: [
        "Portal de operaciones",
        "Sistema de facturación y control de operaciones",
        "Aplicativo móvil para control de operaciones en lanchas"
      ]
    },
    {
      company: "Encode Solutions",
      category: "Diseño y mantenimiento de aplicaciones",
      projects: [
        "Control de aire acondicionado (Aeropuerto Jorge Chávez)",
        "Control de consumo (Mall del Sur, Real Plaza)",
        "Control de alertas (Data Center Huawei)"
      ]
    },
    {
      company: "Ebiz",
      category: "Diseño y mantenimiento de aplicaciones",
      projects: [
        "Aplicación b2mining (Adquisiciones rubro privado)",
        "Aplicación egp (Adquisiciones rubro estatal)"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-blue-900 sm:text-5xl">
            Clientes
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Estamos orgullosos de contar entre nuestros clientes con empresas líderes en el mercado en diferentes rubros. Ellos han usado nuestras soluciones como estrategia para ser más eficientes y competitivos.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {clientsData.map((client, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="p-6 flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 uppercase tracking-wide">
                    {client.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  {client.company}
                </h2>
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    Proyectos:
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    {client.projects.map((project, pIndex) => (
                      <li key={pIndex}>{project}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-4 mt-auto border-t border-gray-100">
                <p className="text-xs text-gray-400 font-medium italic">
                  Soluciones de alto impacto
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clientes;
