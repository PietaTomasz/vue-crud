<template>
  <div id="about" onClick={this.loadQuote}>
    <h3>{{ msg }}</h3>
    <div id="axios"></div>
  </div>
</template>

<script>/* eslint-disable */
export default {
  name: 'HelloWorld',
  
  data() {
    return {
      msg: 'Welcome to Events Manager Vue.js App',
      // status: 'Simple Random Quote Generator'
    }
  },
  created() {
    this.loadQuote();
  },
  methods: {
    loadQuote() {
      axios.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
      .then( (response)=> {
        this.status = response.data[0].content;
        document.getElementById('axios').innerHTML = this.status;
      })
      .catch( (error)=> {
        this.status = "Error"
      } )
    }
  }
}
</script>
