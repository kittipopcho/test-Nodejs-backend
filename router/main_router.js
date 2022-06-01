import express from "express";
import {getContentByType} from '../src/page_content.js';

export const main_router = express.Router()

main_router.get('/', (req, res) => {
    res.send('Hello World! main')
  })

  main_router.get('/others', (req, res) => {
    res.send('Hello World! others')
  })

  main_router.get('/content/:type', async (req, res) => {
    let contentInfo = await getContentByType(req.params['type'])
    // console.log(contentInfo)
    // res.send(contentInfo)
    res.json(contentInfo)
  })


