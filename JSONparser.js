const messageToCSV = (message) => {
  let csv = message.map((row) => {
    console.log('in current row', row)
    return Object.values(row)
  })
  csv.unshift(Object.keys(message[0]));
  return `"${csv.join('"\n"').replace(/,/g, '","')}"`;
  // return csv.join('\n');
  // apparently, we're suppose to make sure that commas are escaped
  // so CSV doesn't mess up in excel
  // kept the original version in too
}

const convert = (req, res, next) => {
  // console.log('hello from convert');


  req.CSV = messageToCSV(req.body);

  console.log('from CSV\n', req.CSV);

  next();
}



module.exports = convert