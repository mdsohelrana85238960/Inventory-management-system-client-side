import useAuth from "../hooks/useAuth";


const DashboardHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <h1 className="text-3xl"><span>Hi, Welcome </span>
            {
                user?.displayName ? user.displayName : 'Back'
            }</h1>




            <section className="flex mt-20 justify-center gap-8">

            <div className="card  w-54 bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
    
            <p> Total sale :  </p>
   
  </div>
</div>

<div className="card  w-54 bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
    
            <p> Total sale :  </p>
   
  </div>
</div>

<div className="card  w-54 bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
    
            <p> Total sale :  </p>
   
  </div>
</div>

            </section>

        </div>
    );
};

export default DashboardHome;