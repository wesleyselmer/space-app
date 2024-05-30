import styled from "styled-components"
import BotoesTags from "./BotoesTags"
import tags from "./tags.json"

const DivEstilizada = styled.div`
    display: flex;
    gap: 60px;
    margin-top: 55px; 

    span {
        font-size: 24px;
        color: #D9D9D9;
        margin: 0;
    }

    div{
        display: flex;
        gap: 17px;
    }
`

const BuscaPorTags= () => {
    return (
        <DivEstilizada>
            <span>Busque por tags: </span>
            <div>
                {tags.map(tag => <BotoesTags key={tag.id} >{tag.titulo}</BotoesTags> )}
            </div>
        </DivEstilizada>
    )
}

export default BuscaPorTags