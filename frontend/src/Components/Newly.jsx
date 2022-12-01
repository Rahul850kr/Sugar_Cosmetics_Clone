import { Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";


const data=[
    {
        images:"https://d32baadbbpueqt.cloudfront.net/Homepage/37471559-27d1-4509-9e31-29d889be7036.jpg"
    },
    {
        images:"https://d32baadbbpueqt.cloudfront.net/Homepage/f190c764-84cf-4eea-a381-8b701be65852.gif"
    },
    {
        images:"https://d32baadbbpueqt.cloudfront.net/Homepage/6985f902-c3fe-4a20-bc76-1658a9109fd1.jpg"
    },
    {
        images:"https://d32baadbbpueqt.cloudfront.net/Homepage/562fe539-20b1-4239-903e-9a27747b8bf0.gif"
    },
    {
        images:"https://d32baadbbpueqt.cloudfront.net/Homepage/9e2d8597-51d5-41be-95b0-aac4cc0e9794.gif"
    },
    {
        images:"https://d32baadbbpueqt.cloudfront.net/Homepage/730cf92b-3d4a-4d08-bed8-db88e7911f32.jpg"
    }
    

]




export const Newly=()=>{
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };


      return(
        <Slider {...settings} >
        {data.map((el)=>
        <Box borderRadius={"15px"} w={"90%"}>
            <Image src={el.images} w={"90%"} borderRadius={"15px"} m={"auto"}/>
        </Box>
        )}
         
      </Slider>
      )



}