import mongoose from "mongoose";

const consultSchema = new mongoose.Schema({},{strict:false});
const Consult = mongoose.model("Consult", consultSchema, "pets");

export {Consult}
