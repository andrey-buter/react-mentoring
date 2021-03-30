import { Action } from '@/Store/Models/action.model';
import { GroupByWords } from '@Models/group-by-words.enum';

export const GROUP_BY = 'GROUP_BY';

export function groupByWords(payload: GroupByWords): Action<GroupByWords> {
	return { type: GROUP_BY, payload }
}
