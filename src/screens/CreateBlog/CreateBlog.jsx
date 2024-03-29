const CreateBlog = () => {
  return (
    <div className="w-4/6">
      {/* <!-- Form Input field for creating Blog Post --> */}
      <form action="#" method="POST" className=" px-5 py-4">
        <div className="grid place-items-center bg-slate-600/20  h-[150px] rounded-md my-4">
          <div className="flex items-center gap-4 hover:scale-110 transition-all cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <p className="text-white">Upload Your Image</p>
          </div>
        </div>

        <div className="mb-6">
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter your blog title"
            className="text-4xl font-semibold py-2 bg-transparent border-transparent outline-none focus:outline-transparent w-full"
          />
        </div>

        <div className="mb-6">
          <input
            type="text"
            id="tags"
            name="tags"
            placeholder="Your Comma Separated Tags Ex. JavaScript, React, Node, Express,"
            className="bg-transparent w-full border-transparent outline-none focus:outline-transparent"
          />
        </div>

        <div className="mb-6">
          <textarea
            id="content"
            name="content"
            placeholder="Write your blog content"
            rows="8"
            className="bg-transparent w-full border-transparent outline-none focus:outline-transparent"
          ></textarea>
        </div>

        <a
          href="#"
          className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
        >
          Create Blog
        </a>
      </form>
    </div>
  );
};

export default CreateBlog;
