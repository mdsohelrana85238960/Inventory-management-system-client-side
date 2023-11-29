
import swal from "sweetalert";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";


const UpdateProducts = () => {
    const axiosSecure = useAxiosSecure();
    const {id} = useParams();

    console.log(id)

    const {data: products =[] ,} = useQuery({
        queryKey:['products'],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/singleProduct/${id}`);
            return res.data;
        }
    })
  console.log(products)

    const handleUpdateProduct = e =>{
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
        
        
        
    
        const products = {productName,discount, productPhoto,description, location,cost,profit,quantity}
        console.log(products);

        axiosSecure.put(`/products/${id}`, products)
        .then((response) => {
    console.log(response.data); 
    if (response.data.modifiedCount > 0) {
      swal("Product updated successfully");
    }
  })
  .catch((error) => {
    console.error('Error updating product:', error);
   
  });

    }

    return (
        
        <div className="my-20">
            <h1 className="text-center text-5xl font-bold underline "> Update Products</h1>
           <form onSubmit={handleUpdateProduct}>
            <div className="card-body grid md:grid-cols-2 gap-8">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Product image</span>
          </label>
          <input type="text" 
          placeholder="Photo URL"
          defaultValue={products.productPhoto}
           name="productPhoto" 
           className="input input-bordered" 
           
           required />
        </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Product Name</span>
              </label>
              <input
                type="text"
                name="productName" 
                defaultValue={products.productName}
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
                defaultValue={products.quantity}
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
              defaultValue={products.location}
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
                defaultValue={products.cost}
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
                defaultValue={products.profit}
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
                defaultValue={products.discount}
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
                defaultValue={products.description}
                placeholder="Description"
                className="input input-bordered"
                required
                
              />
            </div>
           
                </div>
  
                <button className=" my-12 btn text-white bg-orange-500  flex justify-center w-96 mx-auto">Update Products </button>
          </form>
          </div>
        
    );
};

export default UpdateProducts;