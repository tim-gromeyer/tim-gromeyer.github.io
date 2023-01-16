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

function updateProjectInfo(info) {
  // Change logo
  document.all.projectlogo.children[0].src = info.logoSrc;
  // Change favicon
  changeFavicon(info.faviconSrc);
  // Change project name
  document.all.projectname.textContent = info.name;
  // Change project brief
  document.all.projectbrief.textContent = info.brief;
  // Update github corner link
  document.getElementsByClassName("github-corner")[0].href = info.githubUrl;
}

function switchLogo() {
  if (document.title == "MarkdownEdit") {
    updateProjectInfo({
      logoSrc: "MarkdownEdit.svg",
      faviconSrc: "MarkdownEdit.svg",
      name: "MarkdownEdit",
      brief: "Simple program for editing Markdown files",
      githubUrl: "https://github.com/tim-gromeyer/MarkdownEdit"
    });
  } else if (document.title == "SConverter") {
    updateProjectInfo({
      logoSrc: "Converter.svg",
      faviconSrc: "Converter.svg",
      name: "Converter",
      brief: "Simple program for converting strings",
      githubUrl: "https://github.com/tim-gromeyer/Converter"
    });
  } else {
    // Hide logo
    var logo = document.getElementById("projectlogo")
    logo.parentNode.removeChild(logo);
  }
}

window.onload = function() {
  var links = document.querySelectorAll("a");

  for (var i = 0; i < links.length; i++) {
    if (!links[i].parentElement.className.startsWith('level'))
      links[i].target = "_blank";
  }
};

