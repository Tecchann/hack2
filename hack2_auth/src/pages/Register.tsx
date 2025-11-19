import React, { type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/auth.service";

function Register() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await register({
        email,
        password,
        name,
      });
      console.log("Registration successful");
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4"> {/* ✅ CORREGIDO */}
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md"> {/* ✅ CONTENEDOR VISIBLE */}
        <h2 className="text-2xl font-bold text-center mb-6">Crear Cuenta</h2> {/* ✅ TÍTULO */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Campo de Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          {/* Campo de Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          {/* Campo de Nombre Completo */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre Completo
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          {/* Botón de Registro */}
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
             onClick={() => console.log("🚨 CLICK DIRECTO EN BOTÓN")}
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;