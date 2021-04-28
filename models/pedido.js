const pool = require("./../utils/bd");
const TABLA_PEDIDO= "pedido";
const TABLA_USUARIO= "usuario";
const TABLA_FORMA_PAGO= "forma_pago";
const TABLA_ESTADO_PEDIDO = "estado_pedido";
const TABLA_TIPO_ENTREGA = "tipo_entrega";

const getPedidosByUsuario = async (idUsuario) =>{
    const query = "SELECT pedido.ID_Pedido, pedido.Fecha, forma_pago.FormaPago, estado_pedido.EstadoPedido, pedido.TotalPedido, pedido.DireccionEnvio FROM ?? INNER JOIN ?? ON pedido.FK_ID_FormaPago = forma_pago.ID_FormaPago INNER JOIN ?? ON pedido.FK_ID_EstadoPedido = estado_pedido.ID_EstadoPedido WHERE pedido.FK_ID_Usuario = ?";

    const params = [TABLA_PEDIDO,TABLA_FORMA_PAGO,TABLA_ESTADO_PEDIDO,idUsuario];
    const rows = await pool.query(query,params);
    return rows;

}

const single = async (id) =>{
    const query = "Select Categoria,Activo FROM ?? WHERE ID_Categoria = ?";
    const params = [TABLA_CATEGORIA,id];
    const rows = await pool.query(query,params);
    return rows;
}


module.exports = {getPedidosByUsuario,single}