const roi = require('roi');

const nounService = process.env.NOUN_SERVICE || 'insult-nouns';
const nounPort = process.env.NOUN_SERVICE_PORT || '8080';
const serviceUrl = `http://${nounService}:${nounPort}/api/noun`;

function parseResponse (response) {
  try {
    return JSON.parse(response.body).noun;
  } catch (err) {
    console.error('Unable to parse adjective service response', response);
    console.error(err);
    return err.toString();
  }
}

module.exports = exports = {
  get: async function get () {
    return roi.get(serviceUrl).then(parseResponse);
  }
};
