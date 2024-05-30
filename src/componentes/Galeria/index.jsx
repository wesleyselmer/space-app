import styled from "styled-components"
import Imagem from "./Imagem"

const H2Estilizado = styled.h2`
    font-size: 32px;
    color: #7B78E5;
`

const Galeria = ({ fotos = [] }) => {
    return (
    <H2Estilizado>
        Navegue pela Galeria
        <ul>
            {fotos.map(foto => <Imagem key={foto.id} foto={foto} /> )}
        </ul>
    </H2Estilizado>)
}

export default Galeria