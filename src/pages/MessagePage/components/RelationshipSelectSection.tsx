import React, { useState } from 'react';

type RelationShip = "친구" | "지인" | "동료" | "가족";

interface RelationshipSelectSectionProps {
    selectedRelationship: RelationShip;
    onRelationshipChange: (relationship: RelationShip) => void;
  }
  
  const RelationshipSelectSection: React.FC<RelationshipSelectSectionProps> = ({
    selectedRelationship,
    onRelationshipChange,
  }) => {
    const [relationship, setRelationship] = useState<RelationShip>(selectedRelationship);
  
    const handleRelationshipChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const newRelationship = event.target.value as RelationShip;
      setRelationship(newRelationship);
      onRelationshipChange(newRelationship);
    };
    return (
        <div>
            <p className='font-bold text-2xl'>상대와의 관계</p>
            <select
            id="relationship"
            value={relationship}
            onChange={handleRelationshipChange}
            >
            <option value="친구">친구</option>
            <option value="지인">지인</option>
            <option value="동료">동료</option>
            <option value="가족">가족</option>
            </select>
        </div>
        );
    }


export default RelationshipSelectSection;