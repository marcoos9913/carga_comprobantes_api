/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Comprobante_items } from './comprobantes-items.entity';
import { Productos_Movimientos } from './productos-movimientos.entity';


@Entity({name: 'comprobantes'})
export class Comprobante{

    constructor() {
        this.comprobantes_items = [];
        this.productos_movimiento = [];
    }
    
    @PrimaryGeneratedColumn()
    idComprobante : number
    @Column()
    idOperacion : number
    @Column()
    fechaComprobante : Date
    @Column()
    letraComprobante : string
    @Column()
    pvComprobante : number
    @Column()
    netoComprobante : number
    @Column()
    ivaComprobante : number
    @Column()
    totalComprobante : number
    @Column()
    idAgenda : number
    @Column()
    idFuenteVenta : number
    @Column()
    idEnvio : number
    @Column()
    idUsuarioAlta : number
    @Column()
    idUsuarioModifica : number
    @Column()
    idUsuarioBaja : number
    @Column()
    fechaUsuarioModifica : Date
    @Column()
    fechaBajaComprobante : Date
    @Column()
    CAEComprobante : string
    @Column()
    vtoCAEComprobante : string
    @Column()
    PercepcionIBComprobante : number
    @Column()
    ImpuestosInternosComprobante : number
    @Column()
    proformaComprobante : number
    @Column()
    forwarderComprobante : number
    @Column()
    trackingComprobante : number
    @Column()
    pesoOMedidasComprobante : number
    @Column()
    fechaSalidaComprobante : Date
    @Column()
    fechaEstimadaArriboComprobante : Date
    @Column()
    idProveedor : number
    @Column()
    facturacionPendienteComprobante : number
    @Column()
    idFactura : number
    @Column()
    idEmpresaFactura : number
    @Column()
    numeroFactura : number
    @Column()
    uuidComprobante : string
    @Column()
    errorCAEComprobante : string
    @Column()
    fechaContabilizacionComprobante : Date
    @Column()
    descripcionComprobante : string
    @Column()
    fechaComprobanteExterno : Date
    @Column()
    numeroComprobanteExterno : number
    @Column()
    idAgendaFacturacion : number
    @Column()
    idComprobanteNC : number
    @Column()
    Vinculo_Facturacion : number
    @Column()
    idFuenteVentaCierre : number
    @Column()
    idEstadoPercepcion : number
    @Column()
    Order_ID_Producteca : string

    comprobantes_items : Comprobante_items[]
    productos_movimiento : Productos_Movimientos[]
}