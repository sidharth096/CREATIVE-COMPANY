export interface DesignCategoryData{
    categoryName:string;
    imageUrl:string;
    designCategoryCount:Number;

}

export class DesignCategoryProfile{
    categoryName:string;
    imageUrl:string;
    designCategoryCount:Number;


    constructor({categoryName,imageUrl,designCategoryCount} : DesignCategoryData){
        this.categoryName=categoryName
        this.imageUrl=imageUrl
        this.designCategoryCount=designCategoryCount

    }
}