const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

// Example software data
const softwareList = [
  {
    id: 1,
    name: "Example Software 1",
    description: "This is a great software for productivity.",
    version: "1.0.2",
    thumbnail: "https://via.placeholder.com/150?text=Software+1",
    downloadLink: "https://mega.io/your-download-link-1"
  },
  {
    id: 2,
    name: "Example Software 2",
    description: "Make your tasks easier with this amazing app.",
    version: "2.3.0",
    thumbnail: "https://via.placeholder.com/150?text=Software+2",
    downloadLink: "https://mega.io/your-download-link-2"
  },
  {
    id: 3,
    name: "Awesome App",
    description: "A must-have tool for developers.",
    version: "5.4.1",
    thumbnail: "https://via.placeholder.com/150?text=Awesome+App",
    downloadLink: "https://mega.io/your-download-link-3"
  }
];

// API: get software list
app.get('/api/software', (req, res) => {
  res.json(softwareList);
});

// API: get software by id
app.get('/api/software/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const software = softwareList.find(s => s.id === id);
  if (!software) {
    return res.status(404).json({ error: "Software not found" });
  }
  res.json(software);
});

app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});

