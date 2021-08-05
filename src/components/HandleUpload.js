	function HandleUpload(e, compType, setUserDetails = '') {
		let file = e.target.files[0];
		let fileReader = new FileReader();
		fileReader.onload = () => {
			if(compType === 'rcc'){
				this.setState((prevState) => {
				return {
					...prevState,
					image: fileReader.result
				}
			  });
			}
			else{
				setUserDetails((prevState) => {
					return {
						...prevState,
					image: fileReader.result
					}
				});
			}
		}

		fileReader.readAsDataURL(file);



	}

export default HandleUpload;	