import styled, { css } from 'styled-components'
import Ilex from '../../App/variables'

const styles = css`
display: inline-block;
margin: ${props => props.m || 0}em;
width:${props => props.w ? props.w+'em' : '11em'};

`

export const Input = styled.div`
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
width:100%;


`

export default styles
    