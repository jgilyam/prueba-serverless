const AWS = require("aws-sdk");
const { v4 } = require("uuid");

const listar = async (events) => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient({
    region: "localhost",
    endpoint: "http://localhost:8000",
    accessKeyId: "juan", // needed if you don't have aws credentials at all in env
    secretAccessKey: "juan", // needed if you don't have aws credentials at all in env
  });

  const createdAt = new Date();
  const userId_polygonId = v4();

  const title = "Hola";
  const description = "pruebas";

  console.log("created userId_polygonId: ", userId_polygonId);

  const newUser = {
    userId_polygonId,
    title,
    description,
    createdAt,
    done: false,
  };

  await dynamoDb
    .put({
      TableName: "usersTable",
      Item: newUser,
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify(newUser),
  };
};

module.exports = {
  listar,
};
