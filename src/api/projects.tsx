import axios from 'axios';


export default axios.create({
    baseURL: 'https://cole.pythonanywhere.com/api/v1/'
});
// export default axios.create({
//     baseURL: 'https://portfolio-1-m7436351.deta.app'
// });