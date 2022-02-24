const review = [
  {
    id: 1,
    name: "Ayush Kumar Bhadani",
    stars: 4.5,
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quod incidunt totam est expedita officiis, similique quidem cumque! Quasi quas ullam magni.",
  },
  {
    id: 2,
    name: "Ranveer Kumar Singh",
    stars: 4,
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quod incidunt totam est expedita officiis, similique quidem cumque! Quasi quas ullam magni.",
  },
  {
    id: 3,
    name: "Brajesh Mishra",
    stars: 3.5,
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quod incidunt totam est expedita officiis, similique quidem cumque! Quasi quas ullam magni.",
  },
  {
    id: 4,
    name: "Khushi Kumari",
    stars: 4.5,
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quod incidunt totam est expedita officiis, similique quidem cumque! Quasi quas ullam magni.",
  },
  {
    id: 5,
    name: "Ritik Ranjan",
    stars: 4.5,
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quod incidunt totam est expedita officiis, similique quidem cumque! Quasi quas ullam magni.",
  },
];
const reviewSection = document.querySelector(".review-section");
let reveiwCount = 0;
let reviewAllCards = reviewItem(review);

function fillArr() {
  let arr = [];
  for (let index = 0; arr.length < 3; index++) {
    let random = Math.floor(Math.random() * 5) + 1;
    if (!arr.includes(random)) {
      arr.push(random);
    }
  }
  return arr;
}
function reviewItem(menuItem) {
  let reviewArr = fillArr();
  console.log(reviewArr);
  return menuItem.map((item) => {
    reveiwCount++;
    if (!reviewArr.includes(reveiwCount)) {
      return;
    }
    return `<div class="review-card">
            <div class="review-card-img">
              <img src="images/users-review.png" width="100px" height="auto" />
            </div>
            <div class="review-card-desc">
              <h3>${item.name}</h3>
              <div class="review-card-desc-star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <p>
                ${item.desc}
              </p>
            </div>
          </div>
    `;
  });
}
reviewAllCards = reviewAllCards.join("");
reviewSection.innerHTML = reviewAllCards;

document.querySelector(".menu-bar").addEventListener("click", () => {
  console.log("Clicked");
  document.querySelector("nav").classList.toggle("menu-toggle");
});
