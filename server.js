require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

let cachedData = []; 
let lastFetchTime = 0;
const cacheDuration = 24 * 60 * 60 * 1000; 

const fetchData = async () => {
  try {
    const response = await axios.get(`https://api.acleddata.com/acled/read?key=${process.env.ACLEDDATA_API_KEY}&email=${process.env.ACLEDDATA_EMAIL}`);
    cachedData = response.data.data; 
    lastFetchTime = Date.now();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();

app.use(express.static('public'));

app.get('/events', (req, res) => {
  if (Date.now() - lastFetchTime > cacheDuration) {
    fetchData();
  }

  const filteredData = cachedData.filter(event => {
    return (
      (!req.query.disorderType || event.disorder_type === req.query.disorderType) &&
      (!req.query.eventType || event.event_type === req.query.eventType) &&
      (!req.query.subEventType || event.sub_event_type === req.query.subEventType) &&
      (!req.query.year || event.year === req.query.year) &&
      (!req.query.country || event.country === req.query.country) &&
      (!req.query.region || event.region === req.query.region)
    );
  });
  

  res.json({ data: filteredData });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
