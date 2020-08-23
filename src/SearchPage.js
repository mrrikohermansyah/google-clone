import React from "react";
import "./SearchPage.css";
import { useStateValue } from "./pages/StateProvider";
import useGoogleSearch from "./pages/useGoogleSearch"; // if you want to use this, just uncommand this const { data } = useGoogleSearch(term);
//import Response from "./response";
import { Link } from "react-router-dom";
import Search from "./pages/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  //LIVE API CALL
  const { data } = useGoogleSearch(term);
  //const data = Response; //MOCK API call
  //https://developers.google.com/custom-search/v1/using_rest  this link is for get the google key

  //https://cse.google.com/cse/create/new
  console.log(data); //debuggin proposes
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img className="searchPage__logo" src="https://pngimg.com/uploads/google/google_PNG19631.png" alt="">
          </img>  
        </Link>

        <div className="searchPage__headerBody">
          <Search hideButtons/>
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/all">News</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/all">Images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/all">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/all">Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/all">More</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      
      
      
      
      {term && (
        <div className='searchPage__results'>
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map(item => (
            <div className="searchPage__result">
              <a className="searchPage__resultLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src &&(
                  <img className="searchPage__resultImage" src={
                    item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src
                  } 
                  alt=""                   
                  />
                )}
                {item.displayLink}
              </a>
              <a className='searchPage__resultTitle' href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className='searchPage__resultSnippet'>
                {item.snippet}
              </p>        
            </div>
            
          ))}
        </div>

      )}
      
    </div>
  )
}

export default SearchPage;
