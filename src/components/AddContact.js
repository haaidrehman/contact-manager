import { Component, createRef } from 'react';
import HandleUpload from './HandleUpload';

class AddContact extends Component {

	constructor(state, props) {
		super(state, props);

		this.state = {
			name: '',
			email: '',
			image: ''
		}

		this.imageTag = createRef();

		this.handleUpload = HandleUpload;

		console.log(this.props);
	}

	handleInputChange(type, e) {
		this.setState((state) => {
			return {
				[type]: e.target.value
			}
		});
	}

	addDetails(e) {

		e.preventDefault();
		if (this.state.name == '' || this.state.email == '' || this.state.image == '') {
			alert('All fields are mandatory');
			return;
		}

		this.props.addContactHandler(this.state);
		this.setState({
			name: '',
			email: '',
			image: ''
		});

		// Go back to home page
		this.props.history.push('/');

	}

	componentDidUpdate(){
		if(this.state.image !== ''){
			this.imageTag.current.src = this.state.image;
		}
	}

	render() {

		let { name, email } = this.state;
		return (
			<>
				
					<div id="PreviewImage">
						<img ref={this.imageTag} />
					</div>
					<div className="row">
						<div className="col m12 s12">
							<h2 className="remove-space-sm">Add Contact</h2>
							<form onSubmit={this.addDetails.bind(this)}>
								<div className="row mb-70">
									<div className="input-field col s12">
										<input type="file" className="validate" id="uploadBtn" onChange={(e) => this.handleUpload(e, 'rcc')} hidden />
										<label for="uploadBtn" className="file-upload-wrapper">
											<div>
												<i class="material-icons">add_a_photo</i>
											</div>
										</label>

									</div>
								</div>
								<div className="row">
									<div className="input-field col s12">
										<input type="text" className="validate" value={name} onChange={this.handleInputChange.bind(this, 'name')} />
										<label className="active" for="first_name2">Name</label>
									</div>

								</div>
								<div className="row">
									<div className="input-field col s12">
										<input type="text" className="validate" value={email} onChange={this.handleInputChange.bind(this, 'email')} />
										<label className="active" for="first_name2">Email</label>
									</div>
								</div>
								<button className="btn waves-effect waves-light" type="submit">
									Add
								</button>
							</form>

						</div>
					</div>
				
			</>
		);
	}
}

export default AddContact;