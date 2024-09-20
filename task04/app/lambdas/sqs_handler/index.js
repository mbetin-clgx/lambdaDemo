
exports.handler = async (event) => {
    // TODO implement
    console.log(JSON.stringify(event));

    console.log(event.Records);
    console.log(event.Records[0]);
    console.log(event.Records[0].body);

};
