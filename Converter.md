# Converter

[TOC]

<p><img src="made-with-c-plus-plus.svg" alt="Made with C++">
<a href="https://qt.io"><img src="powered-by-qt.svg" alt="Powered by Qt"></a>
<a href="https://github.com/software-made-easy/Converter/releases/"><img src="https://img.shields.io/github/release/software-made-easy/Converter.svg" alt="GitHub release"></a></p>

Converter, as the name suggests, is a simple and easy program to convert strings.

## Features:

- Save and load files
- Undo-Redo
- Preview converted strings in real time (<1 ms)
- Syntax highlighting editor
- Poor in resources
- Quick opening of recent files (Button in toolbar or in the file menu)
- Open source
- Native look and feel

| Convert | From         	| To                                            	|
|-------- |--------------	|-----------------------------------------------	|
|         | **Plain**    		| C-string<br>Sorted<br>MD5<br>SHA256<br>SHA512 	|
|         | **Markdown**  	|                 HTML<br>Plain                 	|
|         | **HTML**     	|               Markdown<br>Plain               	|
|         | **C-string** 		  |                     Plain                     	|

<p><img src="Converter.png" alt="Example"></p>

## Preview

A preview is available [here](https://software-made-easy.github.io/Converter/converter.html).

Important:

- Performance might be bad

<br>

## Dependencies:

<a href="https://qt.io/" target="_blank">Qt</a> 5.10 or above.

## Build instructions

- Clone Converter: `git clone https://github.com/software-made-easy/Converter --depth=1 && cd Converter`
- Clone all repositories required by Converter by running the command `git submodule update --init --recursive -j 3 --depth=1`.
- Create the build folder: `mkdir build && cd build`.
- Now create a Makefile with CMake: `cmake ..`.
- Build it: `cmake --build . -j4`

In summary:
```bash
git clone https://github.com/software-made-easy/Converter --depth=1 && cd Converter
git submodule update --init --recursive -j 3 --depth=1
mkdir build && cd build
cmake ..
cmake --build . -j4
```

## Credits

- The conversion from Markdown to HTML is done with the help of the [md4c](https://github.com/mity/md4c) - library by *Martin Mitáš*.
