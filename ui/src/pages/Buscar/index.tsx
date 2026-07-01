import Sidebar from "../../components/Sidebar";

import Navbar from "../../components/Navbar";

import MusicCard from "../../components/MusicCard";

import { musicas } from "../../data/musicas";

import styles from "./style.module.scss";

function Home(){

    return(

        <>

            <Sidebar />

            <Navbar />

            <main className={styles.home}>

                <h1>
                    Spotify Clone
                </h1>

                <div className={styles.grid}>

                    {

                        musicas.map((musica:any)=>(

                            <MusicCard
                                key={musica.id}
                                musica={musica}
                            />

                        ))

                    }

                </div>

            </main>

        </>

    )

}

export default Home;