import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer B3H6qKDYsqY72u1zJ1njkGAWQMrmdM_CSnaOcFlsR58KoDsQcjnET2Mw8H_uV_Vl4Iloz0v2ufibXlkatzT4uy84RmVGJtOKXeVT099nhjATtuoAeH4PJTP-lTxuXnYx'
    }
});