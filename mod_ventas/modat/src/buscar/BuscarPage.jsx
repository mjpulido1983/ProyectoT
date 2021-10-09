import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './BuscarStyle.css';


function BuscarPage() {

    return (
        <Fragment>

            <div className="container">
                <div className="mt-3">
                    <div className="row">
                        <nav className="navbar navbar-light navbar-buscar">
                            <div className="col">
                                <div className="container-fluid">
                                    <a className="navbar-brand"><i className="bi bi-search"></i> Buscar factura
                                    </a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="p-0 flex-grow-1 "><Link to = "/ventas"
                                    className="btn btn-outline-secondary position-absolute top-0 end-0"><i className="bi bi-plus-circle"></i> Nueva Factura
                                </Link>
                              
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="mt-2">
                    <div className="row">
                        <form className="row g-3">
                            <div className="col-md-2 control-label">
                            </div>
                            <div className="col-md-6 control-label">
                                <input className="form-control me-2" type="search"
                                    placeholder="Ingrese el nombre del cliente o el número de la factura" aria-label="Buscar" />
                            </div>
                            <div className="col-md-3">
                                <button className="btn btn-outline-secondary" type="submit"><i className="bi bi-search"></i>Buscar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="mt-5">
                    <div className="outer_div">
                        <div className="table-responsive mt-2">
                            <table className="table">
                                <tbody>
                                    <tr className="navbar-buscar">
                                        <th>#</th>
                                        <th>Fecha</th>
                                        <th>Cliente</th>
                                        <th>Vendedor</th>
                                        <th>Estado</th>
                                        <th className="text-end">Total</th>
                                        <th className="text-end">Acciones</th>

                                    </tr>
                                    <tr>
                                        <td>327</td>
                                        <td>02/10/2021</td>
                                        <td>
                                            <a href="#" data-bs-toggle="tooltip" data-bs-html="true" title="">
                                            </a>
                                        </td>
                                        <td>Abelardo Cotes</td>
                                        <td><span className="label label-success">Pagada</span></td>
                                        <td className="text-end">19,631.48</td>
                                        <td className="text-end">

                                            <div className="d-flex justify-content-md-end">
                                                <div className="btn-group" role="group" aria-label="Basic example">
                                                    <Link to ="/modventas" className="btn btn-warning" title="Editar factura"><i
                                                        className="bi bi-pencil"></i></Link>

                                                    <a href="#" className="btn btn-danger" title="Borrar factura" onclick="eliminar('327')"><i
                                                        className="bi bi-trash"></i> </a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>


                            <div className="d-flex justify-content-md-end">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="disabled page-item"><span><a className="page-link">‹ Anterior</a></span></li>
                                        <li className="active page-item"><a className="page-link">1</a></li>
                                        <li className="page-item"><a className="page-link" href="javascript:void(0);" onclick="load(2)">2</a></li>
                                        <li className="page-item"><span><a className="page-link" href="javascript:void(0);" onclick="load(2)">Siguiente
                                            ›</a></span></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </Fragment >
    )
}

export default BuscarPage;
