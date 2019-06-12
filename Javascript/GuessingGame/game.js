var xNum = Math.floor(Math.random() * (9-0) +0);
console.log(xNum);
var bool = false;
while(bool==false) {
    var num = prompt("Enter the number between 0 and 9");
    if(num>xNum) {
        console.log("Number is too large");
    } else if(num<xNum) {
        console.log("Number is too small");
    } else {
        console.log("Number is correct");
        bool=true;
    }
}