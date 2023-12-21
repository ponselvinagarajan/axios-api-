import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
function Card() {
    const [Show,setShow]=useState([]);
    useEffect(()=>{
        axios.get("https://api.tvmaze.com/shows/1/episodes")

        // .then((arr)=>{
        //     return arr.json();
            
        // })

        .then((data1)=>{
        //    console.log(data);
        setShow(data1.data)
        }) 
    },[])
    const store=Show.map((item ,i)=>{
       
        return(
            <div className="head" key={i}>
            <div className="card_img">
                <img src={item.image.medium} alt="img"/>
                
            </div>
            <div className="items">
                <h5>{item.name}</h5>
                <p>Rating:{item.rating.average}</p>
                <p className="para">Link:{item._links.self.href}</p>
            </div>
            </div>
        ) 
    }) 
  
    return(
       <div>
       <h1 className="show1">  Show lists</h1>

           <Container>
                <Row className="card_item">
                    <Col>
                    {
                     store
                    }     
                    </Col>
                </Row>
            </Container>
       </div>
    )
}
export default Card;