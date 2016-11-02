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

