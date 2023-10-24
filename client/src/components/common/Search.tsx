import React from 'react';

const Search = () => {
  return (
    <div className='px-10  pt-5'>
      <div className="flex items-center ">
        <input
          type="text"
          className="border-2 border-gray-300 rounded-l-lg py-2 px-4 outline-none h-10"
          placeholder="Search..."
        />
        <button className="bg-zinc-400  hover:bg-black text-white font-bold rounded-r-lg py-2 px-4 ">
          Search
        </button>
      </div>
    </div>


  );
};

export default Search;
