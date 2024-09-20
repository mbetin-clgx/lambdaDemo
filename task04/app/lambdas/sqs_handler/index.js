
exports.handler = async (event) => {
    // TODO implement
    console.log(JSON.stringify(event));

    console.log(event.Records);

    const records = event.Records;
    records.forEach(record => {

        console.log(record);
        console.log(record.body);
        
    });

};
