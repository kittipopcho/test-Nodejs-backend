import express from "express";
import {getContentByType, getContentByText} from '../../src/page_content/page_content.js';

export const page_content_router = express.Router()


page_content_router.get('/content/:type', async (req, res) => {
  let contentInfo = await getContentByType(req.params['type'])
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // res.setHeader('Access-Control-Allow-Headers', 'content-type');
  // res.setHeader('Access-Control-Allow-Credentials', true);
  // res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(contentInfo)
})

page_content_router.get('/search/:text', async (req, res) => {
  let contentInfo = await getContentByText(req.params['text'])
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // res.setHeader('Access-Control-Allow-Headers', 'content-type');
  // res.setHeader('Access-Control-Allow-Credentials', true);
  // res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(contentInfo)
})


