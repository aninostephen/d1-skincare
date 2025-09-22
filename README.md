# D1 Skincare Website

A modern, skincare product website built with React, TypeScript, and Tailwind CSS. This project showcases a complete homepage with product sections, testimonials, video cards, and more.

## 🚀 Quick Start

### Prerequisites

Before running this project, make sure you have the following installed on your machine:

- **Node.js** (version 16.0 or higher)
- **npm** (comes with Node.js)

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd test
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   The application will be available at: `http://localhost:5173`

## 📁 Project Structure

```
test/
├── public/
│   └── img/                    # Static images
├── src/
│   ├── components/             # Reusable components
│   │   ├── common/            # Common UI components
│   │   ├── CommentCard.tsx    # Customer testimonial cards
│   │   ├── DailyBenefitsCard.tsx # Benefits display cards
│   │   ├── RoutineStep.tsx    # Skincare routine steps
│   │   └── VideoCards.tsx     # Video testimonial cards
│   ├── core/
│   │   ├── common/            # Core layout components
│   │   │   ├── footer.tsx     # Website footer
│   │   │   └── header/        # Header components
│   │   ├── hoc/               # Higher-Order Components
│   │   │   └── MainContainer.tsx
│   │   └── interface/         # TypeScript interfaces
│   ├── dummy-data/            # Mock data for components
│   ├── pages/
│   │   └── homepage/          # Homepage sections
│   └── index.css              # Global styles
```

## 🎨 Features

- **TypeScript** - Full type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Reusable Components** - Modular architecture with reusable UI components
- **Google Fonts** - Custom typography with Inter and Roboto Mono
- **Component-based Architecture** - Clean separation of concerns

## 🧩 Key Components

### Reusable Components
- **VideoCards** - Video testimonial display with ratings and product info
- **CommentCard** - Customer review cards with star ratings
- **RoutineStep** - Step-by-step skincare routine display
- **DailyBenefitsCard** - Product benefits showcase
- **Input** - Reusable form input component

### Homepage Sections
- **TopHeader** - Promotional banner
- **MainHeader** - Navigation and branding
- **HeroSection** - Main product showcase
- **SecondSection** - Product benefits overview
- **ThirdSection** - Technology and ingredients
- **ForthSection** - Skincare routine steps
- **FifthSection** - Results showcase with trust badges
- **SixthSection** - Daily benefits grid
- **SeventhSection** - Product set promotion
- **EighthSection** - Ingredients showcase
- **NinethSection** - Product details and testimonials
- **TenthSection** - Fan testimonials and product showcase

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts** - Inter and Roboto Mono typography

## 🎯 Usage

After starting the development server, you can:

1. **View the homepage** at `http://localhost:5173`
2. **Edit components** in the `src/` directory
3. **Add new images** to the `public/img/` folder
4. **Modify styling** using Tailwind CSS classes
5. **Update content** by editing the dummy data files

## 🔧 Customization

### Adding New Sections
1. Create a new component in `src/pages/homepage/sections/`
2. Import and add it to the homepage layout
3. Create corresponding dummy data if needed

### Modifying Styles
- Edit `src/index.css` for global styles
- Use Tailwind classes for component-specific styling
- Customize Tailwind configuration in `tailwind.config.js`

### Adding New Components
1. Create component in `src/components/`
2. Define TypeScript interfaces in `src/core/interface/`
3. Add dummy data in `src/dummy-data/`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you encounter any issues or have questions, please open an issue in the repository.
