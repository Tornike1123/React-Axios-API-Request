import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";

const Create = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	const nameHandler = (e) => {
		setFirstName(e.target.value);
	};
	const lastNameHandler = (e) => {
		setLastName(e.target.value);
	};

	const sendDataToAPI = (e) => {
		e.preventDefault();
		axios.post(`https://63ee5295d466e0c18bade944.mockapi.io/Crud`, {
			firstName,
			lastName,
		});
	};

	return (
		<div>
			<Form onSubmit={sendDataToAPI}>
				<Form.Field>
					<label>First Name</label>
					<input
						name="fname"
						onChange={nameHandler}
						placeholder="First Name"
					/>
				</Form.Field>
				<Form.Field>
					<label>Last Name</label>
					<input
						name="lname"
						onChange={lastNameHandler}
						placeholder="Last Name"
					/>
				</Form.Field>

				<Button type="submit">Submit</Button>
			</Form>
		</div>
	);
};

export default Create;
