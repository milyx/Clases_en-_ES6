class Cliente {
    constructor(nombre,impuesto){
        this.__nombre = ()=> nombre
        this.__impuesto = ()=> impuesto
    }
    get nombre(){
        return this.__nombre
    }
    set nombre(nombre){
    this.__nombre = () => nombre
    }   
    calcularImpuesto(){
      const impuesto = (this.__impuesto().montoBrutoAnual - this.__impuesto().deducciones) * 0.21
      return (impuesto)
    }
}

export default Cliente  