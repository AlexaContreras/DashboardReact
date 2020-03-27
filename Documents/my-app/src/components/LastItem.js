import React, { Component } from 'react';

class LastItem extends Component{

    /* --- Aca arrancamos dandole el estado */
    constructor(props){
        super(props);
        this.state= {
            name:"",
            price: "",
            description:"",
            category: "",
            image:""
        }
    }

    /* Funcion para llamar a la API, hacemos una func porq vamos a llamar a varias */

    apiCall(url, consecuencia){
        fetch(url)
            .then( response => response.json() )
            .then( data => consecuencia(data) )
            .catch( error => console.log(error))
    }
/* Funcion CONSECUENCIA */
    mostrarUltimoProducto = (data)=>{
        console.log(data);
        
       this.setState(
           {
            id: data.data[0].id,
            name: data.data[0].name,
            price: data.data[0].price,
            description: data.data[0].description,
            category : data.data[0].category.name,
            image: data.data[0].avatar
           }
        )  
    }

    /* Cuando el componente carga, recien ahi llamamos a la API */
    componentDidMount(){
        console.log("Me monté!!");
        this.traerUltimoProducto() 
    }

    /* Aca va la funcion a la q llamamos desde el componentDidMount */
    traerUltimoProducto(){
        this.apiCall("http://localhost:3000/apis/products", this.mostrarUltimoProducto)
    }


    render(){
        return(
            <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                       
                         <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width:"25rem"}} src={`http://localhost:3000/images/avatars/${this.state.image}`} alt="image dummy"/> 

                    </div>
                    <h3>{this.state.name}</h3>
                    <p>${this.state.price}</p>
                    <p>Category : {this.state.category}</p>
                    <p>{this.state.description}</p>
                    <a target="_blank" rel="nofollow" href={`http://localhost:3000/products/detail/${this.state.id}`}>Product detail</a>
                </div>
            </div>
        </div>
        )
    }
}

export default LastItem;