import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet";



const SaleSummary = () => {

    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: sales = [],} = useQuery({
        queryKey:['sales'],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/sales/${user.email}`);
            return res.data;
        }
    })

    const totalProfit = sales.reduce((total,item) => total + parseInt(item.profit), 0)
    const totalCost = sales.reduce((total,item) => total + parseInt(item.cost), 0)

    const totalSale =  totalProfit - totalCost


    return (
        <div className="mb-16">
          <Helmet >
            <title>Inventory | payments</title>
            </Helmet>
            {/* <div className="flex justify-between items-center">
                <h1 className="text-xl font-medium"> Product Count : {sales.length} </h1>
                 <button className="btn btn-primary">Add Product</button>
            </div>
             
            <section className="mt-16">
                
            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    
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
        sales?.map((product, index) =>   <tr key={product._id}>
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


            
            
            
           
          </tr>
          )
    }

    
     
    </tbody>
  </table>
</div>


            </section> */}

    {/* const totalProfit = sales.reduce((acc, product) => acc + product.saleCount, 0);
    const totalCost = sales.reduce((acc, product) => acc + product.cost, 0); */}
    


<section className="flex mt-20 justify-center gap-8">

<div className="card   w-60 bg-neutral text-neutral-content">
<div className="card-body items-center text-center">

<p className="text-3xl"> Total sale : {sales.length}   </p> 

</div>
</div>

<div className="card  w-60 bg-neutral text-neutral-content">
<div className="card-body items-center text-center">

<p className="text-3xl"> Total profit : {totalProfit}   </p> 

</div>
</div>

<div className="card   w-60  bg-neutral text-neutral-content">
<div className="card-body items-center text-center">

<p className="text-3xl"> Total Cost : {totalCost}   </p> 

</div>
</div>

</section>


<section>


        <div className="mb-16">
        
             
            <section className="mt-16">
                
            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Product Name</th>
        <th>Shop Name</th>
        <th>Profit</th>
        <th>Date</th>
    
      </tr>
    </thead>
    <tbody>
    
    {
        sales?.map((product, index) =>   <tr key={product._id}>
            <th>{index +1} </th>
            
            
            <td> {product.productName} </td>
            <td> {product.location} </td>
            <td> {totalSale} </td>
            <td> {product.date} </td>

          
          </tr>
          )
    }

    
     
    </tbody>
  </table>
</div>


            </section>

        </div>
    

</section>

        </div>
    );
};

export default SaleSummary;