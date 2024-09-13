const { Logger } = require('aws-cloudwatch-log')

exports.handler = async (event) => {
    // TODO implement
    // console.log(event);

    const config = { 
        logGroupName: '/aws/lambda/cmtr-ad082848-sns_handler', 
        logStreamName: '/aws/lambda/cmtr-ad082848-sns_handler', 
        region: "eu-central-1", 
        accessKeyId: 'ASIA5FTZDTP2F5UYELI2', 
        secretAccessKey: 'UCmPXusRgzeWx3wezyomcPyHGRx3cALTRG635Q0T', 
        uploadFreq: 10000, 	// Optional. Send logs to AWS LogStream in batches after 10 seconds intervals.
        local: false 		// Optional. If set to true, the log will fall back to the standard 'console.log'.
    }

    const logger = new Logger(config);

    logger.log('Hello World');
    logger.log(event);

    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
