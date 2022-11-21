import { useState } from 'react'
import items from './data'
import Nav from './Nav'
import SingleItems from './SingleItems.jsx'

const allCategory = ['all', ...new Set(items.map((item)=>{
  return item.category;
}))]

function App() {
  const [ data , isData ] = useState(items)
  const [ catergories , setIsCategories ] = useState(allCategory)

  const newCategory = (currentCategory)=>{
    if(currentCategory === 'all'){
      return isData(items)  
    }
    const newCate = items.filter((currItem)=>{
      return currItem.category == currentCategory;
    })
    return isData(newCate)
  }

  return (
    <main className='main-container'>
      <div className="title">
        <h3>our menu</h3>
      </div>
      <div className="nav">
       <Nav allCat={catergories} filterItem={newCategory}/>
      </div>
      <div className="items-div">
      <SingleItems items={data}/>
      </div>
    </main>
  )
}

export default App
