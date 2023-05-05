'use strict'

export class Converter {
    constructor() {
        this.input = document.querySelector('#phone')

        this.phone = null
    }

    convert() {
        let number = this.input.value
            .replace(/\D/g, '')
        if (number.length !== 11) {
            return this.error()
        }

        number = number.match(/(\d)(\d\d\d)(\d\d\d)(\d\d)(\d\d)/)
        this.phone = String(number[1] + ' (' + number[2] + ') ' + number[3] + '-' + number[4] + '-' + number[5])

        return this.input.value = this.phone
    }

    copy() {
            const inputValue = this.input.value;
            if (inputValue) {
              navigator.clipboard.writeText(inputValue)
                .catch(err => {
                  console.log('Something went wrong', err);
                })
            }
    }

    error() {
        this.input.value = 'Некорректный номер телефона!'
    }
}