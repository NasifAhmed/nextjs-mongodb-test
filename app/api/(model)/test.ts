import connectDB from "@/app/lib/connectDB";
import mongoose from "mongoose";
const { Schema } = mongoose;

const testSchema = new Schema({
    name: String,
    year: String,
    month: String,
});

export const Test = mongoose.model("Test", testSchema);
