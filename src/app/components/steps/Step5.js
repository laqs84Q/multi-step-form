import React, { useState } from "react";

const Step5 = ({ formData, setFormData, handleSubmit, handlePreviousStep }) => {
  // Estado para almacenar los errores de validación
  const [errors, setErrors] = useState({});

  // Función para validar los campos del formulario
  const validate = () => {
    const newErrors = {};
    // Validación del campo referralSource
    if (!formData.referralSource.trim()) {
      newErrors.referralSource = "Fuente de referencia es obligatoria";
    }
    // Validación del campo termsAccepted
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "Debe aceptar los términos y condiciones";
    }
    return newErrors;
  };

  // Manejador para el evento del botón Enviar
  const handleNext = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      handleSubmit();
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Título del paso */}
      <h2 className="text-3xl font-bold mb-4">Paso 5: Preferencias</h2>

      {/* Campo ¿Desea recibir notificaciones por correo electrónico? */}
      <div className="mb-4">
        <label className="">
          ¿Desea recibir notificaciones por correo electrónico?
        </label>
        <input
          type="checkbox"
          checked={formData.receiveNotifications}
          onChange={(e) =>
            setFormData({ ...formData, receiveNotifications: e.target.checked })
          }
          className="mr-2"
        />
      </div>

      {/* Campo ¿Cómo se enteró de nuestro servicio? */}
      <div className="mb-4">
        <label className="block">¿Cómo se enteró de nuestro servicio?</label>
        {/* Opciones de selección */}
        <div>
          <input
            type="radio"
            name="referralSource"
            value="Online Ads"
            checked={formData.referralSource === "Online Ads"}
            onChange={(e) =>
              setFormData({ ...formData, referralSource: e.target.value })
            }
            className="mr-2"
          />
          <label>Anuncios en Línea</label>
        </div>
        <div>
          <input
            type="radio"
            name="referralSource"
            value="Friend Referral"
            checked={formData.referralSource === "Friend Referral"}
            onChange={(e) =>
              setFormData({ ...formData, referralSource: e.target.value })
            }
            className="mr-2"
          />
          <label>Recomendación de un Amigo</label>
        </div>
        <div>
          <input
            type="radio"
            name="referralSource"
            value="Social Media"
            checked={formData.referralSource === "Social Media"}
            onChange={(e) =>
              setFormData({ ...formData, referralSource: e.target.value })
            }
            className="mr-2"
          />
          <label>Redes Sociales</label>
        </div>
        <div>
          <input
            type="radio"
            name="referralSource"
            value="Other"
            checked={formData.referralSource === "Other"}
            onChange={(e) =>
              setFormData({ ...formData, referralSource: e.target.value })
            }
            className="mr-2"
          />
          <label>Otro</label>
        </div>
        {/* Mensaje de error */}
        {errors.referralSource && (
          <p className="text-red-500">{errors.referralSource}</p>
        )}
      </div>

      {/* Campo Acepto los términos y condiciones */}
      <div className="mb-4">
        <input
          type="checkbox"
          checked={formData.termsAccepted}
          onChange={(e) =>
            setFormData({ ...formData, termsAccepted: e.target.checked })
          }
          className="mr-2"
        />
        <label>Acepto los términos y condiciones</label>
        {/* Mensaje de error */}
        {errors.termsAccepted && (
          <p className="text-red-500">{errors.termsAccepted}</p>
        )}
      </div>

      {/* Botones de navegación */}
      <div className="flex justify-between">
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
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Step5;
