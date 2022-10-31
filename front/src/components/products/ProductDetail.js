import React, { Fragment } from 'react'
import MetaData from "../layout/MetaData"

export const ProductDetail = () => {
  return (
    <Fragment>
        <MetaData title="Pista Carros"></MetaData>
        <div className='row d-flex justify-content-around'>
            <div className='col-12 col-lg-5 img-fluid' id='imagen_producto'>
                <img src="../images/productos/pista_carros.jpg" alt="imagen_producto" height="350" width="350"></img>
            </div>
            <div className='col-12 col-lg-5 mt-5'>
                <h3>Pista De Carros Para Niños</h3>
                <p id='product_id'>Product #12345</p>
            </div>    
        </div>
    </Fragment>
  )
}
