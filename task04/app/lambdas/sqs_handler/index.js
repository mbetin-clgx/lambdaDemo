
exports.handler = async (event) => {
    // TODO implement
    console.log(JSON.stringify(event));

    console.log(JSON.stringify(event.Records));

    const records = event.Records;
    records.forEach(record => {

        console.log(JSON.stringify(record));
        console.log(record.body);
        
    });

};
