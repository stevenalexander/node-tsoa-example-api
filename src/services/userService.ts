import {provideSingleton} from '../ioc'
import {User, UserCreationRequest} from 'tsoa-example-models'

@provideSingleton(UserService)
export class UserService {
  public async getAll(): Promise<User[]> {
    return new Promise<User[]>((resolve, reject) => {
      let users: User[] = [{
        id: 1,
        email: 'string',
        name: 'Adam Ant',
        phoneNumbers: [],
        status: 'status'
      },
      {
        id: 2,
        email: 'string',
        name: 'Belle Boyd',
        phoneNumbers: [],
        status: 'status'
      }]

      resolve(users)
    })
  }

  public async get(id: number): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      let user: User = {
        id: 1234,
        email: 'string',
        name: 'Name',
        phoneNumbers: [],
        status: 'status'
      }

      resolve(user)
    })
  }

  public async create(requestBody: UserCreationRequest): Promise<void> {
    return Promise.resolve()
  }
}
