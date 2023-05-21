import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    // const db = process.env.MONGO_URL;

    const {connection} = await mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });

    console.log(`MongoDB Connected to ${connection.host}`);

}