import {Container} from './styles'

export default function MainData(){
    return(
        <Container>
            <div>
                <h1>Bruenor</h1>
                <p>Nome do Personagem</p>
            </div>

            <div className='grid'>
                <div>
                    <p>Guerreiro Nv. 1</p>
                    <span>Classe e Nível</span>
                </div>
                <div>
                    <p>Soldado</p>
                    <span>Antecedente</span>
                </div>
                <div>
                    <p>Rogerin</p>
                    <span>Jogador</span>
                </div>
                <div>
                    <p>Anão</p>
                    <span>Raça</span>
                </div>
                <div>
                    <p>Leal/Bom</p>
                    <span>Alinhamento</span>
                </div>
                <div>
                    <p>0 300</p>
                    <span>Exp. e Prox. Nv.</span>
                </div>
            </div>
        </Container>
    )
}