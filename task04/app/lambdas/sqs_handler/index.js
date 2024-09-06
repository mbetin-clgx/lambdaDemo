exports.handler = async (event) => {
    // TODO implement
console.log(event);

const response = {
    statusCode: 200,
    message: JSON.stringify('Hello from Lambda'),
};
return response;
};
