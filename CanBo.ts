export class CanBo{
    private _name !: string;
    private _age !: number;
    private _sex !: string;
    private _addressm !: string;


    constructor(name: string, age: number, sex: string, addressm: string) {
        this._name = name;
        this._age = age;
        this._sex = sex;
        this._addressm = addressm;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get sex(): string {
        return this._sex;
    }

    set sex(value: string) {
        this._sex = value;
    }

    get addressm(): string {
        return this._addressm;
    }

    set addressm(value: string) {
        this._addressm = value;
    }
}