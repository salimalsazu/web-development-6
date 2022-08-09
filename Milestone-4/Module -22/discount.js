/*

1. if ticket number is less than 100, per ticket price : 100
2. if ticket number is more than 100, but less than 200, 1st 100 ticket will be 100tk rest tickets will 90 taka per pc. 


1st 100 ticket ---> 100tk
2nd 100 ticket ----> 90tk

3. if you purchase mor than 200 tickets 

first 100 ---> 100tk
101-200 ---> 90tk 
200+ ---> 70tk
 

*/

function ticketPrice(ticketQuantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if (ticketQuantity <= 100) {
        const price = ticketQuantity * first100Rate;
        return price;
    } else if (ticketQuantity <= 200) {
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    } else {
        const first100Price = first100Rate * 100;
        const second100Price = second100Rate * 100;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;
    }
}


const price = ticketPrice(350);
console.log('Ticket pirce is:', price);

