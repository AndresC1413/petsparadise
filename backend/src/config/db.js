require('dotenv').config();

const user = process.env.MONGODB_USER;
const pass = process.env.MONGODB_PASS;
const cluster = process.env.MONGODB_CLUSTER;
const db = process.env.MONGODB_DB;

const mongoURI = `mongodb+srv://${user}:${pass}@${cluster}/${db}?retryWrites=true&w=majority&appName=Clusterpets`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = {
  url: mongoURI,
  options,
};
