var deck = [];

$( document ).ready( function(){
  $( '#addCardButton' ).on( 'click', function(){
    console.log( 'in addCardButton on click');
    // create new card using the cardyCard constructor (below)
    var newCard = new cardyCard( $( '#numberIn' ).val(), $( '#suitIn' ).val() );
    // push the new card into the deck
    deck.push( newCard );
    console.log( 'deck:', deck );
    // display the deck on the DOM
    $( '#outputDiv' ).empty();
    // loop through the deck
    for (var i = 0; i < deck.length; i++) {
      // display each card as a p tag in
      $( '#outputDiv' ).append( '<p>'+ deck[i].number + ' of ' + deck[i].suit + '</p>' );
    } // end for
  }); // end function

  // card constructor
  function cardyCard( myNumber, mySuit ){
    console.log( 'in cardyCard:', myNumber, mySuit );
    // create a new object with the following properties:
    this.number = myNumber;
    this.suit = mySuit;
  } // end cardyCard
}); // end doc ready
