import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData'
import {useDispatch} from 'react-redux'
import { getProducts } from '../actions/producActions'

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(getProducts());

  }, [dispatch])

  return (
    <Fragment>
      <MetaData title={"Los mejores jugetes"}></MetaData>
        <br></br>
        <h2 id="encabezado_productos">Ultimos Productos</h2>
        <section id='productos' className='container mt-5'>
          <div className='row'>

             {/*Producto1 */}
            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                <div className='card p-3 rounded'>
                  <img className='card-img-top mx-auto' src='./images/imagen1.jpg' alt='Imagen1' />
                  <div className='card-body d-flex flex-column'>
                    <h5 id='titulo_producto'><a href='http://localhost:3000'>Producto Uno</a></h5>
                    <div className='rating mt-auto'>
                        <div className='rating-outer'>
                            <div className='rating-inner'></div>
                        </div>
                        <span id='No_opiniones'>5 Reviews</span>
                    </div>
                    <p className='card-text'>$100.000</p><a href='http://localhost:3000' id='view_btn' className='btn btn-block'>
                        Ver Detalle
                    </a>
                  </div>
                </div>
            </div>

            {/*Producto2 */}
            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                <div className='card p-3 rounded'>
                  <img className='card-img-top mx-auto' src='./images/imagen2.jpg' alt='Imagen2' />
                  <div className='card-body d-flex flex-column'>
                    <h5 id='titulo_producto'><a href='http://localhost:3000'>Producto Dos</a></h5>
                    <div className='rating mt-auto'>
                        <div className='rating-outer'>
                            <div className='rating-inner'></div>
                        </div>
                        <span id='No_opiniones'>2 Reviews</span>
                    </div>
                    <p className='card-text'>$50.000</p><a href='http://localhost:3000' id='view_btn' className='btn btn-block'>
                        Ver Detalle
                    </a>
                  </div>
                </div>
            </div>

            {/*Producto1 */}
            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                <div className='card p-3 rounded'>
                  <img className='card-img-top mx-auto' src='./images/imagen3.jpg' alt='Imagen3' />
                  <div className='card-body d-flex flex-column'>
                    <h5 id='titulo_producto'><a href='http://localhost:3000'>Producto Tres</a></h5>
                    <div className='rating mt-auto'>
                        <div className='rating-outer'>
                            <div className='rating-inner'></div>
                        </div>
                        <span id='No_opiniones'>10 Reviews</span>
                    </div>
                    <p className='card-text'>$200.000</p><a href='http://localhost:3000' id='view_btn' className='btn btn-block'>
                        Ver Detalle
                    </a>
                  </div>
                </div>
            </div>

            {/*Producto1 */}
            <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                <div className='card p-3 rounded'>
                  <img className='card-img-top mx-auto' src='./images/imagen4.jpg' alt='Imagen4' />
                  <div className='card-body d-flex flex-column'>
                    <h5 id='titulo_producto'><a href='http://localhost:3000'>Producto Cuatro</a></h5>
                    <div className='rating mt-auto'>
                        <div className='rating-outer'>
                            <div className='rating-inner'></div>
                        </div>
                        <span id='No_opiniones'>3 Reviews</span>
                    </div>
                    <p className='card-text'>$60.000</p><a href='http://localhost:3000' id='view_btn' className='btn btn-block'>
                        Ver Detalle
                    </a>
                  </div>
                </div>
            </div>

          </div>  
        </section>
    </Fragment>
  )
} 

export default Home
