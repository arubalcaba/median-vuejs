new Vue({
    el: '#app',
    data: {

        likert1: 0,
        likert2: 0,
        likert3: 0,
        likert4: 0,
        likert5: 0,
        median: 0,
        sortedLikertArray: []
    },
    methods: {
       calculateMedian: function() {
        const likertArray = [];
        if(this.likert1 > 0){
            for(let i = 0; i < this.likert1; i++){
                likertArray.push(1);
            }
        }
        if(this.likert2 > 0){
            for(let i = 0; i < this.likert2; i++){
                likertArray.push(2);
            }
        }
        if(this.likert3 > 0){
            for(let i = 0; i < this.likert3; i++){
                likertArray.push(3);
            }
        }
        if(this.likert4 > 0){
            for(let i = 0; i < this.likert4; i++){
                likertArray.push(4);
            }
        }
        if(this.likert5 > 0){
            for(let i = 0; i < this.likert5; i++){
                likertArray.push(5);
            }
        }
        this.sortedLikertArray = likertArray.slice().sort((a, b) => a - b);
        const midIndex = Math.floor(this.sortedLikertArray.length / 2);
        if (this.sortedLikertArray.length % 2 === 0) {
            this.median =  (this.sortedLikertArray[midIndex] + this.sortedLikertArray[midIndex - 1]) / 2;
        } else{
            this.median = this.sortedLikertArray[midIndex];
        }

    }
    }

});