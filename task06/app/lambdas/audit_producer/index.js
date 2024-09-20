const { DynamoDBClient } = require ("@aws-sdk/client-dynamodb");
const {randomUUID} = require("crypto");
const {
    DynamoDBDocumentClient,
    PutCommand,
    GetCommand
  } = require ("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({});

const dynamo = DynamoDBDocumentClient.from(client);

const auditTableName = "cmtr-ad082848-Audit-test";

exports.handler = async (event) => {
    // TODO implement

    console.log(event.Records[0].dynamodb);

    const key = event.Records[0].dynamodb.NewImage.key.S;
    const value = event.Records[0].dynamodb.NewImage.value.N;

    const modificationTime = new Date().toISOString();

    if (event.Records[0].dynamodb.OldImage) {
      const createdAudit = await dynamo.send(
        new PutCommand({
          TableName: auditTableName,
          Item: {
            id: randomUUID(),
            itemKey: key,
            modificationTime: modificationTime,
            updatedAttribute: 'value',
            oldValue: { N: event.Records[0].dynamodb.OldImage.value.N },
            newValue: { N: event.Records[0].dynamodb.NewImage.value.N }
          },
        })
        );
      console.log("CREATED AUDIT NEW AND OLD");
      console.log(createdAudit);
    } else {
      const createdAudit = await dynamo.send(
        new PutCommand({
          TableName: auditTableName,
          Item: {
            id: randomUUID(),
            itemKey: event.Records[0].dynamodb.NewImage.key.S,
            modificationTime: modificationTime,
            newValue: { key: { S: key }, value: { N: value}} 
          },
        })
        );
      console.log("CREATED AUDIT NEW");
      console.log(createdAudit);
    }
};
