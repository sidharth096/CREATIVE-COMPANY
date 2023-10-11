import getAllDesignCategoryController from "./getAllDesignCategory.controller";
import getAllDesignController from "./getAllDesign.controller";
import getDesignByIdController from "./getDesignByCategoryId.controller";


export = (dependencies: any) => {
    return {
        getAllDesignCategoryController: getAllDesignCategoryController(dependencies),
        getAllDesignController:getAllDesignController(dependencies),
        getDesignByIdController:getDesignByIdController(dependencies)

    }
}