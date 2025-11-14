import React, { useState, useEffect } from "react";
import Market from "./Market";
import { Search, Upload } from "lucide-react";

// The 'heart' icon is likely still a local asset, so we'll keep it imported.
// If your Django API returns the URL for the 'heart' icon, remove this line.
import heart from "../assets/images/heart.png";

function Markets({ cart, setCart }) {
  // State to hold the products fetched from the backend
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error messages
  const [searchTerm, setSearchTerm] = useState("");

  // Define the Django API endpoint URL
  const PRODUCT_API_URL = "http://127.0.0.1:8000/api/products/";

  // useEffect for API Call using fetch
  useEffect(() => {
    // Start loading
    setLoading(true);
    setError(null);

    fetch(PRODUCT_API_URL, {
      method: "GET",
      headers: {
        // Headers are generally optional for a simple GET request
      },
    })
      .then((res) => {
        // Check for HTTP errors (e.g., 404, 500)
        if (!res.ok) {
          // Throw an error to be caught in the .catch block
          throw new Error(`Failed to fetch products: Status ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched Products:", data);
        // Assuming 'data' is the array of product objects
        setProducts(data);
      })
      .catch((err) => {
        // Handle network errors or errors thrown above
        console.error("Fetch Error:", err);
        setError(err.message || "Could not connect to the product API.");
      })
      .finally(() => {
        // Stop loading regardless of success or failure
        setLoading(false);
      });
  }, []); // Runs only once when the component mounts

  // Implement a filter for the search functionality
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group products into rows of 4 for display
  const rows = [];
  for (let i = 0; i < filteredProducts.length; i += 4) {
    rows.push(filteredProducts.slice(i, i + 4));
  }

  // --- Conditional Rendering ---
  if (loading) {
    return (
      <div className="text-center mt-10 text-2xl">Loading products...</div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-600 text-2xl">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="markets-page">
      {/* Search Bar */}
      <div className="container mx-auto flex items-center rounded-full border-1 mt-3 h-22 w-180">
        <div className="ml-6">
          <Search />
        </div>
        <input
          className="flex-1 border-0 py-1 px-4 outline-0 ml-4 text-2xl"
          type="text"
          placeholder="Search Products and categories"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Dynamically Rendered Products */}
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex container mx-auto justify-between pt-10"
        >
          {row.map((product) => (
            <Market
              key={product.id}
              // CRUCIAL: Use product.image (the URL string from Django)
              image={product.image}
              name={product.name}
              price={product.price}
              description={product.description}
              // Assuming 'heart' is the local asset for the icon
              heart={heart}
              setCart={setCart}
              cart={cart}
            />
          ))}
        </div>
      ))}

      {console.log(rows)}

      {/* Display message if no products are found after filtering */}
      {filteredProducts.length === 0 && !loading && !error && (
        <div className="text-center mt-10 text-xl text-gray-500">
          No products found matching "{searchTerm}"
        </div>
      )}
    </div>
  );
}

export default Markets;
