import styled, {css} from 'styled-components'
// eslint-disable-next-line
import Ilex from '../../App/variables'
// eslint-disable-next-line
import animations from './Actividad_animations'

const mistyles = css`
.fondo-correo{
    width: 58.06em;
    height: 27.125em;
    background-image: url(./src/bg-mail.png);
    background-repeat: no-repeat;
    background-position:0 0;
    background-size: contain;
    font-size:0.95em;
    position: relative;
    color: ${Ilex.textos};
}


.to,.subject,.content{
    width: 80%;
    margin:0 auto;
    font-size: 0.8em;
    padding: 1em;
}
.label{
    font-weight:bold;
    margin-right:1em;
}
.to{
    margin-top:3.5em;
    .mail{
        color: ${Ilex.violeta2};
        font-weight:medium;
    }
}
.container{
    padding: 3em;
    color: ${Ilex.textos};
    display: inline-block;
  
}
.drag{
    display: inline-block;
    width: 3em;
    height: 2em;
    margin: 0.2em;
    color:white;
    border-radius: 0.3em;
    padding: 0.2em;
    background: ${Ilex.color_grisMedio};
}
.btn-letter{
    display: inline-block;
    width:3em;
    height:2em;
    background: ${Ilex.violeta2};
    color: white;
    font-weight: bold;
    text-align: center;
    border-radius: 0.5em;
    box-shadow: 0 0.4em 0 0 rgba(0, 0, 0, 0.2);
}
.text{
    display: inline-block;
    width: 100%;
}
.next{
    margin-left: 68.8em;
    margin-top: 1.2em;
}

`

export const DraggablesContainer = styled.div`
    width: 90%;
    margin: auto;
    padding: 0.4em 1em;
    text-align:center;
`

export const AreasContainer = styled(DraggablesContainer)`

    display:flex;
    justify-content:center;
    align-items: center ;
`

export const ProgressbarContainer = styled.div`
    width: 60%;
    margin:auto;
`

export const UiButtonsContainer = styled.div`
    width:6.5em;
    height:3em;
    display: flex;
    justify-content:space-between;
    position:absolute;
    right:${props => props.right || '1.6' }em;
    top:${props => props.top || '1' }em;

`

export default {mistyles , DraggablesContainer, AreasContainer, ProgressbarContainer}