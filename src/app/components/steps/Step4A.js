import React, { useState } from "react";

const Step4A = ({
  formData,
  setFormData,
  handleNextStep,
  handlePreviousStep,
}) => {
  // Estado para almacenar los errores de validación
  const [errors, setErrors] = useState({});

  // Función para validar los campos del formulario
  const validate = () => {
    const newErrors = {};
    // Validación del campo dateOfBirth
    if (!formData.dateOfBirth.trim()) {
      newErrors.dateOfBirth = "Fecha de nacimiento es obligatoria";
    }
    // Validación del campo gender
    if (!formData.gender.trim()) {
      newErrors.gender = "Género es obligatorio";
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
      <h2 className="text-3xl font-bold mb-4">
        Paso 4A: Información Personal Adicional
      </h2>

      {/* Campo Fecha de Nacimiento */}
      <div className="mb-4">
        <label className="block mb-1">Fecha de Nacimiento:</label>
        <input
          type="date"
          value={formData.dateOfBirth}
          onChange={(e) =>
            setFormData({ ...formData, dateOfBirth: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {/* Mensaje de error */}
        {errors.dateOfBirth && (
          <p className="text-red-500">{errors.dateOfBirth}</p>
        )}
      </div>

      {/* Campo Género */}
      <div className="mb-4">
        <label className="block mb-1">Género:</label>
        <select
          value={formData.gender}
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Seleccione un género</option>
          <option value="Male">Masculino</option>
          <option value="Female">Femenino</option>
          <option value="Other">Otro</option>
        </select>
        {/* Mensaje de error */}
        {errors.gender && <p className="text-red-500">{errors.gender}</p>}
      </div>

      {/* Botones de navegación */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePreviousStep}
          className="p-2 bg-gray-500 text-white rounded"
        >
          Anterior
        </button>
        <button
          onClick={handleNext}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Step4A;
