import express from 'express';
import bodyParser from 'body-parser'


const app = express()
const PORT = 3001
const router = express.Router()

router.get('/data', (req, res) =>
{
  res.setHeader('Access-Control-Allow-Origin', '*');  
  res.send(JSON.stringify('hello docker'))
  res.end()
})

app.use(bodyParser.json());
app.use('/api', router);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))