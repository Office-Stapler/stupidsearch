const suggest = document.querySelector('.suggestions');
let selections = 0;
let hasSelection = false;
window.addEventListener('keyup', e => {
    if (e.keyCode == 40) {
        hasSelection = true;
        arrowDown();
    } else if (e.keyCode == 38) {
        hasSelection = true;
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
        hasSelection = false;
        return;
    }
    console.log(selections);
    console.log(children.length);
    if (selections > 0)
        children[selections - 1].className = 'selected'
    if (selections < children.length) {
        children[selections].className = 'selected';
        children[selections].focus();
        if (selections > 0 && selections != children.length - 1) {
            children[selections - 1].className = 'suggest';
        }
        if (selections != children.length)
            selections++;
    }
}


function arrowUp() {
    suggest.scrollTo(0, selections * 40);
    children = suggest.childNodes;
    console.log(selections);
    console.log(children.length)
    if (children.length == 0) {
        selections = 0;
        hasSelection = false;
        return;
    }
    if (selections == children.length)
        selections--;
    if (selections >= 0) {
        children[selections].className = 'selected';
        children[selections].focus();
        if (selections < children.length - 1)
            children[selections + 1].className = 'suggest';
        if (selections != 0)
            selections--;
    }
}