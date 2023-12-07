const express = require('express');
const path = require('path');
const app = express();
port = 5000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept'); 
  next();
})


app.use(express.static(path.join(__dirname, 'project-pic')));

app.get('/images', (req, res) => {
  const images = [
    { imageUrl: './components/ed-pic/cpp-banking.png', caption: 'Image 1' },
    { imageUrl: 'cpp&assembly.png', caption: 'Image 2' },
    // Add more images with additional data as needed
  ];

  res.json({ images });
});



const Language = [
  { name: "C++", point: 6 },
  { name: "Java" ,point: 5 },
  { name: "Python" ,point: 8 },
  { name: "JavaScript" ,point: 6 },
  { name: "HTML" ,point: 6 },
  { name: "Fastapi" ,point: 7 },
  { name: "Rust",point: 2 },
];

const Learning = [
  { name: "React" },
  { name: "NodeJS" },
  { name: "SQL" },
];

app.get('/language', (req, res) => {  
  res.json({ Language, Learning });
});


const info = [
  { id: "Name", content: "Suvijuk Samitimata" },
  { id: "Nickname", content: "Arm" },
  { id: "Branch", content: "Software Engineer" },
  { id: "Hobby", content: "Gaming and sometime watch some tech channel" },
  { id: "Date of Birth", content: "January 1, 2004" },
  { id: "Address", content: "655/11 Soi Chalong Krung 1, Lat Krabang Sub-district, Lat Krabang District, Bangkok 10520, Thailand" },
  { id: "My interest", content: "AI, backend and some frontend." },
];

app.get('/personal_info', (req, res) => {  
  res.json({ info });
});

const Projects = [
  { lang: "Python", name: "Calendar financial", detail: "recording the financial and have tools for analysis" },
  { lang: "C++", name: "Banking System", detail: "simulation of simple banking system" },
  { lang: "HTML&Fastapi", name: "Web forum", detail: "web forum for the student to use in branch" },
  { lang: "C++&Arm Assembly", name: "Asteroid game", detail: "using C++ for Graphics and assembly for logic in-game" },
]

app.get('/projects', (req, res) => {
  res.json({ Projects });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
