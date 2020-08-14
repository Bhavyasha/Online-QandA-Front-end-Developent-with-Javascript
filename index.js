var btns= [];
btns = document.getElementsByTagName('button');
var section = document.querySelector('.section-center');
var questions = document.querySelectorAll('.question');

for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (e) => {
        btn = e.target.firstChild;
        if(btn.classList.contains('fa-plus-square')) {
            btn.classList.remove('fa-plus-square');
            btn.classList.add('fa-minus-square');
        }
        else {
            btn.classList.remove('fa-minus-square');
            btn.classList.add('fa-plus-square');
        }
        question = e.target.parentElement.parentElement;
        question.classList.toggle('show-text');

        // ----collapse all except clicked one ---
        questions.forEach(item => {
            console.log(item);
            if(item !== question) {
                item.classList.remove('show-text');
            }
        });
    });
}
