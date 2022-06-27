"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sentenceFile = require("./sentences.json");
class Course {
    sentences;
    quizArea;
    wordBlocksArea;
    currentSentence;
    currentScore;
    /**
     *
     * @param quizAreaId Unique ID (including the # (e.g. #quizArea)) of the quiz area displaying
     *                   the german sentences as well as the empty spots for spanish words
     * @param wordBlockAreaId Unique ID (including the # (e.g. #wordBlocks)) of the word block area displaying the availible spanish words
     * @param sentencesInCourse Says how many sentece are in the current Course
     */
    constructor(quizAreaId, wordBlockAreaId, sentencesInCourse) {
        // TODO Fill Sentences
        let usedSentenceIndex;
        while (sentencesInCourse > 0) {
            let sentenceIndex;
            do
                sentenceIndex = Math.random() % sentenceFile.length;
            while (!usedSentenceIndex.includes(sentenceIndex));
            this.sentences.push(new SentencePair(sentenceFile[sentenceIndex].German, sentenceFile[sentenceIndex].Spanish));
            usedSentenceIndex.push(sentenceIndex);
            sentencesInCourse--;
        }
        this.currentScore = 0;
        this.currentSentence = 0;
        this.quizArea = document.querySelector(quizAreaId);
        this.wordBlocksArea = document.querySelector(wordBlockAreaId);
    }
    startCourse() {
    }
    decrementScore() {
        if (this.currentScore > 0)
            this.currentScore--;
    }
}
//# sourceMappingURL=Course.js.map