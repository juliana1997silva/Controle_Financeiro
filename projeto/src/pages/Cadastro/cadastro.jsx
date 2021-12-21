import React, {Component } from "react";
import api from '../../services/api'
import { Link } from "react-router-dom";
import styles from './styles.css'
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import $ from 'jquery'
import Swal from 'sweetalert2'


class Cadastro extends Component {

/* CONEXÃO POST PARA REGISTRAR AS DESPESAS E GANHOS */
  handleSubmit = event => {
    event.preventDefault();


    const dados = $('#myForm').serialize();

    console.log(dados)

    api.post('/users', dados, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
        Swal.fire({
          icon: 'success',
          title: 'Registro realizado',
          text: 'Parabens, registro realizado com sucesso !'
        }).then( function(){
          window.location.reload()
        })

      })
      .catch(res => {
        Swal.fire({
          icon: 'error',
          title: 'Tente Novamente',
          text: 'Ocorreu um erro, favor realizar o registro novamente.'
        })
      })
  }
 
  render() {
    return (
      <>

        <div className="col-12 d-flex justify-content-center mt-5">

          <div className="card col-4">
            <div>
              <Link to='/'>
                <IconButton aria-label="delete">
                  <ArrowBackIcon color="primary" />
                </IconButton>
              </Link>

            </div>

            <div className="card-body d-flex justify-content-center p-4">
              {/* formulario para cadastro de receita e despesas do estabelecimento */}
              <form method="post" id="myForm" onSubmit={this.handleSubmit}  >
                <p className="text-center text-primary" id="title">Registros</p>
                <div className="mt-4">
                  <label htmlFor="tipo">Tipo</label>
                  <select className="form-select" name="tipo" defaultValue={''}>
                    <option value="">Selecione</option>
                    <option value="Receita">Receita</option>
                    <option value="Despesa">Despesa</option>
                  </select>
                </div>
                <div className="mt-3">
                  <label htmlFor="descricao">Descrição: </label>
                  <input type="text" className="form-control" id="descricao" name="descricao" />
                </div>
                <div className="row mt-3">
                  <div className="col-6">
                    <label htmlFor="valor">Valor (R$): </label>
                    <input type="text" className="form-control" id="valor" name="valor" />
                  </div>
                  <div className="col-6">
                    <label htmlFor="data">Data: </label>
                    <input type="date" className="form-control" id="data" name="data" />
                  </div>
                </div>
                <div id="footer">
                  <button type="reset" className="btn btn-secondary" id="btn" >Cancelar</button>
                  <button type="submit" className="btn btn-primary" id="btn">Registrar</button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </>

    );
  }

}
export default Cadastro