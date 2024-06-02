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

const Galeria = () => {
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SecaoFluida>
            <Titulo>Navegue pela Galeria</Titulo>
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
      <ul>
      </ul>
    </>
  );
};

export default Galeria;