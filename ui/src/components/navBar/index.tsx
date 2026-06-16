import styles from "./style.module.scss";

// 1. Criamos a tipagem para a Navbar aceitar os dados da Home
interface NavbarProps {
    busca?: string;
    setBusca?: (valor: string) => void;
}

// 2. Passamos as propriedades na função
function Navbar({ busca, setBusca }: NavbarProps) {

    return (
        <header className={styles.navbar}>

            {/* 3. Conectamos o input com o estado de busca */}
            <input
                type="text"
                placeholder="O que você quer ouvir?"
                value={busca || ""}
                onChange={(e) => setBusca && setBusca(e.target.value)}
            />

            <div>
                <button>Inscrever-se</button>
                <button>Entrar</button>
            </div>

        </header>
    )
}

export default Navbar;