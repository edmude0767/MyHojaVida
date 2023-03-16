import React,{Component} from "react";
import Card from 'react-bootstrap/Card';
//import tarjeta001 from 'react-bootstrap/tarjeta001';
//import tarjeta002 from 'react-bootstrap/tarjeta002';
//import Container from "react-bootstrap/esm/Container";
//import Clinica from './Imagenes/clinica.png'

export default class MiPresentacion extends Component{
    render(){
            return(

                <> <h1>Mi presentacion</h1>
                <Card style={{ width: '35rem' }}>
                    <Card.Img variant='' src='' />
                    
                    <Card.Body>
                        
                            <Card.Title>Mi presentacion</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                            <iframe width="500" height="450" src="https://www.youtube.com/embed/Vw9worziSD0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            
                            
    
                            
                    </Card.Body>
                </Card>
                </>

            )

    }
}