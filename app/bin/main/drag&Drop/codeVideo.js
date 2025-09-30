const changeStyle = (obj, color) => {
    obj.style.color = color;
    obj.style.border = `4px dashed ${color}`;
}

const cargarArchivo = ar => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(ar);

    reader.addEventListener("progress", e => {
        let carga = Math.round(e.loaded / ar.size * 100);
        zona.textContent = `${carga}%`;
        document.querySelector(".barra-de-carga").style.padding = "75px 20px";
        document.querySelector(".barra-de-carga").style.width = `${carga / 3.6}%`;
    });

    reader.addEventListener("loadend", e => {
        changeStyle(zona, "#4f9");
        zona.style.borderStyle = "solid";
        document.querySelector(".barra-de-carga").style.background = "#4f9";
        setTimeout(() => {
            zona.style.color = "#fff";
            zona.style.animation = "aparecer 1s forwards";
            zona.textContent = "¡Carga completa!";
        }, 0.5);
    });

    reader.addEventListener("load", e => {
        let video = new Blob([new Uint8Array(e.currentTarget.result)], { type: ar.type });
        let url = URL.createObjectURL(video);
        let img = document.createElement("VIDEO");
        img.setAttribute("src", url);
        document.querySelector(".resultado").appendChild(img);
    });
}
