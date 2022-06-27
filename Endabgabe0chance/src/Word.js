class SentencePair {
    germanWords;
    spanishWords;
    constructor(germanWords, spanishWords) {
        // Check if german was supplied as sentence
        if (germanWords.length == 1) {
            germanWords[0].trim(); // remove excess spaces at start and end
            this.germanWords = germanWords[0].split(" ");
        }
        else {
            this.germanWords = germanWords;
        }
        // Check if spanish was supplied as sentence
        if (spanishWords.length == 1) {
            spanishWords[0].trim(); // remove excess spaces at start and end
            this.spanishWords = spanishWords[0].split(" ");
        }
        else {
            this.spanishWords = spanishWords;
        }
    }
    /**
     * getGermanWordAt
     */
    getGermanWordAt(index) {
        if (index > this.germanWords.length)
            return null;
        return this.germanWords[index];
    }
    /**
     * getSpanishWordAt
     */
    getSpanishWord(index) {
        if (index > this.germanWords.length)
            return null;
        return this.germanWords[index];
    }
    getScambledSpanishWords() {
        return this.shuffleArray(this.spanishWords);
    }
    // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    shuffleArray(array) {
        let currentIndex = array.length;
        let randomIndex;
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]
            ];
        }
        return array;
    }
}
//# sourceMappingURL=Word.js.map