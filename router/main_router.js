import express from "express";
import {getContentByType, getContentByText} from '../src/page_content/page_content.js';
import { page_content_router } from "./router_page_content/page_content_router.js";
export const main_router = express.Router()

main_router.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
})

main_router.get('/', (req, res) => {
    res.send('Hello World! main')
  })

main_router.use('/page', page_content_router)



