import axios from 'axios'

async function getData() {
    try {
        const date = Math.floor(Date.now() / 1000) - 86400
        let response = await axios.get('http://hn.algolia.com/api/v1/search_by_date?', {
        params: {
            // tags: ,
            hitsPerPage: 50,
            numericFilters: 'created_at_i<' + date
        }
        }) 
        return response 
    }
    catch(error){
        console.error('Error ocurred while fetching data:', error)
    }
}


async function fetchArticleByID(id) {
    try {
        let response = await axios.get('http://hn.algolia.com/api/v1/search?', {
        params: {
            query: "story_:" + id, 
        }
        }) 
        return response 
    }
    catch(error){
        console.error('Error ocurred while fetching data:', error)
    }
}

async function fetchArticlesBySection(section) {
    try {
        const date = Math.floor(Date.now() / 1000) - 86400
        let response = await axios.get('http://hn.algolia.com/api/v1/search?', {
        params: {
            query: section, 
            hitsPerPage: 50,
            numericFilters: 'created_at_i<' + date
        }
        }) 
        return response 
    }
    catch(error){
        console.error('Error ocurred while fetching data:', error)
    }
}

async function fetchArticles(filters) {
    try {
        let response = await axios.get('http://hn.algolia.com/api/v1/search?', {
        params: {
            query: filters, 
            hitsPerPage: 50,
        }
        }) 
        return response 
    }
    catch(error){
        console.error('Error ocurred while fetching data:', error)
    }
}

export {
    getData,
    fetchArticlesBySection,
    fetchArticles,
    fetchArticleByID,
}