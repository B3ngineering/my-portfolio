# Images Directory

This directory is for storing your portfolio images. Add your photos here and reference them in the portfolio data.

## Recommended Images to Add:

### Profile Photos
- `profile.jpg` - Your main profile photo (recommended: 400x400px, square format)

### Professional Experience
- `company1.jpg` - Logo or photo representing your first job
- `company2.jpg` - Logo or photo representing your second job
- Add more as needed for each professional role

### Personal Projects & Education
- `project1.jpg` - Screenshot or logo of your first project
- `project2.jpg` - Screenshot or logo of your second project  
- `weather-app.jpg` - Screenshot of your weather app (example)
- `university.jpg` - Photo of your university or graduation

## Image Guidelines:

- **Format**: Use JPG or PNG format
- **Size**: Optimize images for web (under 500KB each)
- **Dimensions**: 
  - Profile photos: 400x400px (square)
  - Project/company images: 800x600px (4:3 ratio) or 800x450px (16:9 ratio)
- **Quality**: Use high-quality images that represent you professionally

## How to Add Images:

1. Place your images in this `/public/images/` directory
2. Update the image paths in `/src/data/portfolio.ts`
3. Use the format: `/images/your-image-name.jpg`

Example:
```typescript
profileImage: "/images/profile.jpg"
```

The images will automatically display in your portfolio once added!
