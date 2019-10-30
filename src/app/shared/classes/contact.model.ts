import { IContact } from '../interfaces/contact.interface';
export class Contact implements IContact {
    constructor(
        public id: number,
        public name: string,
        public phone: string,
        public email: string,
        public message: string,
    ) { }
}


