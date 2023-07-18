import React from 'react'
import "../Style.css"

function header() {
  return (
    <div className='header-con'>
         
      <div className="header" >
        <div><img width={165}  src="https://www.flatheads.in/cdn/shop/files/flatheads-logo-new-hotizontal_180x_2x_bf74c8db-79f1-4904-b343-3b0e2681ec07_224x32.png?v=1647508945" /></div>
        <div>Shop All</div>
        <div>Not out Edition</div>
        <div>Shoes</div>
        <div>Classics</div>
        <div>About</div>
        <div>Help</div>
       
         <div className="sub-nav" >
            <div><img width={21}  src="https://pixlok.com/wp-content/uploads/2021/10/Search_Icon_0iuhvrtyuj-300x300.png" /></div>
            <div><img className="sub-nav-img" width={21} src="https://www.nicepng.com/png/detail/501-5010656_my-account-comments-my-account-icon-vector.png" /></div>
            <div><img src="https://www.svgrepo.com/download/43071/shopping-bag.svg" width={21} /></div>
         </div>
    </div>
    </div>
  )
}

export default header