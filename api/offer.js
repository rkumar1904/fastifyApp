const client = require('../config/db');

exports.getofferList = async (req, res) => {
  try {
    // const res = await client.query('SELECT NOW()');
    return await client.query('select * from faqs')
      .then(__res => {
        return __res.rows;
      })
      .catch(__err => {
        return __err;
      });
    // return res;
  } catch (err) {
    console.log('err', err);
  }
}
