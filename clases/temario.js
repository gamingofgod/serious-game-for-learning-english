class Temarios{
    constructor(temario_id,temario_nombre){
        this.temario_id=temario_id
        this.temario_nombre=temario_nombre
    }

    //ID
    get temario_id(){
        return this.temario_id;
    }
    set temario_id(te_id){
        this.temario_id= te_id;
    }

    //TEMARIO NOMBRE
    get temario_nombre(){
        return this.temario_nombre;
    }
    set temario_nombre(te_n){
        this.temario_nombre= te_n;
    }
}