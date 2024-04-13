const i18n = {
    "en": {
        "common": {
            "header": {
                "home": "Home",
                "about": "About"
            }
        }
    },

    es: {
        "common": {
            "header": {
                "home": "Inicio",
                "about": "Nosotros"
            }
        }

    },
}

let lang = "es"
console.log(i18n[lang].common.header.home)

function getElementsWithAttribute(attribute) {
    return document.querySelectorAll(attribute);
}

// Usage example
const elementsWithI18n = getElementsWithAttribute('[data-i18n]');
console.log(elementsWithI18n);

elementsWithI18n.forEach(function(element) {
    console.log(element.innerText,element.attributes[3].nodeValue);
  });