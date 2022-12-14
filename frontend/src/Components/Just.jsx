import { Box, Button, Img, Text } from "@chakra-ui/react";
import {Slide} from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css"

import styles from "../styles/just.module.css"

const data=[
    {
        images:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_61109b87-1ae6-4cb4-8550-5b57d688a4eb.jpg?v=1651852771",
        title:"Bling Leader Illuminating Sunscreen SPF35 PA+++ - 01 Gold Diggin",
        price:"₹599.00"
    },
    {
        images:"https://cdn.shopify.com/s/files/1/0906/2558/products/SUGAR-Prime-Sublime-Primer---Powered-By-Images1_ebe7ea59-dff5-4a2a-9a70-c94435d3f46e.jpg?v=1666928973",
        title:"SUGAR Prime Sublime Primer - Brightening",
        price:"₹499.00"
    },
    {
        images:"https://cdn.shopify.com/s/files/1/0906/2558/products/439876309-04.jpg?v=1666196042",
        title:"Eyes Eyes Baby Gel Eyeliner - Esmeralda",
        price:"₹499.00"
    },
    {
        images:"https://cdn.shopify.com/s/files/1/0906/2558/products/DiwaliPatakaMakeupKit-WBGImagesArtboard1copy14.jpg?v=1665072357",
        title:"Diwali Pataka Makeup Kit",
        price:"₹2099.00"
    },
    {
        images:"https://cdn.shopify.com/s/files/1/0906/2558/products/Vineeta_s-Favourite-Makeup-kit---WBG-images.jpg?v=1657555460",
        title:"Vineeta's Favourite Makeup Kit",
        price:"₹2999.00"
    },
    {
        images:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_37e8dc88-a720-44ed-a5f3-1e0f0e95bc17.jpg?v=1659517990",
        title:"Date Night Makeup Kit",
        price:"₹500.00"
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

export const Just=()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
      };


      return (
        <Slide {...settings}>

         {data.map((el)=>
         <Box className={styles.bestseller}>
            <Box className={styles.bestsellerimgbox}>
         <Img className={styles.bestsellerimg} src={el.images}>
         </Img>
         </Box>

         
         <Text >{el.title}</Text>
         <Text>{el.price}</Text>
         <Box className={styles.iconbox}>

             <Box className={styles.icon}>
             <i class="fa-regular fa-heart"></i>
             </Box>

         <Button className={styles.iconbtn}>ADD TO CART</Button>
         </Box>
         </Box>
         )}
         

        </Slide>
      )
}