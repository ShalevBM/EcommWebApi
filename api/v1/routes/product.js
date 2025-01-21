const express=require('express');
const router=express.Router();
const {getAll,getById,updateById,addNew,deleteById}=require('../controllers/product');
router.get('/',getAll);
router.get('/:id',getById);
router.put('/:id',updateById);
router.post('/',addNew);
router.delete('/:id',deleteById);

module.exports=router;