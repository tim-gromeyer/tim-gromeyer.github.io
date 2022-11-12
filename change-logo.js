function changeFavicon(src) {
    var link = document.createElement('link'),

    oldLink = document.getElementById('dynamic-favicon');

    link.id = 'dynamic-favicon';
    link.rel = 'icon';
    link.href = src;
    if (oldLink) {
        document.head.removeChild(oldLink);
    }

    document.head.appendChild(link);
}

function switchLogo() {
    if(document.title == "MarkdownEdit") {
        // Change logo
        document.all.projectlogo.children[0].src="MarkdownEdit.svg"
        // Change favicon
        changeFavicon("MarkdownEdit.svg")
        // Change project name
        document.all.projectname.textContent="MarkdownEdit"
        // Change project brief
        document.all.projectbrief.textContent="Simple program for editing Markdown files"
        // Update github corner link
        document.getElementsByClassName("github-corner")[0].href="https://github.com/tim-gromeyer/MarkdownEdit"
    } else if (document.title == "Converter") {
        document.all.projectlogo.children[0].src="Converter.svg"
        changeFavicon("Converter.svg")
        document.all.projectname.textContent="Converter"
        document.all.projectbrief.textContent="Simple program for converting strings"
        document.getElementsByClassName("github-corner")[0].href="https://github.com/tim-gromeyer/Converter"
    } else {
        // Hide logo
        var logo = document.getElementById("projectlogo")
        logo.parentNode.removeChild(logo)
    }
}

