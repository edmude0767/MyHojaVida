import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Antecedentes() {
  return (
    
      <><></><div><h1>Verifica mis Antecedentes</h1></div>
      <br/>
      
    <div className="container">
    <Card style={{ height: '26rem', width: '26rem',padding:'3', margin:'10',  }}>
      <Card.Img variant="top" height='250' width='250' src="https://villavoalreves.co/wp-content/uploads/2020/02/Fiscalia.png"/>
      <Card.Body>
        <Card.Title>Consulta de Antecedentes Judiciales</Card.Title>
        <Card.Text>
          consulta de Antecedentes Judiciales por Internet  
        </Card.Text>
        <Button variant="primary"href="https://antecedentes.policia.gov.co:7005/WebJudicial/index.xhtml">Accede aqui</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ height: '26rem', width: '26rem', padding:3, margin:10}}>
      <Card.Img variant="top" height='250' width='250' src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Procuradur%C3%ADa_General_de_Colombia.svg" />
      <Card.Body>
        <Card.Title>Produraduria General</Card.Title>
        <Card.Text>
        Certificado de antecedentes ordinario.
        </Card.Text>
        <Button variant="primary"href="https://www.procuraduria.gov.co/Pages/Consulta-de-Antecedentes.aspx">Accede aqui</Button>
      </Card.Body>
    </Card>

    <Card style={{ height: '26rem', width: '26rem', padding:3, margin:10 }}>
      <Card.Img variant="top" height='250' width='250' src="https://www.quienesquien.co/wp-content/uploads/2021/11/Contraloria.png" />
      <Card.Body>
        <Card.Title>Contraloria General</Card.Title>
        <Card.Text>
        Consulta Certificado Antecedentes Fiscales Persona Natural
          
        </Card.Text>
        <Button variant="primary"href="https://www.contraloria.gov.co/persona-natural">Accede aqui</Button>
      </Card.Body>
    </Card>

    <Card style={{ height: '26rem', width: '26rem', padding:3, margin:10 }}>
      <Card.Img variant="top" height='250' width='250'  src="https://www.policia.gov.co/sites/default/files/noticias/comunicado-prensa.gif" />
      <Card.Body>
        <Card.Title>RNMC</Card.Title>
        <Card.Text>
        Sistema Registro Nacional de Medidas Correctivas RNMC
          
        </Card.Text>
        <Button variant="primary"href="https://srvcnpc.policia.gov.co/PSC/frm_cnp_consulta.aspx">Accede aqui</Button>
      </Card.Body>
    </Card>
    </div></>
  );
}

  
export default Antecedentes;