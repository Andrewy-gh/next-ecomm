export default function Footer() {
  return (
    <footer className="sticky bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} YourStore. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-blue-400">
              Facebook
            </a>
            <a href="https://twitter.com" className="hover:text-blue-400">
              Twitter
            </a>
            <a href="https://instagram.com" className="hover:text-blue-400">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
