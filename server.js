require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Products CRUD API with JWT authentication is running' });
});

app.use('/api/auth', authRoutes);
app.use('/products', productRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});
app.use(errorHandler);

async function startServer() {
  if (!process.env.MONGODB_URI) {
    console.error('MONGODB_URI is missing. Add it to your .env file.');
    process.exit(1);
  }
  if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) {
    console.error('JWT_SECRET must be set to a random secret of at least 32 characters.');
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected successfully');
    app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
}

startServer();
