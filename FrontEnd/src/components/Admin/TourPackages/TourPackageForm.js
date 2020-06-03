import React from 'react'

const TourPackageForm = (props) => {
    const {title,country,description,price} = props.data;

    return (
        <div  className="card" style={{"width": "60rem","padding":"5px"}}>
            <form>
				<div className="form-group">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						className="form-control"
						id="title"
						aria-describedby="title"
						placeholder="Enter title"
						name="title"
						value={title}
						onChange={props.handleChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="country">Country</label>
					<input
						type="text"
						className="form-control"
						id="country"
						placeholder="enter country"
						name="country"
						value={country}
						onChange={props.handleChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="description">Description</label>
					<input
						type="text"
						className="form-control"
						id="description"
						placeholder="description"
						name="description"
						value={description}
						onChange={props.handleChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="price">Price</label>
					<input
						type="text"
						className="form-control"
						id="price"
						placeholder="enter price"
						name="price"
						value={price}
						onChange={props.handleChange}
					/>
				</div>

				<button
					onClick={props.submitHandler}
					className="btn btn-primary"
				>
					Submit
				</button>
			</form>
        </div>
    )
}
export default  TourPackageForm;