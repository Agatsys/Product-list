
export function validate(id, text) {

    const rules = {
        'name': (text) => {
            return text.length >= 1
        },
        'description': (text) => {
            return text.length >= 3
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
            const isDigitsExists = text === '' || text.match(/[0-9]/)
            if (isDigitsExists) {
                return true
            } else {
                return false
            }
        },
        'length': (text) => {
            const isDigitsExists = text === '' || text.match(/[0-9]/)
            if (isDigitsExists) {
                return true
            } else {
                return false
            }
        },
        'height': (text) => {
            const isDigitsExists = text === '' || text.match(/[0-9]/)
            if (isDigitsExists) {
                return true
            } else {
                return false
            }
        },
        'width': (text) => {
            const isDigitsExists = text === '' || text.match(/[0-9]/)
            if (isDigitsExists) {
                return true
            } else {
                return false
            }
        },
        'count': (text) => {
            const isDigitsExists = text === '' || text.match(/[0-9]/)
            if (isDigitsExists) {
                return true
            } else {
                return false
            }
        },
        'photo': (text) => {
            const isDigitsExists = text === '' || text.match('http')
            if (isDigitsExists) {
                return true
            } else {
                return false
            }
            
            
        }
    }
    return rules[id](text)
}