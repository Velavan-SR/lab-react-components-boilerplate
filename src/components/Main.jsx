import React from 'react'

const Main = ({imageData}) => {
  return (
    <div>
        {
          imageData.map(image=>{
            return(
              <div key={image.id} className="column">
                <img src={image.img} alt=""></img>
              </div>
            )
          })
        }
      </div>
  )
}

export default Main
