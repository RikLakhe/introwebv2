do {
    var height = prompt('enter height');
}
while (isNaN(height));


do {
    var breath = prompt('enter breath');
}
while (isNaN(height));


var item = `*`;
var show = ``;
for (var i = 1; i <= breath; i++) {
    show = item + show;
}
// console.log(show);
show = show + `
`;

for (var f = 1; f <= height - 2; f++) {

    show = show + item;
    for (var i = 1; i <= breath - 2; i++) {
        show = show + ` `;
    }
    show = show + item;
    // console.log(show);
    show = show + `
`;
}

for (var i = 1; i <= breath; i++) {
    show = show + item;
}
console.log(show);