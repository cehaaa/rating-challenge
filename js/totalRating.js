import { countTotalRating } from "./countRating.js";

class TotalRating {
	showTotalRating() {
		totalRatingContainer.innerHTML = `${countTotalRating().toFixed(1)}`;
	}

	showTotalStars() {
		let template = "";
		for (let i = 0; i < Math.floor(countTotalRating()); i++) {
			template += `<div class="active">⭐</div>`;
		}

		if (Math.floor(countTotalRating()) <= 5) {
			for (let j = 0; j < 5 - Math.floor(countTotalRating()); j++) {
				template += `<div>⭐</div>`;
			}
		}

		totalRatingStar.innerHTML = template;
	}
}

export const totalRating = new TotalRating();

export default totalRating;
