import { Action } from '@/Store/Models/action.model';
import { GroupByWords } from '@Models/group-by-words.enum';
export declare const GROUP_BY = "GROUP_BY";
export declare function groupByWords(payload: GroupByWords): Action<GroupByWords>;
