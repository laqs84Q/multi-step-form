import React, { useState } from 'react';

const Step4B = ({ formData, setFormData, handleNextStep, handlePreviousStep }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Nombre de la empresa es obligatorio';
    }
    if (!formData.companySize.trim()) {
      newErrors.companySize = 'Tamaño de la empresa es obligatorio';
    }
    if (!formData.roleInCompany.trim()) {
      newErrors.roleInCompany = 'Rol en la empresa es obligatorio';
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
      <h2 className="text-3xl font-bold mb-4">Paso 4B: Información de Negocios</h2>
      <div className="mb-4">
        <label className="block mb-1">Nombre de la Empresa:</label>
        <input
          type="text"
          value={formData.companyName}
          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.companyName && <p className="text-red-500">{errors.companyName}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-1">Tamaño de la Empresa:</label>
        <select
          value={formData.companySize}
          onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Seleccione un tamaño</option>
          <option value="1-10">1-10</option>
          <option value="11-50">11-50</option>
          <option value="51-200">51-200</option>
          <option value="201-500">201-500</option>
          <option value="500+">500+</option>
        </select>
        {errors.companySize && <p className="text-red-500">{errors.companySize}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-1">Rol en la Empresa:</label>
        <input
          type="text"
          value={formData.roleInCompany}
          onChange={(e) => setFormData({ ...formData, roleInCompany: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.roleInCompany && <p className="text-red-500">{errors.roleInCompany}</p>}
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={handlePreviousStep} className="p-2 bg-gray-500 text-white rounded">Anterior</button>
        <button onClick={handleNext} className="p-2 bg-blue-500 text-white rounded">Siguiente</button>
      </div>
    </div>
  );
};

export default Step4B;
