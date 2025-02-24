import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <>
      <style>{`
        nav {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #333;
          padding: 1rem 0;
        }
        div {
          margin: 0 20px;
        }
        a {
          color: #fff;
          font-size: 18px;
          text-decoration: none;
          font-weight: bold;
          transition: color 0.3s ease;
        }
        a:hover {
          color: #ff6347;
        }
        a.active {
          border-bottom: 3px solid #ff6347;
          padding-bottom: 5px;
        }
      `}</style>

      <nav>
        <div>
          <NavLink to="/" className="active">
            Assignment1
          </NavLink>
        </div>
        <div>
          <NavLink to="/assignment-2" className="active">
            Assignment2
          </NavLink>
        </div>
        <div>
          <NavLink to="/assignment-3" className="active">
            Assignment3
          </NavLink>
        </div>
      </nav>
    </>
  );
}
