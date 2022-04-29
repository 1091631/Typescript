var checksum = 2;
var flag = 0;
for (var i = 2; i < checksum; i++) {
    if (checksum % i == 0) {
        flag = 1;
    }
}
if (flag == 0) {
    console.log("it is prime number");
}
else {
    console.log("it is not a prime number");
}
