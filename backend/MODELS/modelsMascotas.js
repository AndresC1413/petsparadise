import mongoose from "mongoose";

const consultSchema = new mongoose.Schema({},{strict:false});
export const Consult = mongoose.model("Consult", consultSchema, "pets");


