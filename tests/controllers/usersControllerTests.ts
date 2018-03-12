import 'mocha'
import { assert } from 'chai'
import { UserCreationRequest } from 'tsoa-example-models'
import { UsersController } from '../../src/controllers/usersController'

describe('UsersController', () => {
  describe('getUser', () => {
    it('should call service', async () => {
      let usersController = new UsersController
      let user = await usersController.getUser(1) // TODO should mock call to service
      assert.equal(1234, user.id)
    })
  })
  describe('getUser', () => {
    it('should call service', async () => {
      let usersController = new UsersController
      let userCreationRequest: UserCreationRequest = {
        name: 'Name',
        email: 'Email',
        phoneNumbers: []
      }
      await usersController.createUser(userCreationRequest) // TODO should mock call to service
    })
  })
})
