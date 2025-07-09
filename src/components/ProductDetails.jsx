import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setproducts] = useState({});
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((data) => {
      setproducts(data.data);
    });
  }, [id]);

  return (
    <>
      <div className="max-w-xl mx-auto bg-white shadow-md rounded overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="mx-auto w-[500px] h-[500px] object-cover"
        />
        <div className="p-4">
          <p className="text-lg font-semibold mb-2">{product.title}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="font-bold text-xl">${product.price}</p>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
