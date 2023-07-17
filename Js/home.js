if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else{
    ready();

}


function ready(){
    var removeCartItemButton = document.getElementsByClassName('btn__danger')

for (var i = 0; i < removeCartItemButton.length; i++){
var button = removeCartItemButton[i]
button.addEventListener('click', removeCartItem)   
}

var quantityInput = document.getElementsByClassName('cart__quantity__input')
    for (var i = 0; i < quantityInput.length; i++){
        var input = quantityInput[i];
        input.addEventListener('change', quantityChanged)
    }
}


function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1
    }

    updateCartTotal()
}


function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart__items')[0]
   var cartRows = cartItemContainer.getElementsByClassName('cart__row2')
   let total = 0
   for (var i = 0; i < cartRows.length; i++){
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName('cart__price')[0]
    var quantityElement = cartRow.getElementsByClassName('cart__quantity__input')
    [0]

    var price = parseFloat(priceElement.innerText.replace('₦', ''))
    var quantity = quantityElement.value
    console.log(total + price * quantity)
    total = total + (price * quantity)
   }
   
   document.getElementsByClassName('cart__total__price')[0].innerText = '₦'+ total
   total = Math.round(total * 100) / 100
}


// SIGN OUT CONTAINER STYLE

const signOutIcon = document.querySelector('#sign__out__icon2')
const signOutCon = document.querySelector('#sign__out__container')

signOutIcon.addEventListener('click', ()=>{
    signOutCon.style.display ='block';
    setTimeout(() => {
        signOutCon.style.display ='none';
    }, 2000);
});


var modal = document.getElementsByClassName('modal')
var signOutButton2 = document.getElementsById('sign__out__button')
signOutButton2.addEventListener('click', () =>{
    modal.style.display = 'none';
})