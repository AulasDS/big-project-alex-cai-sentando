const Review = require("../models/Review");

const criarReview = async (req, res) => {

    try{

        const review = await Review.create(req.body);

        res.json(review);

    }catch(err){

        res.status(500).json({
            erro: err.message
        });

    }

};

const listarReviews = async (req, res) => {

    try{

        const reviews = await Review.find({
            musica: req.params.id
        }).populate("usuario");

        res.json(reviews);

    }catch(err){

        res.status(500).json({
            erro: err.message
        });

    }

};

module.exports = {
    criarReview,
    listarReviews
};