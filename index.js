const compiler = require("./lib")

module.exports = function () {
  this.filter("ember", (data) => {
    return "export default Ember.HTMLBars.template(" + compiler
      .precompile(data.toString(), false) + ")"
  })
}
