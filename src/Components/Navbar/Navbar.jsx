import { useNavigate } from "react-router-dom";

function Navbar({ active, setActive }) {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <div role="tablist" className="tabs tabs-bordered">
          <a
            role="tab"
            className={`tab ${active === "home" ? "tab-active" : ""}`}
            onClick={() => {
              setActive("home");
              setTimeout(() => navigate("/"), 0);
            }}
          >
            Home
          </a>
          <a
            role="tab"
            className={`tab ${active === "new" ? "tab-active" : ""}`}
            onClick={() => {
                setActive("new");
                setTimeout(() => navigate("/new"), 0);
              }}
          >
            New training plan
          </a>
          <a
            role="tab"
            className={`tab ${active === "my" ? "tab-active" : ""}`}
            onClick={() => {
                setActive("my");
                setTimeout(() => navigate("/my"), 0);
              }}
          >
            My plans
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
