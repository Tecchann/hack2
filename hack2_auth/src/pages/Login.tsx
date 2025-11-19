import React, { type FormEvent } from "react";  /// imports
import { login } from "../services/auth.service"
import { useNavigate } from "react-router-dom";

function Login() {  
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState(""); // almacenar valores input
  const navigate = useNavigate(); // hook para redirigir después de login

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault(); // para que no recargue la pagina

    try {
      await login({email, password}); // llama al servicio de autenticación 
      console.log("Login successful");
      navigate("/login"); // Ruta de la página que debe redirigir (ejem: doctores)
    } catch (error) {
      console.error("Login failed:", error);  // Manejo de errores
    }
  };

  return (   // interfaz del formulario
    <div className="bg-gray-100 rounded-lg min-h-98 text-black px-8">
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          className="border-black border"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Actualiza estado
        />
        <label htmlFor="password">Password</label>
        <input
          className="border-black border"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Actualiza estado
        />
        <button className="border border-black bg-white">Login</button>
      </form>
    </div>
  );
}

export default Login;
