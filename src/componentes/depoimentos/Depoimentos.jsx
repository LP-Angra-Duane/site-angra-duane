import React from 'react';
import styles from './Depoimentos.module.css';

function Depoimentos() {
    const depoimentosData = [
        {
            nome: "Brenda Melo",
            texto: "Faço meu acompanhamento há mais de 2 anos e posso dizer que fez muita diferença para mim. Me sinto mais leve, mais equilibrada emocionalmente e com mais bem-estar no dia a dia. Cada atendimento é um momento de cuidado e acolhimento. Sou muito grata por todo esse processo e recomendo de coração.",
            avaliacao: 5
        },
        {
            nome: "Jenniffer Guimarães",
            texto: "Fazer terapia com a Angra tem sido uma experiência muito especial para mim. Ao longo desse processo, consegui enxergar muitas situações da minha vida com mais clareza e consciência. A constelação familiar que fizemos há um tempo foi algo muito marcante. Realmente virou muitas chaves dentro de mim e trouxe mudanças importantes para várias áreas da minha vida. Passei a compreender melhor algumas questões, melhorar relacionamentos e ter um olhar mais leve sobre muitas situações. Sou muito grata por todo o acolhimento, carinho e profissionalismo da Angra. Tem sido uma jornada de muito aprendizado, autoconhecimento e transformação.",
            avaliacao: 5
        },
        {
            nome: "Mônica Queiroz",
            texto: "Ter feito constelação com a Angra foi uma descoberta na minha vida. Lidar com a história da minha família, aprendendo a carregar apenas o peso da minha jornada, me desapegando do que não é meu, está sendo libertador. Me sinto cuidada e respeitada, além de ter melhorado meus relacionamentos com as pessoas, amigos e familiares, na vida pessoal e profissional.",
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