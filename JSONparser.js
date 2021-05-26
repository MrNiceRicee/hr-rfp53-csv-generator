

// const messageToCSV = (message) => {
//   let csv = message.map((row) => {
//     console.log('in current row', row)
//     return Object.values(row)
//   })
//   csv.unshift(Object.keys(message[0]));
//   return `"${csv.join('"\n"').replace(/,/g, '","')}"`;
//   // return csv.join('\n');
//   // apparently, we're suppose to make sure that commas are escaped
//   // so CSV doesn't mess up in excel
//   // kept the original version in too
// }

// const convert = (req, res, next) => {
//   // console.log('hello from convert');


//   req.CSV = messageToCSV(req.body);

//   console.log('from CSV\n', req.CSV);

//   next();
// }


const messageToCSV = (message) => {
  let body = message;
  let keys = Object.keys(body);
  let csv = "";
  let id = 1;

  let createHeaders = () => {
    let row = [];
    row.push('id');
    row.push('parent ID')
    for (let i = 0; i < keys.length-1; i++) {
      row.push(keys[i]);
    };
    row.join(',');
    row += '\n';
    csv += row;
  };

  let transverseObj = (body, child) => {
    let holder = [];
    holder.push(id);
    id++;

    if (child === 0) {
      holder.push('null');
    } else {
      holder.push(child);
    }
    child++;

    for (let i = 0; i < keys.length - 1; i++) {
      holder.push(body[keys[i]]);
    }
    holder.join(',');
    holder += '\n';
    csv += holder;

    if (body.children.length === 0){
      return;
    }
    for (let i = 0; i < body.children.length; i++) {
      transverseObj(body.children[i], child);
    }
  };

  createHeaders();
  transverseObj(body, 0);

  return csv;
}

const convert = (req, res, next) => {
  // console.log('what is reqbody', req.body[0]);
  req.CSV = messageToCSV(req.body[0]);
  next();
}


module.exports = convert