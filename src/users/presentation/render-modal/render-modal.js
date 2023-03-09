import modalHTML from './render-modal.html?raw'
import './render-modal.css';

let modal, form;


export const showModal = () => {

    modal?.classList.remove('hide-modal');
}

export const hideModal = () => {
    modal?.classList.add('hide-modal');
    form?.reset();
}


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderModal = (element) => {
    if (modal) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHTML;
    modal.className = 'modal-container hide-modal';
    form = modal.querySelector('form');

    // Oculta el modal al hacer click fuera del mismo
    modal.addEventListener('click', (event) => {
        if (event.target.className === 'modal-container') hideModal();
    });

    // Submit form
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const userLike = {};
        for (const [key, value] of formData) {

            // Formatear input number (string), a number 
            if (key === 'balance') {
                userLike[key] = +value;
                continue;
            }

            // Formatear checkbox (string), a booleano
            if (key === 'isActive') {
                userLike[key] = (value === 'on') ? true : false;
                continue;
            }

            // Caso general, pasa como string
            userLike[key] = value;

        }

        console.log({userLike});
        // TODO: Guardar usuario

        hideModal();

    });

    element.append(modal);
}

