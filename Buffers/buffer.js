//Example 1
buffer = new Buffer(256);
len = buffer.write("Simply Easy Learning");

console.log("Octets written :"+ len);

//Example 2
buffer2 = new Buffer(26);
for (var i = 0; i < 26; i++) {
   buffer2[i] = i + 97;
}

console.log(buffer2.toString('ascii'));
console.log(buffer2.toString('ascii', 0, 5));
console.log(buffer2.toString('utf8', 0, 5));
console.log(buffer2.toString(undefined, 0, 5));

//Example 3

var buffer3 = new Buffer('Simply Easy Learning');
var json = buffer3.toJSON(buffer3);

console.log(json);

//Example 4

var buffer41 = new Buffer('TutorialsPoint');
var buffer42 = new Buffer('Simply Easy Learning');
var buffer43 = Buffer.concat([buffer41, buffer42]);
console.log("buffer43 content: "+ buffer43.toString());

// Example 5

var buffer51 = new Buffer('ABC');
var buffer52 = new Buffer('ABCD');
var result = buffer51.compare(buffer52);

if(result < 0) {
   console.log(buffer51 + " comes before "+ buffer52);
}else if(result == 0) {
   console.log(buffer51 + " is same as " + buffer52);
}else {
   console.log(buffer51 + " comes after " + buffer52);
}
