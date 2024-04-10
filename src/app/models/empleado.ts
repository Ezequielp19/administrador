export class empleado {
    _id?: number;
    nombre: string;
    apellido: string;
    salario: number;
    direccion: string;
    telefono: number;

    constructor(nombre: string, apellido: string, salario: number, direccion: string, telefono: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.salario = salario;
        this.direccion = direccion;
        this.telefono =telefono;
    }

}