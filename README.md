# 🎓 Trilha Clara - Waitlist Landing Page

<div align="center">

![Trilha Clara](https://img.shields.io/badge/Trilha%20Clara-Waitlist%20Landing%20Page-purple?style=for-the-badge&logo=book-open)

_A beautiful waitlist landing page for the upcoming Trilha Clara platform_ ✨

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)

</div>

---

## 🌟 What is Trilha Clara?

**Trilha Clara** is an upcoming platform designed to help students organize their academic studies without complications. It's a tool that helps create summaries, divide chapters, and provides a clear path to exams or thesis completion.

This repository contains the **waitlist landing page** where interested students can sign up to be notified when the full platform launches! 🚀

---

## ✨ Features

### 🎨 **Beautiful Design**

- **Gradient animations** with smooth color transitions
- **Floating background elements** with blur effects
- **Responsive design** that works on all devices
- **Smooth animations** and micro-interactions

### 📱 **Responsive & Accessible**

- **Mobile-first approach** with perfect mobile experience
- **Touch-friendly** buttons and interactions
- **Screen reader compatible** with proper ARIA labels
- **Fast loading** with optimized performance

### 🎯 **User Experience**

- **Email collection form** with validation
- **Success/Error states** with cute animations
- **Info modal** about the creator
- **Donation section** with PIX integration
- **Smooth popup animations** for all modals

### 🔧 **Technical Excellence**

- **TypeScript** for type safety
- **Modern React patterns** with hooks
- **Formspree integration** for email collection
- **GSAP animations** for smooth interactions
- **Tailwind CSS** for consistent styling

---

## 🛠️ Tech Stack

### **Frontend Framework**

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://reactjs.org/)** - UI library with modern hooks
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### **Styling & UI**

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible UI primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### **Animations & Interactions**

- **CSS Keyframes** - Custom animations and transitions
- **Framer Motion** - React animation library

### **Form Handling**

- **[Formspree](https://formspree.io/)** - Email collection and form processing
- **React Hook Form** - Form state management

### **Development Tools**

- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[PostCSS](https://postcss.org/)** - CSS processing

---

## 🚀 Getting Started

### **Prerequisites**

- Node.js 18+
- npm or yarn

### **Installation**

1. **Clone the repository**

   ```bash
   git clone https://github.com/devanaclimgo/trilha-clara.git
   cd trilha-clara
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Add your Formspree form ID to `.env.local`:

   ```
   NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id_here
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
trilha-clara/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css     # Global styles and animations
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   ├── Hero.tsx       # Hero section
│   │   ├── AboutSection.tsx
│   │   ├── FormCard.tsx   # Email collection form
│   │   ├── DonationSection.tsx
│   │   ├── InfoButton.tsx # Creator info modal
│   │   └── Footer.tsx
│   └── lib/               # Utility functions
├── public/                # Static assets
├── tailwind.config.js    # Tailwind configuration
└── package.json
```

---

## 🎨 Design System

### **Color Palette**

- **Primary**: Purple gradient (`oklch(0.5 0.2 280)`)
- **Secondary**: Blue gradient (`oklch(0.6 0.2 220)`)
- **Accent**: Pink gradient (`oklch(0.65 0.25 340)`)
- **Background**: Soft gradient with transparency

### **Typography**

- **Headings**: Bold with gradient text effects
- **Body**: Clean, readable fonts with proper hierarchy
- **Responsive**: Scales appropriately across devices

### **Animations**

- **Floating elements**: Subtle up/down movements
- **Gradient shifts**: Smooth color transitions
- **Modal popups**: Bounce effects with GSAP
- **Button interactions**: Scale and shadow effects

---

## 📱 Responsive Breakpoints

- **Mobile**: `< 640px` - Single column, stacked layout
- **Tablet**: `640px - 768px` - Improved spacing and sizing
- **Desktop**: `> 768px` - Two-column layout with full features

---

## 🔧 Customization

### **Colors**

Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: oklch(0.5 0.2 280);
  --secondary: oklch(0.6 0.2 220);
  --accent: oklch(0.65 0.25 340);
}
```

### **Animations**

Modify keyframes in `tailwind.config.js`:

```javascript
keyframes: {
  scaleIn: {
    '0%': { opacity: 0, transform: 'scale(0.8)' },
    '50%': { opacity: 1, transform: 'scale(1.05)' },
    '100%': { opacity: 1, transform: 'scale(1)' },
  }
}
```

---

## 📧 Email Collection

The landing page uses **Formspree** to collect email addresses. When users submit the form:

1. **Email is sent** to the configured Formspree endpoint
2. **Success state** shows with cute animations
3. **Error handling** provides friendly error messages
4. **Data is stored** in Formspree dashboard for later use

---

## 🎯 Project Goals

- **Build awareness** for the upcoming Trilha Clara platform
- **Collect interested users** through email signups
- **Showcase the brand** with beautiful, professional design
- **Provide contact information** for the creator
- **Accept donations** to support development

---

## 👩‍💻 Creator

**Ana Clara** - The mind behind Trilha Clara

- 📧 **Email**: anaclimgo@gmail.com
- 🔗 **GitHub**: [@devanaclimgo](https://github.com/devanaclimgo)
- 💼 **LinkedIn**: [Ana Clara Gomes](https://www.linkedin.com/in/ana-clara-gomes-48b83b224/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Made with ❤️ by Ana Clara**

_Building the future of academic organization_ 📚✨

[![Stars](https://img.shields.io/github/stars/devanaclimgo/trilha-clara?style=social)](https://github.com/devanaclimgo/trilha-clara)
[![Forks](https://img.shields.io/github/forks/devanaclimgo/trilha-clara?style=social)](https://github.com/devanaclimgo/trilha-clara)

</div>
