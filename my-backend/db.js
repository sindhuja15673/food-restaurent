const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || 'mongodb+srv://ssindhujak69:03EFoSKsh1kMnSm6@cluster0.hbklo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/ecommerceDB'; // Default to local MongoDB

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the process if the connection fails
  }
};

module.exports = connectDB;
