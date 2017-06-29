import {addTodo} from './todoHelpers'

test('addTodo should add the passed todo to the list', () => {
    const startTodos = [
        {id:1, name: 'foo', isComplete: false},
        {id:2, name: 'bar', isComplete: false}
    ]

    const newTodo = {id:3, name:'baz', isComplete: false}

    const expected = [
        {id:1, name: 'foo', isComplete: false},
        {id:2, name: 'bar', isComplete: false},
        {id:3, name:'baz', isComplete: false}
    ]
    
    const result = addTodo(startTodos, newTodo)

    expect(result).toEqual(expected)
})

test('addTodo should not mutate the existing todo array', () => {
    const startTodos = [
        {id:1, name: 'foo', isComplete: false},
        {id:2, name: 'bar', isComplete: false}
    ]

    const newTodo = {id:3, name:'baz', isComplete: false}

    const expected = [
        {id:1, name: 'foo', isComplete: false},
        {id:2, name: 'bar', isComplete: false},
        {id:3, name:'baz', isComplete: false}
    ]
    
    const result = addTodo(startTodos, newTodo)

    expect(result).not.toBe(startTodos)  
})