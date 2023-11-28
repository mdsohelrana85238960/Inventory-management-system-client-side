import Banner from "./Banner";


const Header = () => {
    return (
        <div>
         <div>
         <Banner></Banner>
         </div>

         <section className="my-16"> 
            <h1 className="text-3xl font-medium mb-4">Recent Launch</h1>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="card w-64 bg-base-100 shadow-xl">
  <figure className="">
    <img  src=" https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D " alt="Shoes" className="rounded-xl h-[170px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes</h2>
    <p>Price : $75 </p>
  </div>
  <button className=" my-2 btn btn-primary">Add to cart</button>
</div>
            <div className="card w-64 bg-base-100 shadow-xl">
  <figure className="">
    <img src=" https://www.shutterstock.com/image-photo/stability-cushion-running-shoes-new-260nw-1958445436.jpg " alt="Shoes" className="rounded-xl h-[170px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes</h2>
    <p>Price : $35 </p>
  </div>
  <button className=" my-2 btn btn-primary">Add to cart</button>
</div>
            <div className="card w-64 bg-base-100 shadow-xl">
  <figure className="">
    <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D " alt="Shoes" className="rounded-xl h-[170px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes</h2>
    <p>Price : $48 </p>
  </div>
  <button className=" my-2 btn btn-primary">Add to cart</button>
</div>
            <div className="card w-64 bg-base-100 shadow-xl">
  <figure className="">
    <img src="https://img.freepik.com/free-photo/sports-shoe-pair-design-illustration-generated-by-ai_188544-19642.jpg " alt="Shoes" className="rounded-xl h-[170px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>Price : $38 </p>
  </div>
  <button className=" my-2 btn btn-primary">Add to cart</button>
</div>
            </div>
         </section>


        <section className="lg:flex justify-center items-center gap-16 mb-16">
            <img className="w-[500px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoyBGsYhkAPd9V6vfcTLehAXTIz-3B5wIcTeeYYYNwly_uQXWpiL40k7-Aocxt1MibvzQ&usqp=CAU" alt="" />
            <div className="w-[400px]">
            <h1 className="text-xl font-medium">1. Pure Leather</h1>
            <p className="mb-4"> sit amet consectetur adipisicing elit. Distinctio, corrupti?</p>

            <h1 className="text-xl font-medium">2. Water profe Shoes</h1>
            <p className="mb-4">ipsum dolor sit amet consectetur adipisicing elit. Distinctio, corrupti?</p>

            <h1 className="text-xl font-medium"> 3. Comfortable</h1>
            
            </div>
        </section>



       <section className="lg:flex mb-16 gap-4">
      
        <img className="w-1/3" src="https://t4.ftcdn.net/jpg/05/06/36/71/360_F_506367145_aTN8tLqtKXDYxzHQs5DH4HGsbVT9OgMn.jpg" alt="" />
        <img className="w-1/3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuGOXo3NqTynDyu6xIE2zxIzuB8sixnRuNkj0gHEgRLjcIyo7EiPyQR-mM1cDfVQb69Kc&usqp=CAU" alt="" />
        <div className="w-1/3">
        <h1 className="text-3xl font-medium mb-4">Special Offer</h1>
        <p> Reiciendis optio eum quasi a dolores ipsam inventore unde, in ut. Sit incidunt deleniti perspiciatis fugiat. Cumque voluptas non adipisci veniam ratione.</p>
        <button className="btn my-4 btn-primary"> Buy Now </button>
        </div>
       </section>


        <section className="bg-slate-700 md:flex justify-center items-center p-10 text-white">
            <div className="w-1/2">
                <h1 className="text-3xl font-bold mb-8 "> The Best Of The Section</h1> 
                <p> amet consectetur adipisicing elit. Praesentium temporibus provident accusamus quas quis eius ipsum dolor delectus nobis! Perferendis velit inventore facere nihil sed. Officiis quaerat magni ipsum mollitia.</p>
                <button className="btn mt-4 btn-primary">Shop Now</button>
             </div>
             <img className="w-1/2" src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnQlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </section>


        </div>
    );
};

export default Header;