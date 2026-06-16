import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { UserContext } from "../../context/UserContext";

import styles from "./style.module.scss";

function Login(){

    const { setUsuario } = useContext(UserContext);

    const navigate = useNavigate();

    const usuarios = [

        {
            id:1,
            nome:"Chipanze",
            foto:"https://i.pravatar.cc/300?img=12",
            curtidas:[1,2],
            comentarios:[]
        },

        {
            id:2,
            nome:"Luana",
            foto:"https://i.pravatar.cc/300?img=32",
            curtidas:[3,4],
            comentarios:[]
        }

    ];

    function entrar(user:any){

        setUsuario(user);

        navigate("/");

    }

    return(

        <main className={styles.login}>

            <h1>Quem está ouvindo?</h1>

            <div className={styles.users}>

                {

                    usuarios.map((user)=>(

                        <div

                            key={user.id}

                            className={styles.user}

                            onClick={()=>entrar(user)}

                        >

                            <img src={user.foto} />

                            <h2>{user.nome}</h2>

                        </div>

                    ))

                }

            </div>

        </main>

    )

}

export default Login;