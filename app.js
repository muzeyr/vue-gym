window.addEventListener('load', () => {

  window.vue = new Vue({
    el: '#app',
    name: 'Cart',
    data: {
      list: [],
      frm:{
        first_name:'',
        last_name:'',
        email:''
      }
    },
    methods: {
      saveForm() {
        let frm1 = this.frm;
        this.list.push(frm1);
        this.frm={};
      },
      updateForm(item){
        this.frm = item;
      }
    },
    created() {
      fetch('./data.json')
        .then((res) => { return res.json() })
        .then((res) => {
          this.isLoading = false;
          this.cart = res.cart;
          this.saved = res.saved;
        })
    }
  })

});
