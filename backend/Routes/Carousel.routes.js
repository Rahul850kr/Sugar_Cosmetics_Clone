const {Router} = require('express');
const { CarouselController } = require('../Controllers/Carousel.controller');

const CarouselRoutes = Router();

CarouselRoutes.get('/carouselData',CarouselController);

module.exports={
    CarouselRoutes
}