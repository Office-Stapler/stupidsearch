const suggest = document.querySelector('.suggestions');
let selections = 0;
window.addEventListener('keyup', e => {
    if (e.keyCode == 40) {
        arrowDown();
    } else if (e.keyCode == 38) {
        arrowUp();
    } else {
        selections = 0;
        suggest.scroll(0,0);
    }
})



function arrowDown() {
    suggest.scrollTo(0, selections * 40);
    
    children = suggest.childNodes;
    if (children.length == 0) {
        selections = 0;
        return;
    }
    if (selections < children.length) {
        children[selections].className = 'selected';
        children[selections].focus();
        if (selections > 0 && selections != children.length - 1) {
            children[selections - 1].className = 'suggest';
        }
        if (selections != children.length - 1)
            selections++;
    }
}


function arrowUp() {
    let suggests = document.querySelector('.suggestions');
    suggests.scrollTo(0, selections * 40);
    children = suggests.childNodes;
    console.log(selections);
    if (children.length == 0) {
        selections = 0;
        return;
    }
    if (selections < children.length) {
        children[selections].className = 'selected';
        children[selections].focus();
        if (selections < children.length - 1)
            children[selections + 1].className = 'suggest';
        if (selections != 0)
            selections--;
    }

}