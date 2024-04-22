/*var x = 'lorem ipsum',
    y = 2345,
    z = '2345',
    q = false;

//1.
var trueFalse = !!false;
console.log('1.' + trueFalse);

//2.
console.log(q|| x|| y||z); //pise dok ne dode do prvog true

//3.
var num =6;
num--;
console.log(num);
//4.
const price = 26.5;
const taxRate = 0.082;
let totalPrice = price + price * taxRate;
totalPrice=totalPrice.toFixed(2);

console.log('Total:', totalPrice);
*/


//Zadatak 2
/*
var x=0;
while(x<20){
    x++;
    if (x<3) {continue};
    

    if(x==9||x==18){
        continue;
    }
    console.log('x=' +x);
}


//Zadatak 3

var varOne=0; nulta iteracija
for(i=0;i<4;i++){
    for(j=0;j<4;j++){
        varOne++;
    }

}
*/
/*
//Zadatak za razmak ()
var firstName= 'br ';
var lastName= 'br';
var oboje= firstName.trim() + ' '+lastName;
console.log(oboje);
*/


/*
//Zadatak 4
var z= 6;
var y= 0;
var x=z===2 ? y:5; //ternarni

if(z===2){

console.log(x=y);
}
else{
    x=5;
}
console.log('x= ' +x);


//Zadatak 5
var varOne=0; //nulta iteracija
for(i=1;i<=20;i++){
if(i%2==0){
console.log('Broj' + i+ 'je paran');
}
 
}*/


//Zadatak 6
/*
var tableStart='<table><tbody>';
var tableEnd='<tbody>>/table>';
var rowBegin= '<tr>';
var rowEnd='</tr>';
var rowData='<td>Ime</td><td>Prezime</td>';
var row='';
for(i=0;i<20;i++){
    row+=rowBegin;
    rowData='<td>Ime'+i+'</td><td>Prezime'+i+'</td>';
    row+=rowData;
    row+=rowEnd;
}

var row= rowBegin+rowEnd+rowData;
documet.write(tableBegin+row+tableEnd);
*/


/*Zadatak 7
array
prvi tip
var arr= [
    1,2,3,4
];

drugi tip
var arr[1,'blah',2,'prezime'];
*/
//ispisi sva imena
for(i=0;i<Array.length;i++){
console.log('item'+i+'='+arr[i]);

}
