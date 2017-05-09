function getOuterHTML(element) {
    if (typeof element.innerHTML === 'undefined') {
        return `<${element.tagName}></${element.tagName}>`;
    }
    return `<${element.tagName}>${element.innerHTML}</${element.tagName}>`;
}

export default getOuterHTML;
