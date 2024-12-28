import axios from "axios";
import React, {useState} from "react";

function Form() {
    const [formData, setFormData] = useState([{
        name: '',
        email: '',
        number: '',
      }]);

    const handleInputChange = (e) => {
        console.log("first")
        const {name, value} = e.target;

    //    const [name, value] = e.target;
       setFormData((prev)=>({
        ...prev, [name]:value
       }))
      
    }

    const handleSubmit = async () => {
        try{
           const response = await axios.post('http://localhost/phpmyadmin/',formData)
          console.log(formData);
        }
        catch(e){
            console.log(e)
        } 
    }

  return (
    <div className="w-[80%] mx-auto">
    <form action="" className="flex flex-row justify-between space-x-10" onSubmit={handleSubmit}>
      <input
      className="outline-none p-3 border border-spacing-1 rounded"
        type="text"
        name="name"
        value={formData.name}
        placeholder="Enter Your Name"
        onChange={handleInputChange}
      />
      <input
       className="outline-none p-3 border border-spacing-1 rounded"
        type="text"
        name="email"
        value={formData.email}
        placeholder="Enter Your Email"
        onChange={handleInputChange}
      />

      <input
       className="outline-none p-3 border border-spacing-1 rounded"
        type="text"
        name="number"
        value={formData.number}
        placeholder="Enter Your Number"
        onChange={ handleInputChange}
      />

      <button type="submit" className="bg-blue-500 py-2 px-10 rounded text-white">Add</button>
    </form>
    </div>
  );
}

export default Form;