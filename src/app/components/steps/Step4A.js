import React, { useState } from "react";

const Step4A = ({
  formData,
  setFormData,
  handleNextStep,
  handlePreviousStep,
}) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.dateOfBirth.trim()) {
      newErrors.dateOfBirth = "Fecha de nacimiento es obligatoria";
    }
    if (!formData.gender.trim()) {
      newErrors.gender = "Género es obligatorio";
    }
    return newErrors;
  };

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
      <h2 className="text-3xl font-bold mb-4">
        Paso 4A: Información Personal Adicional
      </h2>
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
        {errors.dateOfBirth && (
          <p className="text-red-500">{errors.dateOfBirth}</p>
        )}
      </div>
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
        {errors.gender && <p className="text-red-500">{errors.gender}</p>}
      </div>
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
