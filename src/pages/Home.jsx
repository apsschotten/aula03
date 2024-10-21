import { useEffect, useState } from "react";

export default function Home() {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const receberListaProdutos = async () => {
            try {
                const resposta = await fetch('https://fakestoreapi.com/products');
                const dados = await resposta.json();
                setLista(dados)
            } catch (error) {
                alert("Falha durante a comunicação com o servidor."); //Modo 01 (Sala de Aula)
                console.error("Falha durante a comunicação com o servidor.") //Modo 02 (Pedido em Moodle)
            }
        }
        receberListaProdutos();
    }, []);

    return (
        <>
            <h1>Lista de Produtos.</h1>
            <ul>
                {produtos.map(produto => (
                    <li key={produto.id}>
                        <h2>{produto.title}</h2>
                        <p>{produto.description}</p>
                        <p>Preço: R${produto.price}</p>
                        <img src={produto.image} alt={produto.title} width={100} />
                    </li>
                ))}
            </ul>
        </>
    )
}