const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");
const {randomUUID} = require("crypto");

const client = new DynamoDBClient({});

// const dynamo = DynamoDBDocumentClient.from(client);

const auditTableName = "cmtr-ad082848-Audit-test";

exports.handler = async (event) => {
    // TODO implement

    console.log(event.Records[0].dynamodb);

    const key = event.Records[0].dynamodb.NewImage.key.S;
    const newImageValue = event.Records[0].dynamodb.NewImage.value.N;

    const modificationTime = new Date().toISOString();

    if (event.Records[0].dynamodb.OldImage) {
      const createdAudit = await client.send(
        new PutItemCommand({
          TableName: auditTableName,
          Item: {
            id: { S: randomUUID().toString() },
            itemKey: { S: key },
            modificationTime: { S: modificationTime },
            updatedAttribute: { S: 'value' },
            oldValue: { N: event.Records[0].dynamodb.OldImage.value.N },
            newValue: { N: newImageValue }
          },
        })
        );
      console.log(createdAudit);
    } else {
      const createdAudit = await client.send(
        new PutItemCommand({
          TableName: auditTableName,
          Item: {
            id: { "S": randomUUID().toString() },
            itemKey: { "S" : event.Records[0].dynamodb.NewImage.key.S },
            modificationTime: { "S" : modificationTime},
            newValue: {
              "M": {
                 "key": {
                    "S": "CACHE_TTL_SEC"
                   },
                   "value": {
                      "N": newImageValue
                     }
                 }
             }
          },
        })
        );
      console.log(createdAudit);
    }
};
