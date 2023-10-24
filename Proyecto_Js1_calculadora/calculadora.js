//Arreglo en pantalla de calculadora
const pantalla = document.querySelector(".pantalla");
//Arreglo de los eventos que pasen en los botones
const botones = document.querySelectorAll(".btn");

//Recorrido del arreglo boton
botones.forEach((btn) => {
    btn.addEventListener("click", () => {
        const btnOn = btn.textContent;

        //Condicional para el evento del boton limpiar
        if (btn.id === "limpiar") {
            pantalla.textContent = "0";
            return;
        }

        //Condicional para el evento del boton borrar
        if (btn.id === "borrar") {
            if (
                pantalla.textContent.length === 1 ||
                pantalla.textContent === "¡Error!"
            ) {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        //Condicional para el evento dell boton igual
        if (btn.id === "igual") {
            try {
                const expresion = pantalla.textContent;
                if (expresion.includes("//")) {
                    pantalla.textContent = "¡Error!";
                } else {
                    pantalla.textContent = eval(expresion);
                }
            } catch {
                pantalla.textContent = "¡Error!";
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "¡Error!") {
            pantalla.textContent = btnOn;
        } else {
            if (btnOn === "/" && pantalla.textContent[pantalla.textContent.length - 1] === "/") {
                pantalla.textContent = "¡Error!";
            } else {
                pantalla.textContent += btnOn;
            }
        }

        if (pantalla.textContent === "//") {
            pantalla.textContent = "¡Error!";
        }
    });
});
