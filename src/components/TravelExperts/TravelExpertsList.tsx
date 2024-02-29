import React, { useState, useEffect } from "react";
import axios from "axios";
import { CardContainer, GridContainer } from "./TravelExperts.styles";

interface Expert {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

const TravelExpertsList: React.FC = () => {
  const [experts, setExperts] = useState<Expert[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users?page=${currentPage}&per_page=4`)
      .then((response) => setExperts(response.data.data))
      .catch((error) => console.error("Error fetching Travel Experts:", error));
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <GridContainer>
      {experts.map((expert) => (
        <CardContainer key={expert.id}>
          <img src={expert.avatar} alt={`${expert.first_name}'s avatar`} />
          <h3>
            {expert.first_name} {expert.last_name}
          </h3>
          <a>{expert.email}</a>
        </CardContainer>
      ))}
      <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous Page
        </button>
        <button onClick={handleNextPage}>Next Page</button>
      </div>
    </GridContainer>
  );
};

export default TravelExpertsList;
