function talkafter(seconds, phrase) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(phrase)
        }, seconds * 1000)
    })
}
 
talkafter(5, "Nice!")
    .then(phrase => phrase.concat('?!?'))
    .then(otherphrase => console.log(otherphrase));