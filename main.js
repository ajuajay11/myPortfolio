const texts = [" WEB DEVELOPER"];
let count = 0;
let index = 0;
let currentText = "";



(function type() {

    if(count === texts.length){
        count = 0;

    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);


    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length){
    //     count++;
    //     index = 1;
    
}
setTimeout(type, 300);

})();