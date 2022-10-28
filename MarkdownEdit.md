# MarkdownEdit

[TOC]

<p><img src="made-with-c-plus-plus.svg" alt="Made with C++">
<a href="https://qt.io"><img src="powered-by-qt.svg" alt="Powered by Qt"></a>
<a href="https://github.com/software-made-easy/MarkdownEdit/releases/"><img src="https://img.shields.io/github/release/software-made-easy/MarkdownEdit.svg" alt="GitHub release"></a></p>

MarkdownEdit is, as the name suggests, a simple and lightweight program for creating and editing Markdown files.

## Features:

- Spell checker
- Save and load Markdown files
- Undo/Redo
- Preview Markdown files in real time (<1 ms)
- Editor with syntax highlighting
- Auto-completion ( close brackets, list, ...)
- Find/Replace (Ctrl+F/Ctrl+R)
- Export to HTML and PDF
- Poor in resources
- Quick opening of recent files (toolbar button or file menu)
- Open source
- Native look and feel
- Reminds spelling language for each document

<p><img src="MarkdownEdit.png" alt="Example"></p>

## Preview

A preview is available [here](https://software-made-easy.github.io/MarkdownEdit/markdownedit.html).

Important:
- Performance might be bad
- Spell check is not available
- Drag and Drop does not work

## Dependencies:

[Qt](https://qt.io/) and [enchant-2](https://github.com/AbiWord/enchant).

## Note(s):

- To improve performance when using images, disable the "Show images in preview" option (<u>V</u>iew menu).

<br>

## Build instructions

Run the [build script](scripts/build.sh) or follow the instructions below.

- Clone MarkdownEdit: `git clone https://github.com/software-made-easy/MarkdownEdit --depth=1 && cd MarkdownEdit`.
- Clone all repositories required by MarkdownEdit by running the command `git submodule update --init --recursive -j 3 --depth=1`.
- Create the build folder: `mkdir build && cd build`.
- Now create a Makefile with CMake: `cmake ..`.
- Build it: `cmake --build . -j4`

Summarize:

```bash
git clone https://github.com/software-made-easy/MarkdownEdit --depth=1 && cd MarkdownEdit
git submodule update --init --recursive -j 3 --depth=1
mkdir build && cd build
cmake ..
cmake --build . -j4
```

## Credits

- Thanks to [Waqar Ahmed](https://github.com/Waqar144) for help with development.
- The conversion from Markdown to HTML is done using the [md4c](https://github.com/mity/md4c) library by *Martin Mitáš*.
- The [widget](https://github.com/pbek/qmarkdowntextedit) used for writing was created by *Patrizio Bekerle*.
