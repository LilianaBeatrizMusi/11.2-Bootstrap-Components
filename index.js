const i18n = {
    "en-EN": {
        "common": {
            "header": {
                "home": "Home",
                "about": "About",
                "search": "Search",
                "lang": {
                    "title": "Languages",
                    "english": "English",
                    "spanish": "Spanish",
                }
            }
        }
    },

    'es-ES': {
        "common": {
            "header": {
                "home": "Inicio",
                "about": "Nosotros",
                "search": "Buscar",
                "lang": {
                    "title": "Idiomas",
                    "english": "Ingles",
                    "spanish": "Español",
                }
            }
        },
        "services":{
            "title": "Servicios"
        }

    },
}



function translate(lang){
    const elementsWithI18n = document.querySelectorAll('[data-i18n]')

    elementsWithI18n.forEach(function (element) {
        const arrayKeys = element.attributes["data-i18n"].nodeValue.split(".");
        const traduccion = accederObjeto(i18n[lang], arrayKeys);
        element.innerText = traduccion;
    });
}

function accederObjeto(objeto, elementos, indice = 0) {
    if (indice === elementos.length) {
        return objeto;
    }

    const elemento = elementos[indice];
    if (!objeto || typeof objeto !== 'object') {
        return undefined;
    }

    return accederObjeto(objeto[elemento], elementos, indice + 1);
}

function onChangeLanguage(newLanguage){
    lang = newLanguage
    translate(lang)
}

let lang = navigator.language || "en-EN"

function init(){
    if(lang != "en-EN"){
        translate(lang)
    }
}

init()

