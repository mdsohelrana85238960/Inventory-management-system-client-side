import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";

import swal from "sweetalert";
import { useNavigate } from "react-router-dom";




const SaleCollection = () => {
const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
   
    const {data: products = [],refetch} = useQuery({
        queryKey:['products'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/products');
            return res.data;
        }
    })
    

    const handleSoldProduct = (product) =>{
      // const {_id,...filterProduct} = product
      product.productId = product._id
      delete product._id
      axiosSecure.post('/checkOut' , product)
      .then(res =>{
          console.log(res)
          if (res.data.insertedId) {
            refetch()
              swal("Good job!", "insertedId Successfully!", "success");
              navigate('/dashboard/checkOut')


              

          }
      })
    }


    return (
        <div className="mb-16">
            
            <div className="flex mt-16 items-center justify-between"> 
            <p className="text-3xl font-medium">Sale Collection</p>
             <div>
            
             <input type="text" placeholder="Search... " className="border p-3 rounded-md" name="" id="" /> <button className=" btn-md btn btn-outline">Search</button>
             </div>
            </div>

            <section className="mt-16">
                
            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Product Image</th>
        <th>Product Name</th>
        <th>Product ID</th>
        <th>Product Quantity</th>
        <th>Discount</th>
        <th>Selling Price</th>
        <th>Button</th>
        
        
      </tr>
    </thead>
    <tbody>
    
    {
        products.map((product, index) =>   <tr key={product._id}>
            <th>{index +1} </th>
            <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src= {product.productPhoto} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
          </div>
        </td>
            
            <td> {product.productName} </td>
            <td> {product._id} </td>
            <td> {product.quantity} </td>
            <td> {product.discount} </td>
            <td> {product.sellingPrice} </td>

            <td>
                  <button onClick={() => handleSoldProduct(product)} className="btn btn-outline  btn-ghost btn-lg">
                    Add For Check-out
                  </button>
                </td>

          
            
            
           
          </tr>
          )
    }

    
     
    </tbody>
  </table>
</div>


            </section>

        </div>
    );
};

export default SaleCollection;