// Author : Akash Sisodiya
'use strict';
let time = new Date();
module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Current Time : ' + time.toLocaleString(),
      },
      null,
      2
    ),
  };
};
