import { useState, useEffect, useMemo } from 'react';

interface Dog {
  id: string;
  breed: string;
  available: boolean;
  // ... other properties
}

export const useDogsFilters = (dogs: Dog[]) => {
  const [selectedBreed, setSelectedBreed] = useState('');
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);

  const breeds = useMemo(() => {
    const uniqueBreeds = new Set(dogs.map(dog => dog.breed));
    return Array.from(uniqueBreeds).sort();
  }, [dogs]);

  const filteredDogs = useMemo(() => {
    return dogs.filter(dog => {
      if (selectedBreed && dog.breed !== selectedBreed) return false;
      if (showOnlyAvailable && !dog.available) return false;
      return true;
    });
  }, [dogs, selectedBreed, showOnlyAvailable]);

  return {
    breeds,
    selectedBreed,
    setSelectedBreed,
    showOnlyAvailable,
    setShowOnlyAvailable,
    filteredDogs,
  };
};
