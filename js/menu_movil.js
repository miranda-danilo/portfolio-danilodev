// Links del menu (ocultar menu)

const d = document;

export default function menuMovil(checkBtn, links) {
    const $checkButton = d.querySelector(checkBtn)

  
    d.addEventListener("click", e => {
        if(e.target.matches(links)) {
            $checkButton.checked = false;
        }

    })


}