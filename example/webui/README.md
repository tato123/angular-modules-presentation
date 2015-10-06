# AngularJS Quick Start

## Overview

The purpose of this project is to more rapidly allow individuals to experiment with AngularJS 2. The structure is similar to AngularJS 1 projects based on the Google best practices for AngularJS 1. 

A couple of the things this project attempts to take care of
    - Install TypeScript 1.5 beta
    - Install AngularJS2 typescript definitions
    - Auto-Compile and livereload

## Install

You will need gulp installed globally in order to completly install the project. Gulp is used to automate the installation of the typescript definitions as well as handle compilation and file serving

`npm install -g gulp`

Once that is complete, run the default npm install command

`npm install`

Assuming that everything has completed succesfully you should see the node_modules directory as well as the 'typings' folder underneath the app folder

## Running the Project

Gulp is used to run the project, this will handle compiling the typescript files automatically via watch, serving the files using a connect based server, and livereload.

If the project does not open automatically in your default browser, you can navigate to the address:

http://localhost:8000/ 

after starting the server.

### Run Command

Just run gulp in the project root, everything should execute

`gulp` 

## Feedback

I'd love to hear feedback on how this can be improved to quickly get your AngularJS 2 projects running faster. Once AngularJS 2 stabalizes, this will be available as a yeoman generator. 

## License

The MIT License (MIT)

Copyright (c) 2015 Jonathan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
