import 'mocha'
import { assert } from 'chai'
import '../../src/ioc'
import { mock, instance, when, verify } from 'ts-mockito'
import { User, UserCreationRequest, UserChangeOfStatusRequest, UserStatus } from 'tsoa-example-models'
import { UserService } from '../../src/services/userService'
import { UsersController } from '../../src/controllers/usersController'

describe('UsersController', () => {
  let usersController: UsersController
  let userService: UserService
  let user1: User = {
    id: 1234,
    email: 'string',
    name: 'Name',
    phoneNumbers: [],
    status: 'status'
  }

  beforeEach(() => {
    userService = mock(UserService)
    let userServiceInstance = instance(userService)
    usersController = new UsersController(userServiceInstance)
  })

  describe('getAll', () => {
    it('should call service', async () => {
      when(userService.getAll()).thenResolve([user1])

      let users = await usersController.getAll()

      verify(userService.getAll()).called()
      assert.equal(1234, users[0].id)
    })
  })

  describe('getUser', () => {
    it('should call service', async () => {
      when(userService.get(1)).thenReturn(Promise.resolve(user1))

      let user = await usersController.getUser(1)

      verify(userService.get(1)).called()
      assert.equal(1234, user.id)
    })
  })

  describe('createUser', () => {
    it('should call service', async () => {
      let userCreationRequest: UserCreationRequest = {
        name: 'Name',
        email: 'Email',
        phoneNumbers: []
      }
      when(userService.create(userCreationRequest)).thenReturn(Promise.resolve())

      await usersController.createUser(userCreationRequest)

      verify(userService.create(userCreationRequest)).called()
    })
  })

  describe('changeOfStatus', () => {
    it('should call service', async () => {
      let userChangeOfStatusRequest: UserChangeOfStatusRequest = {
        id: 1,
        status: UserStatus.Active
      }
      when(userService.updateStatus(userChangeOfStatusRequest)).thenReturn(Promise.resolve())

      await usersController.changeOfStatus(userChangeOfStatusRequest)

      verify(userService.updateStatus(userChangeOfStatusRequest)).called()
    })
  })
})
