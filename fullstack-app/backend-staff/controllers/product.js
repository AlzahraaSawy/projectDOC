import {
    getproducts,
    getproductById,
    insertproduct,
    updateProductById,
    deleteProductById,
}from "../models/productModel.js";

export const showProducts=(req,res)=>{
    getproducts((err,results)=>{
        if(err){
            res.send(err);

        }else{
            res.json(results);
        }
    });
    
};
export const showProductID=(req,res)=>
{
    getproductById(req.params.id,(err,results)=>
    {
        if(err){
            res.send(err);

        }else{
            res.json(results);
        }
    });
};
export const createProduct = (req, res) => {
    const data = req.body;
    insertproduct(data, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };
  export const updateProduct = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    updateProductById(data, id, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };
  export const deleteProduct = (req, res) => {
    const id = req.params.id;
    deleteProductById(id, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };