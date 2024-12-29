const Footer = () => {
  return (
    <footer className="mt-[50px] border-t border-black">
      <div className="max-w-[1728px] mx-auto px-4 md:px-16 py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xs uppercase mb-4">Tel.</h3>
            <p className="text-sm text-gray-600">
              +82 (0)10 5098 0424
            </p>
          </div>
          <div>
            <h3 className="text-xs uppercase mb-4">Contact</h3>
            <p className="text-sm text-gray-600">
              orylo0424@gmail.com
            </p>
          </div>
          <div>
            <h3 className="text-xs uppercase mb-4">Copyright</h3>
            <p className="text-sm text-gray-600">
              orylo© 2024.<br />
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 