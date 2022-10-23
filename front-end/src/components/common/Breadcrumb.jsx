import React from 'react'
import { Outlet } from 'react-router-dom'

const Breadcrumb = () => {
  return (
   <>
    <div>
    <section class="breadcrumb-option">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="breadcrumb__text">
                    <h4>Shop</h4>
                    <div class="breadcrumb__links">
                        <a href="./index.html">Homee</a>
                        <span>Shopp</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    </div>
    <Outlet/>
   </>
  )
}

export default Breadcrumb