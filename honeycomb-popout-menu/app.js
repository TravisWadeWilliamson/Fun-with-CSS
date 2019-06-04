
let j = 0;
let i = document.getElementById('menu').childNodes;
// var c = document.getElementById("menu").childNodes.length;
// console.log(c);
// console.log(j)
const expand = () => {
    if (j == 0) {
        document.getElementById('add')
            .style.transform = 'rotate(45deg)';
        document.getElementById('menu')
            .style.transform = 'scale(1.5)';
        i[1].style.transform = 'translateY(-160px)';
        i[3].style.transform = 'translate(140px, -80px)';
        i[5].style.transform = 'translate(140px, 80px)';
        i[7].style.transform = 'translateY(160px)';
        i[9].style.transform = 'translate(-140px, 80px)';
        i[11].style.transform = 'translate(-140px, -80px)';
        console.log(i[1])
        j = 1;
    } else {
        document.getElementById('add')
        .style.transform = 'rotate(0deg)';
        document.getElementById('menu')
            .style.transform = 'scale(.7)';
        i[1].style.transform = 'translateY(0px)';
        i[3].style.transform = 'translateY(0px)';
        i[5].style.transform = 'translateY(0px)';
        i[7].style.transform = 'translateY(0px)';
        i[9].style.transform = 'translateY(0px)';
        i[11].style.transform = 'translateY(0px)';
        j = 0;
    }
}