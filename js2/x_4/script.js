function date() {
    const dt = document.getElementById('date')
    let currentDateTime = new Date();
    let formattedDate = currentDateTime.toLocaleDateString('nl-NL', {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        timeZone: 'Europe/Amsterdam',
    });

    dt.innerText = `Het is vandaag ${formattedDate}`
}


function time() {
    const gt = document.getElementById('sig')
    let currentDateTime = new Date();
    let formattedTime = currentDateTime.toLocaleTimeString('nl-NL', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Europe/Amsterdam',
    });

    gt.innerText = `Hallo, het is ${formattedTime}`
}