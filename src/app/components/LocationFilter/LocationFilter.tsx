"use client";
import "./LocationFilter.scss";
import { useState } from "react";
import { Campsite } from "@/app/data/campsites";  // Ensure Campsite type is imported

// Define the possible regions and terrains for the dropdowns
const regions = ["South", "East", "West", "Central"];
const terrains = ["Rocky Mountains", "Badlands", "Prairies", "Foothills", "Forests"];

type SetFilteredCampsites = React.Dispatch<React.SetStateAction<Campsite[]>>;

interface LocationFilterProps {
  setFilteredCampsites: SetFilteredCampsites;
  campsites: Campsite[]; // Ensure campsites is typed correctly as an array of Campsite objects
}

function LocationFilter({ setFilteredCampsites, campsites }: LocationFilterProps) {
  const [filterType, setFilterType] = useState<string>("");   // region or terrain
  const [filterValue, setFilterValue] = useState<string>(""); // value of region or terrain

  // Handle filter change based on region or terrain
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setFilterValue(value);

    // Filter based on filter type and value
    const filteredCampsites = campsites.filter((campsite) => {
      if (filterType === "region") {
        return campsite.region === value;
      } else if (filterType === "terrain") {
        return campsite.terrain === value;
      }
      return true; // No filtering by default
    });

    setFilteredCampsites(filteredCampsites);
  };

  // Reset filters
  const handleReset = () => {
    setFilterType("");
    setFilterValue("");
    setFilteredCampsites(campsites);
  };

  return (
    <section className="filter">
      {/* Dropdown for choosing filter type */}
      <div className="filter__type">
        <label className="filter__label">Filter by:</label>
        <select
          value={filterType}
          onChange={(e) => {
            setFilterType(e.target.value);
            setFilterValue(""); // Reset filter value on filter type change
          }}
        >
          <option className="filter__option" value="">
            Select Filter Type
          </option>
          <option className="filter__option" value="region">
            Region
          </option>
          <option className="filter__option" value="terrain">
            Terrain
          </option>
        </select>
      </div>

      {/* Dropdown for choosing filter value (regions or terrains) */}
      {filterType && (
        <div className="filter__type">
          <label className="filter__label">
            {filterType === "region" ? "Select Region:" : "Select Terrain:"}
          </label>
          <select value={filterValue} onChange={handleFilterChange}>
            <option value="">
              Select {filterType === "region" ? "Region" : "Terrain"}
            </option>
            {(filterType === "region" ? regions : terrains).map((option, index) => (
              <option className="filter__option" key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}

      <button className="filter__reset-btn" onClick={handleReset}>
        Reset Filters
      </button>
    </section>
  );
}

export default LocationFilter;
