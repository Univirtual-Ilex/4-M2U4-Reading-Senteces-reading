import React, {useRef, useState} from 'react'
//Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import ButtonUi from '../ButtonControlUI'
import {ICol, IRow} from '../Grid'
import ButtonCheck from '../ButtonCheck'
// Styles
import styled from 'styled-components'
import styles, { UiButtonsContainer } from './Actividad_styles'
import Ilex from '../../App/variables'

// Data
import Data from './Actividad_data'

import ButtonCheck from '../ButtonCheck'
import Modal from '../Generales/Modal'


import DraggableItem from '../Draggable'




const Actividad_base =  ({staticContext, ...props}) => {

    const [modalFlag, setModal] = useState(false)
    const [ok, setOk] = useState(false)
    const [err, setErr] = useState(false)
    // Refs de las areas
    const area_0 = useRef()
    const area_1 = useRef()
    const area_2 = useRef()
    const area_3 = useRef()
    const area_4 = useRef()



    const setStatusCheck = (id, status, target) => {
        var data = Data[id]
        data.status = status

        if(target){
            if(data.answer === target){
                data.right = 1
            }else{
                data.right = 0
            }
        }else{
            data.right = 0
        }
    }


    const checkActivity = () => {
        console.log(Data)
        var count = 0
        Data.map((data, i) => {
            if(data.right === 1){
                count ++
            }else{
                setErr(true)
                setModal(true)
            }

            if(count === Data.length){
                setOk(true)
                setModal(true)
            }
        })
    }


    return (
        <Container bgImage='./src/bg_actividad1.png' id="area" {...props} h={48.5}>

            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='Drag the sentences to the correct place. ' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' />
            </UiButtonsContainer>
            <IRow pt={1.5}>
                <ICol py={ 0.5 }>
                    <MainTitle color={Ilex.violeta2} size={1.5}>
                   5 SENTENCES (A-E) WHERE EXTRACTED FROM THE TEXT. DRAG THE SENTENCES TO THE CORRECT PLACE (1-5) IN THE TEXT.
                    </MainTitle>  
                </ICol>
            </IRow>

            <IRow>
                <ICol w={60} className="container">
                    <p>Dear recruirment officer, <br></br> My name is Sandra Toro and I come from  Colombia. <div className="drag" data-selected={''} data-target={'area_0'}   target={'area_0'} id={'area_0'} ref={area_0}>1</div>
                    I am highly interested in your exchange program and through this letter I am going to tell about my future plans.
                    My academic plans are simple. My most immediate plan is to travel to the United States to meet people from different countries and practice my English <div className="drag" data-selected={''} data-target={'area_1'}   target={'area_1'} id={'area_1'} ref={area_1}>2</div>
                    from everyone and everything I really think I am going to impove my English through daily interaction with all my classmates, teachers and people in general.
                    One of my poffesional plans is to stat my own business. I am going to innove in the fields of systems engineering. I want my business to go international and this is why this exchange program is so important for me. <div className="drag" data-selected={''} data-target={'area_2'}   target={'area_2'} id={'area_2'} ref={area_2}>3</div>
                    Personally. I have a few plans for this comming vacation. Next month I am going to visit some small towns that are near the city I live. <div className="drag" data-selected={''} data-target={'area_3'}   target={'area_3'} id={'area_3'} ref={area_3}>4</div>
                    Also, I am going to start a cooking course on my next vacation because I want to make delicious food.
                    Additionally, I think this can make my exchange experience  more interesting <div className="drag" data-selected={''} data-target={'area_4'}   target={'area_4'} id={'area_4'} ref={area_4}>5</div> <br></br>
                    Sincerelly, Sandra.
                    </p>
              
                </ICol>
                <ICol w={30} className="container">
                    {
                        Data.map((data, i) => {
                            return(
                                <div key={i} >
                                    <DraggableItem 
                                        elementId={i}
                                        setStatus={setStatusCheck} 
                                        draggable={'draggable_' + i} 
                                        idArr={i} 
                                        areaDrag={'#area'} 
                                        target={data.belongsTo}  
                                        ref={[area_0, area_1, area_2, area_3, area_4]}
                                    >

                                        <div className="btn-letter">{data.letter}</div>        
                                    </DraggableItem>
                                    <p className="text">{data.text} </p>
                                </div>
                            )
                        })
                    }
                </ICol>
                
                <IRow  >
                    <ButtonCheck className="next"></ButtonCheck>
                </IRow>
            </IRow>
            <Modal visible={modalFlag} ok={ok} err={err} w={25} repeatUrl={'/actividad1'} nxtUrl={'/actividad2'} />
                <IRow pt={3} >
                    <ICol >
                        <ButtonCheck onClick={checkActivity} text={"check"} />
                    </ICol>
                </IRow>
        </Container>
    )

}

const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad