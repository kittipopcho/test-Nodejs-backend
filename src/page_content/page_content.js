import content from '../../content_data/content.json' assert { type: 'json' };

export const getContentByType = async (type) => {
  // console.log("returning ... *************************")
  // console.log(content[type])
  return content[type]
}


export const getContentByText = async (text) => {
  let type = Object.keys(content)
  let element = Object.keys(content[type[0]])
  let result = []
  // console.log('type = ')
  // console.log(type)
  // console.log('element = ')
  // console.log(element)
  type.forEach(t => {
    // console.log('t = ')
      // console.log(t)
    let element = Object.keys(content[t])
    element.forEach(e => {
      if (content[t][e].title.toLowerCase().includes(text.toLowerCase())) {
        result.push(content[t][e])
      } else if (content[t][e].content.toLowerCase().includes(text.toLowerCase())) {
        result.push(content[t][e])
      }
    })
  })
  // console.log(result)
  return result
}

