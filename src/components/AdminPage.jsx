import React, { useState, useEffect } from 'react'; // MUST import useEffect

// Define your Django API endpoint URL for posting products
const PRODUCT_API_URL = 'http://127.0.0.1:8000/api/products/'; 
const CATEGORY_API_URL = 'http://127.0.0.1:8000/api/categories/'; // URL to fetch categories

function AdminPage() {
  // State for form inputs
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState(''); // Holds the Category ID
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null); 
  
  // State for categories list fetched from Django
  const [categoriesList, setCategoriesList] = useState([]); 
  
  // State for user feedback
  const [statusMessage, setStatusMessage] = useState(''); 
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- 1. Fetch Categories on Component Load ---
  useEffect(() => {
    fetch(CATEGORY_API_URL)
      .then(res => {
        if (!res.ok) throw new Error("Failed to load categories.");
        return res.json();
      })
      .then(data => {
        // Assume 'data' is an array of category objects: [{id: 1, name: "Dress"}, ...]
        if (Array.isArray(data)) {
          setCategoriesList(data);
        }
      })
      .catch(err => setStatusMessage(`Error loading categories: ${err.message}`));
  }, []); 
  // ---------------------------------------------


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCategoryChange = (e) => {
    // This value is now the category ID, which Django expects
    setCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Basic validation check
    if (!productName || !price || !category || !description || !file) {
        setStatusMessage('Error: All fields, including the image, are required.');
        return;
    }

    setIsSubmitting(true);
    setStatusMessage('Submitting product...');

    const formData = new FormData();
    
    formData.append('name', productName);
    formData.append('price', price);
    // CRITICAL: The value in 'category' is the ID fetched from the list
    // This key 'category' must match the ForeignKey field name in your Django model.
    formData.append('category', category); 
    formData.append('description', description);
    formData.append('image', file); 

    try {
      const response = await fetch(PRODUCT_API_URL, {
        method: 'POST',
        body: formData, 
      });

      if (response.ok) {
        const data = await response.json();
        // Use safe access in case 'id' is still missing from Django response
        const productId = data.id || 'N/A'; 
        setStatusMessage(`Success! Product "${data.name}" added (ID: ${productId}).`);
        
        // Clear form fields
        setProductName(''); setPrice(''); setCategory(''); setDescription(''); setFile(null);
      } else {
        const errorData = await response.json();
        const errorMessage = JSON.stringify(errorData);
        setStatusMessage(`Error: Failed to submit. Server details: ${errorMessage}`);
      }
    } catch (error) {
      setStatusMessage(`Network Error: Could not reach the server. ${error.message}`);
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto border-2 border-gray-300 rounded-lg p-8 bg-white shadow"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Add Product</h2>

      {/* Display Status Message */}
      {statusMessage && (
        <div className={`mb-4 p-3 rounded text-center ${statusMessage.includes('Success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {statusMessage}
        </div>
      )}

      {/* Product Name & Price (No changes) */}
      <div className="mb-6">
        <input type="text" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} className="w-full border border-gray-300 rounded-full py-4 px-8 outline-none" required/>
      </div>
      <div className="mb-6">
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full border border-gray-300 rounded-full py-4 px-8 outline-none" required/>
      </div>

      {/* Category Select (FIXED LOGIC) */}
      <div className="mb-6">
        <div className="w-full border border-gray-300 rounded-full py-4 px-8 outline-none flex items-center">
          <label htmlFor="category-select" className="mr-4">Choose a category:</label>
          <select 
            id="category-select" 
            name="category"
            value={category}
            onChange={handleCategoryChange} 
            className="flex-1 bg-transparent outline-none"
            required
            disabled={categoriesList.length === 0} // Disable if categories are loading
          >
            <option value="" disabled>
              {categoriesList.length > 0 ? '--Select an option--' : 'Loading categories...'}
            </option>
            
            {/* FIX 2: Map over the fetched categoriesList and use ID as value */}
            {categoriesList.map(cat => (
              <option 
                key={cat.id} 
                value={cat.id} // Sending the category ID to Django
              >
                {cat.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* File Upload & Description (No changes) */}
      <div className="mb-6">
        <label htmlFor="product-image" className="flex items-center justify-center border-2 border-gray-300 rounded-full py-4 px-8 cursor-pointer hover:bg-gray-50 transition">
          {file ? file.name : 'Choose Product Image File'}
        </label>
        <input type="file" id="product-image" onChange={handleFileChange} className="hidden" accept="image/*" required/>
      </div>
      <div className="mb-6">
        <textarea placeholder="Detailed Product Description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border border-gray-300 rounded-lg py-4 px-8 outline-none min-h-[100px]" required/>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-green-500 text-white rounded-full px-12 py-3 hover:bg-green-600 transition disabled:opacity-50"
          disabled={isSubmitting || categoriesList.length === 0} // Disable if submitting or categories aren't loaded
        >
          {isSubmitting ? 'Submitting...' : 'Submit Product'}
        </button>
      </div>
    </form>
  );
}

export default AdminPage;