function AdminPage() {
  return (
    <div className="border-2 border-gray-300 container mx-auto w-150 pt-8 pb-8">
      <div className="border-2 container mx-auto rounded w-100 h-15 border-gray-300 py-2">
        <input
          className="flex-1 border-0 rounded-full py-2 px-8 outline-0"
          type="text"
          placeholder="Product Name"
        ></input>
      </div>
      <div className="pt-8">
        <div className="border-2 container mx-auto rounded w-100 h-15 border-gray-300 py-2">
          <input
            className="flex-1 border-0 rounded-full py-2 px-8 outline-0"
            type="text"
            placeholder="Price"
          ></input>
        </div>
      </div>
      <div className="pt-8">
        <div className="border-2 container mx-auto rounded w-100 h-15 border-gray-300 py-2">
          <input
            className="flex-1 border-0 rounded-full py-2 px-8 outline-0"
            type="text"
            placeholder="Select Category"
          ></input>
        </div>
      </div>
      
      <div className="pt-8 ">
        <div className="flex border-2 container mx-auto rounded w-50 h-15 border-gray-300 py-2 ">
          <div>
          <input
            className="border-0 rounded-full py-2 px-8 outline-0"
            type="text"
            placeholder="Upload Product Image"
          ></input>
          </div>
            
            <p className="text-gray-400">No File Choosen</p>
          
          </div>
        </div>
      
      <div className="pt-8">
        <div className="border-2 container mx-auto rounded w-100 h-45 border-gray-300 py-2">
          <input
            className="flex-1 border-0 rounded-full py-2 px-8 outline-0"
            type="text"
            placeholder="Detailed Product Description"
          ></input>
        </div>
      </div>
      <div>
        <div className="pt-8 container mx-auto w-100">
          <button className="border rounded-full w-80 h-15 text-white bg-green-300">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
export default AdminPage;
