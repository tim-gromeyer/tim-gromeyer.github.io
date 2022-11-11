# MarkdownEdit

[TOC]

<p><img src="made-with-c-plus-plus.svg" alt="Made with C++">
<a href="https://qt.io" target="_blank"><img src="powered-by-qt.svg" alt="Powered by Qt"></a>
<a href="https://github.com/tim-gromeyer/MarkdownEdit/releases/" target="_blank"><img src="https://img.shields.io/github/release/tim-gromeyer/MarkdownEdit.svg" alt="GitHub release"></a></p>

MarkdownEdit is, as the name suggests, a simple and lightweight program for creating and editing Markdown files.

## Features:

- **Spell checker**
- **Import from HTML**
- Save and load Markdown files
- Undo/Redo
- **Live preview**
- Editor with **syntax highlighting**
- **Auto-completion** (close brackets, list, ...)
- Find/Replace (Ctrl+F/Ctrl+R)
- Export to HTML and PDF
- Poor in resources
- Quick opening of recent files (toolbar button or file menu)
- Open source
- Reminds spelling language for each document

<p><img src="MarkdownEdit.webp" alt="Example"></p>

## Preview

A preview is available  <a href="https://tim-gromeyer.github.io/MarkdownEdit/markdownedit.html" target="_blank">here</a>.

Important:
- Performance might be bad
- Spell check is not available
- Drag and Drop does not work

## Dependencies:

<a href="https://qt.io/" target="_blank">Qt</a> 5.12 or above and <a href="https://github.com/AbiWord/enchant" target="_blank">enchant-2</a>.

## Note(s):

- To improve performance when using images, disable the "Show images in preview" option (<u>V</u>iew menu).

<br>

## Build instructions

- Clone MarkdownEdit: `git clone https://github.com/tim-gromeyer/MarkdownEdit --depth=1 && cd MarkdownEdit`.
- Clone all repositories required by MarkdownEdit by running the command `git submodule update --init --recursive -j 3 --depth=1`.
- Create the build folder: `mkdir build && cd build`.
- Now create a Makefile with CMake: `cmake ..`.
- Build it: `cmake --build . -j4`

Summarize:

```bash
git clone https://github.com/tim-gromeyer/MarkdownEdit --depth=1 && cd MarkdownEdit
git submodule update --init --recursive -j 3 --depth=1
mkdir build && cd build
cmake ..
cmake --build . -j4
```

## Credits

- Thanks to <a href="https://github.com/Waqar144" target="_blank">Waqar Ahmed</a> for help with development.
- The conversion from Markdown to HTML is done using the <a href="https://github.com/mity/md4c" target="_blank">md4c</a> library by *Martin Mitáš*.
- The <a href="https://github.com/pbek/qmarkdowntextedit" target="_blank">widget</a> used for writing was created by *Patrizio Bekerle*.
