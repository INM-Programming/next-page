export default class Time_Class {
    
    minute:string;
    second:string;
    milisecond:string;

    constructor(minute:string,second:string,milisecond:string) {
        this.minute = minute;
        this.second = second;
        this.milisecond = milisecond;
    }
    
    getMinute (): string {
        return this.minute;
    }

    getSecond (): string {
        return this.second;
    }
    
    getMilisecond (): string {
        return this.milisecond;
    }
}