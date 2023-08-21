const paginate = (followers) => {
   const itemsPerPage = 10
   const numberOfPages = followers.length / itemsPerPage
   //    console.log(numberOfPages)
   const newFollowers = Array.from({length: numberOfPages}, (_,index) => {
    const start = index * numberOfPages
    return followers.slice(start, start + itemsPerPage)
   })
  return newFollowers
}

export default paginate
