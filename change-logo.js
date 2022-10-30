function switchLogo() {
    if(document.title == "MarkdownEdit") {
        document.all.projectlogo.children[0].src="MarkdownEdit.svg"
        document.all.projectname.textContent="MarkdownEdit"
        document.all.projectbrief.textContent="Simple program for editing Markdown files"
    } else if (document.title == "Converter") {
        document.all.projectlogo.children[0].src="Converter.svg"
        document.all.projectname.textContent="Converter"
        document.all.projectbrief.textContent="Simple program for converting strings"
    } else {
        document.all.projectlogo.children[0].width=0
        document.all.projectname.textContent="software-made-easy"
        document.all.projectbrief.textContent="Hobby programmer from germany"
    }
}

