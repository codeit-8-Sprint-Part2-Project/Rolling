import React, { useState } from "react";
import Dropdown, { DropdownOption } from "./DropDown";

type RelationShip = "친구" | "지인" | "동료" | "가족";

interface RelationshipSelectSectionProps {
  selectedRelationship: RelationShip;
  onRelationshipChange: (relationship: RelationShip) => void;
}

const RelationshipSelectSection: React.FC<RelationshipSelectSectionProps> = ({
  selectedRelationship,
  onRelationshipChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    selectedRelationship
      ? { label: selectedRelationship, value: selectedRelationship }
      : null
  );

  const options: DropdownOption[] = [
    { label: "친구", value: "친구" },
    { label: "지인", value: "지인" },
    { label: "동료", value: "동료" },
    { label: "가족", value: "가족" },
  ];

  const handleOptionSelect = (option: DropdownOption) => {
    setSelectedOption(option);
    onRelationshipChange(option.value as RelationShip);
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <p className="font-bold text-2xl">상대와의 관계</p>
      <Dropdown
        options={options}
        selectedOption={selectedOption}
        onOptionSelect={handleOptionSelect}
      />
    </div>
  );
};

export default RelationshipSelectSection;
