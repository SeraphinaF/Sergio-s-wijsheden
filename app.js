let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '“De liefde is als de wind. Je ziet hem niet, maar je voelt hem wel,” -Maître Sergio',                                                                 

    '“De liefde is als een boerderij. Je moet eerst zaaien voordat je kunt oogsten.” -Maître Sergio',
    
    '“Liefde is een vriendschap, op muziek gezet.” -Maître Sergio',
    
    '“Als een ongeluk in een klein hoekje zit, dan zit geluk overal” -Maître Sergio',
    
    '“Liefde is net als een spannend boek. Iedereen hoopt op een happy ending” -Maître Sergio"',
    
    '“Geluk kan je vermenigvuldigen door het te delen” -Maître Sergi',
    
    '“Als het leven een spel is, dan is de liefde de hoofdprijs” -Maître Sergio',
    
    '“Als je je eerste liefde vindt, dan is dat fantastisch. Maar we hopen allemaal vooral de laatste te vinden” -Maître Sergio',
    
   '“Iedereen heeft een koffer van het verleden. De sleutel is iemand te vinden die hem helpt uit te pakken” -Maître Sergio',	
];

btn.addEventListener('click', function(){
    quotes
    var randomQuotes = quotes[Math.floor(Math.random() *quotes.length)];
    output.innerHTML = randomQuotes
    
})