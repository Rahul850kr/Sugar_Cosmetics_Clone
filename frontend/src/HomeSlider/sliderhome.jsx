import { Box, Img, Text } from "@chakra-ui/react";
import {Slide} from "react-slideshow-image"

import styles from "../styles/sliderhome.module.css"


const data=[
    {
        images:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg?v=1640178644",
        title:"Ace of Face Foundation Stick",
        price:"₹999"
    },
    {
        images:"https://cdn.shopify.com/s/files/1/0906/2558/products/WBG1_09f0cf83-792a-4185-8882-5e5e6909a459.jpg?v=1657814596",
        title:"Smudge Me Not Mini Liquid Lipistic Set-Power up..",
        price:"₹799"
    },
    {
        images:"https://cdn.shopify.com/s/files/1/0906/2558/products/424092031-1.jpg?v=1661529396",
        title:"Wingman Waterproof Microliner-01 I'll Be Black..",
        price:"₹499"
    },
    {
        images:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607",
        title:"Contour De Force Face Palette",
        price:"₹799"
    },
    {
        images:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_ed958629-9a7a-4b4a-816e-311bff049996.jpg?v=1644594010",
        title:"Matte Attack Transferproof Lipistick-06 Spring Crimso..",
        price:"₹699"
    },
    {
        images:"https://cdn.shopify.com/s/files/1/0906/2558/products/01.jpg?v=1644399711",
        title:"Kohl of Honour Intense Kajals",
        price:"₹249"
    },
    {
        images:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_e9355d54-6ddb-4aa4-bdfc-176a676db886.jpg?v=1657257149",
        title:"Base of Glory Pore Minimizing Primer",
        price:"₹799"
    },
    {
        images:"https://cdn.shopify.com/s/files/1/0906/2558/products/AirKissPowderPoweredByImagesArtboard1.jpg?v=1644813116",
        title:"Air Kiss Powder Lipistick",
        price:"₹499"
    },
    {
        images:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-face-fwd-contour-stick-01-fawn-first-milk-chocolate-brown-13825383923795.jpg?v=1619116453",
        title:"Face Fwd>>Contour Stick-01 Fawn First (Milk..)",
        price:"₹799"
    },
    {
        images:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_df1e9403-ae9d-430c-8226-622d21c4743d.jpg?v=1640676422",
        title:"Arch Arrival Brow Definer",
        price:"₹499"
    },
    {
        images:"https://cdn.shopify.com/s/files/1/0906/2558/products/3_7.jpg?v=1626795160",
        title:"Allset To Go Translucent Powder",
        price:"₹599"
    },
    {
        images:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-goddess-of-flawless-spf30-bb-cream-07-vanilla-latte-fair-12796432941139.jpg?v=1619114695",
        title:"Goddess of Flawless SPF30+BB Cream",
        price:"₹799"
    },
    {
        images:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-dream-cover-spf15-mattifying-compact-10-latte-12775602356307.jpg?v=1619106501",
        title:"Dream Cover SPF15 Mattifying Compact",
        price:"₹499"
    },
    {
        images:"https://cdn.shopify.com/s/files/1/0906/2558/products/382512089-mettle-priming-balm-01.jpg?v=1648654861",
        title:"Mette Priming Balm",
        price:"₹1099"
    },
    {
        images:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-all-set-to-go-banana-powder-13289662218323.jpg?v=1619115199",
        title:"All Set To Go Banana Powder",
        price:"₹599"
    },
    {
        images:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-rage-for-coverage-24hr-foundation-07-vanilla-latte-fair-golden-undertone-28391223263315.jpg?v=1623073552",
        title:"Rage For Coverage 24Hr Foundation",
        price:"₹799"
    }

]


export const HomeSlider=()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };


      return (
        <Slide {...settings}>

         {data.map((el)=>
         <Box className={styles.bestseller}>
         <Img src={el.images}>

         </Img>
         <Text >{el.title}</Text>
         <Text>{el.price}</Text>
         </Box>
         )}
         

        </Slide>
      )
}