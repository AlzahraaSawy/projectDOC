import db from "../config/database.js";

export const getproducts=(result)=>{
    db.query("SELECT * FROM product",(err,results)=>{
        if(err){
            console.log(err);
            result(err,null)
        }else{
            result(null,results);
        }
    });

};
export const getproductById=(id,result)=>{
    db.query(
        "SELECT * FROM PRODUCT WHERE product_id = ?",
        [id],
        (err,results)=>{
            if(err){
                console.log(err);
                result(err,null)
            }else{
                result(null,results[0]);
            }

        });

};
export const insertproduct=(data,result)=>{
    db.query("INSERT INTO product SET?",[data],(err,results)=>{
        if(err){
            console.log(err);
            result(err,null)
        }else{
            result(null,results);
        }
    });
};
export const updateProductById = (data, id, result) => {
    db.query(
      "UPDATE product SET product_name = ?, product_price = ? WHERE product_id = ?",
      [data.product_name, data.product_price, id],
      (err, results) => {
        if (err) {
          console.log(err);
          result(err, null);
        } else {
          result(null, results);
        }
      }
    );
  };
  export const deleteProductById = (id, result) => {
    db.query("DELETE FROM product WHERE product_id = ?", [id], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    });
  };
