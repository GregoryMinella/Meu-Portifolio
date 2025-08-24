function toggleMode()
{
    const html = document.documentElement;
    html.classList.toggle("light")

    const img = document.querySelector("#profile img");

    if (html.classList.contains("light"))
    {
        img.setAttribute("src", "imagens/perfil - claro.jpg");
    }
    else
    {
        img.setAttribute("src", "imagens/perfil - escuro.jpg");
    }    


}
