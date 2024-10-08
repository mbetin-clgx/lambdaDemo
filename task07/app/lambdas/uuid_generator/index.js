const {randomUUID} = require("crypto");
const {
    S3Client,
    PutObjectCommand
  } = require("@aws-sdk/client-s3");

exports.handler = async (event) => {
    // TODO implement
    const executionTime = new Date().toISOString();
    console.log("HELLO!! " + executionTime);

    const s3Client = new S3Client({ region: "eu-central-1" });

    const uuids = [];

    for (let i = 0; i < 10; i++) {
        const uuid = randomUUID().toString();
        uuids.push(uuid);
      }
    const filename = executionTime;
    console.log(uuids);

    const result = JSON.stringify({ ids : uuids});
    console.log(result);

    const params = {
        Bucket: "cmtr-ad082848-uuid-storage-test",
        Key: filename,
        Body: result
    };

    console.log(params);

    const response = await s3Client.send(new PutObjectCommand(params));

    console.log(response);
};
