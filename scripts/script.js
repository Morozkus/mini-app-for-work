'use strict'

import { Converter } from "./convert.js";

const btnConver = document.querySelector('#start')
const btnCopy = document.querySelector('#copy')


const converter = new Converter()

btnConver.addEventListener('click', function () {
    converter.convert()
})

btnCopy.addEventListener('click', function() {
    converter.copy()
})