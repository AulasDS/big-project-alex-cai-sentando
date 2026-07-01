import {
    createContext,
    useState,
    useEffect
} from "react";

export const UserContext = createContext<any>(null);

export function UserProvider({ children }:any){

    const [usuario,setUsuario] = useState<any>(null);

    useEffect(()=>{

        const userSalvo = localStorage.getItem("spotify_user");

        if(userSalvo){

            setUsuario(JSON.parse(userSalvo));

        }

    },[]);

    function salvarUsuario(user:any){

    setUsuario(user);

    localStorage.setItem(
        "spotify_user",
        JSON.stringify(user)
    );

    localStorage.setItem(
        `usuario_${user.id}`,
        JSON.stringify(user)
    );

}

    function curtirMusica(id:number){

        if(!usuario) return;

        const jaCurtiu =
            usuario.curtidas.includes(id);

        let novasCurtidas = [];

        if(jaCurtiu){

            novasCurtidas =
                usuario.curtidas.filter(
                    (item:number)=> item !== id
                );

        }else{

            novasCurtidas = [
                ...usuario.curtidas,
                id
            ];

        }

        const novoUsuario = {

            ...usuario,

            curtidas:novasCurtidas

        };

        salvarUsuario(novoUsuario);

    }

    function comentarMusica(
        musicaId:number,
        texto:string
    ){

        if(!usuario) return;

        const novoUsuario = {

            ...usuario,

            comentarios:[

                ...usuario.comentarios,

                {
                    musicaId,
                    texto
                }

            ]

        };

        salvarUsuario(novoUsuario);

    }

    return(

        <UserContext.Provider

            value={{

                usuario,

                setUsuario:salvarUsuario,

                curtirMusica,

                comentarMusica

            }}

        >

            {children}

        </UserContext.Provider>

    )

}