import {FaUser, FaLock} from "react-icons/fa";
import {useState} from "react";
import "../Login/styles.css"

export function Login() {
    const [useremail, setUseremail] = useState("");
    const [password, setPassword ] = useState("");

    function handleSubmit(event) {
        event.preventDefault(); // Evita o comportamento padrão de recarregar a página
        alert(" Enviando os dados " + useremail + "-" + password)
    }

    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Acesse o Sistema</h1>
                <div className="input-field">
                    <input type="email"placeholder="E-mail" onChange={(e)=>setUseremail(e.target.value)}/>
                    <FaUser className="icon"/>
                 </div>
               
                <div className="input-field">
                    <input type="password"placeholder="Senha" onChange={(e)=>setPassword(e.target.value)}/>
                    <FaLock className="icon"/>
                </div>
                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembre de mim
                    </label>
                    <a href="#">Esqueceu a senha</a>
                </div>
                
                <button type="submit">Entrar</button>
                <div className="signup-link">
                <p>Não tem uma conta? <a href="#">Cadastre-se</a>{" "}</p>
                </div>
            </form>
        </div>
    )
} 
  

