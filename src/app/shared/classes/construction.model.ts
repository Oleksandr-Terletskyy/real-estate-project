import { IConstruction } from '../interfaces/construction.interface';

export class Construction implements IConstruction {
    constructor(
        public id: number,
        public image: string,
        public date: string,
        public text: string,
    ) { }
}

