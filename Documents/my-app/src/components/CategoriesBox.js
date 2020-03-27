import React, { Component } from 'react';
import ItemCategory from '../components/ItemCategory'
class CategoriesBox extends Component{

    /* --- Aca arrancamos dandole el estado */
    constructor(props){
        super(props);
        this.state= {
            categories: []
        }
    }

    /* Funcion para llamar a la API, hacemos una func porq vamos a llamar a varias */

    apiCall(url, consecuencia){
        fetch(url)
            .then( response => response.json() )
            .then( data => consecuencia(data) )
            .catch( error => console.log(error))
    }

    /* Esta es la funcion consecuencia de "apiCall()" */

    mostrarProductos = (data)=>{
        
       this.setState(
           {categories :  data.metadata.categories}
        ) 
        
        
    }

    /* Cuando el componente carga, recien ahi llamamos a la API */
    componentDidMount(){
        console.log("Me monté!!");
        this.traerProductos() 
    }

    /* Aca va la funcion a la q llamamos desde el componentDidMount */
    traerProductos(){
        this.apiCall("http://localhost:3000/apis/products", this.mostrarProductos)
    }

    render(){
        return(
            
            <div className="col-lg-6 mb-4">						
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
            </div>
            <div className="card-body">
                <div className="row">
                
                {this.state.categories.map(item => (
                    <ItemCategory 
                    title = {item}/>        
          ))}
                
             </div>
            </div>
        </div>
    </div>
        )
}
}


export default CategoriesBox;
