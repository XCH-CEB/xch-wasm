let xch_wasm = import('./xch_wasm');

xch_wasm.then(xch => {
    $(eqnInput).on('input', function() {
        update($(eqnInput).val(), xch);
    });
});

function update(input, xch) {
    const ans = xch.balance(input);
    document.getElementById("ans").innerText = ans;
}
