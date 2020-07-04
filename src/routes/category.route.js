const express = require('express');
const router = express.Router();
const CategoryService = require('../services/category.service');
const {getAllCategory,addCategory} = require('../controllers/category.controller');

const categoryService= new CategoryService();

router.get('/',(req,res,next)=> getAllCategory(req,res,categoryService))
router.post('/',(req, res, next) => addCategory(req,res,categoryService))
module.exports = router;