// import React from 'react'
import { Circles, ThreeDots } from 'react-loader-spinner'


const Spinner = () => {
  return (
    <div>
      <ThreeDots
  visible={true}
  height="80"
  width="80"
  color="#E89578"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    {/* <p >Loading...</p>  */}
    </div>
  )
}

export default Spinner
