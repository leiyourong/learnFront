module.exports = {
  add: function (x, y){
    if (typeof x === 'number' && typeof y === 'number') {
      return x + y
    }
    return 'error'
  }
}
