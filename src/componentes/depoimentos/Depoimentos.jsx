import React from 'react';
import styles from './Depoimentos.module.css';

function Depoimentos() {
    const depoimentosData = [
        {
            nome: "Camila Silva",
            texto: "A terapia mudou completamente a minha forma de lidar com a ansiedade do dia a dia. Hoje me sinto muito mais leve, focada e em paz comigo mesma.",
            avaliacao: 5
        },
        {
            nome: "Marcos Oliveira",
            texto: "O atendimento une um acolhimento incrível com técnicas práticas que realmente funcionam. Consegui organizar minha rotina e melhorar meu sono logo nas primeiras semanas.",
            avaliacao: 5
        },
        {
            nome: "Beatriz Santos",
            texto: "Um divisor de águas na minha jornada de autoconhecimento. Encontrei um espaço seguro para expor minhas fragilidades e colher clareza para tomar decisões importantes.",
            avaliacao: 5
        }
    ];

    return (
        <section id="depoimentos" className={styles.divSecDepoimentos}>
            {}
            <div className={styles.titulosDepoimentos}>
                <h1>Depoimento de Clientes</h1>
                <h2>Espaço de Partilha</h2>
            </div>

            {}
            <div className={styles.gridDepoimentos}>
                {depoimentosData.map((item, index) => (
                    <div key={index} className={styles.cardDepoimento}>
                        {}
                        <span className={styles.aspasCard}>“</span>
                        
                        {}
                        <div className={styles.estrelas}>
                            {"★".repeat(item.avaliacao)}
                        </div>
                        
                        {}
                        <p className={styles.textoDepoimento}>{item.texto}</p>
                        
                        {}
                        <h3 className={styles.nomeTestemunha}>{item.nome}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Depoimentos