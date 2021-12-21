import React, { useState, useEffect} from 'react';
import api from '../../services/api';
import styles from './styles.css';
import { Link } from 'react-router-dom';

function Home() {
	const [ user, setUser ] = useState([]);

	useEffect(() => {
		api
			.get('/users')
			.then((response) => {
				setUser(response.data.users);
				console.log(response.data.users);
			})
			.catch((err) => {
				console.error('ops! ocorreu um erro' + err);
			});
	}, []);

	return (
		<div>
			<div className="card" id='cabecalho'>
				<div className="card-body">
					<Link to="/cadastro">
						<button className="btn btn-primary">Cadastrar</button>
					</Link>
				</div>
				<div>
					<h3>Controle de Receita e Despesas</h3>
				</div>
			</div>
			<div />
			<div className="card" id="tabela">
				<div className="card-body">

					<table className="table table-striped">
						<thead>
							<tr>
								<th scope="col">Tipo</th>
								<th scope="col">Descrição</th>
								<th scope="col">Valor</th>
								<th scope="col">Data</th>
							</tr>
						</thead>
						{user.map((users) => {
							return (
								<tbody>
									<tr>
										<th scope="row">{users.tipo}</th>
										<td>{users.descricao}</td>
										<td>R$ {users.valor}</td>
										<td>{users.data.split('-').reverse().join('/')}</td>
									</tr>
								</tbody>
							);
						})}
					</table>
				</div>
			</div>
		</div>
	);
}

export default Home;
