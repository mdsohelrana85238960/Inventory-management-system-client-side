import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import swal from "sweetalert";
import { Helmet } from "react-helmet";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";



const CheckOut = () => {
  const {user} = useAuth();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const {id} = useParams();
    const {data: checkOut = [],refetch} = useQuery({
        queryKey:['checkOut'],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/checkOut`);
            return res.data;
        }
    })

   

  //   console.log(id)

  //   const {data: products =[] ,} = useQuery({
  //       queryKey:['products'],
  //       queryFn: async () =>{
  //           const res = await axiosSecure.get(`/singleProduct/${id}`);
  //           return res.data;
  //       }
  //   })
  // console.log(products)

  //

    const handleSoldProduct = (product) =>{
      console.log(product)
      delete product._id
      axiosSecure.post('/sales' , product)
      .then(res =>{
          console.log(res)
          if (res.data.insertedId) {
                   refetch()
                    swal("Good job!", "insertedId Successfully!", "success");

             
              //   const count = product.saleCount +1;
              //   const quantity = product.quantity -1;
              // const newUpdate = {count,quantity}
              // console.log(newUpdate)

              // axiosPublic.patch(`/products`, newUpdate)
              // .then((res) => {
              //   if (res.data.modifiedCount){
              //     alert('done')
              //     axiosPublic.delete(`/sales/${id}`)
              //     .then(res =>{
              //       console.log('first')
              //       refetch()
              //       swal("Good job!", "insertedId Successfully!", "success");
              //     })
          
              //   }

              // })
                
          




            }
      })
    }

   


    return (
        <div className="mb-16">
            
            <Helmet >
            <title>Inventory | checkOut</title>
            </Helmet>
                
            <h1 className="text-xl font-medium"> Check Out  </h1>

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
       <th> Button</th>

        
        
        
      </tr>
    </thead>
    <tbody>
    
    {
        checkOut.map((product, index) =>   <tr key={product._id}>
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



            <div className="text-right">
                 <button  onClick={() => handleSoldProduct(product)} className=" my-4 btn btn-primary ">
                    Get Pay
                  </button>
                 </div>

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

export default CheckOut;