
function activation(elem) {
    document.querySelector('.env li.actif').removeAttribute('class');
    elem.setAttribute("class","actif");
    const idDest = elem.getAttribute("data-dest");
    const sections = document.querySelectorAll('main section');
    [].forEach.call(sections, sectElem => sectElem.hidden = true);
    document.getElementById(idDest).removeAttribute('hidden');
}