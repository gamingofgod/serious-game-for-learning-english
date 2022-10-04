class Estudiantes{
    constructor(estudiante_id, clase_id, estudiante_nombre, estudiante_ppp, estudiante_codigo){
        this.estudiante_id= estudiante_id;
        this.clase_id = clase_id;
        this.estudiante_nombre = estudiante_nombre;
        this.estudiante_ppp = estudiante_ppp;
        this.estudiante_codigo = estudiante_codigo;
    }

        //ID
        get estudiante_id(){
            return this.estudiante_id;
        }
        set estudiante_id(e_id){
            this.estudiante_id = e_id;
        }
        
        //Clase ID
        get clase_id(){
            return this.clase_id;
        }
        set clase_id(c_id){
            this.clase_id = c_id;
        }
    
        //nombre
        get estudiante_nombre(){
            return this.estudiante_nombre;
        }
        set estudiante_nombre (e_n){
            this.estudiante_nombre = e_n;
        }
    
        //ppp
        get estudiante_ppp(){
            return this.estudiante_ppp;
        }
        set estudiante_ppp(e_ppp){
            this.estudiante_ppp = e_ppp;
        }
    
        //codigo 
        get estudiante_codigo(){
            return this.estudiante_codigo;
        }
        set estudiante_codigo(e_c){
            this.estudiante_codigo = e_c;
        }
    
       

}