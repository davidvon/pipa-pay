
export function getAllCards (self) {
  self.$http.get('http://127.0.0.1:5000/api/cards').then(function (response) {
    if (response && response.data)
      return response.data
  })
}
