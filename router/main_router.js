import express from "express";
import {getContentByType, getContentByText} from '../src/page_content.js';

export const main_router = express.Router()

main_router.get('/', (req, res) => {
    res.send('Hello World! main')
  })

  main_router.get('/others', (req, res) => {
    res.send('Hello World! others')
  })

  main_router.get('/content/:type', async (req, res) => {
    let contentInfo = await getContentByType(req.params['type'])
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(contentInfo)
  })

  main_router.get('/search/:text', async (req, res) => {
    let contentInfo = await getContentByText(req.params['text'])
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(contentInfo)
  })


