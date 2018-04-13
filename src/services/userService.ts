import {provideSingleton} from '../ioc'
import {User, UserCreationRequest} from 'tsoa-example-models'

@provideSingleton(UserService)
export class UserService {
  public async getAll(): Promise<User[]> {
    return new Promise<User[]>((resolve, reject) => {
      let users: User[] = [{
        id: 1,
        email: 'aant@test.com',
        name: 'Adam Ant',
        phoneNumbers: ['12345', '54321'],
        status: 'active'
      },
      {
        id: 2,
        email: 'bboyd@test.com',
        name: 'Belle Boyd',
        phoneNumbers: ['22345', '54322'],
        status: 'active'
      }]

      resolve(users)
    })
  }

  public async get(id: number): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      let user: User = {
        id: 1,
        email: 'aant@test.com',
        name: 'Adam Ant',
        phoneNumbers: ['12345', '54321'],
        status: 'active'
      }

      resolve(user)
    })
  }

  public async create(requestBody: UserCreationRequest): Promise<void> {
    return Promise.resolve()
  }
}
