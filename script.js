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
            alert(`Calling ${serviceName}: ${emergencyNumber}...`);

            addHistoryEntry(serviceName,emergencyNumber);
        }
        else{
            alert('❌ you do not have sufficient coins, you need at least 20 coins.');
        }
    })
 } )


 // history
 const historyContainer = document.getElementById('history-container');
 const btnClear = document.getElementById('btn-clear');

 function addHistoryEntry(serviceName, emergencyNumber){
    const currentTime = new Date().toLocaleTimeString();

    const newHistoryEntry = document.createElement('div');
    newHistoryEntry.classList.add('bg-[#DFEFFF]', 'flex', 'p-5', 'rounded-2xl', 'mx-3', 'justify-between', 'items-center','mb-3','gap-12')

    newHistoryEntry.innerHTML = `
                <div>
                    <h1 class="font-semibold text-sm">${serviceName}</h1>
                    <p class="text-gray-500 text-sm">${emergencyNumber}</p>
                </div>
                <div>
                    <p class="text-sm">${currentTime}</p>
                </div>
    `;
    historyContainer.appendChild(newHistoryEntry);
 }

 if(btnClear){
    btnClear.addEventListener('click',function(){
        historyContainer.innerHTML = '';
    }
)}


// copy

const copyButtons = document.querySelectorAll('.btn-copy');
const copyCountElement = document.getElementById('copy-ct');

for(const copy of copyButtons){
    copy.addEventListener('click', function(){

        const phoneNumber = copy.getAttribute('data-copy');
        alert(`The number ${phoneNumber} has been copied!`)


        let currentCopyCount = parseInt(copyCountElement.innerText);
        currentCopyCount++;
        copyCountElement.innerText = currentCopyCount;
    })
}