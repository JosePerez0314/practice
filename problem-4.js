const empleados = [
    { id: 101, nombre: 'Ana', depto: 'IT', rango: 'Senior', sueldo: 3000, estado: 'activo', cuenta: '111-A' },
    { id: 102, nombre: 'Beto', depto: 'HR', rango: 'Senior', sueldo: 4000, estado: 'activo', cuenta: '222-B' }, // Depto incorrecto
    { id: 666, nombre: 'Evil Dev', depto: 'IT', rango: 'Senior', sueldo: 9000, estado: 'inactivo', cuenta: '666-X' }, // Inactivo y Sospechoso
    { id: 104, nombre: 'Dany', depto: 'IT', rango: 'Junior', sueldo: 1000, estado: 'activo', cuenta: '444-D' },
    { id: 105, nombre: 'Eli', depto: 'Ventas', rango: 'Junior', sueldo: 1500, estado: 'activo', cuenta: '555-E' },
    { id: 106, nombre: 'Fabio', depto: 'IT', rango: 'Senior', sueldo: 5000, estado: 'activo', cuenta: '777-F' }
];

const pagarEmpleados = empleados.filter((e) => e.depto === "IT" && e.estado === "activo");

const transferenciasBanco = pagarEmpleados.map((t) => {
    let sueldoNeto;

    if (t.rango === "Senior") {
        let bono = t.sueldo + ((t.sueldo * 20) / 100)
        sueldoNeto = (bono * 90) / 100;
        return `CUENTA ${t.cuenta} | MONTO: ${sueldoNeto} `;

    } else if (t.rango === "Junior") {
        sueldoNeto = (t.sueldo * 90) / 100;
        return `CUENTA ${t.cuenta} | MONTO: ${sueldoNeto} `;

    } else {
        return false;
    }
})

const sospechoso = empleados.find((e) => e.id === 666);

console.log(sospechoso)
