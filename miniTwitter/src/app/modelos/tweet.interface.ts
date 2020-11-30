import {User} from './user.interface'

export interface Tweets {
    id: number;
    mensaje: string;
    likes: any[];
    user: User;
}
