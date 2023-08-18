const List = ({id, title, cont}) =>{


	return(
		<>
			<div className="sec_list">
				<div className="inner">
					<div className="list">
						<div className="list-left">
							<video autoPlay loop muted playsInline width="100%">
									<source src={id}/>
							</video>
						</div>
						<div className="list-right">
							<h2 className="list_title">{title}</h2>
							<p className="list_p">{cont}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default List;