numberArr.reduce((prev, cur, idx) => {
		return prev + cur * Math.pow(10, idx);
	}, 0)