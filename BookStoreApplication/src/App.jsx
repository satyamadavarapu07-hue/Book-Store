import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './components/Home'
import BookList from './components/BookList'
import BookDetails from './components/BookDetails'
import Cart from './components/Cart'
import CheckList from './components/CheckList'
import NotFound from './components/NotFound'
import './App.css'
const App = ()=> {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/books" element={<BookList/>}/>
      <Route path="/books" element={<BookDetails/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkList" element={<CheckList/>}/>
      <Route path="/*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
  )
}
export default App