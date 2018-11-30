var app = new Vue({
  el: "#app",
  data: {
    list: [
      {
        id: 1,
        name: "iphone7",
        price: 6199,
        count: 1,
        isshow:false
      },
      {
        id: 2,
        name: "ipad",
        price: 2299,
        count: 1,
        isshow:false
      },
      {
        id: 3,
        name: "apple",
        price: 355,
        count: 1,
        isshow:false
      },
      {
        id: 4,
        name: "banana",
        price: 298,
        count: 1,
        isshow:false
      }
    ]
  },

  methods: {
    less: function(index) {
      if (this.list[index].count === 1) return;

      this.list[index].count--;
    },
    add: function(index) {
      this.list[index].count++;
    },
    remove: function(index) {
      this.list.splice(index, 1);
    },select: function(index) {
      this.list[index].isshow = ! this.list[index].isshow;
     },
  },
  computed: {
    shop(){
      let sum = 0;
      this.list.forEach(elem=>{
        if (elem.isshow) {
          let money =  elem.price * elem.count;
           sum += money;
        }   
      });
      return sum.toString().replace(/\B(?=(\d{3})+$)/g, ",");;
    }
  }
});
