// Reading n records from the database

var fs = require('fs');
eval(fs.readFileSync('example.js')+'');

var n = con.config.NoOfOps;
var m = 0

console.time(n + " get");
for (var i = 0; i < n; i++ ) {

	// Key of the record to be read
	var k1 = {'ns':con.config.namespace,'set':con.config.set,'key':"value"+i}; 

	// Policy to be followed during read operation.
	var readpolicy = { timeout : 10, Key : policy.Key.KEY };

	//This function gets the complete record with all the bins.	
	client.get(k1,function (err, rec, meta){
		if ( err.code != status.AEROSPIKE_OK ) { //Error code AEROSPIKE_OK signifies successful retrieval
			// of the record
			console.log("error %s",err.message);
		} 
		if ( (++m) == n ) {
			console.timeEnd(n + " get");
		}
	});
}


