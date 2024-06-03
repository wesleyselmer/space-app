import Imagem from './Imagem';
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import styled from "styled-components";

const GaleriaContainer = styled.div`
    display: flex;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const DivImagens = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 25px;
`

const Galeria = ({ fotos = [], aoFotoSelecionada }) => {
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SecaoFluida>
            <Titulo>Navegue pela Galeria</Titulo>
            <DivImagens>
              {fotos.map(foto => <Imagem 
                key={foto.id} 
                foto = {foto} 
                aoZoomSolicitado={aoFotoSelecionada}
              />)}
            </DivImagens>
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
      <ul>
      </ul>
    </>
  );
};

export default Galeria;