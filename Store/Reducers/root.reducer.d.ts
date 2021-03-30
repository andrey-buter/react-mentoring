declare const rootReducer: import("redux").Reducer<import("redux").CombinedState<{
    wordsState: {
        words: any;
        groupBy: import("../../models/group-by-words.enum").GroupByWords;
    } | {
        groupBy: any;
        words: import("../../models").Word[];
    };
    modalState: any;
}>, import("../Models").Action<any>>;
export default rootReducer;
