import React, { useEffect, useReducer } from "react";
import API from "../../helpers/API";
import ListingItem from "./ListingItem.component.js";
import styled, { withTheme } from "styled-components";
import Button from "../button/Button.component";
import FileSaver from "file-saver";

const DataListingWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
`;

const LoadMoreWrapper = styled.div`
  width: calc(100% / 3 - 20px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px 20px 10px;
  border: 2px dashed #d4d4d4;
  padding: 20px;
  border-radius: 3px;
  overflow: hidden;
  transition: all 0.3s ease;
  :hover {
    cursor: pointer;
    background: #f3f3f3;
  }
`;

const ExportJSON = styled.div`
  position: fixed;
  right: -7px;
  bottom: 30px;
`;

const LoadMore = ({ onClick, loading, noMore }) => {
  return (
    <LoadMoreWrapper onClick={onClick}>
      {!loading
        ? noMore
          ? "No more data"
          : "Click to load more"
        : "Loading..."}
    </LoadMoreWrapper>
  );
};
const initialData = {
  loading: false,
  noMore: false,
  page: 1,
  data: [],
};
const loadMoreReducer = (state, action) => {
  switch (action.type) {
    case "NEXT_PAGE":
      return {
        ...state,
        page: state.page + 1,
      };
    case "LOAD_START":
      return {
        ...state,
        loading: true,
      };
    case "LOAD_MORE":
      return {
        ...state,
        data: [...state.data, ...action.payload],
        loading: false,
        noMore: action.payload.length < 1 ? true : false,
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

const DataListing = ({ theme }) => {
  const [fetchedData, dispatch] = useReducer(loadMoreReducer, initialData);

  const handleLoadMore = () => {
    dispatch({ type: "NEXT_PAGE" });
  };

  const handleExportJSON = () => {
    try {
      let isFeatureSupported = !!new Blob();
      try {
        if (isFeatureSupported) {
          const json = JSON.stringify(fetchedData.data);
          const blob = new Blob([json], {
            type: "application/json",
          });
          FileSaver.saveAs(blob, "ExportedJSON.json");
        }
      } catch (e) {
        alert("Cannot generate blob");
      }
    } catch (e) {
      alert("Cannot export, feature is not supported.");
    }
  };

  async function getData(nextPage) {
    dispatch({ type: "LOAD_START" });
    const data = await API.call("GET", nextPage);
    dispatch({ type: "LOAD_MORE", payload: data.flowers });
  }

  useEffect(() => {
    if (!fetchedData.noMore) {
      getData(fetchedData.page);
    }
  }, [fetchedData.noMore, fetchedData.page]);

  return fetchedData.data ? (
    <DataListingWrapper>
      {fetchedData.data.map((item) => (
        <ListingItem
          key={item.id}
          data={item}
          removeItem={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
        />
      ))}
      <LoadMore
        onClick={handleLoadMore}
        loading={fetchedData.loading}
        noMore={fetchedData.noMore}
      />
      <ExportJSON>
        <Button
          margin="0"
          color={theme.colors.orange}
          onClick={handleExportJSON}
        >
          Export JSON
        </Button>
      </ExportJSON>
    </DataListingWrapper>
  ) : (
    "Loading..."
  );
};

export default withTheme(DataListing);
