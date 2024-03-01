import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  CardContainer,
  GridContainer,
  IntroParagraph,
} from "./TravelExperts.styles";
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
    const maxPages = 2;
    const apiUrl = `https://reqres.in/api/users?page=${currentPage}&per_page=4`;

    if (currentPage <= maxPages) {
      axios
        .get(apiUrl)
        .then((response) => setExperts(response.data.data))
        .catch((error) =>
          console.error("Error fetching Travel Experts:", error)
        );
    }
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <IntroParagraph>
        With RR Space Travel, step into a world where the stars are your
        playground and the cosmos is your next vacation spot. Meet our fantastic
        team of Travel Experts, the cool folks who tailor your space exploration
        adventure. Let us organise your intergalactic escapade with us – where
        every space adventure comes with a side of laughter, wonder, and
        interstellar high-fives.
      </IntroParagraph>
      <GridContainer role="list">
        {experts.map(({ id, first_name, last_name, email, avatar }) => (
          <CardContainer key={id} role="listitem">
            <img src={avatar} alt={`${first_name}'s avatar`} />
            <h3>
              {first_name} {last_name}
            </h3>
            <a href={`mailto:${email}`} aria-label={`Email ${first_name}`}>
              {email}
            </a>
          </CardContainer>
        ))}
      </GridContainer>
      <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
    </>
  );
};

export default TravelExpertsList;
