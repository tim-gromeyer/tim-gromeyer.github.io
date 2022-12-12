# SConverter

[TOC]

![Made with C++](https://forthebadge.com/images/badges/made-with-c-plus-plus.svg)
[![Powered by Qt](https://forthebadge.com/images/badges/powered-by-qt.svg)](https://qt.io)
[![GitHub release](https://img.shields.io/github/release/tim-gromeyer/Converter.svg)](https://github.com/tim-gromeyer/Converter/releases/)

Simple, fast, and powerful: convert your strings with SConverter.

## Features:

- Save and load files
- Undo/Redo
- Real-time preview of converted strings
- Syntax highlighting editor (for HTML only)
- Lightweight and quick to open recent files
- Open source
- Native look and feel

| From         	| To                                            	|
|:------------:	|:---------------------------------------------:	|
| **Plain**    		| C-string<br>Sorted<br>MD5<br>SHA256<br>SHA512 	|
| **Markdown** 	|                 HTML<br>Plain                 	|
| **HTML**     	|               Markdown<br>Plain               	|
| **C-string** 		|                     Plain                     	|

![Example](Converter.png)

## Preview

A live preview is available [here](https://tim-gromeyer.github.io/Converter/converter.html).

## Dependencies:

[Qt](https://qt.io/) 5.10 or above.

## Build instructions

To build SConverter, follow these steps:

1. Clone the SConverter repository: `git clone https://github.com/tim-gromeyer/Converter --depth=1 && cd Converter`
2. Clone the required repositories by running the command `git submodule update --init --recursive -j 3 --depth=1`.
3. Create a build directory: `mkdir build && cd build`.
4. Generate a Makefile with CMake: `cmake ..`.
5. Build the app: `cmake --build . -j4`

Here is the process in one command:
```bash
git clone https://github.com/tim-gromeyer/Converter --depth=1 && cd Converter
git submodule update --init --recursive -j 3 --depth=1
mkdir build && cd build
cmake ..
cmake --build . -j4
```

## Credits

- The conversion from Markdown to HTML is done with the help of the [md4c](https://github.com/mity/md4c) - library by *Martin Mitáš*.
