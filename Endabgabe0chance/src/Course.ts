/// <reference path="Word.ts" />
import * as sentenceFile from "./sentences.json";

class Course {
    sentences: SentencePair[]

    quizArea: HTMLDivElement;
    wordBlocksArea: HTMLDivElement;
    currentSentence: number;
    currentScore: number;
    hiddenScore: number; 
    courseStart: 0; //Unique ID saying the maximum sentences in the Course


    /**
     * 
     * @param quizAreaId Unique ID (including the # (e.g. #quizArea)) of the quiz area displaying 
     *                   the german sentences as well as the empty spots for spanish words
     * @param wordBlockAreaId Unique ID (including the # (e.g. #wordBlocks)) of the word block area displaying the availible spanish words
     * @param sentencesInCourse Unique ID telling how much sentences are in the Course
     */
    public constructor(quizAreaId: string, wordBlockAreaId: string, sentencesInCourse: number) {
        // TODO Fill Sentences
        let usedSentenceIndex: number[];

        while (sentencesInCourse > this.courseStart) {
            let sentenceIndex: number;

            do
                sentenceIndex = Math.random() % sentenceFile.length;
            while (!usedSentenceIndex.includes(sentenceIndex))

            this.sentences.push(new SentencePair(sentenceFile[sentenceIndex].German as string[], sentenceFile[sentenceIndex].Spanish as string[]));
            usedSentenceIndex.push(sentenceIndex);
            sentencesInCourse--;
        }


        this.currentScore = 0;
        this.currentSentence = 0;
        this.hiddenScore = 0;
        this.quizArea = document.querySelector(quizAreaId) as HTMLDivElement;
        this.wordBlocksArea = document.querySelector(wordBlockAreaId) as HTMLDivElement;
    }

    public startCourse() { //sets the Number from courseStarts and with this the Sentences via Eventlistener from the HTMLfile
        let pickCourse: number;


        let coursePicken1 = function () {
            pickCourse = 5;
            return pickCourse;
        }

        let coursePicken2 = function () {
            pickCourse =10;
            return pickCourse;
        }

        let coursePicken3 = function () {
            pickCourse=15;
            return pickCourse;
        }
        if (pickCourse >= 0) {
            this.courseStart === pickCourse
        }
     


        document.querySelector("#easy1").addEventListener("click", function (coursePicken1): void { });
        document.querySelector("#medium1").addEventListener("click", function (coursePicken2): void { });
        document.querySelector("#hard1").addEventListener("click", function (coursePicken3): void { });

    }

    public playCourse(){
        while (this.courseStart>=0){
            //vergleichen von Sätzen
            //Erstellung eines Arrays zum vergleichen"Current Choice"-> break wenn nicht richtig über do!
            //Dom veränderung an Playground
            //-Eventlistener für Buttons, wo SPA Sätze enthalten sind
            //-> werden zu current Choice bei On Click hinzugefügt
            //Einsetzung veränderbarer an das Array angepasster DIV Elemente
            //Funktion, welche das Array, mit den Pairs weiter gehen lässt
            //break um das zu ermöglichen
            //sobald Currentchoice == DESatz HiddenCounter ++
        

        }
    }

    public endCourse(){
        if (this.hiddenScore >= this.courseStart)
         fertig: String;
    }

    decrementScore() {
        if (this.currentScore > 0)
            this.currentScore--;
    }

}
