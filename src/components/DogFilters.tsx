import React from 'react';

interface DogFiltersProps {
  breeds: string[];
  selectedBreed: string;
  showOnlyAvailable: boolean;
  onBreedChange: (breed: string) => void;
  onAvailabilityChange: (showOnlyAvailable: boolean) => void;
}

export const DogFilters: React.FC<DogFiltersProps> = ({
  breeds,
  selectedBreed,
  showOnlyAvailable,
  onBreedChange,
  onAvailabilityChange,
}) => {
  return (
    <div className="filters-container">
      <select
        value={selectedBreed}
        onChange={(e) => onBreedChange(e.target.value)}
        className="breed-select"
      >
        <option value="">All Breeds</option>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>

      <label className="availability-checkbox">
        <input
          type="checkbox"
          checked={showOnlyAvailable}
          onChange={(e) => onAvailabilityChange(e.target.checked)}
        />
        Show only available dogs
      </label>
    </div>
  );
};
