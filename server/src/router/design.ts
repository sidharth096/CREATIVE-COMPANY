import express from 'express'
import { DependenciesData } from '../entity/interface'
import { designController } from '../controller'

export = (dependency:DependenciesData)=>{

    const router = express.Router()

    const {getAllDesignCategoryController}= designController(dependency)

    router.get('/getAllDesignCategory',getAllDesignCategoryController)

    return router

}