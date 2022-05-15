import { IAction } from '../../ts';

const getData: (data: [])=>IAction = (data: []): IAction => ({type: 'GET_DATA', payload: data})

export {
  getData,
}