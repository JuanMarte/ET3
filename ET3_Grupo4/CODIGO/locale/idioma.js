/**
 * funcion de idioma
 * Si no hay idioma establecido lo establece por defecto
 * crea la cookie del idioma seleccionado
 * carga la variable de traducciones correspondiente al idioma seleccionado
 * recorre todos los elementos buscando un class que exista en las traducciones
 * para aplicar el texto de idioma
 * 
 * @param {String} lang Indicación del idioma mediante dos letras (ES, EN, GA..)
 */

function setLang(lang = '') {
    // 1. Si no nos pasan idioma, intentamos recuperarlo de la memoria
    if (lang === '') {
        // Usamos localStorage en vez de cookies
        let storedLang = localStorage.getItem('lang');
        if (storedLang !== null && storedLang !== '') {
            lang = storedLang;
        } else {
            // Si no hay nada guardado, por defecto Español
            lang = 'ES';
        }
    }

    // 2. Guardamos la selección en memoria persistente
    localStorage.setItem('lang', lang);

    // 3. Seleccionamos el diccionario
    var traduccion;
    switch (lang) {
        case 'ES':
            traduccion = textos_ES;
            break;
        case 'EN':
            traduccion = textos_EN;
            break;
        default:
            traduccion = textos_ES;
            break;
    }

    // 4. Aplicamos las traducciones
    for (var clave in traduccion) {
        var elementos = document.getElementsByClassName(clave);
        var etiquetas = document.getElementsByTagName('label');
        var inputs = document.getElementsByTagName('input');
        var imgs = document.getElementsByTagName('img');
        var options = document.getElementsByTagName('option');

        // Traducir elementos por clase
        for (var i = 0; i < elementos.length; i++) {
            // ANTES (Error): elementos[i].textContent = traduccion[clave];
            // AHORA (Solución): Usamos innerHTML para que lea el <br> como salto de línea
            elementos[i].innerHTML = traduccion[clave]; 
        }

        // Traducir labels por 'for'
        for (var i = 0; i < etiquetas.length; i++) {
            if (etiquetas[i].htmlFor == clave) {
                etiquetas[i].textContent = traduccion[clave];
            }
        }

        // Traducir inputs (placeholder y title)
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].classList.contains(clave)) {
                inputs[i].placeholder = traduccion[clave];
                inputs[i].title = traduccion[clave];
            }
        }

        // Traducir imágenes (alt y title)
        for (var i = 0; i < imgs.length; i++) {
            if (imgs[i].classList.contains(clave)) {
                imgs[i].alt = traduccion[clave];
                imgs[i].title = traduccion[clave];
            }
        }

        // Traducir opciones de select
        for (var i = 0; i < options.length; i++) {
            if (options[i].classList.contains(clave)) {
                options[i].label = traduccion[clave];
                options[i].textContent = traduccion[clave];
            }
        }
    }
}

/** Función para cambiar el idioma y recargar */
function cambiarLang(lang) {
    localStorage.setItem('lang', lang);
    window.location.reload();
}

/* Mantenemos estas funciones vacías o redirigidas por si algún 
   otro archivo las llama, para que no de error.
*/
function setCookie(name, value, days) {
    localStorage.setItem(name, value);
}

function getCookie(name) {
    return localStorage.getItem(name);
}