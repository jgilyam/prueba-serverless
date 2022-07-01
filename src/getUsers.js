const AWS = require("aws-sdk");

const getTasks = async (event) => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient({
    region: "localhost",
    endpoint: "http://localhost:8000",
    accessKeyId: "juan", // needed if you don't have aws credentials at all in env
    secretAccessKey: "juan", // needed if you don't have aws credentials at all in env
  });

  const result = await dynamoDb.scan({ TableName: "usersTable" }).promise();

  const tasks = result.Items;

  return {
    status: 200,
    body: {
      tasks,
    },
  };
};

module.exports = {
  getTasks,
};
