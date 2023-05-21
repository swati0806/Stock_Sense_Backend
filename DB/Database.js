import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    // const db = process.env.MONGO_URL;

    const {connection} = await mongoose.connect("mongodb+srv://swatimern:swatimern@mern.ovdqy7z.mongodb.net/stocksense?retryWrites=true&w=majority", { useNewUrlParser: true });

    console.log(`MongoDB Connected to ${connection.host}`);

}