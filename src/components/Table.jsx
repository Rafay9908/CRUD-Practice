import React, {useState} from "react";

function Table({ data }) {
  console.log(data, 'table data')

  return (
    <div className="w-[80%] mx-auto">
      <table className="border-separate border-spacing-10 text-left border table-auto my-10 w-full">
        <thead>
          <tr className="border">
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
          </tr>
        </thead>

        <tbody>
            {data.map((data, index) => (
                <tr key={index} className="border">
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.number}</td>
                <td>
                  <button className="bg-blue-500 py-2 px-4 rounded text-white">
                    Edit
                  </button>
                </td>
                <td>
                  <button className="bg-red-500 py-2 px-4 rounded text-white">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        
        </tbody>
      </table>
    </div>
  );
}

export default Table;