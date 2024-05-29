"use client";
import { useEffect, useState } from "react";
import { FormData } from "../shared/types";

// Define el tipo para los datos transformados
type TransformedData = {
  status: string;
  message: string;
  data: {
    full_name: string;
    email: string;
    phone_number: string;
    street_address: string;
    city: string;
    postal_code: string;
    country: string;
    username: string;
    password: string;
    confirm_password: string;
    profile_type: string;
    personal_info: {
      date_of_birth?: string;
      gender?: string;
    } | null;
    business_info: {
      company_name?: string;
      company_size?: string;
      role_in_company?: string;
    } | null;
    notifications: boolean;
    how_heard: string;
    terms_agreed: boolean;
  };
};

const Summary = () => {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [transformedData, setTransformedData] = useState<TransformedData | null>(null);

  useEffect(() => {
    // Recupera los datos del formulario almacenados en sessionStorage al cargar el componente
    const storedFormData = sessionStorage.getItem("formData");
    if (storedFormData) {
      const parsedFormData = JSON.parse(storedFormData);
      setFormData(parsedFormData);
      setTransformedData(transformData(parsedFormData));
    }
  }, []);

  // Función para transformar los datos al formato deseado
  const transformData = (data: FormData): TransformedData => {
    return {
      status: "success",
      message: "Data received successfully",
      data: {
        full_name: data.fullName || "",
        email: data.email || "",
        phone_number: data.phoneNumber || "",
        street_address: data.streetAddress || "",
        city: data.city || "",
        postal_code: data.postalCode || "",
        country: data.country || "",
        username: data.username || "",
        password: "********",  // Mascara por seguridad
        confirm_password: "********",  // Mascara por seguridad
        profile_type: data.userProfile || "",
        personal_info: data.userProfile === "Personal" ? {
          date_of_birth: data.dateOfBirth || "",
          gender: data.gender || ""
        } : null,
        business_info: data.userProfile === "Business" ? {
          company_name: data.companyName,
          company_size: data.companySize,
          role_in_company: data.roleInCompany
        } : null,
        notifications: data.receiveNotifications || false,
        how_heard: data.referralSource || "",
        terms_agreed: data.termsAccepted || false
      }
    };
  };

  // Muestra un mensaje de carga si no se han cargado los datos del formulario
  if (!transformedData)
    return <div className="container mx-auto p-4">Cargando...</div>;

  // Renderiza los datos transformados en una cuadrícula
  return (
    <div className="container mx-auto p-4 grid grid-cols-2 gap-4">
      <h2 className="text-2xl font-bold mb-4 col-span-2">Resumen del Formulario</h2>
      <div>
        <label className="font-semibold">Nombre Completo:</label>
        <p>{transformedData.data.full_name}</p>
      </div>
      <div>
        <label className="font-semibold">Correo Electrónico:</label>
        <p>{transformedData.data.email}</p>
      </div>
      <div>
        <label className="font-semibold">Número de Teléfono:</label>
        <p>{transformedData.data.phone_number}</p>
      </div>
      <div>
        <label className="font-semibold">Dirección:</label>
        <p>{transformedData.data.street_address}</p>
      </div>
      <div>
        <label className="font-semibold">Ciudad:</label>
        <p>{transformedData.data.city}</p>
      </div>
      <div>
        <label className="font-semibold">Código Postal:</label>
        <p>{transformedData.data.postal_code}</p>
      </div>
      <div>
        <label className="font-semibold">País:</label>
        <p>{transformedData.data.country}</p>
      </div>
      <div>
        <label className="font-semibold">Nombre de Usuario:</label>
        <p>{transformedData.data.username}</p>
      </div>
      <div>
        <label className="font-semibold">Perfil de Usuario:</label>
        <p>{transformedData.data.profile_type}</p>
      </div>
      {transformedData.data.personal_info && (
        <>
          <div>
            <label className="font-semibold">Fecha de Nacimiento:</label>
            <p>{transformedData.data.personal_info.date_of_birth}</p>
          </div>
          <div>
            <label className="font-semibold">Género:</label>
            <p>{transformedData.data.personal_info.gender}</p>
          </div>
        </>
      )}
      {transformedData.data.business_info && (
        <>
          <div>
            <label className="font-semibold">Nombre de la Empresa:</label>
            <p>{transformedData.data.business_info.company_name}</p>
          </div>
          <div>
            <label className="font-semibold">Tamaño de la Empresa:</label>
            <p>{transformedData.data.business_info.company_size}</p>
          </div>
          <div>
            <label className="font-semibold">Rol en la Empresa:</label>
            <p>{transformedData.data.business_info.role_in_company}</p>
          </div>
        </>
      )}
      <div>
        <label className="font-semibold">¿Desea recibir notificaciones por correo electrónico?</label>
        <p>{transformedData.data.notifications ? "Sí" : "No"}</p>
      </div>
      <div>
        <label className="font-semibold">¿Cómo se enteró de nuestro servicio?</label>
        <p>{transformedData.data.how_heard}</p>
      </div>
      <div>
        <label className="font-semibold">Acepto los términos y condiciones:</label>
        <p>{transformedData.data.terms_agreed ? "Sí" : "No"}</p>
      </div>
    </div>
  );
};

export default Summary;
