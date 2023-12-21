
import Carousel from 'react-bootstrap/Carousel';




function Banner() {
    return(
        <div>
     <Carousel fade>
      <Carousel.Item className='imgbc1'>
        
             {/* <Card.Img  /> */}
        
      </Carousel.Item>
      <Carousel.Item className='imgbc2'>
        
              {/* <Card.Img  /> */}
       
      </Carousel.Item>
      <Carousel.Item className='imgbc3'>
   
            {/* <Card.Img  />   */}
        
      </Carousel.Item>
    </Carousel>
        </div>
    )
}

export default Banner;