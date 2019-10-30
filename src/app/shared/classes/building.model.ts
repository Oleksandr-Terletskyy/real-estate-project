import { IBuilding } from '../interfaces/building.interface';
export class Building implements IBuilding {
    constructor(
        public id: number,
        public date: string,
        public description: string,
        public image: string
    ) { }
}