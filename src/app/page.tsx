import React from "react";
import MultiStepForm from "./multistepform"; // Importa el componente del formulario de varios pasos
import "tailwindcss/tailwind.css"; // Importa los estilos de Tailwind CSS

// Componente funcional que representa la página de inicio
export default function Home() {
  return (
    <main className="">
      {/* Renderiza el componente del formulario de paso a paso */}
      <MultiStepForm />
    </main>
  );
}
