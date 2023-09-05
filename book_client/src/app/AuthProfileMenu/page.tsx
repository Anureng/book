import React from 'react'

const page = () => {
    const isAuth =false;

    if(isAuth){
        return(
            <p>
                <button>logout</button>
            </p>
        )
    }
  return (
    <div>
        
        
    </div>
  )
}

export default page