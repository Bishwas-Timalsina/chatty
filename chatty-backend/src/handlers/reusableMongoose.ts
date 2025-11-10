import _ from "lodash";
// import { max_results_limit } from "../config";

interface IReusableMongoose {
  mongooseQuery: any;
  queryObject?: any;
  searchFields?: string[];
}

const reusableMongoose = ({
  mongooseQuery,
  queryObject,
  searchFields,
}: IReusableMongoose) => {
  const max_results_limit = 100;
  // const max_results_limit = 25;

  const clonedQueryObject = _.cloneDeep(queryObject);

  delete clonedQueryObject.pagination_limit;
  delete clonedQueryObject.pagination_page;
  delete clonedQueryObject.search;

  // Appending all query strings to mongooseQuery
  mongooseQuery = mongooseQuery.find(clonedQueryObject);

  // Working with search
  if (queryObject.search) {
    const searchArray: any[] = [];
    searchFields?.map((el) =>
      searchArray.push({
        [el]: { $regex: new RegExp(queryObject.search, "i") },
      })
    );
    mongooseQuery = mongooseQuery.find({ $or: searchArray });
    // console.log("This is search Array",searchArray)
  }

  // Working on limits
  if (queryObject.pagination_page) {
    if (queryObject.pagination_page) {
      if (!queryObject.pagination_limit)
        throw "Pagination limit and page, both required!";
    }

    if (queryObject.pagination_limit) {
      if (!queryObject.pagination_page)
        throw "Pagination limit and page, both required!";
    }

    // Limiting too much data...

    if (queryObject.pagination_limit > max_results_limit)
      queryObject.pagination_limit = max_results_limit;

    mongooseQuery = mongooseQuery
      .skip(
        queryObject.pagination_page > 1
          ? (queryObject.pagination_page - 1) * queryObject.pagination_limit
          : 0
      )
      .limit(queryObject.pagination_limit);
  } else {
    mongooseQuery = mongooseQuery.limit(max_results_limit);
  }

  return { query: mongooseQuery, conditions: mongooseQuery._conditions };
};

export default reusableMongoose;
