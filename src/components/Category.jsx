




function Category({img, name}){
return(
    <div className="mx-2">
    <div className="bg-[#f0efef] rounded-full w-[100px] h-[100px] flex  items-center justify-center">
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