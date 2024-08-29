import express from 'express';
const router = express.Router();
import {createCard, getCards , getCardByTitle, search} from '../controllers/helpCenterControllers.js'

const helpCenterRoutes = express.Router();

helpCenterRoutes.post('/create',createCard)
helpCenterRoutes.get('/getcards',getCards)
helpCenterRoutes.get('/getcard/:title',getCardByTitle)
helpCenterRoutes.get('/search', search)

export default helpCenterRoutes


