const express=require("express")
const Product=require("../Model/product")
const {addProduct,editProduct,deleteProduct}=require("../Controllers/product")
const router=express.Router()

router.get("/",async(req,res)=>{
    try {
     const page=parseInt(req.query.page)
     const limit=parseInt(req.query.limit)
     const skip=(page-1)*limit
     const products=await Product.find().skip(skip).limit(limit).exec()
     const totalPages=await Product.countDocuments().exec()
     res.status(200).json({products,currentPage:page,totalPages:Math.ceil(totalPages/limit),totalPages:totalPages})

    } catch (error) {
        res.status(400).json({error:error.message})
    }
})


router.post("/addProduct",addProduct)
router.put("/editProduct/:productId",editProduct)
router.delete("/delete/:productId",deleteProduct)



module.exports=router