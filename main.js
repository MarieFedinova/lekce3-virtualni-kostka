// tady je místo pro náš program

function toss() {
    x = Math.floor(Math.random()* 6 + 1);
    document.querySelector('#kostka').src = 'obrazky/' + x + '.png';
    if (x < 6) {
        document.querySelector('#zprava').textContent = 'Hodilas ' + x + '. Zkus to znovu.';
    } else {
        document.querySelector('#zprava').textContent = 'Hodilas ' + x + '. Výhra!';
    }
    
}