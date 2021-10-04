
export function validate(id, text) {

    const rules = {
        'name': (text) => {
            const isDigitsExists = text.match(/[0-9]/)
            if (isDigitsExists) {
                return false
            } else {
                return true
            }
        },
        'description': (text) => {
            return text.length >= 5
        },
        'color': (text) => {
            const isDigitsExists = text.match(/[0-9]/)
            if (isDigitsExists) {
                return false
            } else {
                return true
            }
        },
        'weight': (text) => {
            const isDigitsExists = text.match(/[0-9]/)
            if (isDigitsExists) {
                return true
            } else {
                return false
            }
        },
        'length': (text) => {
            const isDigitsExists = text.match(/[0-9]/)
            if (isDigitsExists) {
                return true
            } else {
                return false
            }
        },
        'height': (text) => {
            const isDigitsExists = text.match(/[0-9]/)
            if (isDigitsExists) {
                return true
            } else {
                return false
            }
        },
        'width': (text) => {
            const isDigitsExists = text.match(/[0-9]/)
            if (isDigitsExists) {
                return true
            } else {
                return false
            }
        },
        'count': (text) => {
            const isDigitsExists = text.match(/[0-9]/)
            if (isDigitsExists) {
                return true
            } else {
                return false
            }
        },
        'photo': (text) => {

        }
    }
    return rules[id](text)
}