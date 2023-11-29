import swal from "sweetalert";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet";


const AddProduct = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth()
    const {data: shop =[] ,} = useQuery({
        queryKey:['shop'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/shop');
            return res.data;
        }
    })
    console.log(shop[0])

    const handleAddProduct = e =>{
        e.preventDefault()
        const form = e.target
        const productName = form.productName.value;
        const productPhoto = form.productPhoto.value;
        const quantity = form.quantity.value;
        const location = form.location.value;
        const cost = form.cost.value;
        const profit = form.profit.value;
        const discount= form.discount.value;
        const description = form.description.value;
        const date = form.date.value;
        const shopId = shop[0]._id;
        const shopName = shop[0].shopName;
        const userEmail = user.email;
        const sellingPrice = cost + (7.5%100)+ profit ;
        const saleCount = 0;
        
        console.log(shop[0]._id)
    
        const products = {shopId,saleCount,date,sellingPrice,shopName,userEmail,productName,discount, productPhoto,description, location,cost,profit,quantity}
        console.log(products);

        axiosSecure.post(`/products`, products)
        .then(res =>{
            console.log(res.data.insertedId)
            if (res.data.insertedId) {
                swal("Good job!", "insertedId Successfully!", "success");

            }
        })

    }

    return (
        
        <div className="my-20">

<Helmet >
            <title>Inventory | AddProduct</title>
            </Helmet>
            <h1 className="text-center text-5xl font-bold underline "> Add Products</h1>
           <form onSubmit={handleAddProduct}>
            <div className="card-body grid md:grid-cols-2 gap-8">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Product image</span>
          </label>
          <input type="text" placeholder="Photo URL" name="productPhoto" className="input input-bordered" required />
        </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Product Name</span>
              </label>
              <input
                type="text"
                name="productName" 
                placeholder="Product Name"
                className="input input-bordered"
                required
              />
            </div>
            

            <div className="form-control">
              <label className="label">
                <span className="label-text"> Product Quantity</span>
              </label>
              <input
                type="number"
                name="quantity" 
                placeholder="Description"
                className="input input-bordered"
                
              />
            
                </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Location</span>
              </label>
              <input
              type="text"
              name="location"
              placeholder="Location"
              className="input input-bordered"
              required
            />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Cost</span>
              </label>
              <input
                type="number"
                name="cost"
                placeholder="Cost"
                
                className="input input-bordered"
                required
              
              />
            </div>
         
            <div className="form-control">
              <label className="label">
                <span className="label-text">Profit Margin</span>
              </label>
              <input
                type="number"
                name="profit" 
                
                placeholder="Profit"
                className="input input-bordered"
                required
                
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Profit Discount</span>
              </label>
              <input
                type="text"
                name="discount" 
                
                placeholder="Discount"
                className="input input-bordered"
                required
               
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Profit Description</span>
              </label>
              <input
                type="text"
                name="description" 
                placeholder="Description"
                className="input input-bordered"
                required
                
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Add Date</span>
              </label>
              <input
                type="date"
                name="date" 
                className="input input-bordered"
                required
                
              />
            </div>

         

                </div>
  
                <button className=" my-12 btn text-white bg-orange-500  flex justify-center w-96 mx-auto"> Add Products </button>
          </form>
          </div>
        
    );
};

export default AddProduct;