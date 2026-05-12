function alertMe() {
    alert("Hello, world!");
    document.getElementById("textInput").style.fontSize ="24pt";
}

function fancyText(){
    if (document.getElementById("fancy").checked) {
        document.getElementById("textInput").style.fontWeight ="bold";
        document.getElementById("textInput").style.color ="blue"
        document.getElementById("textInput").style.textDecoration ="underline"
    }
    else {
        document.getElementById("textInput").style.fontWeight ="normal";
        document.getElementById("textInput").style.color ="black"
        document.getElementById("textInput").style.textDecoration ="none"
    }
}

function mooTime() {
    let textArea = document.getElementById("textInput");
    let text = textArea.value.toUpperCase();
    let sents = text.split(".");

    for (let i = 0; i < sents.length; i++) {
        let newSent = sents[i].trim();
        if (newSent.length > 0) {
            let words = newSent.split(" ");
            words[words.length - 1] = words[words.length - 1] + "MOO";
            sents[i] = words.join(" ");
        }
    }
    textArea.value = sents.join(". ");
}