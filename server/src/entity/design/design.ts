export interface DesignData{
    imageUrl:string;
    categoryId:string;
}

export class DesignProfile{
    imageUrl:string;
    categoryId:string;


 constructor({imageUrl,categoryId} : DesignData){
        this.imageUrl=imageUrl
        this.categoryId=categoryId

    }
}