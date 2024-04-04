const fs = require('fs');

function generateData() {
  const data = {
    timestamp: new Date().toISOString(),
    message: 'This is some generated data'
  };
  return JSON.stringify(data);
}

// Create an artifact file
const artifactContent = generateData();
fs.writeFileSync('data.json', artifactContent);

console.log('Artifact generated successfully!');
