module.exports = function (array, filterString) {
  array = array.filter(item => {
    console.log(item)
    console.log("filter ",filterString)

    return item.includes(filterString)
  })
  return array
}
