
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import swal from "sweetalert";
import { Helmet } from "react-helmet";
import useAuth from "../hooks/useAuth";
import jsPDF from "jspdf";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: checkOut = [], refetch } = useQuery({
    queryKey: ["checkOut"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/checkOut/${user.email}`);
      return res.data;
    },
  }); 

  const handleSoldProduct = (product) => {
    const { _id: id, ...restProduct } = product;
    const newProduct = { id, ...restProduct };

    axiosSecure.post('/sales', newProduct).then((res) => {
      console.log(res);
      if (res.data.insertedId) {
        refetch();
        
      }
    });
  };

  const handleDownload = () => {
    const pdf = new jsPDF();
    pdf.text("Checkout Data", 15, 15);

    checkOut.forEach((product, index) => {
      const text = `${index + 1}. Product Name: ${product.productName}, Quantity: ${product.quantity}, Discount: ${product.discount}, Selling Price: ${product.sellingPrice}`;
      pdf.text(text, 15, 25 + index * 10);
    });

    pdf.save("checkout.pdf");
  };

  return (
    <div className="mb-16">
      <Helmet>
        <title>Inventory | checkOut</title>
      </Helmet>

      <div className="flex justify-between items-center">
        <h1 className="text-xl font-medium"> Check Out </h1>
        <button className="btn btn-outline" onClick={handleDownload}>
          Download PDF
        </button>
      </div>

      <section className="mt-16">
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Product ID</th>
                <th>Product Quantity</th>
                <th>Discount</th>
                <th>Selling Price</th>
                <th>Button</th>
              </tr>
            </thead>
            <tbody>
              {checkOut.map((product, index) => (
                <tr key={product._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={product.productPhoto}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{product.productName}</td>
                  <td>{product._id}</td>
                  <td>{product.quantity}</td>
                  <td>{product.discount}</td>
                  <td>{product.sellingPrice}</td>
                  <td className="text-right">
                    <Link  to={`/dashboard/payments/${product._id}`}> <button
                      onClick={() => handleSoldProduct(product)}
                      className="my-4 btn btn-primary"
                    >
                      Get Pay
                    </button> </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default CheckOut;
