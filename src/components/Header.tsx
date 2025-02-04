import { useNavigate } from "react-router"
const Header = () => {
  const navigate = useNavigate()
  return (
    <header className="bg-red-400 h-14 flex justify-center py-4 gap-5 text-2xl">
      <p className="cursor-pointer hover:scale-105" onClick={() => navigate("/")}>Home</p>
      <p className="cursor-pointer hover:scale-105" onClick={() => navigate("/dashboard")}>Dashboard</p>
    </header>
  )
}

export default Header
