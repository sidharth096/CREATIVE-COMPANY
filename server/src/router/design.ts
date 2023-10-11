import express from 'express'
import { DependenciesData } from '../entity/interface'
import { designController } from '../controller'

export = (dependency:DependenciesData)=>{

    const router = express.Router()

    const {getAllDesignCategoryController,getAllDesignController,getDesignByIdController}= designController(dependency)

    router.get('/getAllDesignCategory',getAllDesignCategoryController)
    router.get('/getAllDesign',getAllDesignController)
    router.patch('/getDesignByCategory',getDesignByIdController)

    return router

}