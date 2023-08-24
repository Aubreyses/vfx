'use strict'

function changeLang() {

    const trigger = document.querySelector('.button-language');
    const langList = document.querySelector('.language-block-change');

    trigger.addEventListener('click', function(event) {
        langList.classList.toggle( 'active' ); 
        console.log('Bye')
    });
};

changeLang();

function searching () {

    const trigger = document.querySelector('.checker-button');
    const loader = document.querySelector('.loader');
    const report = document.querySelector('.report');

    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        loader.classList.toggle( 'active' ); 
        
        setTimeout(() => {
            console.log('hello')
            loader.classList.remove('active');
            report.classList.add('active')
        }, 3000)
    })
}

searching();