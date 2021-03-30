declare const store: import("redux").Store<import("redux").CombinedState<{
    wordsState: {
        words: any;
        groupBy: import("../models/group-by-words.enum").GroupByWords;
    } | {
        groupBy: any;
        words: import("../models").Word[];
    };
    modalState: any;
}>, import("./Models").Action<any>>;
export default store;
