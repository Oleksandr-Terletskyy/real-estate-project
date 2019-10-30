import { IDocument } from '../interfaces/document.interface';
export class Document implements IDocument {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public pdf: string
    ) { }
}
