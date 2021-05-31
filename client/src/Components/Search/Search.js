import React, { useState, useEffect } from "react";
import Container from "../Container";
import SearchForm from "../SearchForm";
import SearchResults from "../SearchResults";
import Alert from "../Alert";
import ArticleContext from "../../utils/ArticleContext";
import API from "../../utils/API";

function Search() {
  const [articleState, setArticleState] = useState({
    title: "",
    url: ""
  });

  const [search, setSearch] = useState("Wikipedia");
  const [error, setError] = useState("");

  // When the component mounts, update the title to be Wikipedia Searcher
  useEffect(() => {
    document.title = "Wikipedia Searcher";

    if (!search) {
      return;
    }

    API.searchTerms(search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setArticleState({
          title: res.data[1][0],
          url: res.data[3][0]
        });
      })
      .catch(err => setError(err));
  }, [search]);

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
  };
  return (
    <ArticleContext.Provider value={articleState}>
      <div>
        <Container style={{ minHeight: "100vh" }}>
          <h1 className="text-center">Search For Anything on Wikipedia</h1>
          <Alert type="danger" style={{ opacity: error ? 1 : 0, marginBottom: 10 }}>
            {error}
          </Alert>
          <SearchForm
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            results={search}
          />
          <SearchResults />
        </Container>
      </div>
    </ArticleContext.Provider>
  );
}

export default Search;