import { Action } from '@/Store/Models/action.model';
import { ModalModel } from '@Models/index';
export declare const OPEN_MODAL = "OPEN_MODAL";
export declare function openModal(payload: ModalModel): Action<ModalModel>;
