export default {
  methods: {
    maskText(number){

      let str = number.toString()
      let floatStart = str.indexOf('.')
      let floatPart = ''

      if(floatStart !== -1){
        floatPart = str.slice(floatStart, str.length)
        str = str.slice(0, floatStart)
      }

      let reversed = str.split('').reverse().join('')

      
      let g = 1
      for(let i = 0; i < reversed.length; i++){
        if(g == 4){
          reversed = reversed.substring(0, i) + "," + reversed.substring(i, reversed.length);
          g = 0
        }
        g++
      }

      reversed = reversed.split('').reverse().join('')

      if(floatStart !== -1){
        reversed = reversed.concat(floatPart)
      }

      return reversed
    }
  }
}