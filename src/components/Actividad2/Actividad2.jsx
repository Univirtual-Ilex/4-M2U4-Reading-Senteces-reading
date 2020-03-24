//Import
import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import styles from './Actividad2_styles'
import Ilex from '../../App/variables'
// styles from styled
import { UiButtonsContainer } from '../Actividad1/Actividad_styles'
// Data
import Data from './Actividad2_data'
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
import Answers from './Actividad2_answers'
import DraggableItem from '../Draggable2'
import Modal from '../Generales/Modal'

// Componente base
const Actividad2_base = ({staticContext, ...props}) => {

    const [modalFlag, setModal] = useState(false)
    const [ok, setOk] = useState(false)
    const [err, setErr] = useState(false)

    const [visible, setvisible] = useState(false)
    const [tooltipTitle, settooltipTitle] = useState()
    const [tooltipText, settooltipText] =  useState()

    const area_0 = useRef()
    const area_1 = useRef()
    const area_2 = useRef()
    const area_3 = useRef()
    const area_4 = useRef()

    const setStatusCheck = (id, status, target) => {
        var data = Answers[id]
        data.status = status

        if(target){
            if(data.answer.indexOf(target) !== -1){
                data.right = 1
            }else{
                data.right = 0
            }
        }else{
            data.right = 0
        }
    }


    const checkActivity = () => {
        var count = 0
        console.log(Answers)
        Answers.map((data, i) => {
            if(data.right === 1){
                count ++
            }else{
                setErr(true)
                setModal(true)
            }

            if(count === Answers.length){
                setOk(true)
                setModal(true)
            }
        })
    }


    return (
        <Container bgImage='./src/bg_actividad1.png' id="area" h={30} {...props}>

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
                        { Answers.map((item, index) => {
                            return(
                                <DraggableItem 
                                elementId={index}
                                key={index} 
                                setStatus={setStatusCheck} 
                                draggable={'draggable_' + index} 
                                idArr={index} 
                                pos={(item.letter === 'A. Short term plans') ? '0em,0' : '12em,0'}
                                areaDrag={'#area'} 
                                target={item.belongsTo}  
                                ref={[area_0, area_1, area_2, area_3, area_4]}>
                                
                                    <div className="btn-plans" >{item.letter}</div>
                                </DraggableItem>
                                  
                            ) 
                        }) }
                    </IRow>
                    <IRow justify='center' py={1.5}>
                        <Olist>
                        {
                            Data.map((data, i) => {
                                return (
                                    <Item key={i} className="flex" > {data.text}   <div className="drag" data-selected={''} data-target={'area_' + i }   target={'area_' + i} id={'area_' + i} ref={eval('area_' + i)} /></Item>
                                )
                            })
                        }
                        </Olist>
                    </IRow>

                    
                </IRow>

                <IRow  >
                    <ButtonCheck onClick={checkActivity} className="next"></ButtonCheck>
                </IRow>
            </IRow>

            <Modal visible={modalFlag} ok={ok} err={err} w={25} repeatUrl={'/actividad2'} finished={ok} />

        </Container>

    )
}
const Actividad2 = styled(Actividad2_base)`${ styles }`
export default Actividad2
