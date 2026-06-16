import { Link } from "react-router-dom";

import { useContext } from "react";

import { UserContext } from "../../context/UserContext";

import styles from "./style.module.scss";

function MusicCard({ musica }:any){

    const {
        usuario,
        curtirMusica
    } = useContext(UserContext);

    const curtiu = usuario?.curtidas?.includes(musica.id);

    return(

        <div className={styles.card}>

            <Link

                to={`/musica/${musica.id}`}

                className={styles.link}

            >

                <img src={musica.capa} />

                <h3>{musica.nome}</h3>

                <p>{musica.artista}</p>

            </Link>

            {

                usuario && (

                    <button

                        onClick={()=>curtirMusica(musica.id)}

                        className={curtiu
                            ? styles.curtido
                            : ""
                        }

                    >

                        {

                            curtiu
                            ? "💚 Curtida"
                            : "🤍 Curtir"

                        }

                    </button>

                )

            }

        </div>

    )

}

export default MusicCard;