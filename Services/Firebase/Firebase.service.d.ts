import { RawWord, Word } from '@Models/index';
import 'firebase/analytics';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
export declare class FirebaseService {
    #private;
    user: firebase.User | undefined | null;
    init(): Promise<Record<string, RawWord>>;
    registerUser(email: string, password: string): Promise<string>;
    signInUser(email: string, password: string): Promise<firebase.User>;
    logOut(): Promise<void>;
    addItem(item: RawWord): Promise<string>;
    editItem(id: string, item: Word): Promise<boolean>;
    removeItem(id: string): Promise<boolean>;
    private onAuth;
    private loadAllForLocation;
    private loadAll;
}
declare const firebaseService: FirebaseService;
export { firebaseService };
