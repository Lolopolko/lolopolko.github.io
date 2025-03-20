// Function to get URL parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Define available folders and their aliases
const folderAliases = {
    "fennec": "fennec",
    "fenec": "fennec",
    "dragon": "dragon",
    "drake": "dragon",
	"dwagon": "dragon",
    "horse": "horse",
    "horsecock": "horse",
	"cutedara": "horse",
	"cow": "cow",
	"mumu": "cow",
	"milking": "cow",
	"feret": "ferret",
	"ferret": "ferret",
	"noodle": "ferret",
	"monkey": "monkey",
	"monke": "monkey",
	"manke": "monkey"
	
};

// Get the selected folder from URL (default to "fennec" if not set)
let folder = getQueryParam("p");
folder = folderAliases[folder] || "fennec"; // Correct misspellings or default

// Define image lists for each folder
const imageFolders = {
    "fennec": ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg",
    "9.jpeg", "10.jpeg", "11.jpeg", "12.jpeg", "13.jpeg", "14.jpeg", "15.jpeg", "16.jpeg",
    "17.jpeg", "18.jpeg", "19.jpeg", "20.jpeg", "21.jpeg", "22.jpeg", "23.jpeg", "24.jpeg",
    "25.jpeg", "26.jpeg", "27.jpeg", "28.jpeg", "29.jpeg", "30.jpeg", "31.jpeg", "32.jpeg",
    "33.jpeg", "34.jpeg", "35.jpeg", "36.jpeg", "37.jpeg", "38.jpeg", "39.jpeg", "40.jpeg",
    "41.jpeg", "42.jpeg", "43.jpeg", "44.jpeg", "45.jpeg", "46.jpeg", "47.jpeg", "48.jpeg",
    "49.jpeg", "50.jpeg", "51.jpeg", "52.jpeg", "53.jpeg", "54.jpeg", "55.jpeg", "56.jpeg",
    "57.jpeg", "58.jpeg", "59.jpeg", "60.jpeg", "61.jpeg", "62.jpeg", "63.jpeg", "64.jpeg",
    "65.jpeg", "66.jpeg", "67.jpeg", "68.jpeg"],
    "dragon": ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg",
    "9.jpeg", "10.jpeg", "11.jpeg", "12.jpeg", "13.jpeg", "14.jpeg", "15.jpeg", "16.jpeg",
    "17.jpeg", "18.jpeg", "19.jpeg", "20.jpeg", "21.jpeg", "22.jpeg", "23.jpeg", "24.jpeg",
    "25.jpeg", "26.jpeg", "27.jpeg", "28.jpeg", "29.jpeg", "30.jpeg", "31.jpeg", "32.jpeg",
    "33.jpeg", "34.jpeg", "35.jpeg", "36.jpeg", "37.jpeg", "38.jpeg", "39.jpeg", "40.jpeg",
    "41.jpeg"],
	"ferret": ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg",
    "9.jpeg", "10.jpeg", "11.jpeg", "12.jpeg", "13.jpeg", "14.jpeg", "15.jpeg", "16.jpeg",
    "17.jpeg", "18.jpeg", "19.jpeg", "20.jpeg", "21.jpeg", "22.jpeg", "23.jpeg", "24.jpeg",
    "25.jpeg", "26.jpeg", "27.jpeg", "28.jpeg", "29.jpeg", "30.jpeg", "31.jpeg", "32.jpeg",
    "33.jpeg", "34.jpeg", "35.jpeg", "36.jpeg", "37.jpeg", "38.jpeg", "39.jpeg", "40.jpeg",
    "41.jpeg", "42.jpeg", "43.jpeg", "44.jpeg", "45.jpeg", "46.jpeg", "47.jpeg", "48.jpeg",
    "49.jpeg", "50.jpeg", "51.jpeg"],
	"horse": ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg",
    "9.jpeg", "10.jpeg", "11.jpeg", "12.jpeg", "13.jpeg", "14.jpeg", "15.jpeg", "16.jpeg",
    "17.jpeg", "18.jpeg", "19.jpeg", "20.jpeg", "21.jpeg", "22.jpeg", "23.jpeg", "24.jpeg",
    "25.jpeg", "26.jpeg", "27.jpeg", "28.jpeg", "29.jpeg", "30.jpeg", "31.jpeg", "32.jpeg",
    "33.jpeg", "34.jpeg", "35.jpeg", "36.jpeg", "37.jpeg"],
	"cow": ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg",
    "9.jpeg", "10.jpeg", "11.jpeg", "12.jpeg", "13.jpeg", "14.jpeg", "15.jpeg", "16.jpeg",
    "17.jpeg", "18.jpeg", "19.jpeg", "20.jpeg", "21.jpeg", "22.jpeg", "23.jpeg", "24.jpeg",
    "25.jpeg", "26.jpeg", "27.jpeg", "28.jpeg", "29.jpeg", "30.jpeg", "31.jpeg", "32.jpeg",
    "33.jpeg", "34.jpeg", "35.jpeg", "36.jpeg", "37.jpeg", "38.jpeg", "39.jpeg", "40.jpeg",
    "41.jpeg", "42.jpeg", "43.jpeg", "44.jpeg", "45.jpeg", "46.jpeg", "47.jpeg", "48.jpeg",
    "49.jpeg", "50.jpeg", "51.jpeg", "52.jpeg", "53.jpeg", "54.jpeg", "55.jpeg", "56.jpeg",
    "57.jpeg", "58.jpeg", "59.jpeg", "60.jpeg", "61.jpeg", "62.jpeg", "63.jpeg", "64.jpeg",
    "65.jpeg", "66.jpeg", "67.jpeg", "68.jpeg","69.jpeg"],
	"monkey": ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg",
    "9.jpeg", "10.jpeg", "11.jpeg", "12.jpeg", "13.jpeg", "14.jpeg", "15.jpeg", "16.jpeg",
    "17.jpeg", "18.jpeg", "19.jpeg", "20.jpeg", "21.jpeg", "22.jpeg", "23.jpeg", "24.jpeg",
    "25.jpeg", "26.jpeg", "27.jpeg", "28.jpeg", "29.jpeg", "30.jpeg", "31.jpeg", "32.jpeg",
    "33.jpeg", "34.jpeg", "35.jpeg"]
};

// Check if the corrected folder exists
if (imageFolders[folder]) {
    // Pick a random image from the chosen folder
    const images = imageFolders[folder];
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    // Set image source
    document.getElementById("randomImage").src = `images/${folder}/${randomImage}`;
} else {
    // If folder not found, show an error message
    document.getElementById("randomImage").alt = "Category not found.";
}
