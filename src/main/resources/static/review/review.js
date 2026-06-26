let reviews = document.querySelector('.reviews');
let userName = document.querySelector('#name').value;
const userRates = document.querySelectorAll('.star-img');
let userReview = document.querySelector('#reviewField').value;
const submitButton = document.querySelector('#submitReview');

let userRateIndicator = 0;

document.addEventListener('DOMContentLoaded',function(){
    fetch('/api/getUserReviews')
    .then(response => {
        if(!response.ok){
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.length === 0) {
            reviews.innerHTML = 'No reviews yet.'
            reviews.style.fontSize = '35px'
            reviews.style.padding = '20px'
        } else {
            data.forEach(e => {
                let review = document.createElement('div');
                review.classList.add('user-review')
                let userInfo = document.createElement('div');
                switch(Number(e.rate)) {
                    case 1:
                        review.innerHTML = `<div class="user-info">
                            ${e.name} | <div class="stars">
                                            <div class="starR" id="rate-1"><img src="../img/star-reviewed.png" alt="" class="star-img"></div>
                                        </div>
                        </div>
                        <div class="user-review-text">
                            ${e.review}
                        </div>`
                        reviews.append(review);
                        break;
                    case 2:
                        review.innerHTML = `<div class="user-info">
                            ${e.name} | <div class="stars">
                                            <div class="starR" id="rate-1"><img src="../img/star-reviewed.png" alt="" class="star-img"></div>
                                            <div class="starR" id="rate-2"><img src="../img/star-reviewed.png" alt="" class="star-img"></div>
                                        </div>
                        </div>
                        <div class="user-review-text">
                            ${e.review}
                        </div>`
                        reviews.append(review);
                        break;
                    case 3:
                        review.innerHTML = `<div class="user-info">
                            ${e.name} | <div class="stars">
                                            <div class="starR" id="rate-1"><img src="../img/star-reviewed.png" alt="" class="star-img"></div>
                                            <div class="starR" id="rate-2"><img src="../img/star-reviewed.png" alt="" class="star-img"></div>
                                            <div class="starR" id="rate-3"><img src="../img/star-reviewed.png" alt="" class="star-img"></div>
                                        </div>
                        </div>
                        <div class="user-review-text">
                            ${e.review}
                        </div>`
                        reviews.append(review);
                        break;
                    case 4:
                        review.innerHTML = `<div class="user-info">
                            ${e.name} | <div class="stars">
                                            <div class="starR" id="rate-1"><img src="../img/star-reviewed.png" alt="" class="star-img"></div>
                                            <div class="starR" id="rate-2"><img src="../img/star-reviewed.png" alt="" class="star-img"></div>
                                            <div class="starR" id="rate-3"><img src="../img/star-reviewed.png" alt="" class="star-img"></div>
                                            <div class="starR" id="rate-4"><img src="../img/star-reviewed.png" alt="" class="star-img"></div>
                                        </div>
                        </div>
                        <div class="user-review-text">
                            ${e.review}
                        </div>`
                        reviews.append(review);
                        break;
                    case 5:
                        review.innerHTML = `<div class="user-info">
                            ${e.name} | <div class="stars">
                                            <div class="starR" id="rate-1"><img src="../img/star-reviewed.png" alt="" class="star-img"></div>
                                            <div class="starR" id="rate-2"><img src="../img/star-reviewed.png" alt="" class="star-img"></div>
                                            <div class="starR" id="rate-3"><img src="../img/star-reviewed.png" alt="" class="star-img"></div>
                                            <div class="starR" id="rate-4"><img src="../img/star-reviewed.png" alt="" class="star-img"></div>
                                            <div class="starR" id="rate-5"><img src="../img/star-reviewed.png" alt="" class="star-img"></div>
                                        </div>
                        </div>
                        <div class="user-review-text">
                            ${e.review}
                        </div>`
                        reviews.append(review);
                        break;
                }
            });
        }
    })
})

userRates.forEach((userRate,index) => {
    function starsRating(){
        switch(index){
            case 0:
                userRates[0].setAttribute('src','../img/star-reviewed.png');
                userRates[1].setAttribute('src','../img/star-unreviewed.png');
                userRates[2].setAttribute('src','../img/star-unreviewed.png');
                userRates[3].setAttribute('src','../img/star-unreviewed.png');
                userRates[4].setAttribute('src','../img/star-unreviewed.png');
                userRateIndicator = 1;
                localStorage.setItem('userRateIndicator',userRateIndicator);
                break;
            case 1:
                userRates[0].setAttribute('src','../img/star-reviewed.png');
                userRates[1].setAttribute('src','../img/star-reviewed.png');
                userRates[2].setAttribute('src','../img/star-unreviewed.png');
                userRates[3].setAttribute('src','../img/star-unreviewed.png');
                userRates[4].setAttribute('src','../img/star-unreviewed.png');
                userRateIndicator = 2;
                localStorage.setItem('userRateIndicator',userRateIndicator);
                break;
            case 2:
                userRates[0].setAttribute('src','../img/star-reviewed.png');
                userRates[1].setAttribute('src','../img/star-reviewed.png');
                userRates[2].setAttribute('src','../img/star-reviewed.png');
                userRates[3].setAttribute('src','../img/star-unreviewed.png');
                userRates[4].setAttribute('src','../img/star-unreviewed.png');
                userRateIndicator = 3;
                localStorage.setItem('userRateIndicator',userRateIndicator);
                break;
            case 3:
                userRates[0].setAttribute('src','../img/star-reviewed.png');
                userRates[1].setAttribute('src','../img/star-reviewed.png');
                userRates[2].setAttribute('src','../img/star-reviewed.png');
                userRates[3].setAttribute('src','../img/star-reviewed.png');
                userRates[4].setAttribute('src','../img/star-unreviewed.png');
                userRateIndicator = 4;
                localStorage.setItem('userRateIndicator',userRateIndicator);
                break;
            case 4:
                userRates[0].setAttribute('src','../img/star-reviewed.png');
                userRates[1].setAttribute('src','../img/star-reviewed.png');
                userRates[2].setAttribute('src','../img/star-reviewed.png');
                userRates[3].setAttribute('src','../img/star-reviewed.png');
                userRates[4].setAttribute('src','../img/star-reviewed.png');
                userRateIndicator = 5;
                localStorage.setItem('userRateIndicator',userRateIndicator);
                break;
        }
    };
    userRate.addEventListener('click',starsRating);
});

submitButton.addEventListener('click',function(){
    userName = document.querySelector('#name').value;
    userReview = document.querySelector('#reviewField').value;

    if((userName === '' || /\d/.test(userName)) || userRateIndicator === 0 || userReview === '') {
        alert('Some of the fields are empty or incorrectly filled, please try again!')
    } else {
        fetch('/api/sendUserReview',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                name: userName,
                rate: userRateIndicator,
                review: userReview
            })
        })
        .then(response => response.json())
        .then(data => {
            location.reload()
        })
        .catch(error => {
            console.error(error);
        })
    }
})
