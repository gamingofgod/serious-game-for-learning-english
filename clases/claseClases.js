class Clase {
    constructor(clase_id, docente_id, clase_nombre, clase_pptp){
        this.clase_id = clase_id;
        this.docente_id = docente_id;
        this.clase_nombre = clase_nombre;
        this.clase_pptp = clase_pptp;

        
    }
    //ID
    get clase_id(){
        return this.clase_id;
    }
    set clase_id(c_id){
        this.clase_id= c_id;
    }
    
    //nombre
    get clase_nombre(){
        return this.clase_nombre;
    }
    set clase_nombre(c_n){
        this.clase_nombre = c_n;
    }

    //pptp
    get clase_pptp(){
        return this.clase_pptp;
    }
    set clase_pptp (c_pptp){
        this.clase_pptp = c_pptp;
    }

    //docente ID
    get docente_id(){
        return this.docente_id;
    }
    set docente_id(d_id){
        this.docente_id = d_id;
    }

    

}