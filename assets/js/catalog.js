// button      data-parent="1"     ._active     (добав ссылке кнопке)
// block       data-block="1"      ._box-open  (добав блоку который открыв)

const documentActions = (e) => {
    const targetElement = e.target;
    if (targetElement.closest('[data-parent]')) {
        const dataBlockID = targetElement.dataset.parent ? targetElement.dataset.parent : null;
        const datablock = document.querySelector(`[data-block="${dataBlockID}"]`);
        
        if(datablock) {
            const activeButton = document.querySelector('._active');
            const activeBlock = document.querySelector('._box-open');

            if(activeButton && activeButton !== targetElement) {
                activeButton.classList.remove('_active');
                activeBlock.classList.remove('_box-open');
            }
           
            targetElement.classList.toggle('_active');
            datablock.classList.toggle('_box-open');
        } 

        e.preventDefault();
        
    }
}

document.addEventListener('click', documentActions)