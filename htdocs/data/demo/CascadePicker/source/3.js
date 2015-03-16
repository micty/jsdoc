var ap3 = new KERP.CascadePicker({
    container: '#div-address-picker-3',
    selectedIndexes: [-1, -1, -1],
    hideNone: false,
    data: 'data/address/array.full.js',
    varname: '__AddressData__',
    fields: {
        text: 1,
        child: 4
    }
});

ap3.on('change', function (level, index) {
    //console.log(level, index);
    var items = this.getSelectedItems();
    console.dir(items);
});

ap3.render();