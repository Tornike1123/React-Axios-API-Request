import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import axios from "axios";

const Read = () => {
	const [apiData, setApiData] = useState([]);

	useEffect(() => {
		axios
			.get(`https://63ee5295d466e0c18bade944.mockapi.io/Crud`)
			.then((data) => {
				setApiData(data.data);
			});
	}, []);

	return (
		<div>
			<Table celled>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Id</Table.HeaderCell>
						<Table.HeaderCell>First Name</Table.HeaderCell>
						<Table.HeaderCell>Last Name</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{apiData.map((data) => {
						return (
							<Table.Row key={data.id}>
								<Table.Cell> {data.id}</Table.Cell>
								<Table.Cell>{data.firstName}</Table.Cell>
								<Table.Cell>{data.lastName}</Table.Cell>
							</Table.Row>
						);
					})}
				</Table.Body>
			</Table>
		</div>
	);
};

export default Read;
