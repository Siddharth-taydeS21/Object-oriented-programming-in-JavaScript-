// ============ "this" keyword workings ==============
console.log(`Global this:`, this) // window

function log(){
    console.log(`Function this:`, this)
}
log() // window

const arrowLog = () => {
    console.log(`arrow function this:`, this)
}
arrowLog() // window

const exampleObject = {
    key1 : 'value',
    key2: 'value2',
    log(){
        console.log(`object's child fn this:`, this) 
        function nestedLog(){
            console.log(`nested child fn this:`, this)
        }
        nestedLog()
    },
    arrowLog: () => {
        console.log(`object's child arrow fn this:`, this) 
    }
}
exampleObject.log() // exampleObject
exampleObject.arrowLog() // window

const root = document.getElementById('root').addEventListener('mouseover', () => {
    console.log(`event Listener's arrow fn this:`, this) // window
})

function justLog(){
    console.log(`event Listener's normal fn this:`, this) // html element (the one who receives the event)
}
const main = document.getElementById('main').addEventListener('mouseover', justLog)