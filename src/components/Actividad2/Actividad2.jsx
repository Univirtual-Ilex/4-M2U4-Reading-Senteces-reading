//Import
import React from 'react'
import styled from 'styled-components'
import styles from './Actividad2_styles'
import Ilex from '../../App/variables'
// styles from styled
import { UiButtonsContainer } from '../Actividad1/Actividad_styles'
// Data
import data from './Actividad2_data'
// Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import { IRow, ICol } from '../Grid'
import InputWords from '../InputWords'
import {Olist} from './Actividad2_styles'
import {Item}from './Actividad2_styles'
import ButtonUi from '../ButtonControlUI'
import ButtonCheck from '../ButtonCheck'
import PreguntaRadio from '../PreguntaRadio/PreguntaRadio'
// Componente base
const Actividad2_base = ({...props}) => {
    return (
        <Container bgImage='./src/bg_actividad1.png' h={30} {...props}>

            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='Read de statements and then classify' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' />
            </UiButtonsContainer>
            <IRow pt={2}>
                <ICol pt={ 2 } pb={0.5}>
                    <MainTitle color={Ilex.violeta2} size={1.5}>
                    CLASSIFY SANDRA'S FUTURE PLANS INTO SHORT OR LONG TERM PLANS
                    </MainTitle>  
                </ICol>
            </IRow>
            <IRow justify='center' gutters={1}>

                <IRow w={85} align='center' py='0.5'>
                    <IRow px={15} py={2}>
                        <div className="btn-plans">A. Short term plans</div>
                        <div className="btn-plans">B. Long term plans</div>
                    </IRow>
                    <IRow justify='center' py={1.5}>
                        <Olist>
                        <Item> Sandra is going to start a cooking course   <InputWords/></Item>
                        <Item> Sandra is going to start her own business  <InputWords/></Item>
                        <Item> Sandra is going to graduate  <InputWords/></Item>
                        <Item> Sandra is going to visit some towns  <InputWords/></Item>
                        <Item> Sandra is going to travel to United Sates  <InputWords/></Item>
                        </Olist>
                    </IRow>

                    
                </IRow>

                <IRow  >
                    <ButtonCheck className="next"></ButtonCheck>
                </IRow>
            </IRow>



        </Container>

    )
}
const Actividad2 = styled(Actividad2_base)`${ styles }`
export default Actividad2
