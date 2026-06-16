import { useContext } from "react";

import { UserContext } from "../../context/UserContext";

import { musicas } from "../../data/musicas";

import Sidebar from "../../components/Sidebar";

import Navbar from "../../components/Navbar";

import styles from "./style.module.scss";

function Biblioteca(){

    const { usuario } = useContext(UserContext);

    if(!usuario){

        return(

            <h1>
                Faça login primeiro
            </h1>

        )

    }

    const musicasCurtidas = musicas.filter(

        musica =>

            usuario.curtidas.includes(musica.id)

    );

    return(

        <>

            <Sidebar />

            <Navbar />

            <main className={styles.container}>

                <div className={styles.header}>

                    <img src={usuario.foto} />

                    <div>

                        <span>Perfil</span>

                        <h1>
                            {usuario.nome}
                        </h1>

                        <p>

                            {
                                musicasCurtidas.length
                            }

                            {" "} músicas curtidas

                        </p>

                    </div>

                </div>

                <div className={styles.grid}>

                    {

                        musicasCurtidas.map((musica:any)=>(

                            <div
                                key={musica.id}
                                className={styles.card}
                            >

                                <img src={musica.capa} />

                                <h3>
                                    {musica.nome}
                                </h3>

                                <p>
                                    {musica.artista}
                                </p>

                            </div>

                        ))

                    }

                </div>

            </main>

        </>

    )

}

export default Biblioteca;