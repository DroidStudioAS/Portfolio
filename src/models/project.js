
export default class project{
    constructor(name, even=false, type, logo, desc){
        this.name=name;
        this.even=even;
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