import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/Fa";
import { Helmet } from "react-helmet";
import swal from "sweetalert";


const ShopManagement = () => {
    const axiosSecure = useAxiosSecure();
   
    const {data: users = [],refetch} = useQuery({
        queryKey:['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    console.log(users)


    const handleAdmin = user =>{
      axiosSecure.patch( `/users/admin/${user._id}`)
      .then(res => {
        console.log(res.data)
        if (res.data.modifiedCount>0) {
          refetch()
                    swal("Good job!", "admin created!", "success");

        }
      })
    }
    
    return (
        <div className="mb-16">
          <Helmet >
            <title>Inventory | shop</title>
            </Helmet>
            
             
            <section className="mt-16">
                
            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Product Image</th>
        <th>Shop Name</th>
        <th>Location</th>
        <th>Email</th>
        <th>Name</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    
    {
        users.map((product, index) =>   <tr key={product._id}>
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
            
            <td> {product.shopName} </td>
            <td> {product.location} </td>
            <td> {product.email} </td>
            <td> 
              {product.role === 'admin' ? <p className="text-lg text-red-500 font-bold">admin</p> : <button onClick={() => handleAdmin(product)} className="btn text-blue-400 btn-md">{product.role} </button> }
            </td>
            <td> {product.name} </td>
            <td>
                  <button onClick={() => handleDeleteProduct(product._id)} className="btn text-red-300 btn-ghost btn-lg">
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