// Initial prompt
let requiredName = document.querySelector('.input-name-main');
let btnPrompt = document.querySelector('.prompt-button button')
btnPrompt.addEventListener('click', () => {

    let warningPrompt2 = document.querySelector('.warning-prompt2')
    let bgBody = document.querySelector('.bg-prompt')

    if (requiredName.value.length <= 5) {
        warningPrompt2.classList.add('warning-prompt-open2')
    } else {
        bgBody.classList.add('prompt-close')
    }

    document.querySelector('.person-name').innerHTML = requiredName.value;
});

// ============================= Modal convite ================================

$('.envelope').click(() => {

    let bgInvitation = $('.card-bg')
    let cardInvitation = $('.card')

    bgInvitation.addClass('open-invitation')
    cardInvitation.addClass('card-invitation')

    // Close invitation button
    $('.btn-close-card').click(() => {
        bgInvitation.removeClass('open-invitation')
        cardInvitation.removeClass('card-invitation')
    })
    // Close invitation outside click
    document.addEventListener('click', (event) => {
        let bgInvitation = document.querySelector('.card-bg')
        let cardInvitation = document.querySelector('.card')

        if (event.target == bgInvitation) {
            bgInvitation.classList.remove('open-invitation')
            cardInvitation.classList.remove('card-invitation')
        }
    })
})

// ============================= Modal decisão ================================

$('.btn-card').click(() => {
    let bgDecision = $('.decision-bg')
    let openDecision = $('.decision-box')

    bgDecision.addClass('open-decision-event')
    openDecision.addClass('open-decision-box')

    document.addEventListener('click', (event) => {
        let bgDecision = document.querySelector('.decision-bg')
        let openDecision = document.querySelector('.decision-box')

        if (event.target == bgDecision) {
            bgDecision.classList.remove('open-decision-event')
            openDecision.classList.remove('open-decision-box')
        }
    })
})

// ============================= Modal certeza ================================

$('.negative-button').click(() => {
    let modal = $('.modal')
    let modalAnimate = $('.modal-container')

    modal.addClass('modal-open')
    modalAnimate.addClass('modal-animate')

    // Close modal button
    $('.close-modal').click(() => {
        modal.removeClass('modal-open')
        modalAnimate.removeClass('modal-animate')
    })

    // Close modal outside click
    document.addEventListener('click', (event) => {
        let modal = document.querySelector('.modal')
        let modalAnimate = document.querySelector('.modal-container')

        if (event.target == modal) {
            modal.classList.remove('modal-open')
            modalAnimate.classList.remove('modal-animate')
        }
    })
})

// ============================= Modal confirmar nome ================================

$('.positive-button').click(function () {
    let modalInput = $('.form-confirm-name')
    let modalInputBody = $('.form-body')

    modalInput.addClass('active-modal-input')
    modalInputBody.addClass('active-modal-body-input')

})

let btnForm = document.querySelector('.btn-confirm')
btnForm.disabled = true;
document.querySelector('.verify-name').addEventListener('click', () => {
    let nameInput = document.querySelector('.input-name')
    let warning1 = document.querySelector('.warning1')
    let warning2 = document.querySelector('.warning2')
    let warning3 = document.querySelector('.warning3')

    if (nameInput.value == 0) {
        warning3.classList.add('visibility-insert');
        warning2.classList.remove('visibility-negative');
        warning1.classList.remove('visibility-positive');
        btnForm.disabled = true;
    }

    else if (nameInput.value === requiredName.value) {
        warning1.classList.add('visibility-positive');
        warning2.classList.remove('visibility-negative');
        warning3.classList.remove('visibility-insert');
        btnForm.disabled = false;
    }

    else {
        warning1.classList.remove('visibility-positive');
        warning3.classList.remove('visibility-insert');
        warning2.classList.add('visibility-negative');
        btnForm.disabled = true;
    }
})

// Close modal outside click
document.addEventListener('click', (event) => {
    let modalInput = document.querySelector('.form-confirm-name')
    let modalInputBody = document.querySelector('.form-body')

    if (event.target == modalInput) {
        modalInput.classList.remove('active-modal-input')
        modalInputBody.classList.remove('active-modal-body-input')
    }
})

btnForm.addEventListener('click', () => {
    window.location.href = './endpage-positive.html';
    alert('Clique em "OK" para continuar...');
})


