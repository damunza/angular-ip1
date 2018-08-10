export class Quote {

public showAuthor:boolean;

constructor(public id:number, public quote:string, public author:string, public submitter:string, public submitTime:Date){

this.showAuthor=false;

}

}
