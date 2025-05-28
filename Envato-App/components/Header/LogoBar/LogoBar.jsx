export default function LogoBar(){
    return (
        <header className="bg-[#262626] sticky top-0 shadow-md">
        <div className="mx-1 px-4 py-2 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="https://themeforest.net/item/healthcare-wordpress-theme/19264353"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-4 mr-3 float-left"
                src="https://public-assets.envato-static.com/assets/logos/envato_market-dd390ae860330996644c1c109912d2bf63885fc075b87215ace9b5b4bdc71cc8.svg"
                alt="Envato Logo"
              ></img>
            </a>
            {/* <span className="text-xl font-bold text-green-600" >Envato Market</span> */}
          </div>

          <button className="bg-[#82b440] items-center text-white px-4 py-2 rounded hover:bg-[#6f9a37]">
            Buy Now
          </button>
        </div>
      </header>
    )
}