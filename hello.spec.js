const helloFn = require('./hello')


test('hello', () => {
  //Arrange
  let name = 'Kam'

  //Act
  let result = helloFn(name)

  //Assert
  expect(result).toBe('hello Kam')
})
