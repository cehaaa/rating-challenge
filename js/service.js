import { closeModal } from "./modal.js";
import { totalRating } from "./totalRating.js";

class Service {
	constructor() {
		this.reviews = JSON.parse(localStorage.getItem("rating-app")) || [];
	}

	generateTemplate() {
		let template = "";

		this.reviews.forEach(review => {
			template += `
        <div class="review-container">
          <div class="rating-container">
            ${this.generateStars(review.rating)}
          </div>
          <div>
            <span class="bold">${review.rating}</span>,
            <span>${review.review}</span>
          </div>
        </div>
      `;
		});

		return template;
	}

	generateStars(rating) {
		let template = "";
		for (let i = 0; i < rating; i++) {
			template += `<div class="active">⭐</div>`;
		}

		if (rating <= 5) {
			for (let j = 0; j < 5 - rating; j++) {
				template += `<div>⭐</div>`;
			}
		}

		return template;
	}

	showReviews() {
		const reviewList = this.generateTemplate();
		reviewListContainer.innerHTML = reviewList;
	}

	create(data) {
		this.reviews.push(data);
		this.store();
		this.clear();
		totalRating.showTotalRating();
	}

	store() {
		localStorage.setItem("rating-app", JSON.stringify(this.reviews));

		this.showReviews();
	}

	clear() {
		stars.forEach(star => star.classList.remove("active"));
		starWrapper.classList.remove("disabled");
		review.value = "";

		closeModal();
	}
}

export const service = new Service();

export default service;
