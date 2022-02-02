let upQuant = document.querySelector('#quantity-up')
let downQuant = document.querySelector('#quantity-down')
let totalQuant = document.querySelector('.total-quantity')
let totalPrice = document.querySelector('.total-price')
let totalNum = 0

upQuant.addEventListener('click', function(){
    totalNum += 1
    totalQuant.textContent = 'Quantity: ' + totalNum 
    totalPrice.textContent = 'Total Price: $' + (totalNum * 15.00)
})

downQuant.addEventListener('click', function(){
    if (totalNum > 0){
      totalNum -= 1
      totalQuant.textContent = 'Quantity: ' + totalNum 
      totalPrice.textContent = 'Total Price: $' + (totalNum * 15.00) 
    } else{
        console.log("We're sorry, you can't buy negative rocks!")
        totalNum = 0
        totalQuant.textContent = 'Quantity: ' + totalNum
    }
})

let remove = document.querySelector('.remove')
remove.addEventListener('click', function(){
    totalNum -= 1
    totalQuant.textContent = 'Quantity: ' + totalNum
    totalPrice.textContent = 'Total Price: $' + (totalNum * 15.00)
})
