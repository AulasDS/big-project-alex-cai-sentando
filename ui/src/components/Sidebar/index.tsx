import { Link } from "react-router-dom";

import { useContext } from "react";

import { UserContext } from "../../context/UserContext";

import styles from "./style.module.scss";

function Sidebar(){

    const { usuario } = useContext(UserContext);

    return(

        <aside className={styles.sidebar}>

            <h1 className={styles.logo}>
                Spotify
            </h1>

            <nav>

                <Link to="/">
                    🏠 Home
                </Link>

                <Link to="/buscar">
                    🎵 Buscar
                </Link>

                <Link to="/biblioteca">
                    📚 Sua Biblioteca
                </Link>

                <Link to="/login">
                    👤 Trocar Conta
                </Link>

            </nav>

            <div className={styles.playlist}>

                <h3>
                    Crie sua primeira playlist
                </h3>

                <p>
                    É fácil, vamos te ajudar.
                </p>

                <button>
                    Criar playlist
                </button>

            </div>

            {

                usuario && (

                    <div className={styles.userBox}>

                        <img
                            src={usuario.foto}
                            alt=""
                        />

                        <div>

                            <h4>
                                {usuario.nome}
                            </h4>

                            <span>
                                Premium
                            </span>

                        </div>

                    </div>

                )

            }

        </aside>

    )

}

export default Sidebar;