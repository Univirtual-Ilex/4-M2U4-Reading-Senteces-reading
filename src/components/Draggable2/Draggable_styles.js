import { css } from 'styled-components'
const styles = css`
position: absolute;
transform: translate(${ props => props.pos || '0'});
    .draggable{
		border-radius: 0.5em;
	}
`




export default styles
