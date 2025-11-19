import { type LoginResponse, type LoginRequest, type RegisterRequest } from "../types/index";
import { api } from "./api";

export const login = async (data: LoginRequest) => {
  // Realiza petición POST al endpoint de login
  const response = await api.post<LoginResponse>("/auth/login", data);

  // Log de la respuesta para debugging
  console.log("Response:", response?.data ?? "No data");

  // Si la respuesta contiene un token de acceso, lo guarda en localStorage
  if (response?.data?.access_token) {
    localStorage.setItem("token", response.data.access_token);
    localStorage.setItem("user", JSON.stringify(response.data.user));
  }

  // Retorna los datos de la respuesta
  return response?.data;
};

export const register = async (data: RegisterRequest) => {
  // Realiza petición POST al endpoint de registro
  const response = await api.post("/auth/register", data);

  // Log de la respuesta para debugging
  console.log("Response:", response?.data ?? "No data");

  // Retorna los datos de la respuesta
  return response?.data;
};
