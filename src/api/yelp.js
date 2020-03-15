import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer jCC7Mu0e312KBvjJZ356C-yxoQsc8kdTAu22fu23qLuSo4CaNebVkx1b7_DekDqU8FT7ibL4_eaykmKsVAFVhYc8gECzeFIHZoU3piuzJY66XfXVHobn_o78MUFqXnYx'
    }
});