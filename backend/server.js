const express = require('express'); //express called here
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const authRoutes = require('./routes/auth');
const poemRoutes = require('./routes/poems');

dotenv.config();
const app = express(); //express used here
 
app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', poemRoutes);

app.get('/test', (req, res) => {
  console.log('GET /test hit');
  res.send('Hello from /test');
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
  });
}).catch(err => console.error(err));