import React, { type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/auth.service";

function Register() {
  // Estados para almacenar todos los campos del formulario
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const navigate = useNavigate(); // Hook para navegación programática

  // Función que maneja el envío del formulario
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario

    try {
      // Llama al servicio de registro con todos los datos del formulario
      await register({
        email,
        password,
        name,
      });
      console.log("Registration successful");
      navigate("/login"); // Redirige al usuario a la página de login después del registro exitoso
    } catch (error) {
      console.error("Registration failed:", error); // Maneja errores del registro
    }
  };

  return (
    <div className="bg-gray-100 rounded-lg min-h-98 text-black px-8">
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        {/* Campo de Email */}
        <label htmlFor="email">Email</label>
        <input
          className="border-black border"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        {/* Campo de Password */}
        <label htmlFor="password">Password</label>
        <input
          className="border-black border"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        {/* Campo de Nombre Completo */}
        <label htmlFor="name">Name</label>
        <input
          className="border-black border"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        {/* Botón de Registro */}
        <button className="border border-black bg-white">Register</button>
      </form>
    </div>
  );
}

export default Register;