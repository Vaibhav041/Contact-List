import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  const [contacts, setContacts] = useState([]);
  const [hasMore, setHasmore] = useState(true);
  const [page, setPage] = useState(2);
  const navigate = useNavigate();

  const Logout = () => {
    navigate("/");
  };
  //first page of the list
  const List = async () => {
    let url = "https://randomuser.me/api/?page=1&results=10&seed=abc";
    let data = await fetch(url);
    let parsedData = await data.json();
    setContacts(parsedData.results);
  };
  useEffect(() => {
    List();
  }, []);

  //fetching more contacts after a scroll
  const fetchNewList = async () => {
    let url = `https://randomuser.me/api/?page=${page}&results=10&seed=abc`;
    let data = await fetch(url);
    let parsedData = await data.json();
    return parsedData.results;
  };

  const fetchMoreData = async () => {
    const MoreContacts = await fetchNewList();
    setTimeout(() => setContacts([...contacts, ...MoreContacts]), 1000);

    if (MoreContacts.length === 0 || MoreContacts.length < 10) {
      setHasmore(false);
    }
    setPage(page + 1);
  };

  return (
    <>
      <nav className="navbar bg-dark sticky-top">
        <div className="container-fluid">
          <p className="navbar-brand text-danger">CONTACTS</p>
          <form className="d-flex" role="search">
            <button
              className="btn btn-outline-danger"
              type="submit"
              onClick={Logout}
            >
              Log Out
            </button>
          </form>
        </div>
      </nav>
      <InfiniteScroll
        dataLength={contacts.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Spinner />}
      >
        <div>
          {contacts.map((element) => {
            return (
              <div key={element.email}>
                <Contact
                  first={element.name.first}
                  last={element.name.last}
                  imgUrl={element.picture.thumbnail}
                  email={element.email}
                  phone={element.phone}
                  cell={element.cell}
                />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default Home;

{/* <NavLink to="/" className='createNewBtn' >Register</NavLink> */}