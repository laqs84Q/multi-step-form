import React, { useState, useEffect } from "react";

const Step2 = ({
  formData,
  setFormData,
  handleNextStep,
  handlePreviousStep,
}) => {
  // Estado para almacenar los errores de validación
  const [errors, setErrors] = useState({});

  // Estado para almacenar la lista de países y si se está cargando
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  // Efecto para cargar la lista de países al montar el componente
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name",
        );
        const data = await response.json();
        setCountries(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  // Función para validar los campos del formulario
  const validate = () => {
    const newErrors = {};

    // Validación de campo streetAddress
    if (!formData.streetAddress.trim()) {
      newErrors.streetAddress = "Dirección es obligatoria";
    }

    // Validación de campo city
    if (!formData.city.trim()) {
      newErrors.city = "Ciudad es obligatoria";
    }

    // Validación de campo postalCode
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = "Código postal es obligatorio";
    } else if (!/^\d{5}$/.test(formData.postalCode)) {
      newErrors.postalCode = "Código postal no es válido";
    }

    // Validación de campo country
    if (!formData.country.trim()) {
      newErrors.country = "País es obligatorio";
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
      <h2 className="text-3xl font-bold mb-4">Paso 2: Dirección</h2>

      {/* Campo Dirección */}
      <div className="mb-4">
        <label className="block mb-1">Dirección:</label>
        <input
          type="text"
          value={formData.streetAddress}
          onChange={(e) =>
            setFormData({ ...formData, streetAddress: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {/* Mensaje de error */}
        {errors.streetAddress && (
          <p className="text-red-500">{errors.streetAddress}</p>
        )}
      </div>

      {/* Campo Ciudad */}
      <div className="mb-4">
        <label className="block mb-1">Ciudad:</label>
        <input
          type="text"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {/* Mensaje de error */}
        {errors.city && <p className="text-red-500">{errors.city}</p>}
      </div>

      {/* Campo Código Postal */}
      <div className="mb-4">
        <label className="block mb-1">Código Postal:</label>
        <input
          type="text"
          value={formData.postalCode}
          onChange={(e) =>
            setFormData({ ...formData, postalCode: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {/* Mensaje de error */}
        {errors.postalCode && (
          <p className="text-red-500">{errors.postalCode}</p>
        )}
      </div>

      {/* Campo País */}
      <div className="mb-4">
        <label className="block mb-1">País:</label>
        {/* Mostrar mensaje de carga mientras se cargan los países */}
        {loading ? (
          <p>Loading countries...</p>
        ) : (
          // Selector de países
          <select
            value={formData.country}
            onChange={(e) =>
              setFormData({ ...formData, country: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Seleccione un país</option>
            {/* Iterar sobre la lista de países */}
            {countries.map((country, index) => (
              <option key={index} value={country.name.common}>
                {country.name.common}
              </option>
            ))}
          </select>
        )}
        {/* Mensaje de error */}
        {errors.country && <p className="text-red-500">{errors.country}</p>}
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

export default Step2;
