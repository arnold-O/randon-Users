import React from 'react'

export default function List({dataset,  fetchData}) {
  return (
    <div className='list-userContsiner'>
     
        {
            dataset.map((item)=>{
                const {cell,id,name, email, gender, dob, picture} = item

      return <div key={id.value}>
        <img src={picture.large} alt="" className='pictureContainer' />

        <div className='userDetails-Container'>
            <div>
            <p className='title-Details'>Name</p>
            <p>{name.title}, {name.first}</p>
            </div>
            <div>
            <p className='title-Details'>Age</p>
            <p>{dob.age}yrs</p>
            </div>
            <div>
            <p className='title-Details'>Phone Number</p>
            <p>{cell}</p>
            </div>
        </div>
        <div>
            <button onClick={()=>fetchData()}>Not Interested</button>
        </div>
      </div>
      
    })
  }
  

          
    </div>
  )
}
