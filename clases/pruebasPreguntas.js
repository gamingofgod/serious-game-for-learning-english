class PruebasxPreguntas{
    constructor(PruebasxPregunta_id,pregunta_id,prueba_id){
        this.PruebasxPregunta_id=PruebasxPregunta_id
        this.pregunta_id=pregunta_id
        this.prueba_id=prueba_id
    }

    //ID
    get PruebasxPregunta_id(){
        return this.PruebasxPregunta_id;
    }
    set PruebasxPregunta_id(pxp_id){
        this.PruebasxPregunta_id= pxp_id;
    }

    //ID PREGUNTA
    get pregunta_id(){
        return this.pregunta_id;
    }
    set pregunta_id(p_id){
        this.pregunta_id= p_id;
    }


    //ID PRUEBA
    get prueba_id(){
        return this.prueba_id;
    }
    set prueba_id(p_id){
        this.prueba_id= p_id;
    }
}