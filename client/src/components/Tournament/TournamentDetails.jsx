import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_TOURNAMENT_DETAILS } from '../../utils/queries';

const TournamentDetails = ({ tournamentId }) => {
  const { loading, error, data } = useQuery(GET_TOURNAMENT_DETAILS, {
    variables: { id: tournamentId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const tournament = data.tournament;

  return (
    <div className="tournament-details">
      <h2>{tournament.name}</h2>
      <p>Date: {new Date(tournament.date).toLocaleDateString()}</p>
      <p>Location: {tournament.location}</p>
      <p>Buy-in: ${tournament.buyIn}</p>
      <p>Prize Pool: ${tournament.prizePool}</p>
      <p>Players: {tournament.players.length}</p>
      <h3>Players:</h3>
      <ul>
        {tournament.players.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TournamentDetails;