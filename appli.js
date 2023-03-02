const rating = document.querySelectorAll('.number');
const ratingAwarded = document.querySelector('.ratingChoose')

for (let i = 0; i < rating.length; i++) {
    rating[i].addEventListener('click', function () {
        ratingAwarded.innerHTML = i + 1
    })
}



const remove = document.querySelector('.submit'); 
remove.addEventListener('click', function () {
    let containerOff = document.querySelector('.container')
    containerOff.classList.replace('container', 'containerOff');

})

 
remove.addEventListener('click', function () {
    let ratingOn = document.querySelector('.ratingOff')
    ratingOn.classList.replace('ratingOff', 'rating')
})


