import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import MetaData from '../layout/MetaData'

export const Dashboard = () => {
    return (
        <Fragment>
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <h1 className="my-4">Dashboard</h1>

                        <Fragment>
                            <MetaData title={'Administracion'} />
                            {/*Tarjeta 1*/}
                            <div className="row pr-4">
                                <div className="col-xl-12 col-sm-12 mb-3">
                                    <div className="card text-white bg-dark o-hidden h-100">
                                        <div className="card-body">
                                            <div className="text-center card-font-size">Monto Total<br /> <b>$2.000.000</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Tarjeta 2*/}
                            <div className="row pr-4">
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-dark bg-transparent o-hidden h-100">
                                        <div className="card-body">
                                            <div className="text-center card-font-size">Productos<br /> <b>123</b></div>
                                        </div>
                                        <Link className="card-footer text-dark clearfix small z-1" to="/admin/products">
                                            <span className="float-left">Ver Detalles</span>
                                            <span className="float-right">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                {/*Tarjeta 3*/}
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-dark bg-transparent o-hidden h-100">
                                        <div className="card-body">
                                            <div className="text-center card-font-size">Pedidos<br /> <b>34</b></div>
                                        </div>
                                        <Link className="card-footer text-dark  clearfix small z-1" to="/admin/orders">
                                            <span className="float-left">Ver Detalles</span>
                                            <span className="float-right">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                {/*Tarjeta 4*/}
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-dark bg-transparent o-hidden h-100">
                                        <div className="card-body">
                                            <div className="text-center card-font-size">Usuarios<br /> <b>12</b></div>
                                        </div>
                                        <Link className="card-footer text-dark  clearfix small z-1" to="/admin/users">
                                            <span className="float-left">Ver Detalles</span>
                                            <span className="float-right">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>


                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-dark bg-transparent o-hidden h-100">
                                        <div className="card-body">
                                            <div className="text-center card-font-size">Agotados<br /> <b>20</b></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    

                </div>
            </div>

        </Fragment >
    )
}


    


export default Dashboard