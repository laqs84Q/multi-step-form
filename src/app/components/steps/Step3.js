import React, { useState } from "react";

const Step3 = ({
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
    // Validación del campo username
    if (!formData.username.trim() || formData.username.length < 3) {
      newErrors.username =
        "Nombre de usuario es obligatorio y debe tener al menos 3 caracteres";
    }
    // Validación del campo password
    if (
      !formData.password.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/)
    ) {
      newErrors.password =
        "Contraseña debe tener al menos 8 caracteres, una letra mayúscula, un número y un carácter especial";
    }
    // Validación de coincidencia de contraseña
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }
    // Validación del campo userProfile
    if (!formData.userProfile) {
      newErrors.userProfile = "Perfil de usuario es obligatorio";
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
      <h2 className="text-3xl font-bold mb-4">Paso 3: Detalles de la Cuenta</h2>

      {/* Campo Nombre de Usuario */}
      <div className="mb-4">
        <label className="block mb-1">Nombre de Usuario:</label>
        <input
          type="text"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {/* Mensaje de error */}
        {errors.username && <p className="text-red-500">{errors.username}</p>}
      </div>

      {/* Campo Contraseña */}
      <div className="mb-4">
        <label className="block mb-1">Contraseña:</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {/* Mensaje de error */}
        {errors.password && <p className="text-red-500">{errors.password}</p>}
      </div>

      {/* Campo Confirmar Contraseña */}
      <div className="mb-4">
        <label className="block mb-1">Confirmar Contraseña:</label>
        <input
          type="password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {/* Mensaje de error */}
        {errors.confirmPassword && (
          <p className="text-red-500">{errors.confirmPassword}</p>
        )}
      </div>

      {/* Campo Perfil de Usuario */}
      <div className="mb-4">
        <label className="block mb-1">Perfil de Usuario:</label>
        {/* Selección de tipo de perfil */}
        <div>
          <input
            type="radio"
            name="userProfile"
            value="Personal"
            checked={formData.userProfile === "Personal"}
            onChange={(e) =>
              setFormData({ ...formData, userProfile: e.target.value })
            }
            className="mr-2"
          />
          <label className="mr-4">Personal</label>
          <input
            type="radio"
            name="userProfile"
            value="Business"
            checked={formData.userProfile === "Business"}
            onChange={(e) =>
              setFormData({ ...formData, userProfile: e.target.value })
            }
            className="mr-2"
          />
          <label>Negocios</label>
        </div>
        {/* Mensaje de error */}
        {errors.userProfile && (
          <p className="text-red-500">{errors.userProfile}</p>
        )}
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

export default Step3;
