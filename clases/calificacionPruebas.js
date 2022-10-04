class CalificacionPruebas{
    constructor(calificacionPrueba_id,calificacionPrueba_puntaje_prueba,estudiante_id,prueba_id){
        this.calificacionPrueba_id=calificacionPrueba_id
        this.calificacionPrueba_puntaje_prueba = calificacionPrueba_puntaje_prueba
        this.estudiante_id=estudiante_id
        this.prueba_id=prueba_id
    }

    //ID
    get calificacionPrueba_id(){
        return this.calificacionPrueba_id;
    }
    set calificacionPrueba_id(cP_id){
        this.calificacionPrueba_id= cP_id;
    }

    //PUNTAJE PRUEBA
    get calificacionPrueba_puntaje_prueba(){
        return this.calificacionPrueba_puntaje_prueba;
    }
    set calificacionPrueba_puntaje_prueba(cP_pp){
        this.calificacionPrueba_puntaje_prueba= cP_pp;
    }

    //ESTUDIANTE ID
    get estudiante_id(){
        return this.estudiante_id;
    }
    set estudiante_id(e_id){
        this.estudiante_id= e_id;
    }

    //ID PRUEBA
    get prueba_id(){
        return this.prueba_id;
    }
    set prueba_id(p_id){
        this.prueba_id= p_id;
    }
}