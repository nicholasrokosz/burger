const orm = require('../config/orm.js');

const burger = {
  selectAll(cb) {
    orm.selectAll('burgers', res => cb(res));
  },
  insertOne(value, cb) {
    orm.insertOne('burgers', 'burger_name', res => cb(res), value);
  },
  updateOne(id, value, cb) {
    orm.updateOne('burgers', 'devoured', value, 'id', id, res => cb(res));
  },
};

module.exports = burger;

// // testing with pyramid of doom -- only works with freshly seeded db
// burger.selectAll(data => {
//   console.table(data);
//   burger.insertOne('Big Mac', data => {
//     console.log(data);
//     burger.updateOne(4, 1, data => {
//       console.log(data);
//       burger.selectAll(data => console.table(data));
//     });
//   });
// });
