var spin = require('spinnes')
var spinner = {
"interval": 340,
"frame": [
" "
" "
]}
let globalSpinner;
var getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'white',
    succeedColor: 'yellow', spinner, disableSpins});
}
spins = getGlobalSpinner(false)
module.exports.start = (id, text) => {
spins.add(id, {text: text})
}
}
