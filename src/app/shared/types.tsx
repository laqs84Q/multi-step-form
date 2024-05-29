// Definición del tipo de datos FormData que representa la estructura de los datos del formulario
export type FormData = {
  // Nombre completo del usuario (opcional)
  fullName?: string;
  // Correo electrónico del usuario (opcional)
  email?: string;
  // Número de teléfono del usuario (opcional)
  phoneNumber?: string;
  // Dirección del usuario (opcional)
  streetAddress?: string;
  // Ciudad del usuario (opcional)
  city?: string;
  // Código postal del usuario (opcional)
  postalCode?: string;
  // País del usuario (opcional)
  country?: string;
  // Nombre de usuario elegido por el usuario (opcional)
  username?: string;
  // Contraseña elegida por el usuario (opcional)
  password?: string;
  // Confirmación de contraseña elegida por el usuario (opcional)
  confirmPassword?: string;
  // Perfil de usuario (opcional)
  userProfile?: string;
  // Fecha de nacimiento del usuario (opcional)
  dateOfBirth?: string;
  // Género del usuario (opcional)
  gender?: string;
  // Nombre de la empresa en la que trabaja el usuario (opcional)
  companyName?: string;
  // Tamaño de la empresa en la que trabaja el usuario (opcional)
  companySize?: string;
  // Rol del usuario en la empresa (opcional)
  roleInCompany?: string;
  // Indicador de si el usuario desea recibir notificaciones por correo electrónico (opcional)
  receiveNotifications?: boolean;
  // Fuente de referencia del usuario para el servicio (opcional)
  referralSource?: string;
  // Indicador de si el usuario ha aceptado los términos y condiciones (opcional)
  termsAccepted?: boolean;
};
