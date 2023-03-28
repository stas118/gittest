const axios = require('axios');
const assert = require('assert');
describe('API петстора', function() {

  // тестовый сценарий для создания нового пользователя
  it('Создаем собачку', function(done) {
    axios.put('https://petstore.swagger.io/v2/pet', {
  "id": 9223372036854250000,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
})
      .then(function(response) {
        assert.equal(response.status, 200); // проверяем статус код ответа
        assert.equal(response.data.id, 9223372036854250000); // проверяем имя>
        done(); // завершаем тестовый сценарий
      })
      .catch(function(error) {
        done(error); // завершаем тестовый сценарий с ошибкой
      });
  });
// Создаем объект FormData
const formData = new FormData();
formData.append('file', '/home/stas/Изображения/Снимки экрана/Снимок экрана от 2023-03-22 23-19-34.png');
  it('Загружаем фото ', function(done) {
    axios.post('https://petstore.swagger.io/v2/pet/9223372036854250000/uploadImage', formData, {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})
      .then(function(response) {
        assert.equal(response.status, 200); // проверяем статус код ответа
        done(); // завершаем тестовый сценарий
      })
      .catch(function(error) {
        done(error); // завершаем тестовый сценарий с ошибкой
      });
  });
});

  // тестовый сценарий для создания нового пользователя
  it('Удаляем пса', function(done) {
    axios.delete('https://petstore.swagger.io/v2/pet/9223372036854250000')
      .then(function(response) {
        assert.equal(response.status, 200); // проверяем статус код ответа
        done(); // завершаем тестовый сценарий
      })
      .catch(function(error) {
        done(error); // завершаем тестовый сценарий с ошибкой
      });
  });
// тестовый сценарий для создания нового пользователя
  it('Покупаем собачку', function(done) {
    axios.put('https://petstore.swagger.io/v2/pet', {
  "id": 278,
  "petId": 0,
  "quantity": 0,
  "shipDate": "2023-03-25T06:25:05.267+0000",
  "status": "placed",
  "complete": true
})
      .then(function(response) {
        assert.equal(response.status, 200); // проверяем статус код ответа
        assert.equal(response.data.id, 278); // проверяем имя>
        done(); // завершаем тестовый сценарий
      })
      .catch(function(error) {
        done(error); // завершаем тестовый сценарий с ошибкой
      });
  });


  it('Создаем пользователя ', function(done) {
    axios.post('https://petstore.swagger.io/v2/user', {
  "id": 144,
  "username": "stasio",
  "firstName": "string",
  "lastName": "string",
  "email": "string@gv.tu",
  "password": "string",
  "phone": "123",
  "userStatus": 12,
   })
      .then(function(response) {
        assert.equal(response.status, 200); // проверяем статус код ответа
        done(); // завершаем тестовый сценарий
      })
      .catch(function(error) {
        done(error); // завершаем тестовый сценарий с ошибкой
      });
  });


