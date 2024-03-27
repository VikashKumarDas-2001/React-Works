import React from 'react'

export const ArrayList = () => {

    const employee=[ 
        {name:"Das",email:"vdas@gmail.com",age:"22"},
        {name:"Sona",email:"sona@gmail.com",age:"19"},
        {name:"Elon Musk",email:"elon@gmail.com",age:"50"},
        
    ]

  return (
    <div>ArrayList using map function
        {
        employee.map((data)=>

        <h1>Name is :{data.name}, and Age is :{data.age}, and there email is :{data.email}</h1>

        )
}
    </div>
  )
}
