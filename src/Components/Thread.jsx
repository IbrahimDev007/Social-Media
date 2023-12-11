const Thread = ({ talk }) => {
	return (
		<div className="chat chat-start">
			<div className="chat-bubble text-white">{talk}</div>
		</div>
	);
};

export default Thread;
