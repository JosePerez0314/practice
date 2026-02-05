const logsDelServidor = [
    { id: 1, tipo: 'info', mensaje: 'Usuario logueado', resuelto: true },
    { id: 2, tipo: 'error', mensaje: 'Fallo de conexión a BD', resuelto: false },
    { id: 3, tipo: 'warning', mensaje: 'Uso de memoria al 80%', resuelto: false },
    { id: 4, tipo: 'error', mensaje: 'Timeout en pasarela de pago', resuelto: false },
    { id: 5, tipo: 'error', mensaje: 'Variable indefinida en línea 40', resuelto: true },
    { id: 6, tipo: 'info', mensaje: 'Cronjob ejecutado', resuelto: true },
    { id: 7, tipo: 'error', mensaje: 'Archivo no encontrado', resuelto: false }
];

const alertasParaFrontend = logsDelServidor.filter((log) => {
    return log.tipo === "error" && log.resuelto === false;
});

const errores = alertasParaFrontend.map((a) => {
    return `ALERTA CRITICA: ${a.mensaje}`
});

// error de usuario solicitado (extra) 

const errorUsuario = logsDelServidor.find((u) => {
    return u.id === 7;
});

console.log(errores)

