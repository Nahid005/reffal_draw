const Ticket = require('../models/ticket')

class myDb {
    constructor () {
        this.tickets = []
    }

    /**
     * create a new ticket 
     * @param {string} username 
     * @param {number} price 
     */

    createTicket(username, price){
        const ticket = new Ticket(username, price)
        this.tickets.push(ticket)
        return ticket
    }

    /**
     * create
     * @param {string} username 
     * @param {number} price 
     * @param {number} quentity 
     */

    bulkMultiple (username, price, quentity) {
        const result = []
        for(let i = 0; i < quentity; i++) {
            const ticket = this.createTicket(username, price)
            result.push(ticket)
        }

        return result;
    }

    findTicket() {
        return this.tickets;
    }

    /**
     * 
     * @param {string} ticketId 
     * @returns 
     */

    findSingleTicket(ticketId) {
        const ticket = this.tickets.find(items => ticket.id === ticketId)
        return ticket;
    }

    /**
     * find username by ticket 
     * @param {string} username 
     * @returns 
     */

    findByUsernameTicket(username){
        const tickets = this.tickets.filter((ticket) => ticket.username === username)
        return tickets
    }

    /**
     * update ticket 
     * @param {string} ticketId 
     * @param {string} ticketBody 
     */

    updateTicket(ticketId, ticketBody) {
        const ticket = this.findSingleTicket(ticketId)
        ticket.username = ticketBody.username || ticket.username
        ticket.price = ticketBody.price || ticket.price
        ticket.updateTicket = new Date();
        return ticket;
    }

    /**
     * 
     * @param {string} ticketId 
     * @returns 
     */

    deleteTicket(ticketId) {
        const index = this.tickets.findIndex((ticket)=> ticket.id === ticketId );
        if(index !== -1) {
            this.tickets.splice(index, 1)
            return true
        }else{
            return false
        }    
    }   

    /**
     * this is a winner 
     * @param {string} winner 
     */

    drawTicket(winner) {
        let indexes = new Array(winner)
        for(let i = 0; i < indexes.length; i++) {
            let index = Math.floor(Math.random() * this.tickets.length)
            while (indexes.includes(index)){
                let index = Math.floor(Math.random() * this.tickets.length)
            }
            indexes.push(index)
        }
        const winners = indexes.map((index) => this.tickets[index])
        return winners
    }

}

const Mydb = new myDb();

module.exports = Mydb;