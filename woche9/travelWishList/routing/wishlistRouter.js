import { Router } from 'express';
const wishlistRouter = Router();
import { getCountries, createCountry, getSingleCountry, updateCountry, deleteCountry } from '../controller/controller.js'
import { body } from 'express-validator';

wishlistRouter
    .route('/')
    .get(getCountries)
    .post(body('alpha2Code').isLength(2), body('alpha3Code').isLength(3), createCountry)


wishlistRouter
    .route('/:code')
    .get(getSingleCountry)
    .put(updateCountry)
    .delete(deleteCountry)


export default wishlistRouter;