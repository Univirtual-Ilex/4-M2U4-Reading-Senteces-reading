import styled, { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
    color: ${Ilex.color_grisMedio};
    .bloque-columnas{
        column-count:4;
        column-gap: 3.5em;
        orphans:0;
        widows: 0;
        
        li{
            margin: 0.5em 0.5em;


            &:first-child{
                margin: 0em 0;
            }
        }
    }
    .lista-preguntas {
        display:flex;
        flex-direction: column;
        align-items:stretch;
        align-content:space-between;
        flex-wrap:wrap;
        height:25.4em;
        li{
            margin: 0.5em 0.5em;
            width: 10em ;
        }
    }
    .flex{
        margin-top: 0.5em;
        display: flex;
    }
    .drag{
        margin-left: 1em;
        border:2px dashed ${Ilex.color_gris_input};
        height: 2em;
        padding: 0.1em 0.6em;
        box-sizing:border-box;
        display: block;
        border-radius: 0.5em;
        box-shadow:0 0.3em 0 0 ${Ilex.color_gris_input};
        font-family:${Ilex.font};
        font-size:1em;
        color:${Ilex.textos};
        font-weight:bold;
        width: 11em;
    }
    .btn-plans{
        background: ${Ilex.violeta2};
        width: 11em;
        height: 2em;
        color: white;
        border-radius: 0.5em;
        text-align: center;
        font-weight: bold;
        margin-left: 2em;
        box-shadow: 0 0.4em 0 0 rgba(0, 0, 0, 0.2);
        
    }
    .next{
        margin-left: 68.8em;
        margin-top: 4em;
    }
`
export const Olist = styled.ol`
    color:${Ilex.textos};
    text-align:center;
    list-style:none;
    counter-reset:contador;

`

export const Item = styled.li`
    font-weight:normal;
    counter-increment:contador;
    padding:0;
    margin:0.2em;
    &::before{
        content:counter(contador)')';
        font-weight:bold;
        margin-right:0.75em;
    }
`

export default styles
    