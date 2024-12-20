//import React from 'react'

export default function EmpSal() {
    const empData = [
      { Brand: "Redmi",   Owners:   "MR.Lucky",  MobileNo: "2222222", salary: 10000000 },
      { Brand: "Vivo", Owners:   "MR.Venu",   MobileNo: "3333333", salary: 35000000 },
      { Brand: "Samsung", Owners:   "Mr.Hanish", MobileNo: "4444444", salary: 25000000 },
      { Brand: "Apple",   Owners:   "Mr.Deepak", MobileNo: "5555555", salary: 65000000 },
      { Brand: "Oneplus",    Owners:   "Mr.Mani",   MobileNo: "6666666", salary: 55000000 },
    
    ];
  
    // () => ()
  
    return (
      <div>
        <img src="brand.jpeg" alt="brand.jpeg" />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Brand</th>
              <th scope="col">Owners</th>
              <th scope="col">MobileNo</th>
              <th scope="col">Salary</th>
            </tr>
          </thead>
          <tbody>
            {empData.map(
                (x)=>( 
                <tr>
                    <td>{x.Brand}</td>
                    <td>{x.Owners}</td>
                    <td>{x.MobileNo}</td>
                    <td>{x.salary}</td>
                  </tr>
                 )
            )}
           
          </tbody>
        </table>
      </div>
    );
  }