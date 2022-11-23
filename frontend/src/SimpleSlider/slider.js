import { Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";


const data=[
    {
        images:"https://d32baadbbpueqt.cloudfront.net/Homepage/06721d4d-e610-4007-8d4d-d2fe63019695.jpg"
    },
    {
        images:"https://d32baadbbpueqt.cloudfront.net/Homepage/b69d2fc2-53f5-45ed-8e89-8dcd108ed2b6.jpg"
    },
    {
        images:"https://d32baadbbpueqt.cloudfront.net/Homepage/61085ebd-495f-470b-a54c-02c2569df51b.jpg"
    },
    {
        images:"https://d32baadbbpueqt.cloudfront.net/Homepage/1fb4eae2-6719-4f1f-b80e-efda1cf48362.jpg"
    },
    {
        images:"https://d32baadbbpueqt.cloudfront.net/Homepage/f9d36dac-9508-4dfb-b9b8-a417b308406d.jpg"
    },
    {
        images:"https://d32baadbbpueqt.cloudfront.net/Homepage/a41d5b02-1299-4e1a-b4e1-ba19484796b5.gif"
    }
    

]




export const SimpleSlider=()=>{
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };


      return(
        <Slider {...settings} easing="ease">
        {data.map((el)=>
        <Box>
            <Image src={el.images}/>
        </Box>
        )}
         
      </Slider>
      )



}