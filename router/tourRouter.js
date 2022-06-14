const express = require('express');
const tourController = require('../controller/tourController');

const tourRouter = express.Router();

tourRouter.route('/').get(tourController.getToursAll).post(tourController.addTour);
tourRouter.route('/:id').delete(tourController.deleteTour).get(tourController.getTourItem).patch(tourController.updateTour);

module.exports = tourRouter;
