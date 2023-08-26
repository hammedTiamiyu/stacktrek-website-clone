const paginate = (followers) => {
   const itemsPerPage = 4
   const numberOfPages = followers.length / itemsPerPage
   //    console.log(numberOfPages)
   const newFollowers = Array.from({length: numberOfPages}, (_,index) => {
    const start = index * numberOfPages
    return followers.slice(start, start + itemsPerPage)
   })
   console.log(newFollowers);
  return newFollowers
}

export default paginate
