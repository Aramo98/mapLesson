import { useState } from "react"

function CreateCar({setCars}){
const [name,setName] = useState("")
const [price,setPrice] = useState("")
const [image,setImage] = useState("");
const [error,setError] = useState("")
const create = (e)=>{
    e.preventDefault();
if (!name||!price||!image) {
    setError("Please Write all Boxes")
}else{
    setError("")
    setCars(prev=> [...prev,{id:prev.length+1,name,price,image}])
}

}
return(
<>
<form action="">
    <input type="text" placeholder="Name"  value={name}  onChange={e => setName(e.target.value)}/>
    <input type="number" placeholder="Price"  value={price}  onChange={e => setPrice(e.target.value)}/>
    <input type="text"  placeholder="Image" value={image}  onChange={e => setImage(e.target.value)}/>
    <button onClick={create}>Create</button>
</form>

{error}
</>
)
}
export default CreateCar