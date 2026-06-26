import { useContext, useState } from "react";

import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/navBar";
import MusicCard from "../../components/MusicCard";

import { UserContext } from "../../context/UserContext";

import { musicas } from "../../data/musicas";

import styles from "./style.module.scss";

function Home() {
    const { usuario } = useContext(UserContext);

    const [busca, setBusca] = useState("");

    // Agora todos os usuários veem todas as músicas
    const listaOriginal = musicas;

    // Filtra as músicas pela pesquisa
    const listaFiltrada = listaOriginal.filter((musica: any) => {
        const termo = busca.toLowerCase();

        return (
            musica.nome.toLowerCase().includes(termo) ||
            musica.artista.toLowerCase().includes(termo)
        );
    });

    return (
        <>
            <Sidebar />

            <Navbar
                busca={busca}
                setBusca={setBusca}
            />

            <main className={styles.home}>
                <h1>
                    Boa noite, {usuario?.nome || "visitante"}
                </h1>

                <div className={styles.grid}>
                    {listaFiltrada.map((musica: any) => (
                        <MusicCard
                            key={musica.id}
                            musica={musica}
                        />
                    ))}
                </div>

                {listaFiltrada.length === 0 && (
                    <p
                        style={{
                            color: "#777",
                            fontSize: "0.9rem",
                            marginTop: "15px",
                        }}
                    >
                        Nenhuma música encontrada para "{busca}".
                    </p>
                )}
            </main>
        </>
    );
}

export default Home;