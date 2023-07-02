const express = require('express');
const { default: mongoose } = require('mongoose');

const CarouselSchema = mongoose.Schema({
    'imageUrl':String
})

const CarouselModel = mongoose.model('carouselimage',CarouselSchema);

module.exports={
    CarouselModel
}