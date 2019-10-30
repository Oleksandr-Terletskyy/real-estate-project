import { IGallery } from '../interfaces/gallery.interface';
export class Gallery implements IGallery {
    constructor(
        public id: number,
        public image: string
    ) { }
}