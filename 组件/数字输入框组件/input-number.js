Vue.component('input-number', {
    template: '\
    <div class="input-number"> \
    </div>',
    props:{
        max: {
            type: Number,
            default: Infinity
        },
        min: {
            type: Number,
            default: -Infinity
        },
        vaule: {
            type: Number,
            default: 0
        }

    }
});