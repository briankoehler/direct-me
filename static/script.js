
const translate = async (source, target) => {
    /* Convert from codes */
    let languageDictionary = {
        'en': 'english',
        'zh': 'chinese'
    }

    /* Original text */
    let text = document.getElementById(`original-${languageDictionary[source]}`).value;
    text = text.replace(/\r\n|\r|\n/g,"</br>");

    /* Translate text */
    const resp = await fetch(`/translate?source=${source}&target=${target}&text=${text}`);
    const data = await resp.json();

    /* Display new text */
    let destination = document.getElementById(`new-${languageDictionary[target]}`);
    destination.innerHTML = data['translatedText'];

    if (source == 'en') {
        document.getElementById('english-thumbs-up').classList.add('far')
        document.getElementById('english-thumbs-up').classList.remove('fas')
        document.getElementById('english-thumbs-up').style.color = 'black';
        document.getElementById('english-thumbs-down').classList.add('far')
        document.getElementById('english-thumbs-down').classList.remove('fas')
        document.getElementById('english-thumbs-down').style.color = 'black';
    }
    else {
        document.getElementById('chinese-thumbs-up').classList.add('far')
        document.getElementById('chinese-thumbs-up').classList.remove('fas')
        document.getElementById('chinese-thumbs-up').style.color = 'black';
        document.getElementById('chinese-thumbs-down').classList.add('far')
        document.getElementById('chinese-thumbs-down').classList.remove('fas')
        document.getElementById('chinese-thumbs-down').style.color = 'black';
    }
};

window.onload = () => {
    document.getElementById('original-english').value = '';
    document.getElementById('original-chinese').value = '';

    let thumbsUps = document.querySelectorAll('.fa-thumbs-up');
    thumbsUps.forEach(icon => icon.addEventListener('click', () => {
        if (icon.style.color == 'green') {
            icon.style.color = 'black';
            icon.classList.add('far');
            icon.classList.remove('fas');
        }
        else {
            icon.style.color = 'green';
            icon.classList.remove('far');
            icon.classList.add('fas');
            if (icon.id == 'english-thumbs-up') {
                let other = document.getElementById('english-thumbs-down');
                other.style.color = 'black';
                other.classList.add('far');
                other.classList.remove('fas');
            }
            else {
                let other = document.getElementById('chinese-thumbs-down');
                other.style.color = 'black';
                other.classList.add('far');
                other.classList.remove('fas');
            }
        }
    }));

    let thumbsDown = document.querySelectorAll('.fa-thumbs-down');
    thumbsDown.forEach(icon => icon.addEventListener('click', () => {
        if (icon.style.color == 'red') {
            icon.style.color = 'black';
            icon.classList.add('far');
            icon.classList.remove('fas');
        }
        else{
            icon.style.color = 'red';
            icon.classList.remove('far');
            icon.classList.add('fas');
            if (icon.id == 'english-thumbs-down') {
                let other = document.getElementById('english-thumbs-up');
                other.style.color = 'black';
                other.classList.add('far');
                other.classList.remove('fas');
            }
            else {
                let other = document.getElementById('chinese-thumbs-up');
                other.style.color = 'black';
                other.classList.add('far');
                other.classList.remove('fas');
            }
        }
    }));

    document.getElementById('original-english').addEventListener('keydown', (e) => {
        if (e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault()
            translate('en', 'zh')
        }
    })

    document.getElementById('original-chinese').addEventListener('keydown', (e) => {
        if (e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault()
            translate('zh', 'en')
        }
    })
};