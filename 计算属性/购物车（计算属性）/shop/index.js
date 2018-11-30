var app = new Vue({
    el: "#app",
    data: {
      list: [
        {
          id:1,
          name: "iphone7",
          price: 6199,
          count: 1
        },
        {
          id:2,
          name: "ipad",
          price: 2299,
          count: 1
        },
        {
          id:3,
          name: "apple",
          price: 355,
          count: 1
        },
        {
          id:4,
          name: "banana",
          price: 298,
          count: 1
        }
      ],
    },

    methods:{
        less: function(index){
            if (this.list[index].count ===1) return;
               
             this.list[index].count --; 
        },
        add: function(index){
            this.list[index].count ++;
        },
        remove: function(index){
             this.list.splice(index, 1)
        }

    },
    computed:{
        shopprice:function () {
            var prices = 0;
            for (var i = 0; i < this.list.length; i++) {
                var item = this.list[i];
                prices += item.price * item.count;
            }
            return prices.toString().replace(/\B(?=(\d{3})+$)/g,',');
        }
    }
  });