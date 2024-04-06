
import React, { useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { useGetProductQuery } from "../../features/api/apiSlice";
import { ROUTES } from "../../utils/routes";

const SingleProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
  
  
    const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });
  
    useEffect(() => {
      if (!isFetching && !isLoading && !isSuccess) {
        navigate(ROUTES.Home);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading, isFetching, isSuccess]);
  
    return (
      <div>
        SingleProduct
      </div>
    ) 
}

export default SingleProduct;