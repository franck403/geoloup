link = {
    "accueil": "",
    "project": "",
    "blog": "",
}
links = [["https://geoloup.com/blog", "blog"], ["https://geoloup.com/", "accueil"], ["https://geoloup.com/project", "project"],]

links.forEach(element => {
    if (element[0] == document.URL) {
        link[element[1]] == "active"
    }
});
preview = `
<ul>
<li class="${link["accueil"]}">
    <a href="https://geoloup.com/">
        Accueil
    </a>
</li>
<li  class="${link["project"]}">
    <a href="https://geoloup.com/project">
        Project
    </a>
</li>
<li  class="${link["blog"]}">
    <a href="https://geoloup.com/blog">
        Blog
    </a>
</li>
</ul>`
document.getElementById("NavBar").innerHTML = preview