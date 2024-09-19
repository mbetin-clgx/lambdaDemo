const { DynamoDBClient } = require ("@aws-sdk/client-dynamodb");
const {randomUUID} = require("crypto");
const {
    DynamoDBDocumentClient,
    PutCommand
  } = require ("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({});

const dynamo = DynamoDBDocumentClient.from(client);

const tableName = "cmtr-ad082848-Events";

exports.handler = async (event) => {
    // TODO implement

    console.log(event);
    // let requestJSON = JSON.parse(event);
    // console.log(requestJSON);
    
    const createdEvent  = await dynamo.send(
      new PutCommand({
        TableName: tableName,
        Item: {
          id: randomUUID(),
          principalId: event.principalId,
          body: event.content,
        },
      })
    );
    // body = `Put item ${requestJSON.id}`;


    const response = {
        statusCode: 201,
        body: JSON.stringify(createdEvent),
    };

    return response;
};
