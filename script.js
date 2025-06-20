var rotated = false;

document.getElementById('button').onclick = function() {
    var div = document.getElementById('div'),
        deg = rotated ? 0 : Math.floor(Math.random() * 1150 );

    div.style.transform       = 'rotate('+deg+'deg)'; 

    rotated = !rotated;
}