import { useEffect, useState } from "react"

const useReview = ( ) =>{
      const [reviews , setReview] = useState([])
      useEffect(()=>{
            fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReview(data))
      },[])
      return [reviews , setReview]
}
export {useReview}