import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import noteRoutes from './routes/noteRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/notesdb';

// Middleware
app.use(express.json());

// Routes
app.use('/api/notes', noteRoutes);

// Connect to MongoDB
mongoose.connect(MONGO_URI)
          .then(() => console.log('Connected to MongoDB'))
          .catch((err) => console.error('Failed to connect to MongoDB', err));

// Start the server
app.listen(PORT, () => {
          console.log(`[server]: Server is running at http://SAGEOFSIXPATH'SHOST:${PORT}`);
});