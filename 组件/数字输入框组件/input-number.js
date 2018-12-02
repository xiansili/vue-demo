Vue.component("input-number", {
  template: `
  <div class="input-number"> 
    <input
    type="text"
    :value="currentVaule"
     @change="handleChange">
     <button @click="handleDown"
      @disabled="currentVaule <= min">-</button>
      <button @click="handleUp"
      @disabled="currentVaule >= max">+</button>
    </div>
  `,
    
  props: {
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
  },
  data: function() {
    return {
      currentVaule: this.value
    };
  },

  watch: {
    currentVaule(val){
        this.$emit('input',val);
        this.$emit('on-change',val);
    },
    
  }
});
