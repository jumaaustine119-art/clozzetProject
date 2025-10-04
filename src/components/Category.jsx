




function Category({img, name}){
return(
    <div className="mx-2">
    <div className="bg-gray-300 rounded-full w-[7em] h-[6.8em] flex justify-center mx-4 my-4">
<img className="w-[55px]" src={img} alt={img}/>
</div>
<div className="mx-8 my-5">
    <h2>
        {name}
    </h2>
</div>


    </div>
)

}
export default Category