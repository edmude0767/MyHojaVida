import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
            <div class="links">
                  

                  <a href="https://www.facebook.com/edgardofabian.munozdeleon.1"><i class="fa-brands fa-facebook-f"></i></a>

                  <a href="https://www.linkedin.com/in/edgardomu%C3%B1oz/"><i class="fa-brands fa-linkedin"></i></a>

                  <a href="https://twitter.com/edmude07671"><i class="fa-brands fa-twitter"></i></a>

                  <a href="https://github.com/edmude0767"><i class="fa-brands fa-github"></i></a>

                  <a href="https://www.youtube.com/channel/UCuRnLhVh5Gwa3ktGYE7IT4w"><i class="fa-brands fa-youtube"></i></a>

                  <a href="https://wa.me/573196538268?text=Hola%20buenas,%20necesito%20información%20sobre%20su%20producto"><i class="fa-brands fa-whatsapp"></i></a>
            </div>

                  <p>Offcanvas es una técnica de diseño web que permite mostrar y ocultar contenido en una sección lateral de la página mediante una animación suave. Este contenido puede ser cualquier cosa, desde menús hasta información adicional o formularios de contacto. La ventaja de utilizar offcanvas es que permite mostrar la información de manera accesible y atractiva sin interferir en la experiencia de usuario en la página principal. Además, es una forma eficiente de aprovechar el espacio en pantalla en dispositivos móviles. Para aplicar offcanvas, se puede utilizar CSS y JavaScript, o bien, utilizar una biblioteca o plugin específico para esta técnica.</p>
        </Offcanvas.Body>
            
        
          
            
        
      </Offcanvas>
    </>
  );
}

function Example() {
  return (
    <>
      {['Redes sociales'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
        
      ))}
    </>
  );
}


export default Example;