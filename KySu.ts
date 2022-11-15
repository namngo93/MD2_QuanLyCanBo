import {CanBo} from "./CanBo";

export class KySu extends CanBo{
    private _majo !: string;


    constructor(name: string, age: number, sex: string, addressm: string, majo: string) {
        super(name, age, sex, addressm);
        this._majo = majo;
    }


    get majo(): string {
        return this._majo;
    }

    set majo(value: string) {
        this._majo = value;
    }
}