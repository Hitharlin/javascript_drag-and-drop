const dragAndDrop = () => {
    const card = document.querySelector('.js-card');
    const cells = document.querySelectorAll('.js-cell');
    // let cellsArr = []
    // cellsArr.push(cells);
    // console.log(cellsArr);


    const dragStart = function () {
        console.log('dragStart')
        setTimeout(() => {
            this.classList.add('hide');
        }, 0)
    };

    const dragEnd = function () {
        this.classList.remove('hide');
    };

    const dragOver = function (e) {
        // console.log('over');
        e.preventDefault();
    };

    const dragEnter = function (e) {
        console.log('enter');
        e.preventDefault();

        this.classList.add('hovered');
    };

    const dragLeave = function () {
        console.log('leave');
        this.classList.remove('hovered');
    }

    const dragDrop = function () {
        console.log('drop');
        this.append(card);
        this.classList.remove('hovered');
    }


    cells.forEach((cell) => {
        cell.addEventListener('dragover', dragOver);
        cell.addEventListener('dragenter', dragEnter);
        cell.addEventListener('dragleave', dragLeave);
        cell.addEventListener('drop', dragDrop);
    });
   
    card.addEventListener('dragstart', dragStart)
    card.addEventListener('dragend', dragEnd)
}

dragAndDrop()
