const TypeWriter = (txtElement, words, wait = 3000) => {
    let txt = '';
    let wordIndex = 0;
    let isDeleting = false;

    const type = () => {
        const current = wordIndex % words.length;
        const fullTxt = words[current];

        txt = isDeleting ? fullTxt.substring(0, txt.length - 1) : fullTxt.substring(0, txt.length + 1);
        txtElement.textContent = txt;

        let typeSpeed = isDeleting ? 45 : 80;

        if (!isDeleting && txt === fullTxt) {
            isDeleting = true;
            return setTimeout(type, Number(wait));
        }

        if (isDeleting && txt === '') {
            isDeleting = false;
            wordIndex++;
            typeSpeed = 260;
        }

        setTimeout(type, typeSpeed);
    };

    return { type };
};

(function init() {
    const txtElement = document.querySelector('#typewriter');

    if (!txtElement) {
        return;
    }

    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    TypeWriter(txtElement, words, wait).type();
})();
