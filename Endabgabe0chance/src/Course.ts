/// <reference path="Word.ts" />
//import { type } from 'os';
import * as sentenceFile from "./sentences.json";

class Course{
    sentences : SentencePair[]

    quizArea : HTMLDivElement;
    wordBlocksArea : HTMLDivElement;
    currentSentence : number;
    currentScore : number;


    /**
     * 
     * @param quizAreaId Unique ID (including the # (e.g. #quizArea)) of the quiz area displaying 
     *                   the german sentences as well as the empty spots for spanish words
     * @param wordBlockAreaId Unique ID (including the # (e.g. #wordBlocks)) of the word block area displaying the availible spanish words
     * @param sentencesInCourse 
     */
    public constructor(quizAreaId : string, wordBlockAreaId: string, sentencesInCourse : number){
        // TODO Fill Sentences
        let usedSentenceIndex : number[];

        while(sentencesInCourse > 0){
            let sentenceIndex : number;

            do
                sentenceIndex = Math.random() % sentenceFile.length;
            while(!usedSentenceIndex.includes(sentenceIndex))

            this.sentences.push(new SentencePair(sentenceFile[sentenceIndex].German as string[], sentenceFile[sentenceIndex].Spanish as string[]));
            usedSentenceIndex.push(sentenceIndex);
            sentencesInCourse--;
        }

        
        this.currentScore = 0;
        this.currentSentence = 0;
        this.quizArea = document.querySelector(quizAreaId) as HTMLDivElement;
        this.wordBlocksArea = document.querySelector(wordBlockAreaId) as HTMLDivElement;
    }

    public startCourse(){

    }

    decrementScore(){
        if(this.currentScore > 0)
            this.currentScore--;
    }


}