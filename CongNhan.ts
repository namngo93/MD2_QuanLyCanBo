import{CanBo} from "./CanBo";

export class CongNhan extends CanBo{
    private _rank !: number;


    constructor(name: string, age: number, sex: string, addressm: string, rank: number) {
        super(name, age, sex, addressm);
        this._rank = rank;
    }


    get rank(): number {
        return this._rank;
    }

    set rank(value: number) {
        this._rank = value;
    }
}