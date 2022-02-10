import { countRating } from "./countRating.js";
import { closeModal, openModal } from "./modal.js";
import service from "./service.js";
import { totalRating } from "./totalRating.js";

window.onload = () => {
	service.showReviews();

	totalRating.showTotalRating();
	totalRating.showTotalStars();
};

addReviewButton.addEventListener("click", () => openModal(modal));
closeModalIcon.addEventListener("click", () => closeModal(modal));

stars.forEach((star, clickedIndex) => {
	star.addEventListener("click", () => {
		starWrapper.classList.add("disabled");
		stars.forEach((eachStar, eachIndex) => {
			if (eachIndex <= clickedIndex) {
				eachStar.classList.add("active");
			}
		});
	});
});

reviewForm.addEventListener("submit", e => {
	e.preventDefault();

	const reviewFormData = {
		rating: countRating(),
		review: review.value,
	};

	service.create(reviewFormData);
});
