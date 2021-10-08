let template = `<div class="col-12 col-ms-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <div class="container">
      <div class="mt-2">
        
          <form class="row g-3">
            <div class="col-md-3">
              <label for="inputCedula" class="form-label">No. Documento</label>
              <input type="text" class="form-control" id="inputCedula">
            </div>
            <div class="col-md-3">
              <label for="inputCliente" class="form-label">Cliente</label>
              <input type="text" class="form-control" id="inputCliente">
            </div>
            <div class="col-md-3">
              <label for="inputDierccion" class="form-label">Dirección</label>
              <input type="text" class="form-control" id="inputDierccion" placeholder="1234 Main St">
            </div>
            <div class="col-md-3">
              <label for="inputTelefono" class="form-label">No. Contacto</label>
              <input type="text" class="form-control" id="inputTelefono">
            </div>
            <div class="col-md-3">
              <label for="inputCity" class="form-label">Ciudad</label>
              <input type="text" class="form-control" id="inputCity">
            </div>
            <div class="col-md-3">
              <label for="inputVendedor" class="form-label">Vendedor</label>
              <select id="inputVendedor" class="form-select">
                <option selected>Seleccione...</option>
                <option>Jair Daniel Calle Sinitavé</option>
                <option>Abelardo Cotes</option>
                <option>Edward Fabian Parra Martínez</option>
                <option>Camilo Andrés Vargas Sogamoso</option>
                <option>Milton Julián Pulido</option>
              </select>
            </div>
            <div class="col-md-2">
              <label for="date" class="form-label">Fecha</label>
              <input size="16" type="text" class="form-control" id="datetime" readonly>
            </div>
            <div class="col-md-2">
              <label for="inputVendedor" class="form-label">Modalidad Pago</label>
              <select id="inputVendedor" class="form-select">
                <option selected>Seleccione...</option>
                <option>Efectivo</option>
                <option>Cheque</option>
                <option>Crédito</option>
                <option>Transferencia bancaria</option>
              </select>
            </div> 
            <div class="col-md-2">
              <label for="inputVendedor" class="form-label">Estado</label>
              <select id="inputVendedor" class="form-select">
                <option selected>Seleccione...</option>
                <option>Proceso</option>
                <option>Cancelada</option>
                <option>Entregada</option>
              </select>
            </div>         
          </form>
        
      </div>
    </div>
    <div class="container">
      <div class="mt-3">
      
        
          <div class="row g-3">
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="button" class="btn btn-secondary btn-sm" data-bs-toggle="modal"
                data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i class="bi bi-plus"></i> Nuevo
                producto</button>
              <button type="button" class="btn btn-secondary btn-sm" data-bs-toggle="modal"
                data-bs-target="#exampleModa2" data-bs-whatever="@fat"><i class="bi bi-person"></i> Agregar
                cliente</button>
              <button type="button" class="btn btn-secondary btn-sm" data-bs-toggle="modal"
                data-bs-target="#exampleModa3" data-bs-whatever="@getbootstrap"><i class="bi bi-shop-window"></i>
                Agregar producto</button>
              <button type="button" class="btn btn-secondary btn-sm" data-bs-toggle="modal"
                data-bs-target="#exampleModa4" data-bs-whatever="@mdo"><i class="bi bi-save"></i> Guaradar
                factura</button>
              <div id="liveAlertPlaceholder"></div>

              <!--Modal agregar nuevo producto-->
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Agregar nuevo producto</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="mb-2">
                          <label for="recipient-name" class="col-form-label">Código</label>
                          <input type="text" class="form-control" id="recipient-name" placeholder="Código del producto">
                        </div>
                        <div class="mb-2">
                          <label for="recipient-name" class="col-form-label">Nombre:</label>
                          <input type="text" class="form-control" id="recipient-name" placeholder="Nombre del producto">
                        </div>
                        <div class="mb-2">
                          <label for="message-text" class="col-form-label">Descripción:</label>
                          <textarea class="form-control" id="message-text"
                            placeholder="Descripción detallada del producto"></textarea>
                        </div>
                        <div class="mb-2">
                          <label for="recipient-name" class="col-form-label">Precio:</label>
                          <input type="text" class="form-control" id="recipient-name" placeholder="Valor unitario">
                        </div>
                        <div class="col-md-6">
                          <label for="inputVendedor" class="form-label">Estado</label>
                          <select id="inputVendedor" class="form-select">
                            <option selected>-- Seleccione estado --</option>
                            <option>Disponible</option>
                            <option>No disponible</option>
                          </select>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                      <button type="button" class="btn btn-primary">Guardar</button>

                    </div>
                  </div>
                </div>
              </div>

              <!-- Modal agregar cliente-->
              <div class="modal fade" id="exampleModa2" tabindex="-1" aria-labelledby="exampleModalLabe2"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabe2">Agregar cliente</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="mb-2">
                          <label for="recipient-name" class="col-form-label">Nombre:</label>
                          <input type="text" class="form-control" id="recipient-name"
                            placeholder="Nombre nuevo cliente">
                        </div>
                        <div class="mb-2">
                          <label for="recipient-name" class="col-form-label">Teléfono:</label>
                          <input type="text" class="form-control" id="recipient-name" placeholder="Celular o fijo">
                        </div>
                        <div class="mb-2">
                          <label for="recipient-name" class="col-form-label">Email:</label>
                          <input type="text" class="form-control" id="recipient-name"
                            placeholder="Correo electrónico personal o empresarial">
                        </div>
                        <div class="mb-2">
                          <label for="recipient-name" class="col-form-label">Dirección:</label>
                          <input type="text" class="form-control" id="recipient-name"
                            placeholder="Cra 13 No. 15A-21 Sur Mz 5 Casa 12">
                        </div>
                        <div class="col-md-6">
                          <label for="inputVendedor" class="form-label">Estado</label>
                          <select id="inputVendedor" class="form-select">
                            <option selected>-- Seleccione estado --</option>
                            <option>Activo</option>
                            <option>Inactivo</option>
                          </select>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                      <button type="button" class="btn btn-primary">Guardar</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Modal agregar productos-->
              <div class="modal fade" id="exampleModa3" tabindex="-1" aria-labelledby="exampleModalLabe3"
                aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabe3">Buscar producto</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <nav class="navbar navbar-light bg-light">
                      <div class="container-fluid">
                        <form class="d-flex">
                          <input class="form-control me-2" type="search" placeholder="Nombre del producto"
                            aria-label="Buscar">
                          <button class="btn btn-outline-secondary" type="submit">Buscar</button>
                        </form>
                      </div>
                    </nav>
                    <div class="modal-body">
                      <div class="table-responsive">
                        <table class="table">
                          <tbody>
                            <tr class="warning">
                              <th>Código</th>
                              <th>Producto</th>
                              <th><span class="pull-right">Cant.</span></th>
                              <th><span class="pull-right">Precio</span></th>
                              <th class="text-center" style="width: 36px;">Agregar</th>
                            </tr>
                            <tr>
                              <td>MD-05</td>
                              <td>Mouse USB</td>
                              <td class="col-1">
                                <input type="text" class="form-control form-control-sm" style="text-align:right"
                                  id="cantidad_4076" value="1">
                              </td>
                              <td class="col-2">
                                <input type="text" class="form-control form-control-sm" style="text-align:right"
                                  id="precio_venta_4076" value="9.99">
                              </td>
                              <td class="text-center"><a class="btn btn-outline-info" href="#"
                                  onclick="agregar('4076')"><i class="bi bi-cart-plus"></i></a></td>
                            </tr>


                          </tbody>
                        </table>
                        <div class="mb-2">
                          <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-end">
                              <li class="page-item disabled">
                                <a class="page-link">Prev</a>
                              </li>
                              <li class="page-item"><a class="page-link" href="#">1</a></li>
                              <li class="page-item"><a class="page-link" href="#">2</a></li>
                              <li class="page-item"><a class="page-link" href="#">3</a></li>
                              <li class="page-item">
                                <a class="page-link" href="#">Next</a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
    </div>
  </div>
    
    
`;
let grid = document.getElementById('naVentas');
grid.innerHTML += template;


    
    
    


