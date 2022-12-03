const rating = document.getElementById('rating-component');
const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();
    let vote = 0;
    vote = form.querySelector('[name="votes"]:checked').value;
    if (vote){
    alert('submitting value '+ vote);
    rating.innerHTML = `<div class="users-vote">You selected ${vote} out of 5</div>` +
                        '<h1 class="rating-header">Thank you!</h1>' +
                        '<div class="rating-text">We appreciate you taking the time to give a rating.' +
                        ' If you ever need more support, don’t hesitate to get in touch!</div>';
    rating.className += ' rating-thanks';
    }
});