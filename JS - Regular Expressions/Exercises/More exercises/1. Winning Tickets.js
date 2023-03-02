function winningTicket(input) {

    const regexWinSix = /[\@\#\$\^]{6}([\w]+)?[\@\#\$\^]{6}/g;
    const regexWinSeven = /[\@\#\$\^]{7}([\w]+)?[\@\#\$\^]{7}/g;
    const regexWinEight = /[\@\#\$\^]{8}([\w]+)?[\@\#\$\^]{8}/g;
    const regexWinNine = /[\@\#\$\^]{9}([\w]+)?[\@\#\$\^]{9}/g;
    const regexWinTen = /[\@\#\$\^]{10}([\w]+)?[\@\#\$\^]{10}/g;

    let tickets = input.split(', ');
    tickets.forEach((ticket) => {
        if (ticket.length = 20) {
            if (ticket.match(regexWinSix)) {
                let symbol = ticket.match(regexWinSix)[0]
                if (ticket.match(regexWinTen)) {
                    console.log(`ticket "${ticket}" - 10${symbol[0]} Jackpot!`);
                } else if (ticket.match(regexWinNine)) {
                    console.log(`ticket "${ticket}" - 9${symbol[0]}`);
                } else if (ticket.match(regexWinEight)) {
                    console.log(`ticket "${ticket}" - 8${symbol[0]}`);
                } else if (ticket.match(regexWinSeven)) {
                    console.log(`ticket "${ticket}" - 7${symbol[0]}`);
                } else if (ticket.match(regexWinSix)) {
                    console.log(`ticket "${ticket}" - 6${symbol[0]}`);
                }
            } else {
                console.log(`ticket "${ticket}" - no match`)
            }
        } else {
            console.log(`Invalid ticket`)
        }
    })
    console.log(`****************************************`)
}

winningTicket('Cash$$$$$$Ca$$$$$$sh')
winningTicket('$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey')
winningTicket('validticketnomatch:(')