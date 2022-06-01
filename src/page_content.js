import content from '../content_data/content.json' assert { type: 'json' };

export const getContentByType = async (type) => {
  console.log("returning ... *************************")
  console.log(content[type])
  return content[type]
}

