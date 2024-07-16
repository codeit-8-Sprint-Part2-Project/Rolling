type RelationShip = "친구" | "지인" | "동료" | "가족";

function RelationshipLabel({ relationship }: { relationship: RelationShip }) {
  const relationshipColorPair: {
    [index: string]: String;
  } = {
    친구: "bg-[#E2F5FF] text-[#00A2FE]",
    지인: "bg-[#FFF0D6] text-[#FF8832]",
    동료: "bg-[#F8F0FF] text-[#9935FF]",
    가족: "bg-[#E4FBDC] text-[#2BA600]",
  };

  const labelColor: String = relationshipColorPair[relationship];

  return (
    <div
      className={
        labelColor +
        " w-10 h-5 rounded flex justify-center items-center text-sm font-normal"
      }
    >
      {relationship}
    </div>
  );
}

export default RelationshipLabel;
