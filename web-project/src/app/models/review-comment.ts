export class ReviewComment{
    _id:any;
    Id: string;
    UserId: string;
    Like:number;
    Date:string;
    Image:string;
    Time: string;
    Content: string;
    Comment: object;
    constructor(){
        this._id=null;
        this.Id="";
        this.UserId="";
        this.Like=0;
        this.Date='2022-11-02';
        this.Image="";
        this.Time="";
        this.Content="";
        this.Comment = [
            this.UserId="",
            this.Id="",
            this.Content=""]
    }

}
