import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { musicas } from "../../data/musicas";
import { UserContext } from "../../context/UserContext";
import styles from "./style.module.scss";

function DetalhesMusica() {
    const { id } = useParams();
    
    // Puxa o usuário logado do Contexto (pode ser o Chipanze ou a Luana)
    const { usuario } = useContext(UserContext);

    const [texto, setTexto] = useState("");
    const [comentarios, setComentarios] = useState<any[]>([]);

    const musica = musicas.find(
        (musica) => musica.id === Number(id)
    );

    useEffect(() => {
        buscarComentarios();
    }, [id]);

    async function buscarComentarios() {
        try {
            const response = await axios.get("http://localhost:3000/reviews");
            const reviews = response.data.filter(
                (review: any) => String(review.musica) === String(id)
            );
            setComentarios(reviews);
        } catch (err) {
            console.log(err);
        }
    }

    async function enviarComentario() {
        if (!texto) return;

        // Descobre o nome correto do usuário logado (Chipanze ou Luana)
        // Se 'usuario' for um objeto { nome: "Luana" }, pega usuario.nome
        // Se 'usuario' for diretamente a string "Luana", pega o próprio usuario
        const nomeDoAutor = usuario?.nome || usuario?.username || (typeof usuario === "string" ? usuario : "Usuário");

        try {
            await axios.post("http://localhost:3000/reviews", {
                usuario: nomeDoAutor,
                nomeUsuario: nomeDoAutor, // Aqui vai o "Chipanze" ou "Luana" para o banco
                musica: id,
                comentario: texto
            });

            setTexto("");
            buscarComentarios(); // Recarrega a lista para atualizar a tela
        } catch (err) {
            console.log(err);
        }
    }

    if (!musica) {
        return <h1>Música não encontrada</h1>;
    }

    return (
        <>
            <Sidebar />
            <Navbar />

            <main className={styles.details}>
                <div className={styles.top}>
                    <img src={musica.capa} alt={musica.nome} />
                    <div>
                        <span>MÚSICA</span>
                        <h1>{musica.nome}</h1>
                        <p>{musica.artista}</p>
                    </div>
                </div>

                <section className={styles.comments}>
                    <h2>Comentários</h2>

                    {usuario && (
                        <div className={styles.send}>
                            <input
                                type="text"
                                placeholder="Escreva um comentário"
                                value={texto}
                                onChange={(e) => setTexto(e.target.value)}
                            />
                            <button onClick={enviarComentario}>Enviar</button>
                        </div>
                    )}

                    {/* LISTA DE COMENTÁRIOS COM OS NOMES EM CIMA */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
                        {comentarios.map((comentario: any) => (
                            <div 
                                key={comentario._id} 
                                className={styles.comment}
                                style={{ 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    alignItems: 'flex-start',
                                    padding: '10px',
                                    borderBottom: '1px solid #333' 
                                }}
                            >
                                {/* NOME DE QUEM COMENTOU (Fica no topo) */}
                                <strong style={{ color: '#1db954', fontSize: '1.1rem', marginBottom: '4px' }}>
                                    {comentario.nomeUsuario || comentario.usuario || "Usuário Anônimo"}
                                </strong>
                                
                                {/* TEXTO DO COMENTÁRIO (Fica embaixo do nome) */}
                	                    <p style={{ color: '#fff', margin: 0, fontSize: '1rem' }}>
                                    {comentario.comentario}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}

export default DetalhesMusica;