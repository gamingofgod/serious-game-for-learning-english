class Docentes{
    constructor(docente_id, docente_nombre,docente_mail, docente_contraseña,docente_sex, docente_foto, docente_estado){
        this.docente_id = docente_id;
        this.docente_nombre = docente_nombre;
        this.docente_contraseña= docente_contraseña;
        this.docente_estado = docente_estado;
        this.docente_foto = docente_foto;
        this.docente_mail = docente_mail;
        this.docente_sex = docente_sex;
    }
    //ID
    get docente_id(){
        return this.docente_id;
    }
    set docente_id(d_id){
        this.docente_id = d_id;
    }
    
    //nombre
    get docente_nombre(){
        return this.docente_nombre;
    }
    set docente_nombre(d_n){
        this.docente_nombre = d_n;
    }

    //contraseña
    get docente_contraseña(){
        return this.docente_contraseña;
    }
    set docente_contraseña (d_c){
        this.docente_contraseña = d_c;
    }

    //estado
    get docente_estado(){
        return this.docente_estado;
    }
    set docente_estado(d_e){
        this.docente_estado = d_e;
    }

    //foto
    get docente_foto(){
        return this.docente_foto;
    }
    set docente_foto(d_f){
        this.docente_foto = d_f;
    }

    //mail
    get docente_mail(){
        return this.docente_mail;
    }
    set docente_mail(d_m){
        this.docente_mail = d_m;
    }

    //sex
    get docente_sex(){
        return this.docente_sex;
    }
    set docente_sex(d_s){
        this.docente_sex = d_s;
    }

}