// const fs = require('fs').promises;
// const path = require('path');
// const shortid = require('shortid');

// const goodsPath = path.join(__dirname, './base.json');

// function addGood({ photo, name, price }) {
//   try {
//     fs.readFile(goodsPath, 'utf-8').then(data => {
//       const parsedData = JSON.parse(data);

//       const newGood = {
//         id: shortid.generate(),
//         photo,
//         name,
//         price,
//       };

//       const newBase = [...parsedData, newGood];

//       fs.writeFile(goodsPath, JSON.stringify(newBase), 'utf-8');

//       console.table(newBase);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// export default addGood;
