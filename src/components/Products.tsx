//import React from 'react'

export default function Products() {
    const data = ["Deepak","Venu","Mani","Honey","Lucky"];

    //() => ()

  return <div>
    
    {
        data.map( (x)=>(<li>{x}</li>))
  
}
</div>
}
