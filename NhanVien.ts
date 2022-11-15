import {CanBo} from "./CanBo";

export class NhanVien extends CanBo{
    private _jobPositinon !: string;


    constructor(name: string, age: number, sex: string, addressm: string, jobPositinon: string) {
        super(name, age, sex, addressm);
        this._jobPositinon = jobPositinon;
    }


    get jobPositinon(): string {
        return this._jobPositinon;
    }

    set jobPositinon(value: string) {
        this._jobPositinon = value;
    }
}