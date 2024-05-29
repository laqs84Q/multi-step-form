"use client";
import { useEffect, useState } from 'react';
import { FormData } from '../shared/types';

const Summary = () => {
  const [formData, setFormData] = useState<FormData | null>(null);

  useEffect(() => {
    const storedFormData = sessionStorage.getItem('formData');
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  if (!formData) return <div className="container mx-auto p-4">Cargando...</div>;

  return (
    <div className="container-grid mx-auto p-4 grid grid-cols-2 gap-4">
      <h2 className="text-2xl font-bold mb-4 col-span-2">Resumen del Formulario</h2>
      <div>
        <label className="font-semibold">Nombre Completo:</label>
        <p>{formData.fullName}</p>
      </div>
      <div>
        <label className="font-semibold">Correo Electrónico:</label>
        <p>{formData.email}</p>
      </div>
      <div>
        <label className="font-semibold">Número de Teléfono:</label>
        <p>{formData.phoneNumber}</p>
      </div>
      <div>
        <label className="font-semibold">Dirección:</label>
        <p>{formData.streetAddress}</p>
      </div>
      <div>
        <label className="font-semibold">Ciudad:</label>
        <p>{formData.city}</p>
      </div>
      <div>
        <label className="font-semibold">Código Postal:</label>
        <p>{formData.postalCode}</p>
      </div>
      <div>
        <label className="font-semibold">País:</label>
        <p>{formData.country}</p>
      </div>
      <div>
        <label className="font-semibold">Nombre de Usuario:</label>
        <p>{formData.username}</p>
      </div>
      <div>
        <label className="font-semibold">Perfil de Usuario:</label>
        <p>{formData.userProfile}</p>
      </div>
      <div>
        <label className="font-semibold">Fecha de Nacimiento:</label>
        <p>{formData.dateOfBirth}</p>
      </div>
      <div>
        <label className="font-semibold">Género:</label>
        <p>{formData.gender}</p>
      </div>
      {formData.companyName && (
    <div>
      <label className="font-semibold">Nombre de la Empresa:</label>
      <p>{formData.companyName}</p>
    </div>
  )}

  {formData.companySize && (
    <div>
      <label className="font-semibold">Tamaño de la Empresa:</label>
      <p>{formData.companySize}</p>
    </div>
  )}

  {formData.roleInCompany && (
    <div>
      <label className="font-semibold">Rol en la Empresa:</label>
      <p>{formData.roleInCompany}</p>
    </div>
  )}
        <div>
        <label className="font-semibold">¿Desea recibir notificaciones por correo electrónico?</label>
        <p>{formData.receiveNotifications ? 'Sí' : 'No'}</p>
      </div>
      <div>
        <label className="font-semibold">¿Cómo se enteró de nuestro servicio?</label>
        <p>{formData.referralSource}</p>
      </div>
      <div>
        <label className="font-semibold">Acepto los términos y condiciones:</label>
        <p>{formData.termsAccepted ? 'Sí' : 'No'}</p>
      </div>
    </div>
  );
};

export default Summary;
