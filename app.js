/**
 * Searches for an html element based on specified attribute value [class or id]
 * @param {*} value
 * @returns {object} - an element
 */
const find_element = value => {
    return document.querySelector(`${value}`)
}

/**
 * Reset the value of the specified element to an empty string
 * @param {*} element - HTML element
 * @returns {void}
 */
const reInitialize = element => element.value = '';

const todo_list = find_element('ul')
const add_todos_btn = find_element('.new-contact')
const search = find_element('.search-box')
const main = find_element('main')

let btn_name = 'save'

document.addEventListener('click', event => {
    const target = event.target
    const targetClass = Array.from(target.classList)

    if(targetClass.includes('new-contact')){
        switch_sections(target)
    }
})


/**
 * Swithes between contact list section and add contact section and changes the button name
 * between "save" and "add contact" depending on the visible section
 * @param {*} element - HTML element
 * @returns {void}
 */
const switch_sections = element => {

    element.nextElementSibling.classList.toggle('hidden')
    element.nextElementSibling.nextElementSibling.classList.toggle('hidden')

    element.textContent === '➕ Add Contact'
        ? element.textContent = 'Close Form'
        : element.textContent = '➕ Add Contact'
    
}