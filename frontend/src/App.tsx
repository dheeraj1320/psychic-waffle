import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Blogs } from "./pages/Blogs";
import { Blog } from "./pages/Blog";
import { NewBlog } from "./pages/NewBlog";
import { Start } from "./pages/Start";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<Blog />} />
          <Route path="/blogs/new" element={<NewBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
