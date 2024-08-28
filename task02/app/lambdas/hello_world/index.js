exports.handler = async (event) => {
    // TODO implement
    let path = event.path;
    let method = event.httpMethod;

    // if (path === '/hello') {

    // } else {
    //     response = {
    //         statusCode: 400,
    //         message: JSON.stringify('Bad request syntax or unsupported method. Request path: {path}. HTTP method: {method}')
    //     };
    // }

    console.log(event);
    return response = {
        statusCode: 200,
        // message: JSON.stringify('Hello from Lambda!'),
        body: JSON.stringify('Bad request syntax or unsupported method. Request path: ' + path + ' HTTP method: ' + method)
    };
};
