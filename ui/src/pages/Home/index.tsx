import { useContext, useState } from "react";

import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import MusicCard from "../../components/MusicCard";

import { UserContext } from "../../context/UserContext";

import { musicas } from "../../data/musicas";

import styles from "./style.module.scss";

function Home() {
    const { usuario } = useContext(UserContext);

    // 1. O estado da busca fica aqui, capturando o que vem da Navbar do topo
    const [busca, setBusca] = useState("");

    const musicasAlex = musicas.slice(0, 3);
    const musicasMaria = musicas.slice(2, 5);

    const listaOriginal = usuario?.nome === "Alex" ? musicasAlex : musicasMaria;

    // 2. Filtra as músicas baseado na barra lá de cima
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

            {/* Conecta com a Navbar superior que você já configurou */}
            <Navbar busca={busca} setBusca={setBusca} />

            <main className={styles.home}>
                <h1>
                    Boa noite, {usuario?.nome || " visitante"}
                </h1>

                {/* A barra duplicada de baixo foi 100% deletada daqui */}

                <div className={styles.grid}>
                    {listaFiltrada.map((musica: any) => (
                        <MusicCard key={musica.id} musica={musica} />
                    ))}
                </div>

                {/* Mensagem discreta caso não encontre nenhuma música */}
                {listaFiltrada.length === 0 && (
                    <p style={{ color: "#777", fontSize: "0.9rem", marginTop: "15px" }}>
                        Nenhuma música encontrada para "{busca}".
                    </p>
                )}
            </main>
        </>
    );
}

export default Home;