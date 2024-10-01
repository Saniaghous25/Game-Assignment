// var game = prompt("randomly select 1 to 100 number");
// for(i = 1; i <=10; i++){
// console.log(game + i);
// }

document.getElementById("rollButton").onclick = function() {
    var x = Math.floor(Math.random() * 100) + 1;
    document.getElementById("xlabel").innerHTMl = x;
    
 alert(x);
 
}