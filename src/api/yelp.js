import axios from 'axios'

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'bearer 9tnJodQodfeQtnQHJivnbGN7Ojmi4csPW1nsSCRXgVKLml02jwfHlNYN_AjpsgrIvGCv-9KwSomCiNJy9AfeHV6lUlDFE0POhX_sN_jIXTc2ASZR3RKpZHy6BA0oYHYx'
    }
})