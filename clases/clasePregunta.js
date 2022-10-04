class Preguntas {
    constructor(temario_id, pregunta_id, tipo_id, pregunta_imagen, pregunta_pregunta, pregunta_respuesta, pregunta_op1, pregunta_op2, pregunta_op3){
        this.temario_id = temario_id;
        this.tipo_id =tipo_id;
        this.pregunta_id = pregunta_id;
        this.pregunta_imagen = pregunta_imagen;
        this.pregunta_pregunta = pregunta_pregunta;
        this.pregunta_respuesta = pregunta_respuesta;
        this.pregunta_op1 = pregunta_op1;
        this.pregunta_op2 = pregunta_op2;
        this.pregunta_op3 = pregunta_op3;
    }
    //temario ID
       
    get temario_id(){
        return this.temario_id;
    }
    set temario_id(t_id){
        this.temario_id = t_id;
    }
    //tipo ID
       
    get tipo_id(){
        return this.tipo_id;
    }
    set tipo_id(ti_id){
        this.tipo_id = ti_id;
    }
    //pregunta ID
       
      get pregunta_id(){
        return this.pregunta_id;
    }
    set pregunta_id(p_id){
        this.pregunta_id = p_id;
    }
    
    //imagen
    get pregunta_imagen(){
        return this.pregunta_imagen;
    }
    set pregunta_id(p_i){
        this.pregunta_imagen = p_i;
    }

    //pregunta
    get pregunta_pregunta(){
        return this.pregunta_pregunta;
    }
    set pregunta_pregunta (p_p){
        this.pregunta_pregunta = p_p;
    }

    //respuesta
    get pregunta_respuesta(){
        return this.pregunta_respuesta;
    }
    set pregunta_respuesta(p_r){
        this.pregunta_respuesta = p_r;
    }

    //op1
    get pregunta_op1(){
        return this.pregunta_op1;
    }
    set pregunta_op1(p_op1){
        this.pregunta_op1 = p_op1;
    }

    //op2
    get pregunta_op2(){
        return this.pregunta_op2;
    }
    set pregunta_op2(p_op2){
        this.pregunta_op2 = p_op2;
    }
    //op1
    get pregunta_op3(){
        return this.pregunta_op3;
    }
    set pregunta_op3(p_op3){
        this.pregunta_op3 = p_op3;
    }
}