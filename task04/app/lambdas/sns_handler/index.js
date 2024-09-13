// const { CloudWatchLogsClient, CloudWatchLogs} = require("@aws-sdk/client-cloudwatch-logs");


exports.handler = async (event) => {
    // TODO implement
    console.log("test");
    console.log(event);

    // const cloudwatchLogs = new CloudWatchLogs({
    //     credentials: {
    //         secretAccessKey: "4PC/QhHkJON2wl0Defxcbc00IPYfSNCLag5+oEKZ", 
    //         accessKeyId: "ASIA5FTZDTP2HW2UUDC3"
    //     },
    //     region: "eu-central-1"}
    // );

    // const logStreamParams = {
    //     logGroupName: "/aws/lambda/cmtr-ad082848-sns_handler",
    //     logStreamName: "MyLogStream",
    //   };
      
    //   cloudwatchLogs.createLogStream(logStreamParams, (err, data) => {
    //     if (err) console.log("Error", err);
    //     else console.log("Log stream created successfully");
    //   });

    // const params = {
    //     logGroupName: "/aws/lambda/cmtr-ad082848-sns_handler",
    //     // logStreamName: "MyLogStream",
    //     logEvents: [
    //       {
    //         message: "This is a test log message" + event,
    //         timestamp: Date.now(),
    //       },
    //     ],
    //   };

    // cloudwatchLogs.putLogEvents(params, (err, data) => {
    //     if (err) console.log("Error", err);
    //     else console.log("Log event logged successfully");
    //   });
};
