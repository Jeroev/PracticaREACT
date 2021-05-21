import React, {Fragment,  Component} from 'react';


export default class Formulario extends Component {

    constructor (props) {
        super (props)
        this.state = {
            nombre: [],
            Edad: [],
            Sex: [],
            Pet: [],
            Service: []
        }
        this.aggDatos = this.aggDatos.bind(this)
    }

    aggDatos = () => {
        var newname = document.getElementById("Name")
        let newname2 = this.state.nombre
        newname2.push(newname.value)

        var newage = document.getElementById("Age")
        let newage2 = this.state.Edad
        newage2.push(newage.value)

        var newsex = document.getElementById("Sex")
        let newsex2 = this.state.Sex
        newsex2.push(newsex.value)

        var newpet = document.getElementById("Pet")
        let newpet2 = this.state.Pet
        newpet2.push(newpet.value)

        var newservice = document.getElementById("Service")
        let newservice2 = this.state.Service
        newservice2.push(newservice.value)

        this.setState({ nombre: newname2 ,  Edad: newage2, Sex: newsex2, Pet: newpet2, Service: newservice2})
    }
    render () {
        const listName = this.state.nombre.map((nombre, index) => {
            return (
            <>
                {/* <li key={index}>{`${nombre} -- ${this.state.Edad[index]} -- ${this.state.Sex[index]}
                -- ${this.state.Pet[index]} -- ${this.state.Service[index]}`} </li> */}
                <table id="table">
                <colgroup>
                    <col span="2" id="table-colpri"/>
                    <col id ="table-col" />
                </colgroup>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Sexo</th>
                        <th>Mascota</th>
                        <th>Servicio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{nombre}</td>
                        <td>{this.state.Edad[index]}</td>
                        <td>{this.state.Sex[index]}</td>
                        <td>{this.state.Pet[index]}</td>
                        <td>{this.state.Service[index]}</td>
                    </tr>
                </tbody>
            </table>
            </>
            )
        })
        return (
            <Fragment>
                <main id="main">
                <section id="Regis">
                <form id="row">
                    <h1>Formulario</h1>
                    <div id="colocation">
                        <input type="text" placeholder="Nombre" id="Name"  name="nombre"></input>
                    </div>
                    <div id="colocation">
                        <input type="text" placeholder="Edad" id="Age" name="Edad"></input>
                    </div>
                    <select type="text" placeholder="Sex" id="Sex" name="Sex">
                        <option>Macho</option>
                        <option>Hembra</option>
                    </select>
                    <select type="text" placeholder="Pet" id="Pet" name="Pet">
                        <option>Perro</option>
                        <option>Gato</option>
                        <option>Hamster</option>
                        <option>Ave</option>
                    </select>
                    <select type="text" placeholder="Service" id="Service"  name="Service">
                        <option>Valoración</option>
                        <option>Urgencias</option>
                        <option>Hospitalización</option>
                    </select>
                    <input type="button" id="btn" value="Enviar" onClick={this.aggDatos}></input>
                </form>
                </section>
                <section id="NewList">
                <p id="description">Información agregada:</p>
                <table id= "container">{listName}</table>
                </section>
                </main>
            </Fragment>
        );
    }
}

