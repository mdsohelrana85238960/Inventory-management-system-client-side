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
            


<section className="flex mt-20 justify-center gap-8">

<div className="card   w-60 bg-neutral text-neutral-content">
<div className="card-body items-center text-center">

<p className="text-2xl"> Total sale : {sales.length}   </p> 

</div>
</div>

<div className="card  w-60 bg-neutral text-neutral-content">
<div className="card-body items-center text-center">

<p className="text-2xl"> Total profit : {totalProfit}   </p> 

</div>
</div>

<div className="card   w-60  bg-neutral text-neutral-content">
<div className="card-body items-center text-center">

<p className="text-2xl"> Total Invest : {totalCost}   </p> 

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
            <td> {parseInt(product.cost) - parseInt(product.profit) } </td>
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