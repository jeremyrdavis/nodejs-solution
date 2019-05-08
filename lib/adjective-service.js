const roi = require('roi');

const adjectiveService = process.env.ADJECTIVE_SERVICE || 'insult-adjectives';
const adjectivePort = process.env.ADJECTIVE_SERVICE_PORT || '8080';
const serviceUrl = `http://${adjectiveService}:${adjectivePort}/api/adjective`;

function parseResponse (response) {
  try {
    return JSON.parse(response.body).adjective;
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
