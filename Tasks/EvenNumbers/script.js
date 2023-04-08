let evens = 'Even numbers: '
for(i = 2; i <= 50; i= i+2) {
    evens += i + ' '
}


console.info(evens)
document.getElementById('even-nos').innerHTML = evens
