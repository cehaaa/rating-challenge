export const countRating = () => {
	let rating = 0;
	stars.forEach((star, index) => {
		if (star.classList.contains("active")) {
			rating = index + 1;
		}
	});
	return rating;
};

export const countTotalRating = () => {
	const reviews = JSON.parse(localStorage.getItem("rating-app"));

	let totalRating = 0;

	reviews.forEach(review => {
		totalRating += review.rating;
	});

	return totalRating / reviews.length;
};
