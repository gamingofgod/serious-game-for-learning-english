class Pruebas{
    constructor(prueba_id, prueba_numero_preguntas,prueba_fecha, prueba_puntaje_promedio_salon,temario_id, clase_id){
        this.prueba_id=prueba_id
        this.prueba_numero_preguntas=prueba_numero_preguntas
        this.prueba_fecha=prueba_fecha
        this.prueba_puntaje_promedio_salon=prueba_puntaje_promedio_salon
        this.temario_id=temario_id
        this.clase_id=clase_id
    }
    //ID
    get prueba_id(){
        return this.prueba_id;
    }
    set prueba_id(p_id){
        this.prueba_id= p_id;
    }

    //NUMERO PREGUNTAS
    get prueba_numero_preguntas(){
        return this.prueba_numero_preguntas;
    }
    set prueba_numero_preguntas(p_np){
        this.prueba_numero_preguntas= p_np;
    }

    //FECHA PRUEBA
    get prueba_fecha(){
        return this.prueba_fecha;
    }
    set prueba_fecha(p_f){
        this.prueba_fecha= p_f;
    }

    //PRUEBA PUNTAJE
    get prueba_puntaje_promedio_salon(){
        return this.prueba_puntaje_promedio_salon;
    }
    set prueba_puntaje_promedio_salon(p_pps){
        this.prueba_puntaje_promedio_salon= p_pps;
    }

    //ID TEMARIO
    get temario_id(){
        return this.temario_id;
    }
    set temario_id(t_id){
        this.temario_id= t_id;
    }

    //ID CLASE
    get clase_id(){
        return this.clase_id;
    }
    set clase_id(c_id){
        this.clase_id= c_id;
    }
}