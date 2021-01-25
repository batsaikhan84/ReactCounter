let state = { count: 0 }

function reducer (state, action) {
    switch (action.type) {
        case ('INCREMENT'):
            return { count: state.count + 1 }
        case ('DECREMENT'):
            return { count: state.count - 1 }
        default:
            return state
    } 
}

function render() {
    let container = document.getElementById('container')
    container.textContent = state.count
}

function dispatch(action) {
    state = reducer(state, action)
    render()
}

dispatch({type: '@@INIT'})

let incrementButton = document.getElementById('incrementButton')
let decrementButton = document.getElementById('decrementButton')

incrementButton.addEventListener('click', () => {
    dispatch({type: 'INCREMENT'})
})
decrementButton.addEventListener('click', () => {
    dispatch({type: 'DECREMENT'})
})






