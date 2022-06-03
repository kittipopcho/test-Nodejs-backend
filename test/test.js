import { getContentByType, getContentByText } from '../src/page_content/page_content.js';
// const getContentByType = require('../../src/page_content/page_content');
// const page_content = require('../src/page_content/page_content');

let news_result = { 
    "a" : {
        "title": "News 1. title can also be search. dotA2 is fun",
        "image": "news_1.png",
        "content": "mock content News 1. This is a test content. This is a test contents. Ant. Cat. Dog. bird. fish",
        "update": "Jan 25, 2018 14:55"
    },
    "b" : {
        "title": "News 2",
        "image": "news_2.png",
        "content": "mock contents News 2. This is a test content. This is a test content. This is a test content. Fish. cat ant",
        "update": "Jan 25, 2018 14:55"
    },
    "c" : {
        "title": "News 3. title can also be search. LOL",
        "image": "news_3.png",
        "content": "mock content News 3. dog. cat. eel. tiger",
        "update": "Jan 25, 2018 14:55"
    },
    "d" : {
        "title": "News 4",
        "image": "news_4.png",
        "content": "mock contents News 4. doggo. diggy. husky. cAt. nutto",
        "update": "Jan 25, 2018 14:55"
    }
  }

let tv_result = {
  "a" : {
      "title": "TV 1. title can also be search. ex. giOns",
      "image": "tv_1.png",
      "content": "mock contents TV 1. almost. done. mocking. dataaaaaaaaa",
      "update": "Jan 25, 2018 14:55"
  },
  "b" : {
      "title": "TV 2",
      "image": "tv_2.png",
      "content": "mock content TV 2. dota2. is. so. toxic. bIrd. DoG. Queen. Right. nUt. nOT.",
      "update": "Jan 25, 2018 14:55"
  },
  "c" : {
      "title": "TV 3",
      "image": "tv_3.png",
      "content": "mock content TV 3. next. one. is. the. last. one. to. mock. ha. ha. ha.",
      "update": "Jan 25, 2018 14:55"
  },
  "d" : {
      "title": "TV 4. title can also be search. ex. videoS",
      "image": "tv_4.png",
      "content": "mock contents TV 4. what. am. i. doing. here. i should. start. unit. testing. process. Nutty. rain. dear. dog. duck. ant. birD",
      "update": "Jan 25, 2018 14:55"
  }
}


describe('test getContentByType function', () => {
    test('getContentByType test result =>', () => {
      getContentByType("News").then(res => {
        expect(res).toStrictEqual(news_result);
      })
      getContentByType("TV").then(res => {
        expect(res).toStrictEqual(tv_result);
      })
      getContentByType("Oh").then(res => {
        expect(res).toStrictEqual(undefined);
      })
      getContentByType("news").then(res => {
        expect(res).toStrictEqual(undefined);
      })
      getContentByType("").then(res => {
        expect(res).toStrictEqual(undefined);
      })
      getContentByType(1).then(res => {
        expect(res).toStrictEqual(undefined);
      })
      getContentByType(-1).then(res => {
        expect(res).toStrictEqual(undefined);
      })
      getContentByType(0).then(res => {
        expect(res).toStrictEqual(undefined);
      })
    });
  });

describe('test getContentByText function', () => {
    test('getContentByText test result =>', () => {
      let text = "News"
      getContentByText(text).then(res => {
        let loop_key = Object.keys(res)
        loop_key.forEach(key => {
          expect(res[key].title.toLowerCase().includes(text.toLowerCase()) || res[key].content.toLowerCase().includes(text.toLowerCase())).toBeTruthy();
        })
      })
      let text2 = "dog"
      getContentByText(text2).then(res => {
        let loop_key = Object.keys(res)
        loop_key.forEach(key => {
          expect(res[key].title.toLowerCase().includes(text2.toLowerCase()) || res[key].content.toLowerCase().includes(text2.toLowerCase())).toBeTruthy();
        })
      })
      let text3 = "zzz"
      getContentByText(text3).then(res => {
        expect(res.length == 0).toBeTruthy();
      })
    });
  });