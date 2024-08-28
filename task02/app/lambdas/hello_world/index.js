exports.handler = async (event) => {
    // TODO implement
    let path = event.rawPath;
    let method = event.requestContext.http.method;

    if (path === '/hello' && method === 'GET') {
        response = {
            statusCode: 200,
            body: JSON.stringify({ statusCode: 200, message: 'Hello from Lambda!' })
        };
    } else {
        response = {
            statusCode: 400,
            body: JSON.stringify({ 
                statusCode: 400,
                message: 'Bad request syntax or unsupported method. Request path: ' + path + ' HTTP method: ' + method
            })
        };
    }
    console.log(event);
    return response;
};
