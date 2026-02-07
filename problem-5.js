const transacciones = [
    { id: 'tx-01', concepto: 'Venta Licencia', monto: '$1,200.00', tipo: 'ingreso', estado: 'completado' },
    { id: 'tx-02', concepto: 'Servidor AWS', monto: '$450.50', tipo: 'gasto', estado: 'completado' },
    { id: 'tx-03', concepto: 'Venta Fallida', monto: '$2,000.00', tipo: 'ingreso', estado: 'rechazado' },
    { id: 'tx-04', concepto: 'Reembolso Cliente', monto: '$100.00', tipo: 'gasto', estado: 'completado' },
    { id: 'tx-05', concepto: 'Inversión Angel', monto: '$5,000.00', tipo: 'ingreso', estado: 'pendiente' }, // Pendiente no entra en caja aún
    { id: 'tx-06', concepto: 'Pago Nómina', monto: '$1,500.00', tipo: 'gasto', estado: 'completado' }
];

const estado = transacciones.filter((t) => t.estado === "completado");

const dineroGanado = estado.reduce((a, b) => {
    const dinero = b.monto.replace(/,/g, '').slice(1);
    return (a - parseFloat(dinero));


}, 0);


console.log(dineroGanado)