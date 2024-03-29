const mongoose = require('mongoose');

module.exports = {
  connect: () => connect(),
  mongoType: () => mongoose.Types,
};

async function connect() {
  const atlasUri =
    'DBURI';
  if (mongoose.connection.readyState === 0) {
    return await mongoose.connect(atlasUri, {
      useNewUrlParser: true,
      keepAlive: false,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
  } else return true;
}
