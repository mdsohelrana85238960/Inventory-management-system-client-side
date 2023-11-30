import { Helmet } from "react-helmet";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";


const AdminSaleSummary = () => {

    // const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
//sales
    const {data: AdminSales = [],} = useQuery({
        queryKey:['AdminSales'],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/AdminSales`);
            return res.data;
        }
    })
//products
    const {data: allProduct = [],} = useQuery({
        queryKey:['allProduct'],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/allProduct`);
            return res.data;
        }
    })
    console.log('all',allProduct)
 // users
    const {data: users = []} = useQuery({
        queryKey:['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    console.log(users)

    const totalIncome = AdminSales.reduce((total,item) => total + parseInt(item.profit), 0)

    return (
        <div className="mb-16">
          <Helmet >
            <title>Inventory | Summary</title>
            </Helmet>
          


<section className="flex mt-20 justify-center gap-8">

<div className="card   w-60 bg-neutral text-neutral-content">
<div className="card-body items-center text-center">

<p className="text-2xl"> Total Product :{allProduct.length}  </p> 

</div>
</div>

<div className="card  w-60 bg-neutral text-neutral-content">
<div className="card-body items-center text-center">

<p className="text-3xl"> Total sale:  {AdminSales.length} </p> 

</div>
</div>

<div className="card   w-60  bg-neutral text-neutral-content">
<div className="card-body items-center text-center">

<p className="text-3xl"> Total Invest : {totalIncome}  </p> 

</div>
</div>

</section>


<section className="mt-16">
                
            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>User Name</th>
        <th>Shop Name</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
    
    {
        users.map((product, index) =>   <tr key={product._id}>
            <th>{index +1} </th>
            <td> {product.name} </td>
            <td> {product.shopName} </td>
            <td> {product.email} </td>
            <td> {product.role} </td>
           
             
            
            
           
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

export default AdminSaleSummary;