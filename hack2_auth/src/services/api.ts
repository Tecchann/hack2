import axios, { type InternalAxiosRequestConfig } from "axios";

// Define la URL base de la API
const API_URL = "http://localhost:8000";

// Crea una instancia configurada de axios con la URL base y headers por defecto
export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json", // Indica que se enviarán datos en formato JSON
  },
});

// INTERCEPTOR DE REQUEST - Se ejecuta ANTES de cada petición
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Obtiene el token JWT del localStorage
    const token = localStorage.getItem("token");

    // Si existe un token y la configuración tiene headers, lo añade automáticamente
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`; // Formato estándar para JWT
    }

    return config; // Retorna la configuración modificada
  },
  (error) => {
    // Maneja errores en la configuración de la petición
    return Promise.reject(error);
  }
);

// INTERCEPTOR DE RESPONSE - Se ejecuta DESPUÉS de cada respuesta
api.interceptors.response.use(
  (response: any) => response, // Si la respuesta es exitosa, la retorna sin cambios
  (error) => {
    // Si la respuesta tiene error 401 (No autorizado)
    if (error.response.status === 401) {
      // Limpia los datos de autenticación del localStorage
      localStorage.removeItem("token"); // Elimina el token JWT
      localStorage.removeItem("user"); // Elimina los datos del usuario
      
      // Redirige al usuario a la página de login
      window.location.href = "/login";
    }
    
    // Rechaza la promesa con el error
    return Promise.reject(error);
  }
);

