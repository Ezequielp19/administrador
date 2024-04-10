export class compania {
    _id?: number;
    nombre: string;
    email: string;
    telefono: number;
    direccion: string;

    constructor(nombre: string, email: string, telefono: number, direccion: string) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.direccion = direccion;
    }

}