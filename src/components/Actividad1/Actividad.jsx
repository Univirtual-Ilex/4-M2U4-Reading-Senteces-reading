import React from 'react'
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
import data from './Actividad_data'








const Actividad_base =  ({...props}) => {
    return (
        <Container bgImage='./src/bg_actividad1.png' {...props} h={47}>
            
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
                    <p>Dear recruirment officer, <br></br> My name is Sandra Toro and I come from  Colombia. <div className="drag">1</div>
                    I am highly interested in your exchange program and through this letter I am going to tell about my future plans.
                    My academic plans are simple. My most immediate plan is to travel to the United States to meet people from different countries and practice my English <div className="drag">2</div>
                    from everyone and everything I really think I am going to impove my English through daily interaction with all my classmates, teachers and people in general.
                    One of my poffesional plans is to stat my own business. I am going to innove in the fields of systems engineering. I want my business to go international and this is why this exchange program is so important for me. <div className="drag">3</div>
                    Personally. I have a few plans for this comming vacation. Next month I am going to visit some small towns that are near the city I live. <div className="drag">4</div>
                    Also, I am going to start a cooking course on my next vacation because I want to make delicious food.
                    Additionally, I think this can make my exchange experience  more interesting <div className="drag">5</div> <br></br>
                    Sincerelly, Sandra.
                    </p>
              
                </ICol>
                <ICol w={30} className="container">
                    <div className="btn-letter">A</div> <p className="text">I am going to provide jobs to creative and energetic people who want to make the world a better place.</p>       
                    <div className="btn-letter">B</div> <p className="text">I am going to take every opportunity to share my knowledge with others and to learn as much as possible</p>
                    <div className="btn-letter">C</div> <p className="text">I understand that cooking is one way to share my culture with people from other parts of the world and I want to be good at it.</p>
                    <div className="btn-letter">D</div> <p className="text">I am a student of 6th semester at UTP in the program of systems engineeing</p>
                    <div className="btn-letter">E</div> <p className="text">I am going with my mom, my sister an dmy boyfriend</p>
                </ICol>
                
                <IRow  >
                    <ButtonCheck className="next"></ButtonCheck>
                </IRow>
            </IRow>

        </Container>
    )

}

const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad