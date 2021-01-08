import React from 'react'

export default function FormUi(props) {
    return (
        <div>
      <div className="container-contact100">
			<form className="contact100-form validate-form">
				<span className="contact100-form-title">
					Send Us A Message
				</span>


				<div className="wrap-input100 validate-input" data-validate="Name is required">
					<label className="label-input100" for="name">Full name</label>
                    <input 
                    id="name" 
                    className="input100" 
                    type="text" 
                    name="Name" 
                    onChange={props.handleOnChange}
                    placeholder="Enter your name..."/>
					<span className="focus-input100"></span>
				</div>


				<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<label className="label-input100" for="email">Email Address</label>
                    <input 
                    id="email" 
                    className="input100" 
                    type="text" 
                    name="Email"
                    onChange={props.handleOnChange} 
                    placeholder="Enter your email..."/>
					<span className="focus-input100"></span>
				</div>

				<div className="wrap-input100">
					<div className="label-input100">What do you need?</div>
					<div>
                        <select className="js-select2" 
                        id='js-select2' 
                        name="Task"
                        onChange={props.handleOnChange}>
							<option value="">Please chooses</option>
							<option value="UI/UX Design">UI/UX Design</option>
							<option value="eCommerce Bussiness">eCommerce Bussiness</option>
							<option value="Online Services">Online Services</option>
						</select>
						<div className="dropDownSelect2"></div>
					</div>
					<span className="focus-input100"></span>
				</div>

				<div className="wrap-input100 validate-input" data-validate = "Message is required">
					<label className="label-input100" for="message">Message</label>
                    <textarea 
                    id="message" 
                    className="input100" 
                    name="Message"
                    onChange={props.handleOnChange} 
                    placeholder="Type your message here..."></textarea>
					<span className="focus-input100"></span>
				</div>

				<div className="container-contact100-form-btn">
                    <button 
                    type="button" 
                    data-toggle="modal" 
                    data-target="#staticBackdrop"
                    onClick={props.handleOnClick}
                    className="contact100-form-btn">
						Send
					</button>
				</div>

				<div className="contact100-form-social flex-c-m">
					<a href="localhost:3000" className="contact100-form-social-item flex-c-m bg1 m-r-5">
						<i className="fa fa-facebook-f" aria-hidden="true"></i>
					</a>

					<a href="localhost:3000" className="contact100-form-social-item flex-c-m bg2 m-r-5">
						<i className="fa fa-twitter" aria-hidden="true"></i>
					</a>

					<a href="localhost:3000" className="contact100-form-social-item flex-c-m bg3">
						<i className="fa fa-youtube-play" aria-hidden="true"></i>
					</a>
				</div>
			</form>

			{/* <div className="contact100-more flex-col-c-m" style={"background-image: url('images/bg-01.jpg')"}>
			</div> */}
		</div>
	
	</div>
    )
}
