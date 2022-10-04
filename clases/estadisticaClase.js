class EstadisticaClases{
    constructor(estadisticaClase_id,estadisticaClase_fecha_prueba,estadisticaClase_puntaje_promedio_clase,clase_id,prueba_id){
        this.estadisticaClase_id=estadisticaClase_id
        this.estadisticaClase_fecha_prueba= estadisticaClase_fecha_prueba
        this.estadisticaClase_puntaje_promedio_clase = estadisticaClase_puntaje_promedio_clase
        this.clase_id = clase_id
        this.prueba_id= prueba_id
    }
    //ID
    get estadisticaClase_id(){
        return this.estadisticaClase_id;
    }
    set estadisticaClase_id(eC_id){
        this.estadisticaClase_id= eC_id;
    }

    //FECHA PRUEBA
    get estadisticaClase_fecha_prueba(){
        return this.estadisticaClase_fecha_prueba;
    }
    set estadisticaClase_fecha_prueba(eC_fp){
        this.estadisticaClase_fecha_prueba= eC_fp;
    }

    //PUNTAJE PROMEDIO CLASE
    get estadisticaClase_puntaje_promedio_clase(){
        return this.estadisticaClase_puntaje_promedio_clase;
    }
    set estadisticaClase_puntaje_promedio_clase(eC_ppc){
        this.estadisticaClase_puntaje_promedio_clase= eC_ppc;
    }

    //PUNTAJE PROMEDIO CLASE
    get estadisticaClase_puntaje_promedio_clase(){
        return this.estadisticaClase_puntaje_promedio_clase;
    }
    set estadisticaClase_puntaje_promedio_clase(eC_ppc){
        this.estadisticaClase_puntaje_promedio_clase= eC_ppc;
    }

    //ID CLASE
    get clase_id(){
        return this.clase_id;
    }
    set clase_id(c_id){
        this.clase_id= c_id;
    }

    //ID PRUEBA
    get prueba_id(){
        return this.prueba_id;
    }
    set prueba_id(p_id){
        this.prueba_id= p_id;
    }
}