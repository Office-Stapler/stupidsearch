const suggest = document.querySelector('.suggestions');

window.addEventListener('keyup', e => {
    if (e.keyCode == 40) {
        arrowDown();
    } else if (e.keyCode == 38) {
        arrowUp();
    }
})


function arrowDown() {
    if (document.getElementById('selected') != null) {
        
    } else {
        
    }
}


function arrowUp() {
    console.log('Arrow Up Pressed');
}