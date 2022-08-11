const fetch = require('node-fetch')

exports.handler = async function (event, context) {
    console.log(event);
    console.log(context);
    try {
      const { id } = event.queryStringParameters;
      const response = await fetch.get(`${process.env.SONG_KEY_URI}&type=artist&lookup=${id}`);
      return {
        statusCode: 200,
        body: JSON.stringify({
            data: response
          }),
      };
    } catch (err) {
      return {
        statusCode: 404,
        body: err.toString(),
      };
    }
  };