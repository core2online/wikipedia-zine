var cards = $(".gallery-block");

for(var i = 0; i < cards.length; i++){
    var target = Math.floor(Math.random() * cards.length -1) + 1;
    var target2 = Math.floor(Math.random() * cards.length -1) +1;
    cards.hide();
    cards.eq(target).before(cards.eq(target2));
    cards.show(); 
}

var clickMe = document.querySelector('.click-me');

clickMe.addEventListener("click", function() {
    for(var i = 0; i < cards.length; i++){
        var target = Math.floor(Math.random() * cards.length -1) + 1;
        var target2 = Math.floor(Math.random() * cards.length -1) +1;
        cards.hide();
        cards.eq(target).before(cards.eq(target2));
        cards.show(); 
    }
})

