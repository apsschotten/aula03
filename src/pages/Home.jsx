import { useEffect, useState } from "react";
import styles from '../styles/Home.module.css'


export default function App() {

    const [lista, setLista] = useState([]);

    useEffect(() => {
        const receberListaProdutos = async () => {
            const resposta = await fetch('https://fakestoreapi.com/products');
            const dados = await resposta.json();
            setLista(dados);
        }

        receberListaProdutos();
    }, []);

    if (lista.length === 0) {
        return (
            <h1>Carregando...</h1>
        )
    }

    const orderAZ = () => {
        const listaAux = [...lista].sort((a, b) => a.title.localeCompare(b.title));
        setLista(listaAux);
    }

    const orderZA = () => {
        const listaAux = [...lista].sort((a, b) => b.title.localeCompare(a.title));
        setLista(listaAux);
    }

    const orderVMm = () => {
        const listaAux = [...lista].sort((a, b) => b.price - a.price);
        setLista(listaAux);
    }

    const orderVmM = () => {
        const listaAux = [...lista].sort((a, b) => a.price - b.price);
        setLista(listaAux);
    }

    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.logo}>Lolja</h1>
            </header>
            <div className={styles.btnctn}>
                <button onClick={orderAZ} className={styles.buttons}>A - Z</button>
                <button onClick={orderZA} className={styles.buttons}>Z - A</button>
                <button onClick={orderVmM} className={styles.buttons}>Menor p/ Maior</button>
                <button onClick={orderVMm} className={styles.buttons}>Maior p/ Menor</button>
            </div>
            <div className={styles.container}>
                {lista.map(produto => (
                    <div className={styles.cardscontainer}>
                        <div className={styles.card}>
                            <img src={produto.image} alt={produto.title} className={styles.image} />
                            <div className={styles.content}>
                                <h2 className={styles.title}>{produto.title}</h2>
                                <p className={styles.description}>{produto.description}</p>
                                <p className={styles.price}>R$ {produto.price.toFixed(2)}</p>
                                <a href="#" className={styles.button}>Comprar</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}