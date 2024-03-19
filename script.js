function greet() {
  const name = document.querySelector('#name').value || 'Гапочка Михаил Германович';
  alert(`Здравствуйте, ${name}!`)
}