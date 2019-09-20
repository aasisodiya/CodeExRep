'use strict';
console.log('Test');
// Load the SDK for JavaScript
var AWS = require('aws-sdk');
// Set the Region 
AWS.config.update({ region: 'us-east-1' });
console.log(AWS);
// Create the DynamoDB service object
var ddb = new AWS.DynamoDB.DocumentClient();

module.exports.hello = async event => {
  console.log("test3")
  let testid = decodeURIComponent(event.pathParameters.testid)
  var params = {
    TableName: 'akashtable',
    KeyConditionExpression: "id = :id",
    ExpressionAttributeValues: {
       ":id":1,
    }
  };
  let datadb = await ddb.query(params).promise();
  console.log(datadb);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: datadb,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
