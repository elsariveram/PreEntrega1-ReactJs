import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import "./CheckoutForm.css";
import { useState } from "react";

const showSwal = (message) => {
    withReactContent(Swal).fire({
      title: message,
      confirmButtonText: 'Aceptar', // Texto del botón de confirmación
    });
  };
const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    

    const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar correos
        return regex.test(email);
    };

    const isValidPhone = (phone) => {
        const regex = /^\d{10}$/; // Cambia esto según el formato que necesites (ej: solo 10 dígitos)
        return regex.test(phone);
    };
    const handleConfirm = (event) => {
        event.preventDefault();

        if (!name || !phone || !email) {
            showSwal("Por favor completa todos los campos.")
            return; 
        }

        if (!isValidEmail(email)) {
            showSwal("Por favor ingresa un correo electrónico válido.");
            return;
        }

        if (!isValidPhone(phone)) {
            showSwal("Por favor ingresa un número de teléfono válido (10 dígitos).");
            return;
        }

        const userData = {
            name,
            phone,
            email,
        };

       onConfirm(userData);
    };

    return (
        <div className="Container-form">
            <form onSubmit={handleConfirm} className="Form">
                <label className="Label">
                    Nombre
                    <input
                    className="Input"
                    type="text"
                    value={name}
                    onChange={({ target }) => setName(target.value)}    
                    />
                </label>
                <label className="Label">
                    Telefono
                    <input
                    className="Input"
                    type="text"
                    value={phone}
                    onChange={({ target }) => setPhone(target.value)}    
                    />
                </label>
                <label className="Label">
                    Email
                    <input
                    className="Input"
                    type="text"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}    
                    />
                </label>
                
                <div className="Buttons">
                    
                      <button type ="submit" className="Button">Comprar</button>
                                    
                    
                </div>
                
                
                </form>
        </div>
    )}

    export default CheckoutForm;