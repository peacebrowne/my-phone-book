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

document.addEventListener('click', event => {
    const target = event.target
    const targetClass = Array.from(target.classList)

    if(targetClass.includes('new-contact')){
        switch_sections(target)
    }
})


const switch_sections = element => {

    element.nextElementSibling.classList.toggle('hidden')
    element.nextElementSibling.nextElementSibling.classList.toggle('hidden')
    
}