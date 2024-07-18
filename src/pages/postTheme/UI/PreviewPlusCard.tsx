import plusIcon from "../../../assets/icons/plus.svg";

function PreviewPlusCard() {
  return (
    <section className="w-full pt-[7.0625rem] max-md:pt-8 pb-[2.375rem] bg-no-repeat bg-cover">
      <div className="max-w-[40rem] mx-auto px-6 grid grid-cols-2  gap-x-6 gap-y-7 relative max-[1248px]:grid-cols-2 max-[1248px]:gap-4 max-md:grid-cols-1">
        <div className="h-40 aspect-w-16 aspect-h-9 rounded-2xl bg-white flex justify-center items-center cursor-pointer max-[1200px]:h-[17.75rem] max-md:h-[14.375rem]">
          <div className="absolute m-auto w-14 h-14 rounded-full bg-[#555555] flex justify-center items-center">
            <img src={plusIcon} alt="Plus" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PreviewPlusCard;
