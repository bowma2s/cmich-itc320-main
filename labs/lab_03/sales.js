"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

let quarter1Sum = region1[0] + region2[0] + region3[0] + region4[0] + region5[0];

let quarter2Sum = region1[1] + region2[1] + region3[1] + region4[1] + region5[1];

let quarter3Sum = region1[2] + region2[2] + region3[2] + region4[2] + region5[2];

let quarter4Sum = region1[3] + region2[3] + region3[3] + region4[3] + region5[3];

let region1Sum = 0;
for(let i = 0; i< region1.length; i++){
    region1Sum += region1[i];
}

let region2Sum = 0;
for(let i = 0; i< region2.length; i++){
    region2Sum += region2[i];
}

let region3Sum = 0;
for(let i = 0; i< region3.length; i++){
    region3Sum += region3[i];
}

let region4Sum = 0;
for(let i = 0; i< region4.length; i++){
    region4Sum += region4[i];
}

let region5Sum = 0;
for(let i = 0; i< region5.length; i++){
    region5Sum += region5[i];
}

let totalSale = quarter1Sum + quarter2Sum + quarter3Sum + quarter4Sum;

document.write("<h2>Sales By Quarter</h2>");

document.write("Q1: $" + quarter1Sum + "<br>");
document.write("Q2: $" + quarter2Sum + "<br>");
document.write("Q3: $" + quarter3Sum + "<br>");
document.write("Q4: $" + quarter4Sum + "<br>");

document.write("<h2>Sales By Region</h2>");

document.write("Region 1: $" + region1Sum + "<br>");
document.write("Region 2: $" + region2Sum + "<br>");
document.write("Region 3: $" + region3Sum + "<br>");
document.write("Region 4: $" + region4Sum + "<br>");
document.write("Region 5: $" + region5Sum + "<br>");


document.write("<h2>Total Sales</h2>");

document.write("$" + totalSale + "<br>");



