import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaEdit, FaTrashAlt,  } from "react-icons/Fa";
import swal from "sweetalert";
import { Helmet } from "react-helmet";
import useAuth from "../hooks/useAuth";



const ProductManagement = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
   
    const {data: products = [],refetch} = useQuery({
        queryKey:['products'],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/products/${user.email}`);
            return res.data;
        }
    })
   
    
    const handleDeleteProduct = (product) =>{
        console.log(product)
        axiosSecure.delete(`/products/${product}`)
        .then(res =>{
            console.log(res);
            if (res.data.deletedCount>0) {
                refetch();
                swal("Good job!", "insertedId Successfully!", "success");
            }
        } )
    }

    return (
        <div className="mb-16">
          <Helmet >
            <title>Inventory | Product</title>
            </Helmet>
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-medium"> Product Count : {products.length} </h1>
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
        products?.map((product, index) =>   <tr key={product._id}>
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
                    <FaTrashAlt></FaTrashAlt>
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

export default ProductManagement;