import {useParams} from 'react-router-dom'
import Article from '../components/Article'
import { fetchArticleByID } from '../api/ArticlesAPI'
import { useEffect } from 'react'
import { useState } from 'react'

function ArticlePage (){
    const [article, setArticle] = useState('')

    let {articleID} = useParams()

    useEffect(()=>{
        fetchArticleByID(articleID)
        .then((response) => {
            console.log('>>>>>>>',response.data.hits)
            setArticle(response.data.hits[0])
        })
    },[])
    
    return (
        <div>
            <Article {...article} />
        </div>
    )
}

export default ArticlePage