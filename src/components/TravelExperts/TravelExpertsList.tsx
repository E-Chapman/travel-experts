import React, { useState, useEffect } from "react";
import axios from "axios";
import { CardContainer, GridContainer } from "./TravelExperts.styles";
import Pagination from "../Pagination/Pagination";

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
    axios;
    const apiUrl = `https://reqres.in/api/users?page=${currentPage}&per_page=4`;

    axios
      .get(apiUrl)
      .then((response) => setExperts(response.data.data))
      .catch((error) => console.error("Error fetching Travel Experts:", error));
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <GridContainer>
        {experts.map(({ id, first_name, last_name, email, avatar }) => (
          <CardContainer key={id}>
            <img src={avatar} alt={`${first_name}'s avatar`} />
            <h3>
              {first_name} {last_name}
            </h3>
            <a>{email}</a>
          </CardContainer>
        ))}
      </GridContainer>
      <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
    </>
  );
};

export default TravelExpertsList;
