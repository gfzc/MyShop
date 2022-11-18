import React, { Fragment, useEffect } from 'react'
import { MDBDataTable } from 'mdbreact'

import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { clearError, deleteProduct, getAdminProducts} from '../../actions/productActions'
import {Link, useNavigate } from "react-router-dom"

export const ProductList = () => {
    const navigate= useNavigate()
    const alert= useAlert();
    const dispatch = useDispatch();

    const { loading, error, productos} = useSelector(state=> state.productos)

    const deleteProductHandler= (id)=> {
        const response=window.confirm("Esta seguro de querer borrar este producto?")
        if (response){
            dispatch(deleteProduct(id))
            alert.success("Producto eliminado correctamente")
            navigate("/dashboard")
           // window.location.reload(false)
        }
    }

    useEffect(() => {
        dispatch(getAdminProducts());

        if (error) {
            alert.error(error);
            dispatch(clearError())
        }

    }, [dispatch, alert, error])

    const setProducts = () => {
        const data = {
            columns: [
                {
                    label: 'Nombre',
                    field: 'nombre',
                    sort: 'asc'
                },
                {
                    label: 'Precio',
                    field: 'precio',
                    sort: 'asc'
                },
                {
                    label: 'Inventario',
                    field: 'inventario',
                    sort: 'asc'
                },
                {
                    label: 'Vendedor',
                    field: 'vendedor',
                    sort: 'asc'
                },
                {
                    label: 'Acciones',
                    field: 'actions',
                },
            ],
            rows: []
        }

        productos.forEach(product => {
            data.rows.push({
                nombre: product.nombre,
                precio: `$${product.precio}`,
                inventario: product.inventario,
                vendedor: product.vendedor,
                actions: <Fragment>
                    <Link to={`/producto/${product._id}`} className="btn btn-secundary py-1 px-2" >
                        <i className="fa fa-eye"> </i>  
                    </Link>

                    <Link to={`/updateProduct/${product._id}`} className="btn btn-warning py-1 px-2">
                    <i class="fa fa-pencil"></i>
                    </Link>

                    <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteProductHandler(product._id)}>
                        <i className="fa fa-trash"></i>
                    </button>
                    
                </Fragment>
            })
        })

        return data;
    }

    return (
        <Fragment>
            <MetaData title={'Todos los Productos'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <h1 className="my-5">Todos los Productos</h1>

                        {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> :(
                            <MDBDataTable
                                data={setProducts()}
                                className="px-3"
                                bordered
                                striped
                                hover
                            />
                        )}

                    </Fragment>
                </div>
            </div>

        </Fragment>
    )
}
export default ProductList
