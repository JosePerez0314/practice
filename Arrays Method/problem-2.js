const nomina = [
    { id: 101, empleado: 'Carlos', depto: 'Ventas', salario: 3000, activo: true },
    { id: 102, empleado: 'Ana', depto: 'IT', salario: 5000, activo: true },
    { id: 103, empleado: 'Pedro', depto: 'Ventas', salario: 2500, activo: false },
    { id: 104, empleado: 'Luisa', depto: 'IT', salario: 4500, activo: true },
    { id: 105, empleado: 'Jorge', depto: 'RRHH', salario: 3200, activo: true },
    { id: 106, empleado: 'Maria', depto: 'IT', salario: 5200, activo: true }
];

// Problem 1

const empleadosItActivos = nomina.filter((n) => {
    if (n.depto === "IT" && n.activo === true) {
        return true;
    } else {
        return false;
    }
});

// Problem 2

const empleadoSalario = empleadosItActivos.map((e) => {
    const salarioNeto = (e.salario * 90) / 100

    return {
        nombre: e.empleado,
        salario: salarioNeto
    }

});

// Problem 3

const localizarEmpleado = nomina.find((e) => {
    return e.id === 105;
});

