class EstadisticaEstudiantes{
    constructor(estadisticaEstudiante_fechaprueba, estadisticaEstudiante_pp, estadisticaEstudiante_id, prueba_id, estudiante_id){
        this.estadisticaEstudiante_id= estadisticaEstudiante_id;
        this.estadisticaEstudiante_pp = estadisticaEstudiante_pp;
        this.estadisticaEstudiante_fechaprueba = estadisticaEstudiante_fechaprueba;
        this.estudiante_id = estudiante_id;
        this.prueba_id =prueba_id;
    }
    //estadisticas ID
       
    get estadisticaEstudiante_id(){
        return this.estadisticaEstudiante_id;
    }
    set estadisticaEstudiante_id(ee_id){
        this.estadisticaEstudiante_id = ee_id;
    }
    //estudiantes ID
       
    get estudiante_id(){
        return this.estudiante_id;
    }
    set estudiante_id(e_id){
        this.estudiante_id = e_id;
    }
    //pregunta ID
       
      get prueba_id(){
        return this.prueba_id;
    }
    set prueba_id(pr_id){
        this.prueba_id = pr_id;
    }
    
    //imagen
    get estadisticaEstudiante_pp(){
        return this.estadisticaEstudiante_pp;
    }
    set estadisticaEstudiante_pp(ee_pp){
        this.estadisticaEstudiante_pp = ee_pp;
    }

    //pregunta
    get estadisticaEstudiante_fechaprueba(){
        return this.estadisticaEstudiante_fechaprueba;
    }
    set estadisticaEstudiante_fechaprueba (ee_fp){
        this.estadisticaEstudiante_fechaprueba = ee_fp;
    }
}