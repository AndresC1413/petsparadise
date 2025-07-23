const mongoURI = 'mongodb+srv://luisandrescn777:Pets2025@clusterpets.2qtt03j.mongodb.net/?retryWrites=true&w=majority&appName=Clusterpets';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = {
  url: mongoURI,
  options,
};