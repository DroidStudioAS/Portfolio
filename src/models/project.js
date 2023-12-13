
export default class project{
    //type-0=app 1=web
    constructor(name, even=false, type, logo, desc){
        this.name=name;
        this.even=false;
        this.type=type;
        this.logo=logo;
        this.desc=desc;
    };

    setEven(value) {
        this.even = value;
    }

    static new (name,even){
        return new project(name,even)
    };

}