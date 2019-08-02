const { ObjectId } = require('mongodb');

const mongoID = async (date) => {
  try {
    const timestamp = ~~(new Date(date) / 1000)
    return await ObjectId(timestamp);
  } catch (error) {
    console.error(error);
  }
};

module.exports = mongoID;
