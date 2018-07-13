import axios from 'axios';
import {FETCH_USER, FETCH_SURVEYS} from './types'


export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
      //console.log("=====data:"+JSON.stringify(res.data))
      //console.log("=====res:"+JSON.stringify(res))
      dispatch({type:FETCH_USER,payload:res.data});
  }

  export const submitSurvey = (values,history) => async dispatch => {
    const res = await axios.post('/api/doors',values);
    history.push('/surveys')
    dispatch({type:FETCH_USER,payload:res.data})
  }

export const fetchSurveys = () => async dispatch => {

  const res = await axios.get('/api/surveys');
  //console.log("FETCH_SURVEYS:"+JSON.stringify(res.data))
  dispatch({type: FETCH_SURVEYS,payload:res.data})

}
