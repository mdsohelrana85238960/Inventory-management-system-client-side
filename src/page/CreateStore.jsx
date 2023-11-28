
import swal from "sweetalert";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";



const CreateStore = () => {
const axiosPublic = useAxiosPublic();
const {user} = useAuth();
const handleShop = e =>{
    e.preventDefault()
    const form = e.target
    const shopName = form.shopName.value;
    const photo = form.photo.value;
    const description = form.description.value;
    const location = form.location.value;
    const email = form.email.value;
    const name = form.name.value;
    
    

    const shopItem = {shopName, photo, location,email,name,description}
    console.log(shopItem);

    axiosPublic.post('/shop', shopItem)
    
    .then(data => {
        console.log(data);
        if (data.data.insertedId) {
            const shopManager ={
                shopName,
                photo,
                shopId: data.data.insertedId,
                role:'manager'
            }
            axiosPublic.patch(`/users/${user?.email}`,shopManager)
            .then(res =>{
                if (res.data?.modifiedCount) {
                    swal("Shop create and User update add successfully");
                }
            })
        }
        if (data.data.insertedId === null) {
            return swal("  Shop already created");
        }
        
    })
}  



    return (
        
        <div className="my-20">
            <h1 className="text-center text-5xl font-bold underline "> Create Shop </h1>
           <form onSubmit={handleShop}>
            <div className="card-body grid md:grid-cols-2 gap-8">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Shop Logo</span>
          </label>
          <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
        </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Shop Name</span>
              </label>
              <input
                type="text"
                name="shopName" 
                placeholder="Shop Name"
                className="input input-bordered"
                required
              />
            </div>
            

            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                name="description" 
                placeholder="Description"
                className="input input-bordered"
                
              />
            
                </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Shop Location</span>
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
                <span className="label-text">Shop-Owner Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                defaultValue={user?.email}
                className="input input-bordered"
                required
                readOnly 
              />
            </div>
         
            <div className="form-control">
              <label className="label">
                <span className="label-text">Shop-Owner Name</span>
              </label>
              <input
                type="text"
                name="name" 
                defaultValue={user?.displayName}
                placeholder="Name"
                className="input input-bordered"
                required
                readOnly 

                
              />
            </div>

         

                </div>
  
                <button className=" my-12 btn text-white bg-orange-500  flex justify-center w-96 mx-auto"> Create Shop </button>
          </form>
          </div>
        
    );
};

export default CreateStore;