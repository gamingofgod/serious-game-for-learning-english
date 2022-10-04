class Tipos{
    constructor(tipo_id,tipo_nombre){
        this.tipo_id=tipo_id
        this.tipo_nombre=tipo_nombre
    }

    //ID
    get tipo_id(){
        return this.tipo_id;
    }
    set tipo_id(t_id){
        this.tipo_id= t_id;
    }

    //TIPO NOMBRE
    get tipo_nombre(){
        return this.tipo_nombre;
    }
    set tipo_nombre(t_n){
        this.tipo_nombre= t_n;
    }
}