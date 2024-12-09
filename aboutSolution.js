```javascript
// pages/about.js
import Image from 'next/image';

function About() {
  const imageExists = true; // Replace with a check to verify image existence

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      {imageExists && (
        <Image src="/existing-image.jpg" alt="Existing Image" width={300} height={200} />
      )}
      {!imageExists && (
        <p>Image not found.</p>
      )}
    </div>
  );
}

export default About;
```