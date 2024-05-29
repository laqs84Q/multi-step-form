import React, { useState } from "react";

const Step1 = ({ formData, setFormData, handleNextStep }) => {
  // Estado para almacenar los errores de validación
  const [errors, setErrors] = useState({});

  // Función para validar los campos del formulario
  const validate = () => {
    const newErrors = {};

    // Validación del campo Nombre Completo
    if (!formData.fullName.trim() || formData.fullName.split(" ").length < 2) {
      newErrors.fullName =
        "Nombre completo es obligatorio y debe tener al menos 2 palabras";
    }

    // Validación del campo Correo Electrónico
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Correo electrónico no es válido";
    }

    // Validación del campo Número de Teléfono
    if (!formData.phoneNumber.match(/^\d{10}$/)) {
      newErrors.phoneNumber = "Número de teléfono no es válido";
    }

    return newErrors;
  };

  // Manejador para el evento del botón Siguiente
  const handleNext = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      handleNextStep();
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Título del paso */}
      <h2 className="text-3xl font-bold mb-4">Paso 1: Información Personal</h2>

      {/* Campo Nombre Completo */}
      <div className="mb-4">
        <label className="block mb-1">Nombre Completo:</label>
        <input
          type="text"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {/* Mensaje de error */}
        {errors.fullName && (
          <p className="text-red-500 mt-1">{errors.fullName}</p>
        )}
      </div>

      {/* Campo Correo Electrónico */}
      <div className="mb-4">
        <label className="block mb-1">Correo Electrónico:</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {/* Mensaje de error */}
        {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
      </div>

      {/* Campo Número de Teléfono */}
      <div className="mb-4">
        <label className="block mb-1">Número de Teléfono:</label>
        <input
          type="tel"
          value={formData.phoneNumber}
          onChange={(e) =>
            setFormData({ ...formData, phoneNumber: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {/* Mensaje de error */}
        {errors.phoneNumber && (
          <p className="text-red-500 mt-1">{errors.phoneNumber}</p>
        )}
      </div>

      {/* Botón Siguiente */}
      <button
        onClick={handleNext}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Siguiente
      </button>
    </div>
  );
};

export default Step1;
