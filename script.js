const setOfWord = [
    "My name is Sagar Dussa and I am front end developer",
    "Hope you are having fun this is a simple game you can make",
    "How was school today?",
    "I can’t believe we lost!",
    "“Why are you running?” the man asked as he helped her up. “Please be more careful next time.”",
]

const msg = document.getElementById("msg");
const msg2 = document.getElementById("msg2")
const typeWord = document.getElementById("myword");
const btn = document.getElementById("btn");
let startTime, endTime;

const playgame = () => {
    let randomNumber = Math.floor(Math.random() * setOfWord.length);
    msg.innerText = setOfWord[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);
    console.log(totalTime);
    let totalstr = typeWord.value;
    let wordCount = wordCounter(totalstr);

    let speed = Math.round((wordCount / totalTime) * 60);

    let finalmsg = "you typed total at " + speed + " word per minutes ";

    finalmsg += compareWords(msg.innerText, totalstr);
    msg2.innerText = finalmsg;
    

}

const compareWords = (str1, str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;

    words1.forEach(function (item, index) {
        if (item == words2[index]) {
            cnt++;
        }
    })
    let errorWords = (words1.length - cnt);
    return (cnt + " Correct out of " + words1.length + " words and the total number of error are " + errorWords + ".");


}


const wordCounter = (str) => {
    let response = str.split(" ").length;
    console.log(response);
    return response;

}
btn.addEventListener("click", function () {
    if (this.innerText == "Start") {
        typeWord.disabled = false;
        playgame();
        msg2.innerText = " ";
        msg1.innerText = " ";
    }
    else if (this.innerText == "Done") {
        typeWord.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
})
        typeWord.innerText = "";