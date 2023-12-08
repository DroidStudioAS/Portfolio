
export default class project{
    constructor(name, even){
        this.name=name;
        this.even=even
    };

    static new (name,even){
        return new project(name,even)
    };

}