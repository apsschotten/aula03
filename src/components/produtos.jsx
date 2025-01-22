import styles from '../styles/produtos.module.css'

export default function Produtos(props) {
    return (
        <>
            <ul className={styles.bloco}>
                <li key={props.id}>
                    <img src={props.image} alt={props.title} width={100} />
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                    <p>Preço: R${props.price}</p>
                </li>
            </ul>
        </>
    )
}