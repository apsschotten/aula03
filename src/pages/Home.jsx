import { useEffect, useState } from "react";
import Produtos from "../components/produtos.jsx";

export default function Home() {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const receberListaProdutos = async () => {
            try {
                const resposta = await fetch('https://fakestoreapi.com/products');
                const dados = await resposta.json();
                setLista(dados)
            } catch (error) {
                alert("Falha durante a comunicação com o servidor."); //Modo 01 (Sala de Aula) --> Alerta diretamente o usuário
                console.error("Falha durante a comunicação com o servidor.") //Modo 02 (Pedido em Moodle) --> Escreve a mensagem de erro no console            
            }
        }
        receberListaProdutos();
    }, []);

    return (
        <>
            <h1>Lista de Produtos.</h1>
            <ul>
                {lista.map(produto => (
                    <Produtos id={produto.id} image={produto.image} title={produto.title} description={produto.description} price={produto.price}></Produtos>
                ))}
            </ul>
        </>
    )
}