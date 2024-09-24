
exports.handler = async (event) => {
    // TODO implement
    console.log(JSON.stringify(event));
    console.log(event);

    console.log(JSON.stringify(event.Records));
    console.log(event.Records);

    const records = event.Records;
    records.forEach(record => {

        console.log(JSON.stringify(record));
        console.log(record);
        console.log(record.body);
        const bodyString = new String(record.body);
        console.log(new String(record.body));
        console.log(bodyString);
        
    });

};
