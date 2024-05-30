import styled from "styled-components";

const DivEstilizado = styled.div`
  position: relative;
  display: inline-block;
  border: 2px solid #c98cf1;
  border-radius: 20px;
  height: 56px;

  input {
    height: 56px;
    padding: 16px;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #d9d9d9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    border: none;
    
  }

  img {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
  }
`;

const CampoTexto = () => {
  return (
    <>
      <DivEstilizado>
        <input placeholder="O que você procura?" />
        <img src="/icones/search.png" alt="" />
      </DivEstilizado>
    </>
  );
};

export default CampoTexto;
