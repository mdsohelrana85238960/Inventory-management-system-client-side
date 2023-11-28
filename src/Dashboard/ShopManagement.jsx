import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/Fa";


const ShopManagement = () => {
    const axiosSecure = useAxiosSecure();
   
    const {data: shop = [],refetch} = useQuery({
        queryKey:['shop'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/shop');
            return res.data;
        }
    })
    
    return (
        <div className="mb-16">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-medium"> Shop Count : {shop.length} </h1>
               <Link to= '/dashboard/addProduct' >  <button className="btn btn-primary">Add Product</button> </Link>
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
        <th>Product Quantity</th>
        <th>Sale Count</th>
        <th>Update</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    
    {
        shop.map((product, index) =>   <tr key={product._id}>
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

            <td> {product.quantity} </td>

            <td> {product.saleCount} </td>
            <td> <Link to= {`/dashboard/updateProduct/${product._id}`} >  <button  className="btn text-red-600 btn-ghost btn-lg"> <FaEdit></FaEdit> </button> </Link> </td>


            <td>
                  <button onClick={() => handleDeleteProduct(product._id)} className="btn text-red-600 btn-ghost btn-lg">
                    delete
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

export default ShopManagement;