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
        margin: 0;
        font-size: 16px;
    }
`

const FooterEstilizada = styled.footer`
    display: flex;
    justify-content: space-between;
    color: #FFFFFF;

    p {
        font-size: 14px;
    }

    button {
        background-color: transparent;
        border: none;
    }
`



const Imagem = ({ foto }) => {
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
                        <button><FaHeart color="white"/></button>
                        <button><FaExpandAlt color="white"/></button>
                    </div>
                </FooterEstilizada>
            </FigcaptionEstilizada>
        </FigureEstilizado>
    )
}

export default Imagem