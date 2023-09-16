import getAllDesignCategoryController from "./getAllDesignCategory.controller";


export = (dependencies: any) => {
    return {
        getAllDesignCategoryController: getAllDesignCategoryController(dependencies)

    }
}