import styled from "styled-components"
import { FaHeart, FaExpandAlt  } from "react-icons/fa";

const FigureEstilizado = styled.figure`
    display: flex;
    flex-direction: column;
    width: ${(props) => (props.$expandida ? '90%' : '460px')};
    max-width: 100%;
    margin: 0;


    & > img {
        width: 100%;
        border-radius: 20px 20px 0 0;
    }
`

const FigcaptionEstilizada = styled.figcaption`
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #001634;
    border-radius: 0 0 20px 20px;
    color: #FFFFFF;

    h3 {
        font-family: 'GandhiSansBold';
    }

    h4 {
        flex-grow: 1;
    }

    h3, h4 {
        margin: 0 20px;
        font-size: 16px;
    }
`

const FooterEstilizada = styled.footer`
    display: flex;
    justify-content: space-between;
    color: #FFFFFF;

    p {
        font-size: 14px;
        margin: 0 20px;
    }

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
`



const Imagem = ({ foto, expandida=false, aoZoomSolicitado }) => {
    return (
        <FigureEstilizado>
            <img 
                src={foto.path}
                alt={foto.titulo}
            />
            <FigcaptionEstilizada>
                <h3>{foto.titulo}</h3>
                <FooterEstilizada>
                    <p>{foto.fonte}</p>
                    <div>
                        <button><img src="/icones/favorito.png" alt="Icone de Favorito" /></button>
                        {!expandida && <button aria-hidden={expandida} onClick={() => aoZoomSolicitado(foto)}><img src="/icones/expandir.png" alt="Icone de expandir"/></button>}
                    </div>
                </FooterEstilizada>
            </FigcaptionEstilizada>
        </FigureEstilizado>
    )
}

export default Imagem