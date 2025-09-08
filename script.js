// heart icon

const heartCountElement = document.getElementById('heart-ct');
const heartIcons = document.getElementsByClassName('heart-icon');

for(const heart of heartIcons){
    heart.addEventListener('click',function(){
        heartCountElement.innerText++;
    })
}


// coin button
const callButtons = document.querySelectorAll('.btn-call');
const coinCountElement = document.getElementById('coin-ct');
 callButtons.forEach(function(button){
    button.addEventListener('click', function(){
        
        const serviceName = button.getAttribute('data-service');
        const emergencyNumber = button.getAttribute('data-number');

        let coinCount = parseInt(document.getElementById('coin-ct').innerText);
        if(coinCount >= 20){
            coinCount = coinCount - 20;
            coinCountElement.innerText = coinCount;
            alert(`Calling ${serviceName}: ${emergencyNumber}...`)
        }
        else{
            alert('you do not have sufficient coins, you need at least 20 coins');
        }
    })
 } )


 // history
 