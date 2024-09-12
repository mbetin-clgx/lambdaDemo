import aws from "aws-sdk";

exports.handler = async (event) => {
    // TODO implement
    console.log(event);
    const cloudwatchLogs = new aws.CloudWatchLogs({
        accessKeyId: "ASIA5FTZDTP2BFOZ6NJ7",
        secretAccessKey: "Hz4DJg3zrYnbNZIhGuoNiN6gIbz0XgterhT9fZZp",
        region: "eu-central-1"
      });


      const params = {
        logGroupName: "cmtr-ad082848-sns_handler",
        logStreamName: "cmtr-ad082848-sns_handler",
        logEvents: [
          {
            message: "This is a test log message" + event,
            timestamp: Date.now(),
          },
        ],
      };

      cloudwatchLogs.putLogEvents(params, (err, data) => {
        if (err) console.log("Error", err);
        else console.log("Log event logged successfully");
      });

    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
