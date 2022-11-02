import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData'
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../actions/productActions'
import {Link} from 'react-router-dom'
import { useAlert } from 'react-alert'

export const Home = () => {
  const {loading, productos, error}  = useSelector(state => state.productos) 
  const alert=useAlert();

  const dispatch = useDispatch();
  useEffect(() =>{
    if(error){
        return alert.error(error)
    }  

    dispatch(getProducts());
    
  }, [dispatch])

  return (
    <Fragment>
      {loading ? <i class='fa fa-spinner fa-spin fa-3x fa-fw'></i> :( 
        <Fragment>
          <MetaData title={"Los mejores jugetes"}></MetaData>
        <br></br>
        <h1 id="encabezado_productos">Ultimos Productos</h1>
        <section id='productos' className='container mt-5'>
          <div className='row'>
              {productos && productos.map (producto =>(
                   <div key={producto._id} className='col-sm-12 col-md-6 col-lg-3 my-3'>
                   <div className='card p-3 rounded'>
                     <img className='card-img-top mx-auto' src={producto.imagen[0].url} alt={producto.imagen[0].url} />
                     <div className='card-body d-flex flex-column'>
                       <h5 id='titulo_producto'><Link to={`/producto/${producto._id}`}>{producto.nombre}</Link></h5>
                       <div className='rating mt-auto'>
                           <div className='rating-outer'>
                               <div className='rating-inner' style={{width: `${(producto.calificacion/5)*100}%`}}></div>
                           </div>
                           <span id='No_opiniones'>{producto.numCalificaciones} Reviews</span>
                       </div>
                       <p className='card-text'>${producto.precio}</p><Link to={`/producto/${producto._id}`} id='view_btn' className='btn btn-block'>
                           Ver Detalle
                           </Link>
                     </div>
                   </div>
               </div>
              ))}    
          </div>  
        </section>
        </Fragment>
      )}      
    </Fragment>
  )
} 

export default Home
