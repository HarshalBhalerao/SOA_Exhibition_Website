textTransitions = () => {
    const enterText = `
        <style>
            .enterText
            {
                text-align:center;
                text-decoration: none;
                color: #FF5234;
            }
        </style>
        <a class = 'enterText' href = '../common/landingPage.html'>
            <h5>ENTER</h5>
        </a>
    `;

    setTimeout(() => {
        $('#classText').append(enterText).fadeIn();
    }, 6000);
};


textTransitions();