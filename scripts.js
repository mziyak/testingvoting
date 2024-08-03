document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('loginForm')) {
        document.getElementById('loginForm').addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === 'admin' && password === '123') {
                window.location.href = 'admin.html';
            } else {
                window.location.href = 'vote.html';
            }
        });
    }

    if (document.getElementById('voteForm')) {
        document.getElementById('voteForm').addEventListener('submit', (event) => {
            event.preventDefault();
            const party = document.getElementById('party').value;
            let votes = JSON.parse(localStorage.getItem('votes')) || { partyA: 0, partyB: 0, partyC: 0 };
            votes[party]++;
            localStorage.setItem('votes', JSON.stringify(votes));
            window.location.href = 'thankyou.html';
        });
    }

    if (window.location.pathname.endsWith('admin.html')) {
        const votes = JSON.parse(localStorage.getItem('votes')) || { partyA: 0, partyB: 0, partyC: 0 };
        document.getElementById('partyA').textContent = votes.partyA;
        document.getElementById('partyB').textContent = votes.partyB;
        document.getElementById('partyC').textContent = votes.partyC;
    }
});
